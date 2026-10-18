// Interfaccia del tavolo. I valori e il seed di ogni lancio li decide il server (POST dei dadi,
// evento DiceRolled per gli altri): il client non propone mai valori, li anima soltanto.
import './bootstrap';
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

/* ---------------- Scena ---------------- */
let table = null;
try {
  table = createScene($('#c'), $('#stage'), {
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
    row.className = 'die-tile';
    row.innerHTML = `<div class="head"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[t]}</svg><span class="name">${t}</span></div>
      <div class="stepper"><button class="step" type="button" aria-label="Togli un ${t}" ${pool[t] ? '' : 'disabled'}>−</button>
      <span class="count" aria-live="polite">${pool[t]}</span>
      <button class="step" type="button" aria-label="Aggiungi un ${t}" ${total >= MAX_DICE ? 'disabled' : ''}>+</button></div>`;
    const [minus, plus] = row.querySelectorAll('button');
    minus.addEventListener('click', () => { pool[t] = Math.max(0, pool[t] - 1); renderPool(); });
    plus.addEventListener('click', () => { if (poolList().length < MAX_DICE) pool[t]++; renderPool(); });
    box.appendChild(row);
  }
  $('#formula').textContent = total ? formulaOf(poolList()) : 'Aggiungi almeno un dado.';
  $('#rollBtn').disabled = !total || rolling;
}

/* ---------------- Registro e toast ---------------- */
function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function addLogEntry(roll) {
  const log = $('#log');
  const empty = log.querySelector('.empty'); if (empty) empty.remove();
  const li = document.createElement('li');
  const time = new Date(roll.created_at).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  li.innerHTML = `<span class="dot" style="background:${esc(roll.player.color)}"></span>
    <div class="meta"><strong>${esc(roll.player.nickname)}</strong><span>${formulaOf(roll.dice)} · ${time}</span></div>
    <span class="sum">…</span>
    <div class="vals"><span class="pending">in rotolamento</span></div>`;
  log.prepend(li);
  while (log.children.length > 30) log.lastChild.remove();
  return li;
}
// ok === null: lancio dello storico, mai animato qui, quindi niente verifica.
function fillLogEntry(li, roll, ok) {
  li.querySelector('.sum').textContent = roll.total;
  const check = ok === null ? '' : `<span class="check ${ok ? '' : 'bad'}">${ok ? '✓ facce = server' : '✗ faccia diversa dal server'}</span>`;
  li.querySelector('.vals').innerHTML = roll.dice.map((t, i) => `<span class="chip"><i>${t}</i> ${roll.values[i]}</span>`).join('') + check;
}
function showToast(roll) {
  const t = $('#toast');
  const detail = roll.dice.length > 8 ? formulaOf(roll.dice) : roll.dice.map((ty, i) => `${ty}: ${roll.values[i]}`).join(' · ');
  t.innerHTML = `<div class="who"><span class="dot" style="background:${esc(roll.player.color)}"></span>${esc(roll.player.nickname)}</div>
    <div class="detail">${detail}</div><div class="total">${roll.total}</div>`;
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
  table.play({
    color: roll.player.color, list: roll.dice, values: roll.values, seed: roll.seed,
    onDone(seen) {
      fillLogEntry(entry, roll, seen.every((v, i) => v === roll.values[i]));
      showToast(roll);
      // Il pulsante si riabilita quando si fermano i dadi di chi ha lanciato, non quelli degli altri.
      if (roll.player.id === myId) { rolling = false; renderPool(); }
    },
  });
}

for (const roll of JSON.parse($('#history').textContent)) {
  handled.add(roll.id);
  fillLogEntry(addLogEntry(roll), roll, null);
}

/* ---------------- Presenza: chi è al tavolo ---------------- */
// Lista iniziale dal server; poi ParticipantJoined/Left sul canale, heartbeat ogni 20 s e avviso all'uscita.
const myId = Number(document.body.dataset.playerId);
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

const heartbeat = () => window.axios.post(document.body.dataset.heartbeatUrl).catch(() => {});
setInterval(heartbeat, 20000);
addEventListener('pageshow', (e) => { if (e.persisted) heartbeat(); }); // ripristino dalla cache back/forward
addEventListener('pagehide', () => {
  // sendBeacon non può mettere header: il token CSRF va nel corpo.
  const body = new FormData();
  body.append('_token', document.querySelector('meta[name="csrf-token"]').content);
  navigator.sendBeacon(document.body.dataset.leaveUrl, body);
});

/* ---------------- Lancio mio ---------------- */
// Da quando premo Lancia a quando i miei dadi si fermano: il pulsante resta disattivato.
let rolling = false;
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
    if (status === 403) location.reload(); // sessione scaduta: torna il form di ingresso
    else if (status === 422) showMessage('Lancio non valido.');
    else if (status === 429) showMessage('Troppi lanci, aspetta un momento.');
    else showMessage('Non riesco a lanciare, riprova.');
    // Lancio mai partito: si può riprovare subito.
    rolling = false;
    renderPool();
  }
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
