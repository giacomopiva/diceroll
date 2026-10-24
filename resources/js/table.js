// Interfaccia del tavolo. I valori e il seed di ogni lancio li decide il server (POST dei dadi,
// evento DiceRolled per gli altri): il client non propone mai valori, li anima soltanto.
import './net';
import './echo';
import { TYPES } from './dice/geometry.js';
import { createScene } from './dice/scene.js';
import { ensureAudio, setSound } from './dice/audio.js';
import { selfTest } from './dice/selftest.js';

const $ = (s) => document.querySelector(s);
const debug = document.body.dataset.debug === '1';

const ICONS = {
  d4: '<polygon points="12,3 21,20 3,20"/>',
  d6: '<rect x="4.5" y="4.5" width="15" height="15" rx="1.5"/>',
  d8: '<polygon points="12,2 21,12 12,22 3,12"/><line x1="3" y1="12" x2="21" y2="12"/>',
  d10: '<polygon points="12,2 21,11 12,22 3,11"/><polyline points="3,11 12,14 21,11"/><line x1="12" y1="14" x2="12" y2="22"/>',
  d12: '<polygon points="12,2.5 21.5,9.4 17.9,20.5 6.1,20.5 2.5,9.4"/><polygon points="12,7 16.3,10.1 14.7,15.2 9.3,15.2 7.7,10.1"/>',
  d20: '<polygon points="12,2 20.7,7 20.7,17 12,22 3.3,17 3.3,7"/><polygon points="12,6.5 17,15 7,15"/>',
};
const MAX_DICE = 40;
// Lanci tenuti nel registro: come lo storico mandato dal server (impostazioni admin, 10–100).
const HISTORY_LIMIT = Number(document.body.dataset.historyLimit) || 20;
const myId = Number(document.body.dataset.playerId);
// Da quando premo Lancia (o rilancio un dado) a quando i miei dadi si fermano: il pulsante resta disattivato.
let rolling = false;

/* ---------------- Scena ---------------- */
let table = null;
try {
  table = createScene($('#c'), $('#stage'), {
    // Con l'immagine del proprietario sul palco la vaschetta si sposta dal lato opposto di quanto occupa il logo
    // (un po' meno della sua altezza: intorno alla vaschetta la camera lascia già un suo margine).
    logoInset: () => {
      const el = $('#stageLogo');
      return el ? { px: Math.round(el.offsetHeight * 0.79), side: el.dataset.side } : { px: 0, side: 'top' };
    },
    onStats(fps, ms, dice, simMs, calls) {
      if (debug) $('#hud').innerHTML = `<b>${fps.toFixed(0)}</b> fps · ${ms.toFixed(1)} ms/frame · ${dice} dadi · fisica ${simMs.toFixed(0)} ms · ${calls} draw call`;
    },
  });
} catch (e) {
  const el = $('#loading');
  el.textContent = 'Questo browser non riesce ad avviare WebGL, che serve per il tavolo 3D.';
  el.classList.add('err');
  throw e;
}
if (debug) $('#hud').hidden = false;

/* ---------------- Stato del giocatore e dadi ---------------- */
// Si parte con il solo d20 pronto per il lancio.
const pool = { d4: 0, d6: 0, d8: 0, d10: 0, d12: 0, d20: 1 };
function poolList() { const l = []; for (const t of TYPES) for (let i = 0; i < pool[t]; i++) l.push(t); return l; }
function formulaOf(list) {
  const c = {}; list.forEach((t) => { c[t] = (c[t] || 0) + 1; });
  return TYPES.filter((t) => c[t]).map((t) => c[t] + t).join(' + ');
}
function renderPool() {
  const box = $('#pool');
  const total = poolList().length;
  box.innerHTML = '';
  for (const t of TYPES) {
    const row = document.createElement('div');
    row.className = 'die-tile' + (pool[t] ? ' active' : '');
    row.innerHTML = `<button class="head" type="button" aria-pressed="${pool[t] ? 'true' : 'false'}" aria-label="${pool[t] ? 'Escludi' : 'Includi'} il ${t} dal lancio"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[t]}</svg><span class="name">${t}</span></button>
      <div class="stepper"><button class="step" type="button" aria-label="Togli un ${t}" ${pool[t] ? '' : 'disabled'}>−</button>
      <span class="count" aria-live="polite">${pool[t]}</span>
      <button class="step" type="button" aria-label="Aggiungi un ${t}" ${total >= MAX_DICE ? 'disabled' : ''}>+</button></div>`;
    const [head, minus, plus] = row.querySelectorAll('button');
    head.addEventListener('click', () => {
      if (pool[t]) pool[t] = 0;
      else if (poolList().length < MAX_DICE) pool[t] = 1;
      renderPool();
    });
    minus.addEventListener('click', () => { pool[t] = Math.max(0, pool[t] - 1); renderPool(); });
    plus.addEventListener('click', () => { if (poolList().length < MAX_DICE) pool[t]++; renderPool(); });
    box.appendChild(row);
  }
  $('#formula').textContent = total ? formulaOf(poolList()) : 'Aggiungi almeno un dado.';
  $('#rollBtn').disabled = !total || rolling;
}

/* ---------------- Registro e toast ---------------- */
function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
const logEntries = new Map(); // id lancio → <li> del registro
const rerolled = new Set(); // "idLancio:indice" dei dadi già rilanciati
function addLogEntry(roll) {
  const log = $('#log');
  const empty = log.querySelector('.empty'); if (empty) empty.remove();
  const li = document.createElement('li');
  const time = new Date(roll.created_at).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const tag = roll.reroll_of ? ' <span class="tag-reroll">↻ rilancio</span>' : '';
  li.innerHTML = `<span class="dot" style="background:${esc(roll.player.color)}"></span>
    <div class="meta"><strong>${esc(roll.player.nickname)}</strong><span>${formulaOf(roll.dice)}${tag} · ${time}</span></div>
    <span class="sum">…</span>
    <div class="vals"><span class="pending">in rotolamento</span></div>`;
  log.prepend(li);
  while (log.children.length > HISTORY_LIMIT) { const last = log.lastChild; logEntries.forEach((el, id) => { if (el === last) logEntries.delete(id); }); last.remove(); }
  logEntries.set(roll.id, li);
  return li;
}
function fillLogEntry(li, roll) {
  li.querySelector('.sum').textContent = roll.total;
  li._roll = roll;
  renderVals(li);
}
// Chip dei dadi: barrati se sostituiti da un vecchio rilancio (storico); bottoni (nuovo lancio da tastiera)
// per i miei dadi ancora sul tavolo.
function renderVals(li) {
  const roll = li._roll;
  if (!roll) return;
  const chips = roll.dice.map((t, i) => {
    const key = roll.id + ':' + i, done = rerolled.has(key);
    const inner = `<i>${t}</i> ${roll.values[i]}`;
    if (done) return `<span class="chip rerolled" title="rilanciato">${inner}</span>`;
    if (roll.player.id === myId && table.positionOf(roll.id, i)) {
      return `<button type="button" class="chip" data-index="${i}" data-type="${t}" aria-label="Lancia un nuovo ${t}">${inner}</button>`;
    }
    return `<span class="chip">${inner}</span>`;
  }).join('');
  const upd = roll.combined_total != null ? `<span class="upd">totale aggiornato: ${roll.combined_total}</span>` : '';
  li.querySelector('.vals').innerHTML = chips + upd;
}
// Aggiorna i chip delle voci già concluse: chiamata a ogni nuovo lancio e a fine animazione.
function refreshRerollable() {
  logEntries.forEach((li) => renderVals(li));
}
$('#log').addEventListener('click', (e) => {
  const btn = e.target.closest('button.chip');
  if (btn && !rolling) rollDice([btn.dataset.type]);
});
function showToast(roll) {
  const t = $('#toast');
  const detail = roll.dice.length > 8 ? formulaOf(roll.dice) : roll.dice.map((ty, i) => `${ty}: ${roll.values[i]}`).join(' · ');
  const verb = roll.reroll_of ? ' rilancia ' + roll.dice[0] + ': ' + roll.values[0] : '';
  const updated = roll.combined_total != null ? `<div class="detail">totale aggiornato: ${roll.combined_total}</div>` : '';
  t.innerHTML = `<div class="who"><span class="dot" style="background:${esc(roll.player.color)}"></span>${esc(roll.player.nickname)}${verb}</div>
    ${roll.reroll_of ? '' : `<div class="detail">${detail}</div>`}<div class="total">${roll.total}</div>${updated}`;
  t.hidden = false;
}
function showMessage(text) {
  const t = $('#toast');
  t.innerHTML = `<div class="detail">${esc(text)}</div>`;
  t.hidden = false;
}

/* ---------------- Lanci ---------------- */
// Ogni lancio parte appena arriva, anche se altri rotolano ancora: sul tavolo si vedono insieme.
const handled = new Set(); // id dei lanci già visti (storico, risposta HTTP, evento)

function startRoll(roll) {
  if (handled.has(roll.id)) return;
  handled.add(roll.id);
  const entry = addLogEntry(roll);
  $('#toast').hidden = true;
  if (roll.reroll_of) rerolled.add(roll.reroll_of.id + ':' + roll.reroll_of.index);
  table.play({
    color: roll.player.color, list: roll.dice, values: roll.values, seed: roll.seed,
    id: roll.id, playerId: roll.player.id, rerollOf: roll.reroll_of, origin: roll.origin,
    onDone() {
      fillLogEntry(entry, roll);
      refreshRerollable();
      showToast(roll);
      // Il pulsante si riabilita quando si fermano i dadi di chi ha lanciato, non quelli degli altri.
      if (roll.player.id === myId) { rolling = false; renderPool(); }
    },
  });
  refreshRerollable(); // il tavolo può essersi sgombrato, o un dado essere stato rilanciato
}

// Storico dal più vecchio al più recente: prima i rilanci noti (per barrare i chip), poi le voci.
const history = JSON.parse($('#history').textContent);
for (const roll of history) if (roll.reroll_of) rerolled.add(roll.reroll_of.id + ':' + roll.reroll_of.index);
for (const roll of history) {
  handled.add(roll.id);
  fillLogEntry(addLogEntry(roll), roll);
}

/* ---------------- Presenza: chi è al tavolo ---------------- */
// Lista iniziale dal server; poi ParticipantJoined/Left sul canale, heartbeat ogni 20 s e avviso all'uscita.
const players = new Map(JSON.parse($('#presence').textContent).map((p) => [p.id, p]));

function renderPlayers() {
  $('#playersCount').textContent = `(${players.size})`;
  $('#players').innerHTML = [...players.values()].map((p) =>
    `<li><span class="dot" style="background:${esc(p.color)}"></span><span class="nm">${esc(p.nickname)}</span>${p.id === myId ? '<small>tu</small>' : ''}</li>`).join('');
}
renderPlayers();

const channel = window.Echo.channel('table.' + document.body.dataset.room);
channel.listen('DiceRolled', startRoll);
channel.listen('ParticipantJoined', (p) => { players.set(p.id, p); renderPlayers(); });
channel.listen('ParticipantLeft', (p) => {
  if (p.id === myId) return; // questa scheda è viva: il prossimo heartbeat sistema eventuali scarti
  players.delete(p.id); renderPlayers();
});

const heartbeat = () => window.axios.post(document.body.dataset.heartbeatUrl).catch((e) => {
  // 410: tavolo scaduto, la pagina lo spiega. 403: uscito da un'altra scheda o sessione scaduta, si torna al form.
  if (e.response && (e.response.status === 410 || e.response.status === 403)) location.reload();
});
setInterval(heartbeat, 20000);
addEventListener('pageshow', (e) => { if (e.persisted) heartbeat(); }); // ripristino dalla cache back/forward
// "Esci" avvisa già il server con il POST del form: il beacon sarebbe un doppione (e un 403).
let exiting = false;
$('#exitForm').addEventListener('submit', () => { exiting = true; });
addEventListener('pagehide', () => {
  if (exiting) return;
  // sendBeacon non può mettere header: il token CSRF va nel corpo.
  const body = new FormData();
  body.append('_token', document.querySelector('meta[name="csrf-token"]').content);
  navigator.sendBeacon(document.body.dataset.leaveUrl, body);
});

/* ---------------- Lancio mio ---------------- */
async function rollDice(list) {
  if (!list.length || rolling) return;
  rolling = true;
  $('#rollBtn').disabled = true;
  ensureAudio();
  try {
    // Il corpo contiene solo i tipi di dado: valori e seed li decide il server.
    const { data } = await window.axios.post(document.body.dataset.rollsUrl, { dice: list }, {
      headers: { 'X-Socket-ID': window.Echo.socketId() },
    });
    startRoll(data);
  } catch (e) {
    const status = e.response && e.response.status;
    if (status === 403 || status === 410) location.reload(); // sessione scaduta (form di ingresso) o tavolo scaduto
    else if (status === 422) showMessage('Lancio non valido.');
    else if (status === 429) showMessage('Troppi lanci, aspetta un momento.');
    else showMessage('Non riesco a lanciare, riprova.');
    // Lancio mai partito: si può riprovare subito.
    rolling = false;
    renderPool();
  }
}

/* ---------------- Nuovo lancio da un mio dado ---------------- */
// Click/tap su un mio dado fermo (o sul suo chip nel registro): è un lancio nuovo di un dado dello stesso tipo,
// uguale a premere Lancia con quel solo dado. Non è legato al lancio da cui viene.
const canvas = $('#c');
const isMine = (hit) => hit && hit.playerId === myId && hit.resting;
let down = null;
canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
canvas.addEventListener('pointerup', (e) => {
  const d = down; down = null;
  if (!d || Math.hypot(e.clientX - d.x, e.clientY - d.y) >= 6 || performance.now() - d.t >= 500) return; // scroll o pressione lunga
  const hit = table.pick(e.clientX, e.clientY);
  if (isMine(hit) && !rolling) rollDice([hit.type]);
});
canvas.addEventListener('pointercancel', () => { down = null; });
if (matchMedia('(hover: hover)').matches) {
  let pending = null, scheduled = false, hoverKey = null;
  canvas.addEventListener('pointermove', (e) => {
    pending = { x: e.clientX, y: e.clientY };
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      const hit = pending && table.pick(pending.x, pending.y);
      const ok = isMine(hit) && !rolling;
      const key = ok ? hit.rollId + ':' + hit.index : null;
      if (key === hoverKey) return;
      hoverKey = key;
      table.setHover(ok ? hit.rollId : null, ok ? hit.index : null);
      canvas.style.cursor = ok ? 'pointer' : '';
    });
  });
  canvas.addEventListener('pointerleave', () => { pending = null; table.setHover(null); canvas.style.cursor = ''; });
}

const rollMine = () => rollDice(poolList());
$('#rollBtn').addEventListener('click', rollMine);
document.addEventListener('keydown', (e) => {
  if (e.code !== 'Space' || e.repeat) return;
  const tag = (e.target.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'button' || tag === 'textarea') return;
  e.preventDefault(); rollMine();
});
const stress = $('#stressBtn');
if (stress) {
  stress.addEventListener('click', () => {
    const list = Array.from({ length: 30 }, () => TYPES[Math.floor(Math.random() * TYPES.length)]);
    list.sort((a, b) => TYPES.indexOf(a) - TYPES.indexOf(b));
    rollDice(list);
  });
}
$('#soundBtn').addEventListener('click', (e) => {
  const on = e.currentTarget.getAttribute('aria-pressed') !== 'true';
  setSound(on);
  e.currentTarget.setAttribute('aria-pressed', String(on));
  e.currentTarget.textContent = 'Suono: ' + (on ? 'sì' : 'no');
});

const roomUrl = document.body.dataset.roomUrl;
$('#roomUrl').textContent = roomUrl.replace(/^https?:\/\//, '');
$('#copyRoom').addEventListener('click', (e) => {
  const btn = e.currentTarget;
  const done = () => { btn.textContent = 'Copiato'; setTimeout(() => { btn.textContent = 'Copia'; }, 1600); };
  const fallback = () => { const r = document.createRange(); r.selectNodeContents($('#roomUrl')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
  try { navigator.clipboard.writeText(roomUrl).then(done, fallback); } catch (err) { fallback(); }
});

if (debug) window.__tavolo = { selfTest };

async function boot() {
  try { await Promise.race([document.fonts.load('800 40px "Alegreya Sans"'), new Promise((r) => setTimeout(r, 2000))]); } catch (e) {}
  $('#loading').hidden = true;
  renderPool();
}
boot();
