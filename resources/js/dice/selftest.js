// Prova automatica: tanti lanci senza animazione, controllo che il dado mostri il valore deciso.
// Niente DOM: usata dal browser (window.__tavolo) e, in tappa 6, da Vitest in Node.
import * as THREE from 'three';
import { SIDES, TYPES, PROTOS, resultFace } from './geometry.js';
import { TRAY, simulate, plan } from './physics.js';

export function selfTest(n = 100) {
  const out = { runs: n, dice: 0, mismatches: 0, notAsleep: 0, outside: 0, maxSimMs: 0, avgSimMs: 0, maxSteps: 0, avgSteps: 0 };
  const q = new THREE.Quaternion();
  for (let r = 0; r < n; r++) {
    const k = 1 + Math.floor(Math.random() * (r % 10 === 9 ? 30 : 8));
    const list = Array.from({ length: k }, () => TYPES[Math.floor(Math.random() * 6)]);
    const values = list.map((t) => 1 + Math.floor(Math.random() * SIDES[t]));
    const t0 = performance.now();
    const sim = simulate(list, 1 + Math.floor(Math.random() * 2e9));
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
      if (Math.abs(F[o]) > TRAY.W / 2 || Math.abs(F[o + 2]) > TRAY.D / 2) out.outside++;
    });
  }
  return out;
}
