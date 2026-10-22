// Scena Three.js: renderer, vaschetta, luci, materiali dei dadi e playback.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { PAD, PROTOS, cellOf, resultFace } from './geometry.js';
import { DT, TRAY, mulberry32, plan, simulate } from './physics.js';
import { playHit } from './audio.js';
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

/* ---------------- Cornice di legno ---------------- */
const RIM = 0.75, RIM_H = 0.9, RIM_ROUND = 0.22; // larghezza, altezza e raggio di raccordo della cornice
const WOOD_W = 2048, WOOD_H = 1024, WOOD_TILE = 6.4; // texture del legno: px e unità di scena per ripetizione

// Venatura del legno disegnata nel canvas (la fibra corre lungo x). Seed fisso e onde periodiche in x:
// la texture si ripete senza giunture e il legno è lo stesso per tutti.
function paintWood(ctx, w, h) {
  const rnd = mulberry32(7), TAU = Math.PI * 2;
  const dark = [62, 36, 18], light = [140, 90, 52];
  // fasce larghe di tono, come gli anelli di crescita visti di taglio
  const ph = Array.from({ length: 4 }, () => rnd() * TAU);
  for (let y = 0; y < h; y++) {
    const t = 0.5 + 0.28 * Math.sin(y * 0.021 + ph[0]) + 0.16 * Math.sin(y * 0.067 + ph[1]) + 0.1 * Math.sin(y * 0.19 + ph[2]);
    const k = Math.min(1, Math.max(0, t));
    ctx.fillStyle = `rgb(${dark.map((d, i) => Math.round(d + (light[i] - d) * k)).join(',')})`;
    ctx.fillRect(0, y, w, 1);
  }
  // fibre: linee sottili ondulate su tutta la larghezza
  for (let i = 0; i < 700; i++) {
    const y = rnd() * h, amp = 1 + rnd() * 7, m = 1 + Math.floor(rnd() * 5), p0 = rnd() * TAU;
    ctx.strokeStyle = rnd() < 0.6 ? `rgba(28,13,4,${0.06 + rnd() * 0.2})` : `rgba(190,140,90,${0.05 + rnd() * 0.14})`;
    ctx.lineWidth = 0.5 + rnd() * 1.8;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 32) { const yy = y + Math.sin(x / w * TAU * m + p0) * amp; if (x) ctx.lineTo(x, yy); else ctx.moveTo(x, yy); }
    ctx.stroke();
  }
  // pori: trattini scuri corti lungo la fibra
  for (let i = 0; i < 5000; i++) {
    const x = rnd() * (w - 20), y = rnd() * h;
    ctx.fillStyle = `rgba(25,10,3,${0.12 + rnd() * 0.25})`;
    ctx.fillRect(x, y, 3 + rnd() * 14, 1);
  }
}

// Profilo della sezione (d = distanza dalla parete, h = altezza): fondo piatto, lato interno e esterno
// verticali, spigoli superiori raccordati ad arco. Percorso chiuso.
function rimProfile() {
  const pts = [[0, 0], [RIM, 0]], arc = 6;
  const corner = (cx, cy, a0, a1) => { for (let i = 0; i <= arc; i++) { const a = a0 + (a1 - a0) * i / arc; pts.push([cx + RIM_ROUND * Math.cos(a), cy + RIM_ROUND * Math.sin(a)]); } };
  corner(RIM - RIM_ROUND, RIM_H - RIM_ROUND, 0, Math.PI / 2);  // spigolo esterno
  corner(RIM_ROUND, RIM_H - RIM_ROUND, Math.PI / 2, Math.PI);  // spigolo interno
  return pts;
}

/**
 * Cornice esagonale come telaio di sei listelli con giunti a 45°: la fibra del legno segue ogni lato.
 * Ogni anello del profilo è posto sui vertici dell'esagono allargato di d (vertice a R + d/cos 30°).
 * Geometria non indicizzata con normali morbide lungo il profilo e nette tra un lato e l'altro.
 */
function buildRimGeometry(R) {
  const prof = rimProfile(), n = prof.length, cos30 = Math.cos(Math.PI / 6);
  // normali 2D (d, h) dei segmenti del profilo chiuso, verso l'esterno (il percorso è antiorario in (d, h))
  const segN = prof.map((p, i) => { const q = prof[(i + 1) % n], dx = q[0] - p[0], dy = q[1] - p[1], l = Math.hypot(dx, dy); return [dy / l, -dx / l]; });
  const vertN = (i, side) => { // normale del punto i sul segmento `side` (i o i-1): morbida se l'angolo è dolce
    const a = segN[(i + n - 1) % n], b = segN[i];
    const d = a[0] * b[0] + a[1] * b[1];
    if (d > 0.7) { const x = a[0] + b[0], y = a[1] + b[1], l = Math.hypot(x, y); return [x / l, y / l]; }
    return side === 'prev' ? a : b;
  };
  const tiles = Math.max(1, Math.round(6 * R / WOOD_TILE));
  const lens = [0]; for (let i = 1; i <= n; i++) lens.push(lens[i - 1] + Math.hypot(prof[i % n][0] - prof[i - 1][0], prof[i % n][1] - prof[i - 1][1]));
  const pos = [], nor = [], uv = [], g = new THREE.BufferGeometry();
  const P = (k, d, h) => { const a = k * Math.PI / 3, r = R + d / cos30; return new THREE.Vector3(r * Math.cos(a), h, r * Math.sin(a)); };
  for (let s = 0; s < 6; s++) {
    const am = (s + 0.5) * Math.PI / 3, sx = Math.cos(am), sz = Math.sin(am);
    const N = (nd, nh) => new THREE.Vector3(nd * sx, nh, nd * sz);
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const a0 = P(s, prof[i][0], prof[i][1]), a1 = P(s + 1, prof[i][0], prof[i][1]);
      const b0 = P(s, prof[j][0], prof[j][1]), b1 = P(s + 1, prof[j][0], prof[j][1]);
      const nI = vertN(i, 'next'), nJ = vertN(j, 'prev');
      const q = [
        { p: a0, n: N(...nI), uv: [s / 6 * tiles, lens[i] / lens[n]] }, { p: a1, n: N(...nI), uv: [(s + 1) / 6 * tiles, lens[i] / lens[n]] },
        { p: b1, n: N(...nJ), uv: [(s + 1) / 6 * tiles, lens[i + 1] / lens[n]] }, { p: b0, n: N(...nJ), uv: [s / 6 * tiles, lens[i + 1] / lens[n]] },
      ];
      for (const t of [[0, 1, 2], [0, 2, 3]]) {
        let v = t.map((k) => q[k]);
        const geo = new THREE.Vector3().subVectors(v[1].p, v[0].p).cross(new THREE.Vector3().subVectors(v[2].p, v[0].p));
        if (geo.dot(v[0].n.clone().add(v[1].n).add(v[2].n)) < 0) v = [v[0], v[2], v[1]];
        for (const w of v) { pos.push(w.p.x, w.p.y, w.p.z); nor.push(w.n.x, w.n.y, w.n.z); uv.push(w.uv[0], w.uv[1]); }
      }
    }
  }
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.computeBoundingSphere();
  return g;
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
  const feltMat = new THREE.MeshStandardMaterial({
    roughness: 1, metalness: 0,
    map: canvasTexture(1024, 1024, (ctx, w, h) => {
      ctx.fillStyle = '#1f4b55'; ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 26000; i++) {
        ctx.fillStyle = Math.random() < 0.5 ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.07)';
        ctx.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 1 + Math.random() * 2);
      }
      const g = ctx.createRadialGradient(w / 2, h / 2, h * 0.18, w / 2, h / 2, w * 0.5);
      g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,0.45)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    }),
  });
  // Legno verniciato: stessa venatura come colore e come rilievo (dato, non colore: niente sRGB).
  const woodCv = document.createElement('canvas'); woodCv.width = WOOD_W; woodCv.height = WOOD_H;
  paintWood(woodCv.getContext('2d'), WOOD_W, WOOD_H);
  const woodTex = (srgb) => {
    const t = new THREE.CanvasTexture(woodCv);
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.wrapS = THREE.RepeatWrapping; t.anisotropy = ANISO;
    return t;
  };
  const woodMat = new THREE.MeshPhysicalMaterial({
    map: woodTex(true), bumpMap: woodTex(false), bumpScale: 0.6,
    roughness: 0.5, metalness: 0, clearcoat: 0.45, clearcoatRoughness: 0.28,
  });
  const tableMat = new THREE.MeshStandardMaterial({ color: 0x17120e, roughness: 0.85 });

  // Vaschetta esagonale di dimensioni fisse (TRAY): si adatta solo la camera.
  // Il feltro è un esagono con i vertici sull'asse x, come le pareti fisiche; la cornice è un telaio di
  // legno a sei listelli (buildRimGeometry) con la parete interna alla distanza delle pareti fisiche.
  (function buildTray() {
    const g = new THREE.Group(), { R } = TRAY;
    const felt = new THREE.Mesh(new THREE.CircleGeometry(R, 6), feltMat);
    felt.rotation.x = -Math.PI / 2; felt.receiveShadow = true; g.add(felt);

    const rim = new THREE.Mesh(buildRimGeometry(R), woodMat);
    rim.castShadow = true; rim.receiveShadow = true; g.add(rim);

    const table = new THREE.Mesh(new THREE.PlaneGeometry(240, 240), tableMat);
    table.rotation.x = -Math.PI / 2; table.position.y = -0.02; table.receiveShadow = true; g.add(table);
    scene.add(g);
    const s = R + RIM + 2, cam = sun.shadow.camera;
    cam.left = -s; cam.right = s; cam.top = s; cam.bottom = -s; cam.near = 1; cam.far = 70; cam.updateProjectionMatrix();
  })();

  function fitCamera() {
    const tilt = 0.42; // inclinazione dalla verticale, in radianti
    const fv = THREE.MathUtils.degToRad(camera.fov / 2), fh = Math.atan(Math.tan(fv) * camera.aspect);
    const hw = TRAY.R + RIM + 0.3, hd = TRAY.A + RIM + 0.3;
    const dist = Math.max(hd / Math.tan(fv), hw / Math.tan(fh)) * 1.05 + 1.5;
    camera.position.set(0, Math.cos(tilt) * dist, Math.sin(tilt) * dist);
    camera.lookAt(0, 0, 0.35);
    camera.updateProjectionMatrix();
  }

  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    fitCamera();
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
      mesh.userData = { rollId: id, index: i, playerId, resting: false };
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
    const { rollId, index, playerId, resting } = hit.object.userData, p = hit.object.position;
    return { rollId, index, playerId, resting, position: { x: p.x, z: p.z } };
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
