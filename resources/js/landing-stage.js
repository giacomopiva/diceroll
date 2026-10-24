// Il tavolo vivo della landing: la stessa scena 3D del tavolo vero (vaschetta di pietra, dadi, fisica),
// con lanci fissi (landing-rolls.js). Caricato solo quando serve: tira dentro Three.js e cannon-es.
import { createScene } from './dice/scene.js';
import { DICE, OPENING, TABLE, formula } from './landing-rolls.js';

export function startStage(stage, canvas, { onToast }) {
  // Fascia in alto riservata ai riquadri sopra il tavolo: la vaschetta si adatta allo spazio che resta.
  const phone = matchMedia('(max-width:899px)');
  const scene = createScene(canvas, stage, { pixelRatioMax: 1.5, logoInset: () => ({ px: phone.matches ? 64 : 150, side: 'top' }) });
  let nextId = 1, timers = [];
  const cycle = {};

  const sum = (v) => v.reduce((a, b) => a + b, 0);
  const play = (r) => scene.play({
    id: nextId++, playerId: 0, color: r.color, list: r.list, values: r.values, seed: r.seed,
    onDone: () => onToast({ who: r.who, color: r.color, formula: formula(r.list), total: sum(r.values) }),
  });
  const later = (ms, fn) => timers.push(setTimeout(fn, ms));
  const stop = () => { timers.forEach(clearTimeout); timers = []; };

  return {
    opening() { stop(); play(OPENING); },
    // Tre giocatori, uno dopo l'altro: il primo sgombra il tavolo, gli altri si aggiungono.
    table() { stop(); TABLE.forEach((r, i) => later(i * 650, () => play(r))); },
    die(type) {
      stop();
      const d = DICE[type], i = cycle[type] = ((cycle[type] ?? -1) + 1) % d.throws.length, t = d.throws[i];
      play({ who: 'Tu', color: d.color, list: [type], values: [t.value], seed: t.seed });
    },
    setPaused: scene.setPaused,
  };
}
