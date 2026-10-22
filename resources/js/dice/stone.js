// Cornice di pietra della vaschetta: blocchi irregolari posati a secco intorno all'esagono.
// Solo resa grafica (la fisica ha le sue sei pareti piane): il lato interno di ogni blocco sta però
// esattamente sul piano della parete fisica, così i dadi la toccano dove si vede. Niente DOM: gira in Node.
import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { TRAY, mulberry32 } from './physics.js';

const TAN30 = Math.tan(Math.PI / 6);
const JOINT = 0.05; // fuga tra un blocco e l'altro

// Rumore di valore 3D con seed fisso (0..1) e somma di ottave: la pietra è la stessa per tutti.
function makeNoise(seed) {
  const rnd = mulberry32(seed), perm = new Uint8Array(512), val = new Float32Array(256);
  for (let i = 0; i < 256; i++) { perm[i] = i; val[i] = rnd(); }
  for (let i = 255; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; }
  for (let i = 0; i < 256; i++) perm[i + 256] = perm[i];
  const h = (x, y, z) => val[perm[perm[perm[x & 255] + (y & 255)] + (z & 255)]];
  const s = (t) => t * t * (3 - 2 * t), L = (a, b, t) => a + (b - a) * t;
  const noise = (x, y, z) => {
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), u = s(x - xi), v = s(y - yi), w = s(z - zi);
    return L(L(L(h(xi, yi, zi), h(xi + 1, yi, zi), u), L(h(xi, yi + 1, zi), h(xi + 1, yi + 1, zi), u), v),
      L(L(h(xi, yi, zi + 1), h(xi + 1, yi, zi + 1), u), L(h(xi, yi + 1, zi + 1), h(xi + 1, yi + 1, zi + 1), u), v), w);
  };
  return (x, y, z, oct = 4) => {
    let a = 0.5, f = 1, sum = 0, norm = 0;
    for (let o = 0; o < oct; o++) { sum += a * noise(x * f, y * f, z * f); norm += a; a *= 0.5; f *= 2.03; }
    return sum / norm;
  };
}

// Schegge: piani di taglio vicino a spigoli e angoli del blocco (coordinate locali a, c, b).
// Ogni taglio toglie materiale fino a d sotto il punto dello spigolo, sfumando entro `span` da lì:
// le facce piatte e gli spigoli vivi delle schegge sono ciò che distingue la pietra spaccata da un grumo.
function makeCuts(L, H, T, p, rnd) {
  const cuts = [], v = (x, y, z) => new THREE.Vector3(x, y, z);
  const add = (e, n0, d, span) => {
    const n = n0.normalize().add(v(rnd() - 0.5, (rnd() - 0.5) * 0.6, rnd() - 0.5).multiplyScalar(0.55)).normalize();
    cuts.push({ e, n, d, span });
  };
  const top = (a) => H * (p.h0 + (p.h1 - p.h0) * (a / L));
  const nOuter = 3 + Math.floor(rnd() * 4), nInner = 1 + Math.floor(rnd() * 3);
  for (let i = 0; i < nOuter; i++) { const a = rnd() * L; add(v(a, top(a), T), v(0, 1, 1.1), 0.07 + rnd() * 0.22, 0.35 + rnd() * 0.7); }
  for (let i = 0; i < nInner; i++) { const a = 0.2 + rnd() * (L - 0.4); add(v(a, top(a), 0), v(0, 1, -0.8), 0.03 + rnd() * 0.07, 0.25 + rnd() * 0.45); }
  for (const a of [0, L]) {
    const sx = a === 0 ? -1 : 1;
    add(v(a, top(a), T), v(sx, 1, 1), 0.1 + rnd() * 0.18, 0.5 + rnd() * 0.4);          // angolo in alto
    if (rnd() < 0.7) add(v(a, H * 0.4 * rnd(), T), v(sx, 0.1, 1), 0.06 + rnd() * 0.15, 0.4 + rnd() * 0.5); // spigolo verticale
  }
  return cuts;
}

const smooth = (e0, e1, x) => { const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };

/**
 * Un blocco sul lato k, tra le frazioni s0 e s1 del lato. Si costruisce in coordinate locali
 * (a lungo il lato, b verso l'esterno, c in alto) come scatola a spigoli arrotondati, poi:
 * altezza e spessore variano lungo il blocco, la superficie si deforma con il rumore (mai sul lato interno),
 * e le estremità sugli angoli dell'esagono si tagliano a 30° per combaciare con il blocco del lato vicino.
 */
function buildStone(k, s0, s1, p, noise) {
  const { R } = TRAY, S = R; // il lato dell'esagono regolare è lungo quanto R
  const L = (s1 - s0) * S, { T, H, r } = p;
  const cuts = makeCuts(L, H, T, p, mulberry32(p.seed));
  const sa = Math.max(10, Math.ceil(L * 10)), sb = 8, sc = 9;
  let g = new THREE.BoxGeometry(1, 1, 1, sa, sc, sb);
  g.deleteAttribute('normal'); g.deleteAttribute('uv');
  g = mergeVertices(g);

  const V = (i) => new THREE.Vector3(R * Math.cos(i * Math.PI / 3), 0, R * Math.sin(i * Math.PI / 3));
  const v0 = V(k), t = V(k + 1).sub(v0).normalize();
  const am = (k + 0.5) * Math.PI / 3, out = new THREE.Vector3(Math.cos(am), 0, Math.sin(am));
  const toWorld = (a, b, c) => {
    // estremità sugli angoli: taglio a 30° (b·tan30) per combaciare con il lato accanto; altrove giunto dritto
    const e0 = s0 * S + JOINT / 2 - (s0 === 0 ? b * TAN30 : 0), e1 = s1 * S - JOINT / 2 + (s1 === 1 ? b * TAN30 : 0);
    const along = e0 + (e1 - e0) * (a / L);
    return new THREE.Vector3().copy(v0).addScaledVector(t, along).addScaledVector(out, b).setY(c);
  };

  const pos = g.attributes.position, n = pos.count, col = new Float32Array(n * 3);
  const P = new THREE.Vector3(), Q = new THREE.Vector3(), D = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    // scatola: a ∈ [0, L], c ∈ [-r, H] (sotto il piano, così la base resta piatta), b ∈ [0, T]
    P.set((pos.getX(i) + 0.5) * L, -r + (pos.getY(i) + 0.5) * (H + r), (pos.getZ(i) + 0.5) * T);
    Q.set(Math.min(L - r, Math.max(r, P.x)), Math.min(H - r, P.y), Math.min(T - r, Math.max(r, P.z)));
    D.subVectors(P, Q);
    const len = D.length();
    const nrm = len > 1e-6 ? D.divideScalar(len).clone() : new THREE.Vector3(0, -1, 0);
    if (len > 1e-6) P.copy(Q).addScaledVector(nrm, r);

    // forma: sommità ondulata e inclinata, faccia esterna che si gonfia e rientra
    const u = P.x / L;
    const w0 = toWorld(P.x, P.z, P.y);
    if (P.y > 0) P.y *= (p.h0 + (p.h1 - p.h0) * u) * (0.92 + 0.16 * noise(w0.x * 0.45, 3.1, w0.z * 0.45, 3));
    P.z *= 0.86 + 0.28 * noise(w0.x * 0.5, w0.y * 0.8 + 11, w0.z * 0.5, 3);

    // schegge (tolgono solo materiale; sotto il piano del tavolo niente)
    if (P.y > 0) {
      for (const k of cuts) {
        const dist = P.distanceTo(k.e), wgt = 1 - smooth(k.span * 0.55, k.span, dist);
        if (wgt <= 0) continue;
        const sd = (P.x - k.e.x) * k.n.x + (P.y - k.e.y) * k.n.y + (P.z - k.e.z) * k.n.z + k.d;
        if (sd > 0) P.addScaledVector(k.n, -sd * wgt);
      }
    }

    // superficie scabra: protuberanze e scheggiature lungo la normale, nulle sul lato interno (b = 0)
    const mask = Math.pow(Math.min(1, Math.max(0, 1 + nrm.z)), 1.5) * (P.y > 0 ? 1 : 0);
    const w1 = toWorld(P.x, P.z, P.y);
    let disp = (noise(w1.x * 1.2, w1.y * 1.2, w1.z * 1.2) - 0.5) * 0.16 + (noise(w1.x * 6, w1.y * 6, w1.z * 6, 3) - 0.5) * 0.06;
    // spigoli consumati: dove la normale non è allineata a un asse la pietra si è scheggiata
    const corner = 1 - Math.max(Math.abs(nrm.x), Math.abs(nrm.y), Math.abs(nrm.z));
    disp -= corner * 0.12 * noise(w1.x * 3, w1.y * 3 + 5, w1.z * 3);
    if (Math.abs(nrm.x) > 0.6) disp = Math.min(disp, 0); // verso le fughe solo rientranze: niente compenetrazioni
    disp *= mask;
    P.addScaledVector(nrm, disp);
    if (P.z < 0) P.z = 0; // il lato interno non entra mai nella vaschetta

    const w = toWorld(P.x, P.z, P.y);
    pos.setXYZ(i, w.x, w.y, w.z);

    // occlusione ambientale finta: base scura, cavità più scure, fughe un poco in ombra
    const ao = (0.68 + 0.32 * smooth(-0.05, 0.5, w.y))
      * (1 + Math.max(-0.12, Math.min(0, disp)) * 2.2)
      * (0.8 + 0.2 * smooth(0, 0.25, Math.min(P.x, L - P.x)));
    col[i * 3] = p.tint[0] * ao; col[i * 3 + 1] = p.tint[1] * ao; col[i * 3 + 2] = p.tint[2] * ao;
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  // (lungo, su, fuori) è una terna sinistrorsa rispetto agli assi della scatola: si invertono i triangoli
  // perché restino orientati verso l'esterno.
  const idx = g.index.array;
  for (let i = 0; i < idx.length; i += 3) { const tmp = idx[i + 1]; idx[i + 1] = idx[i + 2]; idx[i + 2] = tmp; }
  return g;
}

/**
 * Geometria della cornice di pietra (un'unica mesh, normali morbide, colori per vertice = tinta del blocco
 * × occlusione). Disposizione dei blocchi e forme dipendono solo dal seed: uguali per tutti i client.
 */
export function buildStoneRim(seed = 20261022) {
  const rnd = mulberry32(seed), noise = makeNoise(seed + 1), parts = [];
  for (let k = 0; k < 6; k++) {
    // ogni lato: un blocco unico o due di lunghezza diversa
    const cuts = rnd() < 0.35 ? [0, 1] : (() => { const c = 0.32 + rnd() * 0.36; return [0, c, 1]; })();
    for (let j = 0; j < cuts.length - 1; j++) {
      const shade = 0.82 + rnd() * 0.3, warm = (rnd() - 0.5) * 0.08;
      parts.push(buildStone(k, cuts[j], cuts[j + 1], {
        T: 1.0 + rnd() * 0.45, H: 0.95 + rnd() * 0.35, r: 0.14 + rnd() * 0.08,
        h0: 0.88 + rnd() * 0.24, h1: 0.88 + rnd() * 0.24, seed: Math.floor(rnd() * 1e9),
        tint: [shade * (1 + warm), shade, shade * (1 - warm)],
      }, noise));
    }
  }
  const g = mergeGeometries(parts);
  g.computeVertexNormals();
  g.computeBoundingBox();
  g.computeBoundingSphere();
  return g;
}
