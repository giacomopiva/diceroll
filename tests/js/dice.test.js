import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { BEVEL, PROTOS, SIDES, TYPES, resultFace, symmetryQuat } from '../../resources/js/dice/geometry.js';
import { MAX_STEPS, TRAY, insideTray, mulberry32, plan, simulate } from '../../resources/js/dice/physics.js';
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

  it('il centro del numero sta dentro ogni faccia, lontano dai lati', () => {
    for (const f of proto.faces) {
      const { u, v, r } = f.inc;
      // calcolato sulla faccia ridotta: lo smusso toglie spazio, soprattutto al d20 (facce piccole)
      expect(r, `faccia ${f.value}`).toBeGreaterThan(0.17);
      const n = f.insetUv.length;
      for (let i = 0; i < n; i++) {
        const [ax, ay] = f.insetUv[i], [bx, by] = f.insetUv[(i + 1) % n];
        const d = Math.abs((u - ax) * (by - ay) - (v - ay) * (bx - ax)) / Math.hypot(bx - ax, by - ay);
        expect(d, `faccia ${f.value}, lato ${i}`).toBeGreaterThanOrEqual(r - 1e-4);
      }
    }
  });

  describe('spigoli smussati', () => {
    const e = BEVEL[type];
    const P = proto.geometry.getAttribute('position');
    const tris = [];
    for (let i = 0; i < P.count; i += 3) tris.push([0, 1, 2].map((k) => new THREE.Vector3().fromBufferAttribute(P, i + k)));
    const area = (t) => new THREE.Vector3().subVectors(t[1], t[0]).cross(new THREE.Vector3().subVectors(t[2], t[0])).length() / 2;

    it('le facce ridotte sono coplanari con la faccia', () => {
      for (const f of proto.faces) for (const p of f.inset) expect(Math.abs(f.n.dot(p) - f.n.dot(f.c))).toBeLessThan(1e-6);
    });

    it('ogni punto ridotto dista esattamente e dai due lati originali che lo toccano', () => {
      const dir = new THREE.Vector3();
      for (const f of proto.faces) f.idx.forEach((_, k) => {
        const n = f.idx.length, p = f.inset[k];
        for (const [i0, i1] of [[(k + n - 1) % n, k], [k, (k + 1) % n]]) {
          // distanza dalla retta del lato (il piede può cadere fuori dal segmento sugli angoli ottusi)
          dir.subVectors(proto.V[f.idx[i1]], proto.V[f.idx[i0]]).normalize();
          const d = p.clone().sub(proto.V[f.idx[i0]]).cross(dir).length();
          expect(d).toBeCloseTo(e, 6);
        }
      });
    });

    it('la mesh sta dentro il poliedro esatto', () => {
      const maxR = Math.max(...proto.V.map((v) => v.length()));
      for (const t of tris) for (const p of t) {
        expect(p.length()).toBeLessThanOrEqual(maxR + 1e-6);
        for (const f of proto.faces) expect(f.n.dot(p)).toBeLessThanOrEqual(f.n.dot(f.c) + 1e-6);
      }
    });

    it('le normali dei triangoli escono dal solido', () => {
      for (const t of tris) {
        const n = new THREE.Vector3().subVectors(t[1], t[0]).cross(new THREE.Vector3().subVectors(t[2], t[0]));
        const bary = t[0].clone().add(t[1]).add(t[2]).divideScalar(3);
        expect(n.dot(bary)).toBeGreaterThan(0);
      }
    });

    it('la superficie è chiusa: ogni spigolo compare due volte, in versi opposti', () => {
      const key = (p) => [p.x, p.y, p.z].map((c) => Math.round(c * 1e5)).join(',');
      const count = new Map();
      for (const t of tris) for (let i = 0; i < 3; i++) {
        const a = key(t[i]), b = key(t[(i + 1) % 3]);
        if (a === b) continue;
        count.set(a + '>' + b, (count.get(a + '>' + b) ?? 0) + 1);
      }
      for (const [k, n] of count) {
        const [a, b] = k.split('>');
        expect(n, k).toBe(1);
        expect(count.get(b + '>' + a), k).toBe(1);
      }
    });

    it("l'area è tra il 90% e il 100% di quella del poliedro", () => {
      const sum = (ts) => ts.reduce((s, t) => s + area(t), 0);
      const exact = proto.faces.reduce((s, f) => s + sum(f.idx.slice(1, -1).map((_, k) => [proto.V[f.idx[0]], proto.V[f.idx[k + 1]], proto.V[f.idx[k + 2]]])), 0);
      const ratio = sum(tris) / exact;
      expect(ratio).toBeGreaterThan(0.9);
      expect(ratio).toBeLessThanOrEqual(1 + 1e-6);
    });

    it('i punti di colore pieno restano fuori dal poligono della faccia, dentro la cella', () => {
      // (0.04, 0.04) in coordinate di cella: usato da strisce e tappi
      const [x, y] = [0.04, 0.04];
      for (const f of proto.faces) {
        const n = f.uv.length;
        let inside = true;
        for (let i = 0; i < n; i++) {
          const [ax, ay] = f.uv[i], [bx, by] = f.uv[(i + 1) % n];
          if ((bx - ax) * (y - ay) - (by - ay) * (x - ax) < 0) inside = false; // antiorario: dentro = a sinistra
        }
        expect(inside).toBe(false);
      }
    });
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

  it('la vaschetta è un esagono regolare', () => {
    expect(TRAY.A).toBeCloseTo(TRAY.R * Math.sqrt(3) / 2);
    for (let k = 0; k < 6; k++) {
      const a = k * Math.PI / 3; // vertici
      expect(insideTray(TRAY.R * Math.cos(a) * 0.999, TRAY.R * Math.sin(a) * 0.999)).toBe(true);
      expect(insideTray(TRAY.R * Math.cos(a) * 1.01, TRAY.R * Math.sin(a) * 1.01)).toBe(false);
    }
    // Gli angoli del vecchio rettangolo 18 × 12,5 cadono fuori.
    expect(insideTray(8.9, 6.1)).toBe(false);
  });

  it('i dadi partono e restano dentro la vaschetta', () => {
    for (const seed of [31337, 7, 123456]) {
      const list = Array(40).fill('d6');
      const sim = simulate(list, seed);
      list.forEach((_, i) => {
        const start = frameOf(sim, i, 0).p, end = frameOf(sim, i, sim.steps - 1).p;
        expect(insideTray(start.x, start.z, 0.9), `partenza dado ${i}, seed ${seed}`).toBe(true);
        expect(insideTray(end.x, end.z), `arrivo dado ${i}, seed ${seed}`).toBe(true);
        expect(end.y).toBeGreaterThan(0);
      });
    }
  }, 60000);

  // Valori calcolati prima di introdurre `opts.origin`: senza origine la fisica deve restare identica,
  // quindi stesse chiamate a rng() nello stesso ordine.
  it('regressione della fisica: senza origine le posizioni finali non cambiano', () => {
    const cases = [
      { list: ['d20'], seed: 1, steps: 156, pos: [[-2.2898, 1.0912]] },
      { list: ['d6', 'd8', 'd12'], seed: 2024, steps: 110, pos: [[-5.7376, 4.1274], [-2.7731, -0.3327], [-7.8766, 0.2138]] },
      {
        list: ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd20', 'd10', 'd8', 'd6'], seed: 77, steps: 234,
        pos: [[-0.7615, -4.3702], [3.8568, -2.6324], [5.7894, -3.0309], [-0.4252, -3.061], [2.8094, -6.9202], [7.0329, -0.1552], [2.5591, 3.4384], [3.1706, -0.084], [5.8519, 1.0566], [0.6223, 2.421]],
      },
    ];
    for (const c of cases) {
      const sim = simulate(c.list, c.seed);
      expect(sim.steps).toBe(c.steps);
      c.pos.forEach(([x, z], i) => {
        const p = frameOf(sim, i, sim.steps - 1).p;
        expect(p.x).toBeCloseTo(x, 3);
        expect(p.z).toBeCloseTo(z, 3);
      });
    }
  });

  it('con origine: parte da lì (riportata dentro), si ferma dentro, plan() senza discrepanze', () => {
    const rnd = mulberry32(4242);
    const origins = [];
    for (let k = 0; k < 6; k++) { // vicino ai vertici
      const a = k * Math.PI / 3;
      origins.push({ x: TRAY.R * 0.93 * Math.cos(a), z: TRAY.R * 0.93 * Math.sin(a) });
    }
    origins.push({ x: 30, z: -20 }, { x: -50, z: 50 }); // volutamente fuori
    while (origins.length < 50) {
      const x = (rnd() * 2 - 1) * TRAY.R, z = (rnd() * 2 - 1) * TRAY.A;
      if (insideTray(x, z)) origins.push({ x, z });
    }
    origins.forEach((origin, n) => {
      const type = TYPES[n % TYPES.length];
      const sim = simulate([type], 1000 + n, { origin });
      const p0 = frameOf(sim, 0, 0).p, p1 = frameOf(sim, 0, sim.steps - 1).p;
      expect(insideTray(p0.x, p0.z, 1), `partenza ${n}`).toBe(true);
      expect(insideTray(p1.x, p1.z), `arrivo ${n}`).toBe(true);
      expect(sim.asleep, `sonno ${n}`).toBe(true);
      expect(sim.steps).toBeLessThanOrEqual(MAX_STEPS);
      const value = 1 + Math.floor(rnd() * SIDES[type]);
      expect(shownValue(type, sim, 0, plan([type], [value], sim)[0]), `valore ${n}`).toBe(value);
    });
  }, 60000);

  it('con origine dentro la vaschetta il dado parte vicino a quel punto', () => {
    const sim = simulate(['d20'], 5, { origin: { x: 2, z: -1 } });
    const p = frameOf(sim, 0, 0).p;
    expect(Math.hypot(p.x - 2, p.z + 1)).toBeLessThan(0.5);
  });

  it('con origine lo stesso seed dà gli stessi frame', () => {
    const origin = { x: -3.5, z: 2.25 };
    const a = simulate(['d20'], 99, { origin }), b = simulate(['d20'], 99, { origin });
    expect(a.steps).toBe(b.steps);
    expect(Array.from(a.frames[0])).toEqual(Array.from(b.frames[0]));
    expect(Array.from(simulate(['d20'], 99).frames[0])).not.toEqual(Array.from(a.frames[0]));
  });

  it('selfTest: 150 lanci con valori casuali, 0 discrepanze', () => {
    const out = selfTest(150, mulberry32(20261018));
    expect(out.dice).toBeGreaterThan(500);
    expect(out.mismatches).toBe(0);
    expect(out.outside).toBe(0);
  }, 120000);
});
