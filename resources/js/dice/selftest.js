// Prova automatica: tanti lanci senza animazione, controllo che il dado mostri il valore deciso.
// Niente DOM: usata dal browser (window.__tavolo) e, in tappa 6, da Vitest in Node.
import * as THREE from 'three';
import { SIDES, TYPES, PROTOS, resultFace } from './geometry.js';
import { insideTray, simulate, plan } from './physics.js';

/** `rand` è un generatore in [0,1): con un seed (mulberry32) la prova è ripetibile. */
export function selfTest(n = 100, rand = Math.random) {
  const out = { runs: n, dice: 0, mismatches: 0, notAsleep: 0, outside: 0, maxSimMs: 0, avgSimMs: 0, maxSteps: 0, avgSteps: 0 };
  const q = new THREE.Quaternion();
  for (let r = 0; r < n; r++) {
    const k = 1 + Math.floor(rand() * (r % 10 === 9 ? 30 : 8));
    const list = Array.from({ length: k }, () => TYPES[Math.floor(rand() * 6)]);
    const values = list.map((t) => 1 + Math.floor(rand() * SIDES[t]));
    const t0 = performance.now();
    const sim = simulate(list, 1 + Math.floor(rand() * 2e9));
    const qRs = plan(list, values, sim);
    const ms = performance.now() - t0;
    out.maxSimMs = Math.max(out.maxSimMs, ms); out.avgSimMs += ms / n;
    out.maxSteps = Math.max(out.maxSteps, sim.steps); out.avgSteps += sim.steps / n;
    if (!sim.asleep) out.notAsleep++;
    list.forEach((t, i) => {
      const F = sim.frames[i], o = (sim.steps - 1) * 7;
      q.set(F[o + 3], F[o + 4], F[o + 5], F[o + 6]).multiply(qRs[i]);
      const v = PROTOS[t].faces[resultFace(PROTOS[t], q)].value;
      out.dice++;
      if (v !== values[i]) out.mismatches++;
      if (!insideTray(F[o], F[o + 2])) out.outside++;
    });
  }
  return out;
}
