// Interfaccia del tavolo. In tappa 2 il "server" è simulato qui (serverRoll);
// dalla tappa 4 valori e seed arrivano da Laravel.
import { SIDES, TYPES } from './dice/geometry.js';
import { createScene } from './dice/scene.js';
import { ensureAudio, setSound } from './dice/audio.js';
import { selfTest } from './dice/selftest.js';

const $ = (s) => document.querySelector(s);
const debug = document.body.dataset.debug === '1';

const PRESETS = [
  { name: 'Rubino', hex: '#b3243a' }, { name: 'Zaffiro', hex: '#2457b3' }, { name: 'Smeraldo', hex: '#1f8a5b' },
  { name: 'Ametista', hex: '#7a3fb0' }, { name: 'Osso', hex: '#e8dcc0' }, { name: 'Ossidiana', hex: '#2a2d33' },
  { name: 'Oro', hex: '#d9a72e' }, { name: 'Ghiaccio', hex: '#9fd3e6' },
];
const ICONS = {
  d4: '<polygon points="12,3 21,20 3,20"/>',
  d6: '<rect x="4.5" y="4.5" width="15" height="15" rx="1.5"/>',
  d8: '<polygon points="12,2 21,12 12,22 3,12"/><line x1="3" y1="12" x2="21" y2="12"/>',
  d10: '<polygon points="12,2 21,11 12,22 3,11"/><polyline points="3,11 12,14 21,11"/><line x1="12" y1="14" x2="12" y2="22"/>',
  d12: '<polygon points="12,2.5 21.5,9.4 17.9,20.5 6.1,20.5 2.5,9.4"/><polygon points="12,7 16.3,10.1 14.7,15.2 9.3,15.2 7.7,10.1"/>',
  d20: '<polygon points="12,2 20.7,7 20.7,17 12,22 3.3,17 3.3,7"/><polygon points="12,6.5 17,15 7,15"/>',
};
const MAX_DICE = 40;

/* ---------------- "Server" simulato (da sostituire in tappa 4) ---------------- */
function secureInt(n) {
  const buf = new Uint32Array(1), lim = Math.floor(0x100000000 / n) * n;
  do crypto.getRandomValues(buf); while (buf[0] >= lim);
  return (buf[0] % n) + 1;
}
function serverRoll(list) { return { values: list.map((t) => secureInt(SIDES[t])), seed: secureInt(2147483646) }; }

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
const pool = { d4: 1, d6: 1, d8: 1, d10: 1, d12: 1, d20: 1 };
const me = { name: 'Giacomo', color: PRESETS[0].hex };
try { const saved = JSON.parse(localStorage.getItem('tavolo-dadi') || 'null'); if (saved) { if (saved.name) me.name = saved.name; if (saved.color) me.color = saved.color; } } catch (e) {}
function save() { try { localStorage.setItem('tavolo-dadi', JSON.stringify(me)); } catch (e) {} }

const nick = $('#nick');
nick.value = me.name;
nick.addEventListener('input', () => { me.name = nick.value.trim() || 'Giocatore'; save(); });

function renderSwatches() {
  const box = $('#swatches');
  box.innerHTML = '';
  for (const p of PRESETS) {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'sw'; b.style.background = p.hex; b.title = p.name;
    b.setAttribute('aria-label', 'Dadi ' + p.name);
    b.setAttribute('aria-pressed', String(p.hex === me.color));
    b.addEventListener('click', () => { me.color = p.hex; save(); renderSwatches(); });
    box.appendChild(b);
  }
  const custom = document.createElement('label');
  custom.className = 'custom'; custom.title = 'Colore libero';
  const isCustom = !PRESETS.some((p) => p.hex === me.color);
  if (isCustom) { custom.style.background = me.color; custom.style.borderStyle = 'solid'; custom.style.borderColor = 'var(--brass)'; }
  custom.innerHTML = '<input type="color" id="colorCustom" aria-label="Scegli un colore libero"><span>' + (isCustom ? '' : '+') + '</span>';
  const inp = custom.querySelector('input');
  inp.value = me.color;
  inp.addEventListener('change', () => { me.color = inp.value; save(); renderSwatches(); });
  box.appendChild(custom);
}

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
  $('#rollBtn').disabled = !total;
}

/* ---------------- Registro e toast ---------------- */
function esc(s) { return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function addLogEntry(player, list) {
  const log = $('#log');
  const empty = log.querySelector('.empty'); if (empty) empty.remove();
  const li = document.createElement('li');
  const time = new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  li.innerHTML = `<span class="dot" style="background:${esc(player.color)}"></span>
    <div class="meta"><strong>${esc(player.name)}</strong><span>${formulaOf(list)} · ${time}</span></div>
    <span class="sum">…</span>
    <div class="vals"><span class="pending">in rotolamento</span></div>`;
  log.prepend(li);
  while (log.children.length > 30) log.lastChild.remove();
  return li;
}
function fillLogEntry(li, list, values, total, ok) {
  li.querySelector('.sum').textContent = total;
  const vals = li.querySelector('.vals');
  vals.innerHTML = list.map((t, i) => `<span class="chip"><i>${t}</i> ${values[i]}</span>`).join('') +
    `<span class="check ${ok ? '' : 'bad'}">${ok ? '✓ facce = server' : '✗ faccia diversa dal server'}</span>`;
}
function showToast(player, list, values, total) {
  const t = $('#toast');
  const detail = list.length > 8 ? formulaOf(list) : list.map((ty, i) => `${ty}: ${values[i]}`).join(' · ');
  t.innerHTML = `<div class="who"><span class="dot" style="background:${esc(player.color)}"></span>${esc(player.name)}</div>
    <div class="detail">${detail}</div><div class="total">${total}</div>`;
  t.hidden = false;
}

/* ---------------- Lancio ---------------- */
function roll(player, list, { withSound = false } = {}) {
  if (!list.length) return;
  if (withSound) ensureAudio();
  const server = serverRoll(list);
  const entry = addLogEntry(player, list);
  $('#toast').hidden = true;
  table.play({
    color: player.color, list, values: server.values, seed: server.seed,
    onDone(seen) {
      const ok = seen.every((v, i) => v === server.values[i]);
      const total = server.values.reduce((x, y) => x + y, 0);
      fillLogEntry(entry, list, server.values, total, ok);
      showToast(player, list, server.values, total);
    },
  });
}

function rollMine() { roll({ name: me.name, color: me.color }, poolList(), { withSound: true }); }
$('#rollBtn').addEventListener('click', rollMine);
document.addEventListener('keydown', (e) => {
  if (e.code !== 'Space' || e.repeat) return;
  const tag = (e.target.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'button' || tag === 'textarea') return;
  e.preventDefault(); rollMine();
});
$('#remoteBtn').addEventListener('click', () => {
  const options = [['d20'], ['d20', 'd4'], ['d6', 'd6'], ['d8', 'd6'], ['d12'], ['d20', 'd20']];
  const list = options[secureInt(options.length) - 1];
  const color = me.color === '#1f8a5b' ? '#7a3fb0' : '#1f8a5b';
  roll({ name: 'Elara', color }, list, { withSound: true });
});
$('#stressBtn').addEventListener('click', () => {
  const list = [];
  for (let i = 0; i < 30; i++) list.push(TYPES[secureInt(TYPES.length) - 1]);
  list.sort((a, b) => TYPES.indexOf(a) - TYPES.indexOf(b));
  roll({ name: me.name, color: me.color }, list, { withSound: true });
});
$('#soundBtn').addEventListener('click', (e) => {
  const on = e.currentTarget.getAttribute('aria-pressed') !== 'true';
  setSound(on);
  e.currentTarget.setAttribute('aria-pressed', String(on));
  e.currentTarget.textContent = 'Suono: ' + (on ? 'sì' : 'no');
});

// Segnaposto del link stanza: in tappa 3 arriva il codice vero.
const code = () => Array.from({ length: 3 }, () => 'abcdefghjkmnpqrstuvwxyz23456789'[secureInt(31) - 1]).join('');
const roomUrl = `${location.host}/t/${code()}-${code()}-${code()}`;
$('#roomUrl').textContent = roomUrl;
$('#copyRoom').addEventListener('click', (e) => {
  const btn = e.currentTarget;
  const done = () => { btn.textContent = 'Copiato'; setTimeout(() => { btn.textContent = 'Copia'; }, 1600); };
  const fallback = () => { const r = document.createRange(); r.selectNodeContents($('#roomUrl')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
  try { navigator.clipboard.writeText(location.protocol + '//' + roomUrl).then(done, fallback); } catch (err) { fallback(); }
});

if (debug) window.__tavolo = { selfTest };

async function boot() {
  try { await Promise.race([document.fonts.load('800 40px "Alegreya Sans"'), new Promise((r) => setTimeout(r, 2000))]); } catch (e) {}
  $('#loading').hidden = true;
  renderSwatches();
  renderPool();
  roll({ name: me.name, color: me.color }, poolList());
}
boot();
