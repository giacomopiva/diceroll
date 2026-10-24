import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { PROTOS, SIDES, resultFace } from '../../resources/js/dice/geometry.js';
import { plan, simulate } from '../../resources/js/dice/physics.js';
import { DICE, OPENING, TABLE, formula } from '../../resources/js/landing-rolls.js';

// Ogni lancio della demo: valori nel range del tipo, seed valido, e la faccia che il dado disegnato
// mostra a riposo è quella decisa (stessa verifica del tavolo vero).
const rolls = [
  { name: 'apertura', ...OPENING },
  ...TABLE.map((r) => ({ name: `tavolo ${r.who}`, ...r })),
  ...Object.entries(DICE).flatMap(([type, d]) => d.throws.map((t, i) => ({ name: `${type} #${i + 1}`, color: d.color, list: [type], values: [t.value], seed: t.seed }))),
];

describe('lanci fissi della landing', () => {
  it.each(rolls)('$name: valori e seed validi, faccia in alto = valore deciso', (r) => {
    expect(r.color).toMatch(/^#[0-9a-f]{6}$/);
    expect(Number.isInteger(r.seed)).toBe(true);
    expect(r.seed).toBeGreaterThanOrEqual(1);
    expect(r.seed).toBeLessThanOrEqual(2147483646);
    expect(r.values).toHaveLength(r.list.length);
    r.list.forEach((type, i) => { expect(r.values[i]).toBeGreaterThanOrEqual(1); expect(r.values[i]).toBeLessThanOrEqual(SIDES[type]); });

    const sim = simulate(r.list, r.seed);
    const qRs = plan(r.list, r.values, sim);
    const q = new THREE.Quaternion();
    r.list.forEach((type, i) => {
      const F = sim.frames[i], o = (sim.steps - 1) * 7;
      q.set(F[o + 3], F[o + 4], F[o + 5], F[o + 6]).multiply(qRs[i]);
      expect(PROTOS[type].faces[resultFace(PROTOS[type], q)].value).toBe(r.values[i]);
    });
  });

  it('il totale di ogni giocatore coincide con quello mostrato nella pagina (21, 10 e 9)', () => {
    expect(TABLE.map((r) => r.values.reduce((a, b) => a + b, 0))).toEqual([21, 10, 9]);
  });

  it('formula scrive i tipi nell\'ordine del tavolo', () => {
    expect(formula(['d20', 'd6'])).toBe('1d6 + 1d20');
    expect(formula(['d8', 'd8'])).toBe('2d8');
  });
});
