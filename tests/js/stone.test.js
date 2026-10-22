import { describe, expect, it } from 'vitest';
import { buildStoneRim } from '../../resources/js/dice/stone.js';
import { TRAY, insideTray } from '../../resources/js/dice/physics.js';

describe('cornice di pietra', () => {
  const g = buildStoneRim();
  const pos = g.attributes.position;

  it('nessun vertice entra nella vaschetta: il lato interno sta sul piano delle pareti fisiche', () => {
    let inside = 0;
    for (let i = 0; i < pos.count; i++) if (insideTray(pos.getX(i), pos.getZ(i), 1e-3)) inside++;
    expect(inside).toBe(0);
  });

  it('il lato interno tocca davvero le pareti (niente fessura tra pietra e feltro)', () => {
    // per ognuno dei sei lati ci sono vertici a meno di 1 mm dal piano della parete, sopra il feltro
    for (let k = 0; k < 6; k++) {
      const a = Math.PI / 6 + k * Math.PI / 3, cx = Math.cos(a), cz = Math.sin(a);
      let touching = 0;
      for (let i = 0; i < pos.count; i++) {
        const d = pos.getX(i) * cx + pos.getZ(i) * cz;
        if (pos.getY(i) > 0.1 && Math.abs(d - TRAY.A) < 1e-3) touching++;
      }
      expect(touching, `lato ${k}`).toBeGreaterThan(20);
    }
  });

  it('ha un ingombro contenuto e appoggia sul tavolo', () => {
    const b = g.boundingBox;
    expect(Math.max(b.max.x, -b.min.x)).toBeLessThan(TRAY.R + 2);
    expect(Math.max(b.max.z, -b.min.z)).toBeLessThan(TRAY.A + 2);
    expect(b.min.y).toBeLessThanOrEqual(0);
    expect(b.max.y).toBeLessThan(1.8);
  });

  it('è la stessa per tutti (seed fisso)', () => {
    const h = buildStoneRim().attributes.position;
    expect(h.count).toBe(pos.count);
    for (let i = 0; i < pos.count; i += 997) expect(h.getX(i)).toBe(pos.getX(i));
  });
});
