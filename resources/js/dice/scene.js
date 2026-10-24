// Scena Three.js: renderer, vaschetta, luci, materiali dei dadi e playback.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { PAD, PROTOS, cellOf, resultFace } from './geometry.js';
import { DT, TRAY, plan, simulate } from './physics.js';
import { playHit } from './audio.js';
import { buildStoneRim } from './stone.js';
import { TEXTURE_URL, finishOf } from '../presets.js';

// Lato in px di una cella dell'atlante delle facce.
const CELL = 256;
// Profondità apparente dell'incisione dei numeri (bumpScale di Three r169).
const BUMP_SCALE = 1.5;
const LABEL_FONT = '"Alegreya Sans", "Segoe UI", system-ui, sans-serif';
// Quanto del cerchio inscritto nella faccia occupa il riquadro del numero più largo del dado.
const LABEL_FILL = { d6: 0.7, d8: 0.88, d10: 0.86, d12: 0.72, d20: 0.86 };

/* ---------------- Texture dei dadi (un atlante per tipo e colore) ---------------- */
function palette(hex) {
  const c = new THREE.Color(hex);
  const lum = 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
  const light = lum > 0.28;
  const white = new THREE.Color(1, 1, 1), black = new THREE.Color(0, 0, 0);
  return {
    base: c.getStyle(),
    hi: c.clone().lerp(white, 0.08).getStyle(),
    lo: c.clone().lerp(black, 0.2).getStyle(),
    ink: light ? '#1e1a14' : '#f7f1e3',
    inkShadow: light ? 'rgba(255,255,255,.4)' : 'rgba(0,0,0,.55)',
  };
}

// Il 6 e il 9 si distinguono con una lineetta sotto (sul d6 c'è solo il 6, ma resta l'abitudine).
const underlined = (str) => str === '6' || str === '9';

// Riquadro reale delle cifre (non quello del font, che lascia spazio sopra e sotto),
// lineetta compresa: serve sia per centrare il numero sia per dimensionarlo.
function labelBox(ctx, str, size) {
  ctx.font = `800 ${size}px ${LABEL_FONT}`;
  const m = ctx.measureText(str);
  const ul = underlined(str) ? size * 0.14 : 0;
  return {
    left: m.actualBoundingBoxLeft, asc: m.actualBoundingBoxAscent, desc: m.actualBoundingBoxDescent, ul,
    w: m.actualBoundingBoxLeft + m.actualBoundingBoxRight,
    h: m.actualBoundingBoxAscent + m.actualBoundingBoxDescent + ul,
  };
}

// Disegna il numero con il centro del suo riquadro in (x, y).
// In modalità 'bump' il numero è nero pieno (incisione), senza ombra.
function drawLabel(ctx, str, x, y, size, rot, pal, bump) {
  const b = labelBox(ctx, str, size);
  ctx.save();
  ctx.translate(x, y); ctx.rotate(rot);
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  const ox = -b.w / 2 + b.left, oy = -b.h / 2 + b.asc;
  if (!bump) { ctx.fillStyle = pal.inkShadow; ctx.fillText(str, ox, oy + Math.max(1, size * 0.035)); }
  ctx.fillStyle = bump ? '#000' : pal.ink; ctx.fillText(str, ox, oy);
  if (b.ul) ctx.fillRect(-size * 0.2, oy + b.desc + size * 0.06, size * 0.4, size * 0.075);
  ctx.restore();
}

// Corpo del font per un tipo di dado: il numero più ingombrante deve stare nel cerchio inscritto
// della faccia (con margine), così tutti i numeri del dado hanno la stessa altezza e nessuno tocca i bordi.
function labelSize(ctx, proto, S) {
  const r = Math.min(...proto.faces.map((f) => f.inc.r)) * S;
  const diag = Math.max(...proto.faces.map((f) => { const b = labelBox(ctx, String(f.value), 100); return Math.hypot(b.w, b.h) / 100; }));
  return (2 * r * LABEL_FILL[proto.type]) / diag;
}

function drawCell(ctx, proto, f, cell, C, pal, size, bump, img) {
  const { cols } = proto.atlas, x0 = (cell % cols) * C, y0 = Math.floor(cell / cols) * C;
  const P = (u, v) => [x0 + (0.5 + (u - 0.5) * PAD) * C, y0 + (1 - (0.5 + (v - 0.5) * PAD)) * C];
  const [mx, my] = P(f.inc.u, f.inc.v);
  if (bump) {
    ctx.fillStyle = '#fff'; ctx.fillRect(x0, y0, C, C); // superficie: alta
  } else if (img) {
    // Ritaglio quadrato diverso per ogni faccia (deciso dall'indice della cella, uguale per tutti).
    const side = Math.min(img.naturalWidth, img.naturalHeight) * 0.55;
    const h = Math.imul(cell + 1, 2654435761) >>> 0, h2 = Math.imul(cell + 7, 40503) >>> 0;
    const sx = (h % 1000) / 1000 * (img.naturalWidth - side), sy = (h2 % 1000) / 1000 * (img.naturalHeight - side);
    ctx.drawImage(img, sx, sy, side, side, x0, y0, C, C);
    // Volume: penombra ai bordi della faccia e una chiazza uniforme dietro al numero, per leggerlo.
    const g = ctx.createRadialGradient(mx, my - C * 0.1, C * 0.03, mx, my, C * 0.55);
    g.addColorStop(0, 'rgba(255,255,255,.08)'); g.addColorStop(1, 'rgba(0,0,0,.4)');
    ctx.fillStyle = g; ctx.fillRect(x0, y0, C, C);
    if (proto.type !== 'd4') {
      const plate = ctx.createRadialGradient(mx, my, 0, mx, my, size * 0.62);
      plate.addColorStop(0, pal.base); plate.addColorStop(0.75, pal.base); plate.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.save(); ctx.globalAlpha = 0.62; ctx.fillStyle = plate; ctx.fillRect(x0, y0, C, C); ctx.restore();
    }
  } else {
    ctx.fillStyle = pal.base; ctx.fillRect(x0, y0, C, C);
    ctx.beginPath();
    f.uv.forEach(([u, v], i) => { const [x, y] = P(u, v); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); });
    ctx.closePath();
    const g = ctx.createRadialGradient(mx, my - C * 0.1, C * 0.03, mx, my, C * 0.55);
    g.addColorStop(0, pal.hi); g.addColorStop(1, pal.lo);
    ctx.fillStyle = g; ctx.fill();
  }

  if (proto.type === 'd4') {
    const S = C * PAD;
    f.idx.forEach((vi, k) => {
      const [u, v] = f.uv[k];
      const [x, y] = P(0.5 + (u - 0.5) * 0.56, 0.5 + (v - 0.5) * 0.56);
      drawLabel(ctx, String(vi + 1), x, y, S * 0.22, Math.atan2(u - 0.5, v - 0.5), pal, bump);
    });
  } else {
    drawLabel(ctx, String(f.value), mx, my, size, 0, pal, bump);
  }
}

/**
 * Disegna l'atlante delle facce di un tipo di dado (celle C×C) nel colore dato.
 * img: immagine della finitura, al posto del colore pieno.
 * mode 'bump': mappa d'altezza in bianco e nero (numeri incavati), senza colore né bordi.
 */
export function drawAtlas(ctx, proto, hex, C, mode = 'color', img = null) {
  const pal = palette(hex);
  const size = proto.type === 'd4' ? 0 : labelSize(ctx, proto, C * PAD);
  proto.faces.forEach((f, fi) => drawCell(ctx, proto, f, cellOf(proto, fi), C, pal, size, mode === 'bump', img));
}

/* ---------------- Cornice di pietra ---------------- */
// Materiale della pietra: colore, ruvidezza e microrilievo calcolati nello shader da un rumore 3D sulla
// posizione nel mondo (niente texture, quindi niente giunture né stiramenti sugli spigoli arrotondati).
// I colori per vertice di buildStoneRim (tinta del blocco × occlusione) moltiplicano il risultato.
// Quanto muschio c'è su pietra e lastricato: 0 = nessuno, 1 = valore base, oltre 1 = più coprente.
const MOSS_AMOUNT = 1.0;

const STONE_GLSL = `
const float MOSS = ${MOSS_AMOUNT.toFixed(3)};
varying vec3 vStoneP;
float sHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float sNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(sHash(i), sHash(i + vec3(1, 0, 0)), f.x), mix(sHash(i + vec3(0, 1, 0)), sHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(sHash(i + vec3(0, 0, 1)), sHash(i + vec3(1, 0, 1)), f.x), mix(sHash(i + vec3(0, 1, 1)), sHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
float sFbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * sNoise(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= 0.5; } return s / 0.97; }
// Microrilievo come una bump map, ma con l'altezza calcolata qui (stessa formula di perturbNormalArb di three).
vec3 stoneBump(vec3 surfPos, vec3 surfNorm, vec2 dHdxy, float faceDir) {
  vec3 sx = normalize(dFdx(surfPos)), sy = normalize(dFdy(surfPos));
  vec3 r1 = cross(sy, surfNorm), r2 = cross(surfNorm, sx);
  float det = dot(sx, r1) * faceDir;
  return normalize(abs(det) * surfNorm - sign(det) * (dHdxy.x * r1 + dHdxy.y * r2));
}
`;

// Porta la posizione nel mondo al fragment shader (vStoneP) e aggiunge le funzioni di rumore.
function withStoneShader(shader, extraGlsl = '') {
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\nvarying vec3 vStoneP;')
    .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvStoneP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
  shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\n' + STONE_GLSL + extraGlsl);
}

function stoneMaterial() {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0 });
  mat.onBeforeCompile = (shader) => {
    withStoneShader(shader);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <color_fragment>', `#include <color_fragment>
        // pietra grigio-bruna: macchie larghe, venature sottili, grana minuta, qualche chiazza di lichene;
        // in alto più chiara (polvere, sole), in basso più scura (umidità)
        float sN1 = sFbm(vStoneP * 0.7);
        float sN2 = sFbm(vStoneP * 3.2 + 2.0);
        vec3 sCol = mix(vec3(0.085, 0.08, 0.072), vec3(0.24, 0.225, 0.2), smoothstep(0.25, 0.75, sN1));
        sCol *= 0.82 + 0.36 * sN2;
        // crepe sottili e scure, solo in alcune zone
        float sVein = (1.0 - smoothstep(0.0, 0.012, abs(sFbm(vStoneP * 1.3 + 5.0) - 0.5)))
          * smoothstep(0.55, 0.7, sNoise(vStoneP * 0.5 + 2.0));
        sCol = mix(sCol, sCol * 0.5, sVein * 0.55);
        float sGrain = sNoise(vStoneP * 90.0);
        sCol *= 0.9 + 0.2 * sGrain;
        sCol = mix(sCol, vec3(0.04), smoothstep(0.86, 0.95, sNoise(vStoneP * 60.0)) * 0.35);
        sCol *= mix(0.75, 1.0, smoothstep(0.0, 1.2, vStoneP.y));
        float sLichen = smoothstep(0.66, 0.76, sFbm(vStoneP * 0.8 + vec3(4.0, 1.0, 9.0))) * smoothstep(0.4, 1.0, vStoneP.y);
        sCol = mix(sCol, vec3(0.32, 0.31, 0.2), sLichen * 0.35);
        // muschio: a chiazze, più fitto in basso (umidità) e con il bordo sfrangiato; due verdi per dare profondità
        float sMoss = clamp(smoothstep(0.52, 0.66, sFbm(vStoneP * 1.1 + vec3(7.0, 3.0, 1.0)))
          * (1.0 - 0.5 * smoothstep(0.1, 1.1, vStoneP.y)) * (0.55 + 0.45 * sNoise(vStoneP * 26.0)) * MOSS, 0.0, 1.0);
        sMoss *= smoothstep(0.15, 0.45, sMoss + 0.25 * sNoise(vStoneP * 60.0));
        // verde scuro e un po' oliva, con tinta che cambia piano piano e ciuffi più scuri nel fitto
        vec3 sMossCol = mix(vec3(0.03, 0.06, 0.012), vec3(0.085, 0.13, 0.028), sNoise(vStoneP * 18.0 + 4.0));
        sMossCol *= 0.75 + 0.5 * sFbm(vStoneP * 2.5 + 11.0);
        sMossCol *= 1.0 - 0.35 * smoothstep(0.6, 1.0, sMoss);
        sCol = mix(sCol, sMossCol, sMoss * 0.9);
        diffuseColor.rgb *= sCol;`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = clamp(0.72 + 0.22 * sN2 - 0.1 * sVein + 0.05 * sLichen + 0.2 * sMoss, 0.0, 1.0);`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        // grana fine, solchi e piccoli pori (le cavità scendono, quindi l'altezza cala)
        float sH = sFbm(vStoneP * 2.4) * 0.5 + sFbm(vStoneP * 11.0) * 0.35 + sNoise(vStoneP * 45.0) * 0.12 + sGrain * 0.05 - sVein * 0.08
          - smoothstep(0.8, 0.9, sNoise(vStoneP * 16.0 + 3.0)) * 0.3
          + sMoss * (0.12 + 0.1 * sNoise(vStoneP * 38.0));          // il muschio è un tappeto morbido in rilievo
        normal = stoneBump(-vViewPosition, normal, vec2(dFdx(sH), dFdy(sH)) * 1.5, faceDirection);`);
  };
  return mat;
}

/* ---------------- Lastricato ---------------- */
// Pavimento della vaschetta: lastre di pietra irregolari (celle di Voronoi con i bordi deformati dal rumore),
// fughe scure, spigoli consumati, tono e leggera inclinazione diversi per lastra, più scuro vicino alla cornice.
// Tutto nello shader sul piano esagonale: la superficie resta piatta come il pavimento fisico.
const PAVING_GLSL = `
const float TRAY_A = ${TRAY.A.toFixed(4)};
vec2 pHash2(vec2 p) { p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3))); return fract(sin(p) * 43758.5453); }
// Distanza dal bordo della cella più vicina (metodo a due passate di Inigo Quilez) e id della cella.
vec3 pVoronoi(vec2 x) {
  vec2 n = floor(x), f = fract(x), mg = vec2(0.0), mr = vec2(0.0);
  float md = 8.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec2 g = vec2(float(i), float(j)), r = g + 0.15 + 0.7 * pHash2(n + g) - f;
    float d = dot(r, r);
    if (d < md) { md = d; mr = r; mg = g; }
  }
  md = 8.0;
  for (int j = -2; j <= 2; j++) for (int i = -2; i <= 2; i++) {
    vec2 g = mg + vec2(float(i), float(j)), r = g + 0.15 + 0.7 * pHash2(n + g) - f;
    if (dot(mr - r, mr - r) > 1e-5) md = min(md, dot(0.5 * (mr + r), normalize(r - mr)));
  }
  return vec3(md, n + mg);
}
`;

function pavingMaterial() {
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.8, metalness: 0 });
  mat.onBeforeCompile = (shader) => {
    withStoneShader(shader, PAVING_GLSL);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <color_fragment>', `#include <color_fragment>
        // lastre di circa 1,9 unità; bordi non rettilinei come la pietra spaccata
        vec2 pq = vStoneP.xz / 1.9;
        pq += (vec2(sFbm(vec3(pq * 0.9, 1.3)), sFbm(vec3(pq * 0.9, 7.1))) - 0.5) * 0.38;
        vec3 pv = pVoronoi(pq);
        float pSeed = sHash(vec3(pv.yz, 4.0)), pSeed2 = sHash(vec3(pv.yz, 9.0));
        // fuga di larghezza variabile e spigoli scheggiati in modo irregolare
        float pW = 0.016 + 0.03 * sNoise(vec3(vStoneP.xz * 2.2, 2.0));
        float pChip = 0.06 + 0.12 * sFbm(vec3(vStoneP.xz * 3.5, 6.0));
        float pJoint = 1.0 - smoothstep(pW, pW + 0.018, pv.x);
        float pBevel = smoothstep(pW, pW + pChip, pv.x);
        // tono della lastra: dal grigio medio al grigio-nero; alcune più fredde, come ardesia o basalto
        vec3 pBase = mix(vec3(0.05, 0.05, 0.05), vec3(0.14, 0.138, 0.134), pSeed);
        pBase = mix(pBase, vec3(0.04, 0.045, 0.052), step(0.68, pSeed2) * 0.85);
        // macchie a tre scale, grana fine e granelli chiari
        float pN = sFbm(vec3(vStoneP.xz * 1.3, pSeed * 10.0));
        float pM = sFbm(vec3(vStoneP.xz * 5.5, pSeed2 * 7.0));
        float pG = sNoise(vec3(vStoneP.xz * 80.0, 1.0));
        vec3 pCol = pBase * (0.7 + 0.6 * pN) * (0.8 + 0.4 * pM) * (0.86 + 0.28 * pG);
        pCol = mix(pCol, pCol * 2.1, smoothstep(0.9, 0.97, sNoise(vec3(vStoneP.xz * 52.0, 3.0))) * 0.35);
        // macchie d'acqua e d'usura: alcune zone più scure e più lisce
        float pStain = smoothstep(0.55, 0.75, sFbm(vec3(vStoneP.xz * 0.8, 12.0)));
        pCol *= 1.0 - 0.25 * pStain;
        pCol *= mix(0.7, 1.0, pBevel);                            // sporco negli spigoli scheggiati
        // fuga: sabbia e graniglia grigio-bruna, con qualche sassolino più chiaro
        float pGrit = sNoise(vec3(vStoneP.xz * 60.0, 8.0)) * 0.6 + sNoise(vec3(vStoneP.xz * 14.0, 4.0)) * 0.4;
        vec3 pMortar = mix(vec3(0.026, 0.025, 0.023), vec3(0.052, 0.049, 0.044), smoothstep(0.35, 0.85, pGrit));
        pCol = mix(pCol, pMortar, pJoint);
        // muschio: cresce dalle fughe e lungo la cornice, a chiazze, con il bordo sfrangiato
        float pMossArea = smoothstep(0.5, 0.64, sFbm(vec3(vStoneP.xz * 0.9, 21.0)));
        float pMossNear = max(1.0 - smoothstep(pW, pW + 0.16, pv.x), 0.7 * (1.0 - smoothstep(0.0, 1.1, TRAY_A - max(abs(vStoneP.z), 0.8660254 * abs(vStoneP.x) + 0.5 * abs(vStoneP.z)))));
        float pMoss = clamp(pMossArea * pMossNear * (0.6 + 0.4 * sNoise(vec3(vStoneP.xz * 30.0, 2.0))) * MOSS * 1.4, 0.0, 1.0);
        pMoss *= smoothstep(0.2, 0.5, pMoss + 0.25 * sNoise(vec3(vStoneP.xz * 70.0, 6.0)));
        // verde scuro e un po' oliva, con tinta che cambia piano piano; il fitto è più scuro, il bordo più chiaro
        vec3 pMossCol = mix(vec3(0.026, 0.052, 0.011), vec3(0.075, 0.115, 0.025), sNoise(vec3(vStoneP.xz * 16.0, 9.0)));
        pMossCol *= 0.75 + 0.5 * sFbm(vec3(vStoneP.xz * 2.2, 14.0));
        pMossCol *= 1.0 - 0.3 * smoothstep(0.6, 1.0, pMoss);
        pCol = mix(pCol, pMossCol, pMoss * 0.92);
        // occlusione vicino alla cornice (distanza dalla parete esagonale più vicina)
        vec2 pa = abs(vStoneP.xz);
        float pWall = TRAY_A - max(pa.y, 0.8660254 * pa.x + 0.5 * pa.y);
        pCol *= mix(0.4, 1.0, smoothstep(0.0, 1.5, pWall));
        diffuseColor.rgb = pCol;`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        // lastre un poco lucidate dall'uso, fughe opache
        roughnessFactor = mix(mix(0.62 + 0.28 * pM - 0.12 * pStain, 0.98, pJoint), 0.96, pMoss);`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        float pTilt = dot(pq - pv.yz - 0.5, vec2(pSeed - 0.5, pSeed2 - 0.5)) * 0.08;
        float pH = pBevel * 0.45 + pTilt + sFbm(vec3(vStoneP.xz * 4.0, pSeed * 5.0)) * 0.09
          + sFbm(vec3(vStoneP.xz * 14.0, 2.0)) * 0.06 + pG * 0.02
          - smoothstep(0.85, 0.93, sNoise(vec3(vStoneP.xz * 20.0, 5.0))) * 0.04
          + pJoint * pGrit * 0.04                                 // graniglia in rilievo nella fuga
          + pMoss * (0.08 + 0.07 * sNoise(vec3(vStoneP.xz * 40.0, 3.0)));  // muschio in rilievo
        normal = stoneBump(-vViewPosition, normal, vec2(dFdx(pH), dFdy(pH)), faceDirection);`);
  };
  return mat;
}

/**
 * Crea la scena nel canvas dato.
 * @param {HTMLCanvasElement} canvas
 * @param {HTMLElement} stage elemento che ne determina la dimensione
 * @param {{onStats?: Function}} opts onStats(fps, msPerFrame, dice, simMs, drawCalls) ogni 500 ms
 */
export function createScene(canvas, stage, opts = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  const ANISO = Math.min(8, renderer.capabilities.getMaxAnisotropy());

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#0c0f11');
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.4;

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 300);
  scene.add(new THREE.HemisphereLight(0xcfdcff, 0x1a120c, 0.5));
  const sun = new THREE.DirectionalLight(0xfff0d8, 2.6);
  sun.position.set(-8, 22, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.03;
  scene.add(sun, sun.target);

  function canvasTexture(w, h, paint, repeat) {
    const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
    paint(cv.getContext('2d'), w, h);
    const t = new THREE.CanvasTexture(cv);
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = ANISO;
    if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
    return t;
  }
  const tableMat = new THREE.MeshStandardMaterial({ color: 0x17120e, roughness: 0.85 });

  // Vaschetta esagonale di dimensioni fisse (TRAY): si adatta solo la camera.
  // Il lastricato è un esagono piatto con i vertici sull'asse x, come le pareti fisiche; intorno, blocchi di
  // pietra irregolari (stone.js) con il lato interno sul piano delle pareti fisiche.
  const rimGeo = buildStoneRim(), rimBox = rimGeo.boundingBox;
  (function buildTray() {
    const g = new THREE.Group(), { R } = TRAY;
    const floor = new THREE.Mesh(new THREE.CircleGeometry(R, 6), pavingMaterial());
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; g.add(floor);

    const rim = new THREE.Mesh(rimGeo, stoneMaterial());
    rim.castShadow = true; rim.receiveShadow = true; g.add(rim);

    const table = new THREE.Mesh(new THREE.PlaneGeometry(240, 240), tableMat);
    table.rotation.x = -Math.PI / 2; table.position.y = -0.02; table.receiveShadow = true; g.add(table);
    scene.add(g);
    const s = Math.max(rimBox.max.x, -rimBox.min.x, rimBox.max.z, -rimBox.min.z) + 2, cam = sun.shadow.camera;
    cam.left = -s; cam.right = s; cam.top = s; cam.bottom = -s; cam.near = 1; cam.far = 70; cam.updateProjectionMatrix();
  })();

  // Fascia libera in cima o in fondo al canvas (per l'immagine del proprietario): la vaschetta si adatta all'altezza
  // rimanente e si sposta dal lato opposto, senza cambiare dimensioni relative né fisica.
  // opts.logoInset() restituisce { px, side: 'top' | 'bottom' }.
  function fitCamera(w, h) {
    const want = opts.logoInset ? opts.logoInset() : { px: 0, side: 'top' };
    const inset = Math.max(0, Math.min(want.px, h * 0.3));
    camera.aspect = w / (h - inset);
    const tilt = 0.42; // inclinazione dalla verticale, in radianti
    const fv = THREE.MathUtils.degToRad(camera.fov / 2), fh = Math.atan(Math.tan(fv) * camera.aspect);
    const hw = Math.max(rimBox.max.x, -rimBox.min.x) + 0.3, hd = Math.max(rimBox.max.z, -rimBox.min.z) + 0.3;
    const dist = Math.max(hd / Math.tan(fv), hw / Math.tan(fh)) * 1.05 + 1.5;
    camera.position.set(0, Math.cos(tilt) * dist, Math.sin(tilt) * dist);
    camera.lookAt(0, 0, 0.35);
    if (inset) camera.setViewOffset(w, h - inset, 0, want.side === 'bottom' ? 0 : -inset, w, h); else camera.clearViewOffset();
    camera.updateProjectionMatrix();
  }

  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    fitCamera(w, h);
  }
  new ResizeObserver(resize).observe(stage);

  /* ---------------- Dadi e playback ---------------- */
  const matCache = new Map(), bumpCache = new Map();
  // Bump map per tipo (indipendente dal colore). Disegnata a metà risoluzione e ridisegnata a piena:
  // la sfocatura di 1-2 px ammorbidisce i bordi senza ctx.filter (Safari < 18).
  function bumpTexture(proto) {
    if (bumpCache.has(proto.type)) return bumpCache.get(proto.type);
    const C = CELL, { cols, rows } = proto.atlas, W = cols * C, H = rows * C;
    const half = document.createElement('canvas'); half.width = W / 2; half.height = H / 2;
    drawAtlas(half.getContext('2d'), proto, '#fff', C / 2, 'bump');
    const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    const ctx = cv.getContext('2d');
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(half, 0, 0, W, H);
    const t = new THREE.CanvasTexture(cv); // dato, non colore: niente sRGB
    t.colorSpace = THREE.NoColorSpace; t.anisotropy = ANISO;
    bumpCache.set(proto.type, t);
    return t;
  }
  // Immagini delle finiture: caricate al primo uso; a caricamento finito le texture già create si ridisegnano.
  const finishImgs = new Map(), repaints = new Map(); // nome → img | callback da rieseguire
  function finishImage(name) {
    if (!finishImgs.has(name)) {
      const img = new Image();
      img.onload = () => { (repaints.get(name) || []).forEach((fn) => fn()); repaints.delete(name); };
      img.src = TEXTURE_URL(name);
      finishImgs.set(name, img);
    }
    const img = finishImgs.get(name);
    return img.complete && img.naturalWidth ? img : null;
  }
  // Parametri del materiale per finitura: il glitter riflette l'ambiente e le scaglie chiare brillano appena.
  const FINISH_MAT = {
    gold: { metalness: 0.75, roughness: 0.3, emissive: 0.22 },
    red: { metalness: 0.2, roughness: 0.32, emissive: 0.18 },
    blue: { metalness: 0.2, roughness: 0.32, emissive: 0.18 },
    pink: { metalness: 0.2, roughness: 0.32, emissive: 0.18 },
    lime: { metalness: 0.2, roughness: 0.32, emissive: 0.18 },
    black: { metalness: 0.3, roughness: 0.28, emissive: 0.3 },
  };
  function diceMaterial(proto, hex) {
    const key = proto.type + '|' + hex;
    if (matCache.has(key)) return matCache.get(key);
    const C = CELL, { cols, rows } = proto.atlas;
    const finish = finishOf(hex);
    const paint = (ctx) => drawAtlas(ctx, proto, hex, C, 'color', finish && finishImage(finish.texture));
    const map = canvasTexture(cols * C, rows * C, paint);
    const mat = new THREE.MeshPhysicalMaterial({ map, roughness: 0.32, metalness: 0, clearcoat: 0.85, clearcoatRoughness: 0.16,
      bumpMap: bumpTexture(proto), bumpScale: BUMP_SCALE });
    if (finish) {
      const f = FINISH_MAT[finish.texture];
      Object.assign(mat, { metalness: f.metalness, roughness: f.roughness, emissiveMap: map, emissive: new THREE.Color(1, 1, 1), emissiveIntensity: f.emissive, envMapIntensity: 1.4 });
      if (!finishImage(finish.texture)) {
        const list = repaints.get(finish.texture) || [];
        list.push(() => { const ctx = map.image.getContext('2d'); paint(ctx); map.needsUpdate = true; });
        repaints.set(finish.texture, list);
      }
    }
    matCache.set(key, mat);
    return mat;
  }

  let anims = [], meshes = [], lastSimMs = 0;
  const byKey = new Map(); // "rollId:index" → mesh, per trovare un dado sul tavolo
  const raycaster = new THREE.Raycaster(), ndc = new THREE.Vector2();
  let hovered = null; // mesh evidenziata
  const q0 = new THREE.Quaternion(), q1 = new THREE.Quaternion();

  const keyOf = (m) => m.userData.rollId + ':' + m.userData.index;
  function removeMesh(m) {
    scene.remove(m);
    meshes = meshes.filter((x) => x !== m);
    if (byKey.get(keyOf(m)) === m) byKey.delete(keyOf(m));
    if (hovered === m) hovered = null;
  }
  function clearDice() { meshes.forEach((m) => scene.remove(m)); meshes = []; byKey.clear(); hovered = null; }

  function poseDice(a, s) {
    const last = a.steps - 1;
    const i0 = Math.min(Math.floor(s), last), i1 = Math.min(i0 + 1, last), f = Math.min(1, s - i0);
    for (const d of a.dice) {
      const F = d.frames, o0 = i0 * 7, o1 = i1 * 7;
      d.mesh.position.set(F[o0] + (F[o1] - F[o0]) * f, F[o0 + 1] + (F[o1 + 1] - F[o0 + 1]) * f, F[o0 + 2] + (F[o1 + 2] - F[o0 + 2]) * f);
      q0.set(F[o0 + 3], F[o0 + 4], F[o0 + 5], F[o0 + 6]);
      q1.set(F[o1 + 3], F[o1 + 4], F[o1 + 5], F[o1 + 6]);
      d.mesh.quaternion.slerpQuaternions(q0, q1, f).multiply(d.qR);
    }
  }

  /**
   * Precalcola la fisica e avvia l'animazione di un lancio.
   * I valori arrivano dal server; qui si legge solo la faccia che il dado disegnato mostra.
   * Lanci contemporanei convivono sul tavolo (ognuno ha la sua fisica, quindi i dadi di lanci diversi
   * non si urtano); il tavolo si sgombra solo quando parte un lancio e nessun altro è in corso.
   * Un rilancio (`rerollOf`) non sgombra il tavolo: toglie solo il dado sostituito e riparte da `origin`.
   * @param {{color: string, list: string[], values: number[], seed: number, id?: number, playerId?: number,
   *   rerollOf?: {id: number, index: number}|null, origin?: {x: number, z: number}|null,
   *   onDone?: (seen: number[]) => void}} roll
   */
  function play({ color, list, values, seed, id = 0, playerId = 0, rerollOf = null, origin = null, onDone }) {
    const t0 = performance.now();
    const sim = simulate(list, seed, rerollOf && origin ? { origin } : {});
    const qRs = plan(list, values, sim);
    lastSimMs = performance.now() - t0;

    if (rerollOf) {
      const old = byKey.get(rerollOf.id + ':' + rerollOf.index);
      if (old) removeMesh(old);
    } else if (!anims.length) clearDice();
    const dice = list.map((type, i) => {
      const proto = PROTOS[type];
      const mesh = new THREE.Mesh(proto.geometry, diceMaterial(proto, color));
      mesh.castShadow = true; mesh.receiveShadow = true;
      mesh.userData = { rollId: id, index: i, playerId, type, resting: false };
      scene.add(mesh); meshes.push(mesh); byKey.set(keyOf(mesh), mesh);
      return { mesh, proto, frames: sim.frames[i], qR: qRs[i] };
    });
    const a = { dice, steps: sim.steps, sounds: sim.sounds, si: 0, start: performance.now(), onDone };
    anims.push(a);
    poseDice(a, 0);
  }

  function updateAnims(now) {
    const finished = [];
    for (const a of anims) {
      let s = ((now - a.start) / 1000) / DT;
      const done = s >= a.steps - 1;
      if (done) s = a.steps - 1;
      poseDice(a, s);
      let played = 0;
      while (a.si < a.sounds.length && a.sounds[a.si].step <= s) {
        const h = a.sounds[a.si++];
        if (played++ < 5) playHit(h.v, h.kind);
      }
      if (done) finished.push(a);
    }
    if (!finished.length) return;
    anims = anims.filter((a) => !finished.includes(a));
    for (const a of finished) {
      a.dice.forEach((d) => { d.mesh.userData.resting = true; });
      if (a.onDone) a.onDone(a.dice.map((d) => d.proto.faces[resultFace(d.proto, d.mesh.quaternion)].value));
    }
  }

  /** Dado sotto il puntatore (coordinate di pagina), con la sua posizione sul tavolo. */
  function pick(clientX, clientY) {
    const r = canvas.getBoundingClientRect();
    if (!r.width || !r.height) return null;
    ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hit = raycaster.intersectObjects(meshes, false)[0];
    if (!hit) return null;
    const { rollId, index, playerId, type, resting } = hit.object.userData, p = hit.object.position;
    return { rollId, index, playerId, type, resting, position: { x: p.x, z: p.z } };
  }

  function positionOf(rollId, index) {
    const m = byKey.get(rollId + ':' + index);
    return m ? { x: m.position.x, z: m.position.z } : null;
  }

  /** Evidenzia un dado (scala 1,06 con transizione nel loop); null toglie l'evidenziazione. */
  function setHover(rollId, index = null) {
    hovered = rollId == null || index == null ? null : byKey.get(rollId + ':' + index) || null;
  }

  function updateHover(dt) {
    const k = 1 - Math.exp(-dt / 40); // ~120 ms per arrivare a regime
    for (const m of meshes) {
      const target = m === hovered ? 1.06 : 1;
      if (Math.abs(m.scale.x - target) > 0.001) m.scale.setScalar(m.scale.x + (target - m.scale.x) * k);
      else if (m.scale.x !== target) m.scale.setScalar(target);
    }
  }

  let last = performance.now(), frameCount = 0, acc = 0;
  function loop(now) {
    requestAnimationFrame(loop);
    const dt = now - last; last = now; frameCount++; acc += dt;
    if (acc >= 500) {
      if (opts.onStats) opts.onStats((frameCount * 1000) / acc, acc / frameCount, meshes.length, lastSimMs, renderer.info.render.calls);
      frameCount = 0; acc = 0;
    }
    updateAnims(now);
    updateHover(dt);
    renderer.render(scene, camera);
  }

  resize();
  requestAnimationFrame(loop);

  return { play, clear: clearDice, pick, positionOf, setHover };
}
