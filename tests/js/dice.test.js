import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { BEVEL, PROTOS, SIDES, TYPES, resultFace, symmetryQuat } from '../../resources/js/dice/geometry.js';
import { FLOOR, MAX_STEPS, SPREAD_FROM, TRAY, insideTray, mulberry32, plan, simulate } from '../../resources/js/dice/physics.js';
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

  // Valori calcolati con il pavimento di pietra (FLOOR in physics.js: attrito 0.42, rimbalzo 0.5).
  // Senza origine la fisica deve restare identica: stesse chiamate a rng() nello stesso ordine e stessi
  // materiali. Se si cambiano di proposito materiali o partenza, si ricalcolano questi valori.
  it('regressione della fisica: senza origine le posizioni finali non cambiano', () => {
    expect(FLOOR).toEqual({ friction: 0.42, restitution: 0.5 });
    const cases = [
      { list: ['d20'], seed: 1, steps: 126, pos: [[-2.356, 1.0759]] },
      { list: ['d6', 'd8', 'd12'], seed: 2024, steps: 120, pos: [[-5.6565, 4.3675], [-1.5374, 0.3666], [-7.1248, 0.2949]] },
      // Da 10 dadi in su la partenza è quella "a più lati" (SPREAD_FROM): questi due casi la bloccano.
      {
        list: ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd20', 'd10', 'd8', 'd6'], seed: 77, steps: 132,
        pos: [[-0.4309, 2.8829], [-4.6505, 2.8557], [-5.223, -1.8586], [5.717, -3.5635], [-1.5673, 0.8919], [-3.2563, -4.6825], [2.6682, 5.0569], [-2.4187, 2.7082], [-3.4316, 0.7952], [3.2734, 1.1221]],
      },
      {
        list: Array.from({ length: 30 }, (_, i) => ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'][i % 6]), seed: 4242, steps: 227,
        pos: [[-4.8768, 1.1016], [0.3288, -6.0175], [7.5234, 1.2205], [-1.6557, -0.1138], [5.2311, -1.5413], [0.2595, 5.5085], [-2.4156, -4.673], [6.9771, -1.1299], [-2.9777, 4.0362], [-3.4861, 0.1674], [1.2681, -1.4394], [2.9367, 3.0194], [0.3824, -0.0968], [1.8684, 0.7268], [0.5388, 1.4363], [2.5674, -4.2026], [5.2864, 1.4368], [-1.3078, 1.6107], [-4.5276, 1.5542], [5.6354, -3.8754], [0.0708, 3.4868], [-5.1924, -0.1699], [3.1265, -2.4366], [0.073, 2.3592], [-0.3192, -4.1672], [3.1601, -0.4159], [-3.4161, 1.8074], [-3.38, 6.7945], [-0.9023, -0.2223], [2.0587, 0.4771]],
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

  describe('partenza dei lanci grandi', () => {
    const six = (n) => Array.from({ length: n }, (_, i) => TYPES[i % 6]);
    const starts = (list, seed) => { const sim = simulate(list, seed); return list.map((_, i) => frameOf(sim, i, 0).p); };
    // Quanto i punti di partenza pendono da una parte sola: 1 se sono tutti nella stessa direzione dal centro,
    // vicino a 0 se sono distribuiti in modo bilanciato (lunghezza media dei versori).
    const lean = (ps) => { let x = 0, z = 0; for (const p of ps) { const l = Math.hypot(p.x, p.z) || 1; x += p.x / l; z += p.z / l; } return Math.hypot(x, z) / ps.length; };

    it('fino a SPREAD_FROM dadi la partenza è da un lato solo, da più dadi in su da più lati', () => {
      // Lancio piccolo: una colonna sola, tutta dallo stesso lato dell'asse x.
      for (const seed of [11, 12, 13]) expect(new Set(starts(six(SPREAD_FROM), seed).map((p) => Math.sign(p.x))).size, `seed ${seed}`).toBe(1);
      // Lancio grande: tre gruppi a 120° l'uno dall'altro, quindi la partenza non pende da nessuna parte.
      for (const seed of [1, 22, 333]) {
        expect(lean(starts(six(SPREAD_FROM), seed)), `piccolo, seed ${seed}`).toBeGreaterThan(0.6);
        expect(lean(starts(six(30), seed)), `grande, seed ${seed}`).toBeLessThan(0.35);
      }
    });

    it('i dadi non partono uno dentro l\'altro (distanza minima tra i centri)', () => {
      for (const n of [20, 30, 40]) for (const seed of [5, 66, 777]) {
        const p = starts(six(n), seed);
        let min = Infinity;
        for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) min = Math.min(min, p[i].distanceTo(p[j]));
        expect(min, `${n} dadi, seed ${seed}`).toBeGreaterThan(2.0);
      }
    });

    it('i valori restano quelli del server anche con la partenza a più lati', () => {
      const list = six(30), rnd = mulberry32(31337), values = list.map((t) => 1 + Math.floor(rnd() * SIDES[t]));
      const sim = simulate(list, 2026), qRs = plan(list, values, sim);
      list.forEach((t, i) => expect(shownValue(t, sim, i, qRs[i])).toBe(values[i]));
    }, 60000);
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
