// Landing: il tavolo vivo a destra, il testo a sinistra. Il tavolo 3D si carica a parte (landing-stage.js)
// e solo se serve: senza WebGL o con "riduci movimento" resta l'immagine, e la pagina si legge uguale.
import { FINISHES, PRESETS, TEXTURE_URL } from './presets.js';

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const root = document.documentElement;
root.classList.add('js-ready');

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const phone = matchMedia('(max-width:899px)');
const stage = $('#stage'), canvas = $('#c');
let live = null, current = 'welcome';

/* ---------------- Dove sta il tavolo ----------------
   Da tablet in su è la metà fissa accanto al testo. Sul telefono non può restare fisso sopra il testo che
   scorre (lo coprirebbe): lì sta accanto ai dadi, nella sezione in cui serve, e in apertura c'è la foto. */
function place() { (phone.matches ? $('#diceSlot') : $('.stage-col')).append(stage); }
place();
phone.addEventListener('change', place);

/* ---------------- Entrata delle parti ---------------- */
const reveal = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); reveal.unobserve(e.target); }
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
$$('.reveal').forEach((el) => reveal.observe(el));

/* ---------------- Il passo che sta passando decide cosa mostra il tavolo ---------------- */
function toast({ who, color, formula, total }) {
  $('#toastWho').textContent = who;
  $('#toastFormula').textContent = formula;
  $('#toastTotal').textContent = total;
  $('#toastDot').style.background = color;
}
function act(state) {
  if (!live || phone.matches) return; // sul telefono i passi non lanciano: il tavolo è giù, accanto ai dadi
  if (state === 'throw') live.table();
  else if (state === 'welcome') live.opening();
}
function setState(state) {
  if (state === current) return;
  current = state;
  stage.dataset.state = state;
  act(state);
}
const watch = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) setState(e.target.dataset.state);
}, { rootMargin: '-45% 0px -45% 0px' });
$$('[data-state]').filter((el) => el !== stage).forEach((el) => watch.observe(el));

/* ---------------- Il tavolo 3D ---------------- */
function hasWebGL() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; }
}
async function boot() {
  if (reduce || !hasWebGL()) return;
  try {
    const { startStage } = await import('./landing-stage.js');
    live = startStage(stage, canvas, { onToast: toast });
  } catch (e) { return; } // il poster resta: la pagina funziona lo stesso
  setTimeout(() => stage.classList.add('is-live'), 250); // il tempo di disegnare il primo fotogramma
  if (current === 'throw') live.table(); else live.opening();

  // Da fermo quando il tavolo non si vede o la scheda è nascosta.
  let onScreen = true;
  const sync = () => live.setPaused(!onScreen || document.hidden);
  new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; sync(); }).observe(stage);
  document.addEventListener('visibilitychange', sync);
}
if (phone.matches) {
  // Sul telefono il tavolo 3D si scarica solo quando ci si avvicina ai dadi.
  const near = new IntersectionObserver(([e]) => { if (e.isIntersecting) { near.disconnect(); boot(); } }, { rootMargin: '100% 0px' });
  near.observe($('#diceSlot'));
} else {
  (window.requestIdleCallback || ((fn) => setTimeout(fn, 200)))(boot);
}

/* ---------------- Sezione dei dadi: un clic lancia quel dado sul tavolo ---------------- */
const names = $$('.dname');
names.forEach((b) => b.addEventListener('click', () => {
  names.forEach((o) => o.setAttribute('aria-pressed', String(o === b)));
  $('#dnoteOut').textContent = b.nextElementSibling.textContent; // sul telefono la nota sta sotto l'elenco
  if (live) { setState('dice'); live.die(b.dataset.type); }
}));

/* ---------------- Colore dei dadi nel frammento ---------------- */
const swBox = $('#swatches');
if (swBox) {
  const all = [...PRESETS.map((p) => ({ name: p.name, hex: p.hex })), ...FINISHES.map((f) => ({ name: f.name, hex: f.hex, texture: f.texture }))];
  const dark = (hex) => { const n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255; return 0.2126 * r + 0.7152 * g + 0.0722 * b < 90; };
  const dies = $$('.die'), names2 = $$('.die-name'), you = $('#youDot');
  const pick = (c, btn) => {
    $$('.sw', swBox).forEach((o) => o.setAttribute('aria-pressed', String(o === btn)));
    you.style.background = c.texture ? `url(${TEXTURE_URL(c.texture)}) center/cover` : c.hex;
    dies.forEach((d) => {
      d.style.backgroundColor = c.hex;
      d.style.backgroundImage = c.texture ? `url(${TEXTURE_URL(c.texture)})` : 'none';
      d.classList.toggle('is-dark', dark(c.hex));
    });
    names2.forEach((n) => { n.textContent = c.name; });
  };
  all.forEach((c) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'sw'; b.style.backgroundColor = c.hex; b.title = c.name;
    if (c.texture) b.style.backgroundImage = `url(${TEXTURE_URL(c.texture)})`;
    b.setAttribute('aria-label', 'Dadi ' + c.name);
    b.setAttribute('aria-pressed', String(c.name === 'Oro'));
    b.addEventListener('click', () => pick(c, b));
    swBox.append(b);
  });
}
