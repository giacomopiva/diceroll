// Fisica precalcolata e orientamento delle etichette. Niente DOM: gira anche in Node.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PROTOS, resultFace, symmetryQuat } from './geometry.js';

export const DT = 1 / 60;
export const MAX_STEPS = 60 * 7;
// Vaschetta esagonale di dimensioni fisse, uguali per tutti i client: stesso seed, stessa traiettoria.
// R è la distanza centro-vertice (vertici sull'asse x, lati piatti in alto e in basso), A l'apotema.
const HEX_R = 9.2;
export const TRAY = { R: HEX_R, A: HEX_R * Math.sqrt(3) / 2 };
// Direzioni (nel piano xz) dal centro verso il centro di ogni lato.
export const TRAY_SIDES = Array.from({ length: 6 }, (_, k) => Math.PI / 6 + k * Math.PI / 3);

/** Il punto (x, z) sta dentro la vaschetta, a distanza almeno `margin` dalle pareti? */
export function insideTray(x, z, margin = 0) {
  return TRAY_SIDES.every((a) => x * Math.cos(a) + z * Math.sin(a) <= TRAY.A - margin + 1e-6);
}

// Pavimento della vaschetta (lastricato di pietra): attrito e rimbalzo dei dadi.
// Cambiarli cambia tutte le traiettorie: va aggiornato il test di regressione della fisica.
export const FLOOR = { friction: 0.42, restitution: 0.5 };

// Da più di SPREAD_FROM dadi la partenza non è più una colonna sola su un lato: i dadi partono da uno, due o tre lati
// (a gruppi di circa SPREAD_GROUP) e puntano a punti diversi del tavolo, così non si ammassano contro la parete opposta.
// Fino a SPREAD_FROM dadi il lancio è quello di sempre.
export const SPREAD_FROM = 9;
export const SPREAD_GROUP = 10;
const SPAWN_GAP = 2.8; // distanza tra i dadi alla partenza: il più grande (d4) misura 2,5
const AIM = 0.85;      // raggio (in apotemi) del disco centrale in cui cadono i punti verso cui sono lanciati i dadi
const SPEED = [6, 7];  // velocità orizzontale: minimo e ampiezza

export function mulberry32(a) {
  return function () { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

/** Avvicina il punto al centro lungo la congiungente finché sta dentro la vaschetta con il margine dato. */
function pullInside(x, z, margin) {
  if (insideTray(x, z, margin)) return { x, z };
  let lo = 0, hi = 1; // lo: scala sempre dentro (il centro), hi: fuori
  for (let i = 0; i < 24; i++) { const mid = (lo + hi) / 2; if (insideTray(x * mid, z * mid, margin)) lo = mid; else hi = mid; }
  return { x: x * lo, z: z * lo };
}

/**
 * Fisica precalcolata di un lancio.
 * `opts.origin` ({ x, z }, con un solo dado): il dado riparte da quel punto, per il rilancio. Senza origine
 * il percorso e l'ordine delle chiamate a rng() sono quelli dei lanci normali (c'è un test che lo blocca).
 */
export function simulate(list, seed, opts = {}) {
  const rng = mulberry32(seed);
  const origin = list.length === 1 && opts.origin ? pullInside(opts.origin.x, opts.origin.z, 1.2) : null;
  const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -55, 0), allowSleep: true });
  world.solver.iterations = 10;
  const mFloor = new CANNON.Material('pietra'), mWall = new CANNON.Material('legno'), mDie = new CANNON.Material('dado');
  world.addContactMaterial(new CANNON.ContactMaterial(mFloor, mDie, { friction: FLOOR.friction, restitution: FLOOR.restitution }));
  world.addContactMaterial(new CANNON.ContactMaterial(mWall, mDie, { friction: 0.08, restitution: 0.55 }));
  world.addContactMaterial(new CANNON.ContactMaterial(mDie, mDie, { friction: 0.12, restitution: 0.38 }));

  const floor = new CANNON.Body({ mass: 0, shape: new CANNON.Plane(), material: mFloor });
  floor.quaternion.setFromEuler(-Math.PI / 2, 0, 0); floor.kind = 'floor'; world.addBody(floor);
  for (const a of TRAY_SIDES) {
    // Il piano ha la normale su +z locale: la giro verso il centro, (-cos a, 0, -sin a).
    const wall = new CANNON.Body({ mass: 0, shape: new CANNON.Plane(), material: mWall });
    wall.position.set(TRAY.A * Math.cos(a), 0, TRAY.A * Math.sin(a));
    wall.quaternion.setFromEuler(0, Math.atan2(-Math.cos(a), -Math.sin(a)), 0);
    wall.kind = 'wall'; world.addBody(wall);
  }

  // Partenza da un lato, in colonne verso il centro: dove l'esagono si stringe verso il vertice non ci si spinge.
  const spread = !origin && list.length > SPREAD_FROM;
  const groups = spread ? Math.min(3, Math.ceil(list.length / SPREAD_GROUP)) : 1;
  const firstSide = spread ? Math.floor(rng() * 6) : 0;
  const side = origin || spread ? 1 : (rng() < 0.5 ? -1 : 1);
  const zSpread = 2.3, D = 2 * TRAY.A;
  let step = 0;
  const sounds = [];
  const bodies = list.map((type, i) => {
    const proto = PROTOS[type];
    const shape = new CANNON.ConvexPolyhedron({ vertices: proto.V.map((v) => new CANNON.Vec3(v.x, v.y, v.z)), faces: proto.faces.map((f) => f.idx.slice()) });
    const b = new CANNON.Body({ mass: 1, shape, material: mDie, linearDamping: 0.1, angularDamping: 0.12, sleepSpeedLimit: 0.25, sleepTimeLimit: 0.35 });
    const layer = Math.floor(i / 12), r = i % 12, col = r % 3, row = Math.floor(r / 3);
    let z = 0, aim = null;
    if (spread) {
      // Il gruppo g parte dal lato firstSide + g * 6/groups (lati opposti con due gruppi, uno sì e uno no con tre),
      // in celle da SPAWN_GAP: tre in fila lungo la parete, due verso il centro, poi a strati in altezza.
      const g = i % groups, k = Math.floor(i / groups);
      const a = TRAY_SIDES[(firstSide + g * (6 / groups)) % 6], ux = Math.cos(a), uz = Math.sin(a);
      const c = k % 3, rr = Math.floor(k / 3) % 2, lay = Math.floor(k / 6);
      const along = (c - 1) * SPAWN_GAP + (rng() - 0.5) * 0.4, inward = TRAY.A - 1.9 - rr * SPAWN_GAP + (rng() - 0.5) * 0.4;
      const x = ux * inward - uz * along, zz = uz * inward + ux * along;
      b.position.set(x, 2.2 + lay * 2.6 + rng() * 0.6, zz);
      // Punto del tavolo verso cui il dado è lanciato: sparso nel disco centrale, non sempre contro la parete opposta.
      const rho = TRAY.A * AIM * Math.sqrt(rng()), phi = rng() * 2 * Math.PI;
      aim = { x: rho * Math.cos(phi) - x, z: rho * Math.sin(phi) - zz };
    } else if (origin) {
      b.position.set(origin.x, 2.4 + rng() * 0.6, origin.z);
    } else {
      z = (list.length <= 3 ? (rng() - 0.5) * D * 0.4 : (row - 1.5) * zSpread) + (rng() - 0.5) * 0.4;
      b.position.set(side * (TRAY.R * 0.6 - col * 2.3), 2.2 + layer * 2.4 + rng() * 0.6, z);
    }
    const u1 = rng(), u2 = rng(), u3 = rng(), s1 = Math.sqrt(1 - u1), s2 = Math.sqrt(u1);
    b.quaternion.set(s1 * Math.sin(2 * Math.PI * u2), s1 * Math.cos(2 * Math.PI * u2), s2 * Math.sin(2 * Math.PI * u3), s2 * Math.cos(2 * Math.PI * u3));
    if (origin) {
      // Direzione casuale; vicino a una parete punta verso il centro, con uno scarto di ±45°.
      let a = rng() * 2 * Math.PI;
      const speed = 6 + rng() * 5, up = 3 + rng() * 3;
      if (!insideTray(origin.x, origin.z, 3)) a = Math.atan2(-origin.z, -origin.x) + (rng() - 0.5) * (Math.PI / 2);
      b.velocity.set(Math.cos(a) * speed, up, Math.sin(a) * speed);
    } else if (aim) {
      const len = Math.hypot(aim.x, aim.z) || 1, speed = SPEED[0] + rng() * SPEED[1];
      b.velocity.set((aim.x / len) * speed, 1 + rng() * 3, (aim.z / len) * speed);
    } else {
      b.velocity.set(-side * (13 + rng() * 9), 1 + rng() * 3, (rng() - 0.5) * 9 - z * 0.5);
    }
    b.angularVelocity.set((rng() - 0.5) * 40, (rng() - 0.5) * 40, (rng() - 0.5) * 40);
    b.kind = 'die';
    b.addEventListener('collide', (e) => {
      const other = e.body;
      if (other.kind === 'die' && other.id < b.id) return; // una sola volta per coppia
      const v = Math.abs(e.contact.getImpactVelocityAlongNormal());
      if (v > 1.2) sounds.push({ step, v, kind: other.kind });
    });
    world.addBody(b);
    return b;
  });

  const frames = bodies.map(() => new Float32Array(MAX_STEPS * 7));
  const calm = bodies.map(() => 0);
  let steps = 0;
  for (step = 0; step < MAX_STEPS; step++) {
    world.step(DT);
    const o = step * 7;
    bodies.forEach((b, i) => {
      const F = frames[i];
      F[o] = b.position.x; F[o + 1] = b.position.y; F[o + 2] = b.position.z;
      F[o + 3] = b.quaternion.x; F[o + 4] = b.quaternion.y; F[o + 5] = b.quaternion.z; F[o + 6] = b.quaternion.w;
      // Nei mucchi di dadi il micro-tremolio impedisce il sonno: addormento chi è fermo da 0,3 s.
      if (b.sleepState === 2 || step < 30) return;
      if (b.velocity.lengthSquared() < 0.16 && b.angularVelocity.lengthSquared() < 0.3) { if (++calm[i] >= 18) b.sleep(); }
      else calm[i] = 0;
    });
    steps = step + 1;
    if (step > 20 && bodies.every((b) => b.sleepState === 2)) break;
  }
  return { frames, steps, sounds, asleep: bodies.every((b) => b.sleepState === 2) };
}

// Data la fisica precalcolata, sceglie per ogni dado la rotazione delle etichette.
export function plan(list, values, sim) {
  const q = new THREE.Quaternion();
  return list.map((type, i) => {
    const proto = PROTOS[type], F = sim.frames[i], o = (sim.steps - 1) * 7;
    q.set(F[o + 3], F[o + 4], F[o + 5], F[o + 6]);
    const rest = resultFace(proto, q);
    const target = proto.faces.findIndex((f) => f.value === values[i]);
    return symmetryQuat(proto, target, rest) || new THREE.Quaternion();
  });
}
