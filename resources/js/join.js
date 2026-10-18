// Form di ingresso al tavolo: scelta del colore e preriempimento da quanto salvato nel browser.
import { PRESETS } from './presets.js';

const form = document.getElementById('joinForm');
const nick = document.getElementById('nick');
const colorInput = document.getElementById('color');
const box = document.getElementById('swatches');

let saved = null;
try { saved = JSON.parse(localStorage.getItem('tavolo-dadi') || 'null'); } catch (e) {}

if (!nick.value && saved && saved.name) nick.value = saved.name;
// Colori già usati da chi è al tavolo: non si offrono (il server li rifiuta comunque).
let taken = [];
try { taken = JSON.parse(box.dataset.taken || '[]'); } catch (e) {}
const free = PRESETS.filter((p) => !taken.includes(p.hex));
if (!colorInput.value) colorInput.value = (saved && saved.color) || PRESETS[0].hex;
if (taken.includes(colorInput.value.toLowerCase())) colorInput.value = (free[0] || PRESETS[0]).hex;

function render() {
  box.innerHTML = '';
  for (const p of free) {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'sw'; b.style.background = p.hex; b.title = p.name;
    b.setAttribute('aria-label', 'Dadi ' + p.name);
    b.setAttribute('aria-pressed', String(p.hex === colorInput.value));
    b.addEventListener('click', () => { colorInput.value = p.hex; render(); });
    box.appendChild(b);
  }
  const custom = document.createElement('label');
  custom.className = 'custom'; custom.title = 'Colore libero';
  const isCustom = !PRESETS.some((p) => p.hex === colorInput.value);
  if (isCustom) { custom.style.background = colorInput.value; custom.style.borderStyle = 'solid'; custom.style.borderColor = 'var(--brass)'; }
  custom.innerHTML = '<input type="color" aria-label="Scegli un colore libero"><span>' + (isCustom ? '' : '+') + '</span>';
  const inp = custom.querySelector('input');
  inp.value = colorInput.value;
  inp.addEventListener('change', () => { if (!taken.includes(inp.value.toLowerCase())) colorInput.value = inp.value; render(); });
  box.appendChild(custom);
}
render();

form.addEventListener('submit', () => {
  try { localStorage.setItem('tavolo-dadi', JSON.stringify({ name: nick.value.trim(), color: colorInput.value })); } catch (e) {}
});
