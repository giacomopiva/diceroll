import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { PROTOS, SIDES, TYPES, resultFace, symmetryQuat } from '../../resources/js/dice/geometry.js';
import { MAX_STEPS, TRAY, mulberry32, plan, simulate } from '../../resources/js/dice/physics.js';
import { selfTest } from '../../resources/js/dice/selftest.js';

const frameOf = (sim, i, step) => {
  const F = sim.frames[i], o = step * 7;
  return { p: new THREE.Vector3(F[o], F[o + 1], F[o + 2]), q: new THREE.Quaternion(F[o + 3], F[o + 4], F[o + 5], F[o + 6]) };
};

// Valore mostrato in alto da un dado fermo, dopo aver applicato la rotazione delle etichette.
const shownValue = (type, sim, i, qR) => {
  const { q } = frameOf(sim, i, sim.steps - 1);
  const q2 = q.clone().multiply(qR);
  return PROTOS[type].faces[resultFace(PROTOS[type], q2)].value;
};

describe.each(TYPES)('geometria %s', (type) => {
  const proto = PROTOS[type];

  it('ha tante facce quanti sono i lati', () => {
    expect(proto.faces).toHaveLength(SIDES[type]);
  });

  it('assegna ogni valore 1..n a una faccia, una volta sola', () => {
    const values = proto.faces.map((f) => f.value).sort((a, b) => a - b);
    expect(values).toEqual(Array.from({ length: SIDES[type] }, (_, i) => i + 1));
  });

  it('le facce opposte sommano a n+1 (dove esistono)', () => {
    if (type === 'd4') return; // il d4 non ha facce opposte
    const n = SIDES[type];
    for (const f of proto.faces) {
      const opposite = proto.faces.find((g) => g.n.dot(f.n) < -0.999);
      expect(opposite, `faccia opposta di ${f.value}`).toBeDefined();
      expect(f.value + opposite.value).toBe(n + 1);
    }
  });

  it('la rotazione di simmetria porta ogni faccia su ogni altra e il solido su se stesso', () => {
    const w = new THREE.Vector3();
    proto.faces.forEach((_, from) => {
      proto.faces.forEach((__, to) => {
        const q = symmetryQuat(proto, from, to);
        expect(q, `${type}: ${from} -> ${to}`).not.toBeNull();
        // la normale di `from` finisce sulla normale di `to`
        w.copy(proto.faces[from].n).applyQuaternion(q);
        expect(w.distanceTo(proto.faces[to].n)).toBeLessThan(1e-6);
        // i vertici restano vertici
        for (const v of proto.V) {
          w.copy(v).applyQuaternion(q);
          expect(proto.V.some((u) => u.distanceTo(w) < 1e-6)).toBe(true);
        }
      });
    });
  });
});

describe('simulazione e orientamento', () => {
  it('mulberry32 è deterministico e in [0,1)', () => {
    const a = mulberry32(42), b = mulberry32(42);
    for (let i = 0; i < 100; i++) {
      const x = a();
      expect(x).toBe(b());
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThan(1);
    }
  });

  it('lo stesso seed dà la stessa traiettoria', () => {
    const list = ['d20', 'd6', 'd4', 'd10'];
    const a = simulate(list, 123456), b = simulate(list, 123456), c = simulate(list, 654321);
    expect(a.steps).toBe(b.steps);
    for (let i = 0; i < list.length; i++) expect(Array.from(a.frames[i])).toEqual(Array.from(b.frames[i]));
    expect(Array.from(a.frames[0])).not.toEqual(Array.from(c.frames[0]));
  });

  it('il playback finisce entro il limite di 7 s', () => {
    const sim = simulate(Array(40).fill('d20'), 7);
    expect(sim.steps).toBeLessThanOrEqual(MAX_STEPS);
  }, 30000);

  it.each(TYPES)('%s: ogni valore del server diventa la faccia in alto', (type) => {
    const n = SIDES[type];
    const values = Array.from({ length: n }, (_, i) => i + 1);
    const list = Array(n).fill(type);
    for (const seed of [1, 99, 2024]) {
      const sim = simulate(list, seed);
      const qRs = plan(list, values, sim);
      values.forEach((v, i) => expect(shownValue(type, sim, i, qRs[i]), `${type} seed ${seed} dado ${i}`).toBe(v));
    }
  }, 60000);

  it('i dadi restano dentro la vaschetta', () => {
    const list = Array(40).fill('d6');
    const sim = simulate(list, 31337);
    list.forEach((_, i) => {
      const { p } = frameOf(sim, i, sim.steps - 1);
      expect(Math.abs(p.x)).toBeLessThanOrEqual(TRAY.W / 2);
      expect(Math.abs(p.z)).toBeLessThanOrEqual(TRAY.D / 2);
      expect(p.y).toBeGreaterThan(0);
    });
  }, 30000);

  it('selfTest: 150 lanci con valori casuali, 0 discrepanze', () => {
    const out = selfTest(150, mulberry32(20261018));
    expect(out.dice).toBeGreaterThan(500);
    expect(out.mismatches).toBe(0);
    expect(out.outside).toBe(0);
  }, 120000);
});
