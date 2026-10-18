// Geometria dei dadi: vertici, facce, valori, UV, simmetrie. Niente DOM.
import * as THREE from 'three';

export const TYPES = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];
export const SIDES = { d4: 4, d6: 6, d8: 8, d10: 10, d12: 12, d20: 20 };
export const PAD = 0.9; // margine dentro ogni cella dell'atlante

const PHI = (1 + Math.sqrt(5)) / 2;

function cubeVerts() { const v = []; for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) v.push([x, y, z]); return v; }
function octVerts() { return [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]; }
function d10Verts() {
  // Trapezoedro pentagonale: l'altezza dei vertici polari rende planari le facce a aquilone.
  const z0 = 0.105, c = Math.cos(Math.PI / 5), H = z0 * (1 + c) / (1 - c);
  const v = [[0, H, 0], [0, -H, 0]];
  for (let k = 0; k < 5; k++) {
    const a = k * 2 * Math.PI / 5, b = a + Math.PI / 5;
    v.push([Math.cos(a), z0, Math.sin(a)]);
    v.push([Math.cos(b), -z0, Math.sin(b)]);
  }
  return v;
}
function dodecaVerts() {
  const v = cubeVerts(), a = 1 / PHI, b = PHI;
  for (const s of [-1, 1]) for (const t of [-1, 1]) { v.push([0, s * a, t * b]); v.push([s * a, t * b, 0]); v.push([s * b, 0, t * a]); }
  return v;
}
function icosaVerts() {
  const v = [];
  for (const s of [-1, 1]) for (const t of [-1, 1]) { v.push([0, s, t * PHI]); v.push([s, t * PHI, 0]); v.push([s * PHI, 0, t]); }
  return v;
}

const DEFS = {
  d4:  { verts: [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]], radius: 1.25 },
  d6:  { verts: cubeVerts(), radius: 1.08 },
  d8:  { verts: octVerts(), radius: 1.12 },
  d10: { verts: d10Verts(), radius: 1.08 },
  d12: { verts: dodecaVerts(), radius: 1.12 },
  d20: { verts: icosaVerts(), radius: 1.16 },
};

// Trova le facce di un poliedro convesso dai soli vertici (piani di supporto).
export function findFaces(V) {
  const faces = [], eps = 1e-5, n = V.length;
  const a = new THREE.Vector3(), b = new THREE.Vector3();
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) for (let k = j + 1; k < n; k++) {
    const nrm = a.subVectors(V[j], V[i]).cross(b.subVectors(V[k], V[i])).clone();
    if (nrm.lengthSq() < 1e-10) continue;
    nrm.normalize();
    let d = nrm.dot(V[i]);
    if (d < 0) { nrm.negate(); d = -d; }
    if (d < 1e-6) continue;
    if (V.some((v) => nrm.dot(v) > d + eps)) continue;
    if (faces.some((f) => f.n.dot(nrm) > 1 - 1e-6)) continue;
    const idx = [];
    V.forEach((v, m) => { if (Math.abs(nrm.dot(v) - d) < eps) idx.push(m); });
    const c = new THREE.Vector3();
    idx.forEach((m) => c.add(V[m]));
    c.divideScalar(idx.length);
    const e1 = V[idx[0]].clone().sub(c).normalize();
    const e2 = new THREE.Vector3().crossVectors(nrm, e1);
    const ang = (m) => { const p = V[m].clone().sub(c); return Math.atan2(p.dot(e2), p.dot(e1)); };
    idx.sort((p, q) => ang(p) - ang(q)); // antiorario visto da fuori
    faces.push({ idx, n: nrm, c });
  }
  return faces;
}

function assignValues(proto) {
  const F = proto.faces, n = F.length;
  if (proto.type === 'd4') {
    // Sul d4 i numeri stanno sui vertici: il risultato è il vertice in alto,
    // cioè quello opposto alla faccia appoggiata sul tavolo.
    F.forEach((f) => { f.value = [0, 1, 2, 3].find((i) => !f.idx.includes(i)) + 1; });
    return;
  }
  const order = F.map((_, i) => i).sort((p, q) => (F[q].n.y - F[p].n.y) || (Math.atan2(F[p].n.z, F[p].n.x) - Math.atan2(F[q].n.z, F[q].n.x)));
  let next = 1;
  for (const i of order) {
    if (F[i].value) continue;
    F[i].value = next;
    const j = F.findIndex((g) => g.n.dot(F[i].n) < -0.999);
    if (j >= 0 && !F[j].value) F[j].value = n + 1 - next; // facce opposte sommano a n+1
    next++;
  }
}

function faceFrame(proto, f) {
  const pts = f.idx.map((m) => proto.V[m].clone().sub(f.c));
  const dists = pts.map((p) => p.length());
  const R = Math.max(...dists);
  let up;
  if (proto.type === 'd6') up = pts[0].clone().add(pts[1]).normalize(); // verso il centro di un lato
  else up = pts[dists.findIndex((d) => d > R - 1e-4)].clone().normalize(); // verso il vertice più lontano
  const right = new THREE.Vector3().crossVectors(up, f.n);
  f.uv = pts.map((p) => [0.5 + p.dot(right) / (2 * R), 0.5 + p.dot(up) / (2 * R)]);
  f.inc = incircle(f.uv);
}

// Cerchio più grande dentro il poligono (in coordinate UV): è lì che va il numero.
// Sul d10 il centro dell'aquilone non coincide con la media dei vertici, sugli altri sì.
function incircle(poly) {
  const n = poly.length;
  let area = 0;
  for (let i = 0; i < n; i++) { const [ax, ay] = poly[i], [bx, by] = poly[(i + 1) % n]; area += ax * by - bx * ay; }
  const sign = area > 0 ? -1 : 1; // distanza positiva verso l'interno, qualunque sia il verso dei vertici
  const dist = (x, y) => {
    let m = Infinity;
    for (let i = 0; i < n; i++) {
      const [ax, ay] = poly[i], [bx, by] = poly[(i + 1) % n];
      const ex = bx - ax, ey = by - ay;
      m = Math.min(m, sign * ((x - ax) * ey - (y - ay) * ex) / Math.hypot(ex, ey));
    }
    return m;
  };
  let u = poly.reduce((a, p) => a + p[0], 0) / n, v = poly.reduce((a, p) => a + p[1], 0) / n;
  let r = dist(u, v);
  for (let step = 0.05; step > 1e-5; step /= 2) {
    for (let moved = true, guard = 0; moved && guard < 200; guard++) {
      moved = false;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const d = dist(u + dx * step, v + dy * step);
        if (d > r + 1e-9) { u += dx * step; v += dy * step; r = d; moved = true; }
      }
    }
  }
  return { u, v, r };
}

function atlasLayout(n) { const cols = Math.ceil(Math.sqrt(n)); return { cols, rows: Math.ceil(n / cols) }; }
export function cellOf(proto, fi) { return proto.type === 'd4' ? fi : proto.faces[fi].value - 1; }

function buildGeometry(proto) {
  const pos = [], nor = [], uv = [], g = new THREE.BufferGeometry();
  const { cols, rows } = proto.atlas;
  proto.faces.forEach((f, fi) => {
    const cell = cellOf(proto, fi), cx = cell % cols, cy = Math.floor(cell / cols);
    for (let k = 1; k < f.idx.length - 1; k++) {
      for (const q of [0, k, k + 1]) {
        const v = proto.V[f.idx[q]];
        pos.push(v.x, v.y, v.z);
        nor.push(f.n.x, f.n.y, f.n.z);
        const u = 0.5 + (f.uv[q][0] - 0.5) * PAD, w = 0.5 + (f.uv[q][1] - 0.5) * PAD;
        uv.push((cx + u) / cols, 1 - (cy + 1 - w) / rows);
      }
    }
  });
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.computeBoundingSphere();
  return g;
}

export function buildProto(type) {
  const def = DEFS[type];
  const V = def.verts.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
  const maxR = Math.max(...V.map((v) => v.length()));
  V.forEach((v) => v.multiplyScalar(def.radius / maxR));
  const proto = { type, V, faces: findFaces(V) };
  if (proto.faces.length !== SIDES[type]) console.warn('Facce inattese', type, proto.faces.length);
  assignValues(proto);
  proto.faces.forEach((f) => faceFrame(proto, f));
  proto.atlas = atlasLayout(proto.faces.length);
  proto.geometry = buildGeometry(proto);
  return proto;
}

export const PROTOS = Object.fromEntries(TYPES.map((t) => [t, buildProto(t)]));

// Rotazione di simmetria del solido che porta la faccia `from` sulla faccia `to`.
// Il dado fisico e quello disegnato hanno la stessa forma: ruotare solo le etichette
// fa fermare il dado sul numero deciso dal server senza toccare la traiettoria.
export function symmetryQuat(proto, from, to) {
  if (from === to) return new THREE.Quaternion();
  const V = proto.V, A = proto.faces[from], B = proto.faces[to];
  const xa = V[A.idx[0]].clone().sub(A.c).normalize();
  const Ma = new THREE.Matrix4().makeBasis(xa, new THREE.Vector3().crossVectors(A.n, xa), A.n);
  const MaT = Ma.clone().transpose();
  const w = new THREE.Vector3();
  for (const m of B.idx) {
    const xb = V[m].clone().sub(B.c).normalize();
    const Mb = new THREE.Matrix4().makeBasis(xb, new THREE.Vector3().crossVectors(B.n, xb), B.n);
    const R = Mb.multiply(MaT);
    const ok = V.every((v) => { w.copy(v).applyMatrix4(R); return V.some((u) => u.distanceToSquared(w) < 1e-6); });
    if (ok) return new THREE.Quaternion().setFromRotationMatrix(R);
  }
  return null;
}

// Faccia che conta: quella in alto (per il d4 quella appoggiata sul tavolo).
const _n = new THREE.Vector3();
export function resultFace(proto, q) {
  const sign = proto.type === 'd4' ? -1 : 1;
  let best = 0, bv = -Infinity;
  proto.faces.forEach((f, i) => { const y = _n.copy(f.n).applyQuaternion(q).y * sign; if (y > bv) { bv = y; best = i; } });
  return best;
}
