// Geometria dei dadi: vertici, facce, valori, UV, simmetrie. Niente DOM.
import * as THREE from 'three';

export const TYPES = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];
export const SIDES = { d4: 4, d6: 6, d8: 8, d10: 10, d12: 12, d20: 20 };
export const PAD = 0.9; // margine dentro ogni cella dell'atlante

// Larghezza dello smusso degli spigoli (solo resa grafica), in unità di scena.
export const BEVEL = { d4: 0.06, d6: 0.08, d8: 0.07, d10: 0.06, d12: 0.06, d20: 0.05 };
// Punto della cella (prima di PAD) fuori da ogni faccia: dove drawCell lascia il colore pieno del dado.
const FLAT_UV = [0.04, 0.04];

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
  f.frame = { c: f.c, right, up, R };
  f.uv = pts.map((p) => uvOf(f, p.add(f.c)));
}

// Coordinate UV (0..1 sulla faccia) di un punto 3D, proiettato nel sistema della faccia.
function uvOf(f, p) {
  const { c, right, up, R } = f.frame;
  const dx = p.x - c.x, dy = p.y - c.y, dz = p.z - c.z;
  return [0.5 + (dx * right.x + dy * right.y + dz * right.z) / (2 * R), 0.5 + (dx * up.x + dy * up.y + dz * up.z) / (2 * R)];
}

// Faccia ridotta: ogni lato rientra di `e` nel piano della faccia. Calcola anche il cerchio dove sta il numero.
function insetFace(proto, f, e) {
  const n = f.idx.length, a = new THREE.Vector3(), b = new THREE.Vector3();
  f.inset = f.idx.map((m, k) => {
    const P = proto.V[m];
    a.subVectors(proto.V[f.idx[(k + n - 1) % n]], P).normalize();
    b.subVectors(proto.V[f.idx[(k + 1) % n]], P).normalize();
    const theta = Math.acos(THREE.MathUtils.clamp(a.dot(b), -1, 1));
    return P.clone().add(a.add(b).normalize().multiplyScalar(e / Math.sin(theta / 2)));
  });
  f.insetUv = f.inset.map((p) => uvOf(f, p));
  f.inc = incircle(f.insetUv);
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

// Posizione nell'atlante di un punto (u, w) in coordinate della cella.
function atlasUV(proto, fi, u, w) {
  const { cols, rows } = proto.atlas, cell = cellOf(proto, fi), cx = cell % cols, cy = Math.floor(cell / cols);
  return [(cx + 0.5 + (u - 0.5) * PAD) / cols, 1 - (cy + 1 - (0.5 + (w - 0.5) * PAD)) / rows];
}

/**
 * Mesh disegnata con gli spigoli smussati (non indicizzata: position, normal, uv).
 * Facce ridotte nello stesso piano + una striscia per ogni spigolo + un tappo per ogni vertice:
 * la forma resta dentro il poliedro esatto, che continua a essere il corpo fisico.
 */
export function buildBeveledGeometry(proto, e) {
  const pos = [], nor = [], uv = [], g = new THREE.BufferGeometry();
  const F = proto.faces;
  F.forEach((f) => insetFace(proto, f, e));

  const ab = new THREE.Vector3(), ac = new THREE.Vector3();
  // Un triangolo con la normale geometrica verso l'esterno; v = [{p, n, uv}, ...]
  const tri = (v) => {
    ab.subVectors(v[1].p, v[0].p); ac.subVectors(v[2].p, v[0].p);
    const sum = v[0].n.clone().add(v[1].n).add(v[2].n);
    if (ab.cross(ac).dot(sum) < 0) v = [v[0], v[2], v[1]];
    for (const q of v) { pos.push(q.p.x, q.p.y, q.p.z); nor.push(q.n.x, q.n.y, q.n.z); uv.push(q.uv[0], q.uv[1]); }
  };

  F.forEach((f, fi) => {
    const pts = f.inset.map((p, k) => ({ p, n: f.n, uv: atlasUV(proto, fi, ...f.insetUv[k]) }));
    for (let k = 1; k < pts.length - 1; k++) tri([pts[0], pts[k], pts[k + 1]]);
  });

  // Strisce sugli spigoli: ogni spigolo una volta sola (dal lato della faccia con indice minore).
  const flat = (fi) => atlasUV(proto, fi, ...FLAT_UV);
  F.forEach((A, ai) => A.idx.forEach((v, k) => {
    const w = A.idx[(k + 1) % A.idx.length];
    const bi = F.findIndex((B) => B !== A && B.idx.some((x, j) => x === w && B.idx[(j + 1) % B.idx.length] === v));
    if (bi < ai) return;
    const B = F[bi], j = B.idx.indexOf(w), kw = (k + 1) % A.idx.length, jv = (j + 1) % B.idx.length;
    const q = [
      { p: A.inset[k], n: A.n, uv: flat(ai) }, { p: A.inset[kw], n: A.n, uv: flat(ai) },
      { p: B.inset[j], n: B.n, uv: flat(ai) }, { p: B.inset[jv], n: B.n, uv: flat(ai) },
    ];
    tri([q[0], q[1], q[2]]); tri([q[0], q[2], q[3]]);
  }));

  // Tappi sui vertici: i punti ridotti delle facce che condividono il vertice, a ventaglio dal baricentro.
  proto.V.forEach((V, m) => {
    const axis = V.clone().normalize();
    const e1 = new THREE.Vector3().crossVectors(axis, Math.abs(axis.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0)).normalize();
    const e2 = new THREE.Vector3().crossVectors(axis, e1);
    const ring = [];
    F.forEach((f, fi) => { const k = f.idx.indexOf(m); if (k >= 0) ring.push({ p: f.inset[k], n: f.n, uv: flat(fi) }); });
    const ang = (q) => Math.atan2(q.p.dot(e2), q.p.dot(e1));
    ring.sort((x, y) => ang(x) - ang(y));
    const mid = { p: new THREE.Vector3(), n: axis, uv: ring[0].uv };
    ring.forEach((q) => mid.p.add(q.p));
    mid.p.divideScalar(ring.length);
    ring.forEach((q, i) => tri([mid, q, ring[(i + 1) % ring.length]]));
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
  proto.geometry = buildBeveledGeometry(proto, BEVEL[type]);
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
