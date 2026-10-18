// Fisica precalcolata e orientamento delle etichette. Niente DOM: gira anche in Node.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PROTOS, resultFace, symmetryQuat } from './geometry.js';

export const DT = 1 / 60;
export const MAX_STEPS = 60 * 7;
// Vaschetta di dimensioni fisse, uguali per tutti i client: stesso seed, stessa traiettoria.
export const TRAY = { W: 18, D: 12.5 };

export function mulberry32(a) {
  return function () { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

export function simulate(list, seed, W = TRAY.W, D = TRAY.D) {
  const rng = mulberry32(seed);
  const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -55, 0), allowSleep: true });
  world.solver.iterations = 10;
  const mFloor = new CANNON.Material('feltro'), mWall = new CANNON.Material('legno'), mDie = new CANNON.Material('dado');
  world.addContactMaterial(new CANNON.ContactMaterial(mFloor, mDie, { friction: 0.32, restitution: 0.32 }));
  world.addContactMaterial(new CANNON.ContactMaterial(mWall, mDie, { friction: 0.08, restitution: 0.55 }));
  world.addContactMaterial(new CANNON.ContactMaterial(mDie, mDie, { friction: 0.12, restitution: 0.38 }));

  const floor = new CANNON.Body({ mass: 0, shape: new CANNON.Plane(), material: mFloor });
  floor.quaternion.setFromEuler(-Math.PI / 2, 0, 0); floor.kind = 'floor'; world.addBody(floor);
  for (const [x, z, ry] of [[-W / 2, 0, Math.PI / 2], [W / 2, 0, -Math.PI / 2], [0, -D / 2, 0], [0, D / 2, Math.PI]]) {
    const wall = new CANNON.Body({ mass: 0, shape: new CANNON.Plane(), material: mWall });
    wall.position.set(x, 0, z); wall.quaternion.setFromEuler(0, ry, 0); wall.kind = 'wall'; world.addBody(wall);
  }

  const side = rng() < 0.5 ? -1 : 1;
  const zSpread = Math.min(2.3, (D - 2.6) / 3);
  let step = 0;
  const sounds = [];
  const bodies = list.map((type, i) => {
    const proto = PROTOS[type];
    const shape = new CANNON.ConvexPolyhedron({ vertices: proto.V.map((v) => new CANNON.Vec3(v.x, v.y, v.z)), faces: proto.faces.map((f) => f.idx.slice()) });
    const b = new CANNON.Body({ mass: 1, shape, material: mDie, linearDamping: 0.1, angularDamping: 0.12, sleepSpeedLimit: 0.25, sleepTimeLimit: 0.35 });
    const layer = Math.floor(i / 12), r = i % 12, col = r % 3, row = Math.floor(r / 3);
    const z = (list.length <= 3 ? (rng() - 0.5) * D * 0.4 : (row - 1.5) * zSpread) + (rng() - 0.5) * 0.4;
    b.position.set(side * (W / 2 - 1.4 - col * 2.3), 2.2 + layer * 2.4 + rng() * 0.6, z);
    const u1 = rng(), u2 = rng(), u3 = rng(), s1 = Math.sqrt(1 - u1), s2 = Math.sqrt(u1);
    b.quaternion.set(s1 * Math.sin(2 * Math.PI * u2), s1 * Math.cos(2 * Math.PI * u2), s2 * Math.sin(2 * Math.PI * u3), s2 * Math.cos(2 * Math.PI * u3));
    b.velocity.set(-side * (13 + rng() * 9), 1 + rng() * 3, (rng() - 0.5) * 9 - z * 0.5);
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
