// Scena Three.js: renderer, vaschetta, luci, materiali dei dadi e playback.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { PAD, PROTOS, cellOf, resultFace } from './geometry.js';
import { DT, TRAY, plan, simulate } from './physics.js';
import { playHit } from './audio.js';

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
    hi: c.clone().lerp(white, 0.16).getStyle(),
    lo: c.clone().lerp(black, 0.2).getStyle(),
    edge: c.clone().lerp(black, 0.5).getStyle(),
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
function drawLabel(ctx, str, x, y, size, rot, pal) {
  const b = labelBox(ctx, str, size);
  ctx.save();
  ctx.translate(x, y); ctx.rotate(rot);
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  const ox = -b.w / 2 + b.left, oy = -b.h / 2 + b.asc;
  ctx.fillStyle = pal.inkShadow; ctx.fillText(str, ox, oy + Math.max(1, size * 0.035));
  ctx.fillStyle = pal.ink; ctx.fillText(str, ox, oy);
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

function drawCell(ctx, proto, f, cell, C, pal, size) {
  const { cols } = proto.atlas, x0 = (cell % cols) * C, y0 = Math.floor(cell / cols) * C;
  const P = (u, v) => [x0 + (0.5 + (u - 0.5) * PAD) * C, y0 + (1 - (0.5 + (v - 0.5) * PAD)) * C];
  ctx.fillStyle = pal.base; ctx.fillRect(x0, y0, C, C);
  ctx.beginPath();
  f.uv.forEach(([u, v], i) => { const [x, y] = P(u, v); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); });
  ctx.closePath();
  const [mx, my] = P(f.inc.u, f.inc.v);
  const g = ctx.createRadialGradient(mx, my - C * 0.1, C * 0.03, mx, my, C * 0.55);
  g.addColorStop(0, pal.hi); g.addColorStop(1, pal.lo);
  ctx.fillStyle = g; ctx.fill();
  ctx.lineJoin = 'round'; ctx.lineWidth = C * 0.06; ctx.strokeStyle = pal.edge; ctx.stroke();

  if (proto.type === 'd4') {
    const S = C * PAD;
    f.idx.forEach((vi, k) => {
      const [u, v] = f.uv[k];
      const [x, y] = P(0.5 + (u - 0.5) * 0.56, 0.5 + (v - 0.5) * 0.56);
      drawLabel(ctx, String(vi + 1), x, y, S * 0.22, Math.atan2(u - 0.5, v - 0.5), pal);
    });
  } else {
    drawLabel(ctx, String(f.value), mx, my, size, 0, pal);
  }
}

/** Disegna l'atlante delle facce di un tipo di dado (celle C×C) nel colore dato. */
export function drawAtlas(ctx, proto, hex, C) {
  const pal = palette(hex);
  const size = proto.type === 'd4' ? 0 : labelSize(ctx, proto, C * PAD);
  proto.faces.forEach((f, fi) => drawCell(ctx, proto, f, cellOf(proto, fi), C, pal, size));
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
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
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
  const woodMat = new THREE.MeshStandardMaterial({
    roughness: 0.55, metalness: 0,
    map: canvasTexture(1024, 128, (ctx, w, h) => {
      ctx.fillStyle = '#5b3920'; ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 90; i++) {
        const y = Math.random() * h, amp = 2 + Math.random() * 5, ph = Math.random() * 6;
        ctx.strokeStyle = Math.random() < 0.5 ? 'rgba(30,15,5,0.35)' : 'rgba(150,100,60,0.18)';
        ctx.lineWidth = 0.6 + Math.random() * 1.6;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 16) { const yy = y + Math.sin(x / 140 + ph) * amp; if (x) ctx.lineTo(x, yy); else ctx.moveTo(x, yy); }
        ctx.stroke();
      }
    }),
  });
  const tableMat = new THREE.MeshStandardMaterial({ color: 0x17120e, roughness: 0.85 });

  // Vaschetta esagonale di dimensioni fisse (TRAY): si adatta solo la camera.
  // Il feltro è un esagono con i vertici sull'asse x, come le pareti fisiche; la cornice è un anello
  // esagonale estruso, con lo spigolo superiore smussato.
  const RIM = 0.75, RIM_H = 0.9, BEVEL = 0.07;
  (function buildTray() {
    const g = new THREE.Group(), { R } = TRAY;
    const felt = new THREE.Mesh(new THREE.CircleGeometry(R, 6), feltMat);
    felt.rotation.x = -Math.PI / 2; felt.receiveShadow = true; g.add(felt);

    const hex = (r) => Array.from({ length: 6 }, (_, k) => new THREE.Vector2(r * Math.cos(k * Math.PI / 3), r * Math.sin(k * Math.PI / 3)));
    // Spessore RIM misurato perpendicolare ai lati; lo smusso allarga il contorno, il foro lo compensa.
    const shape = new THREE.Shape(hex(R + (RIM - BEVEL) / Math.cos(Math.PI / 6)));
    shape.holes.push(new THREE.Path(hex(R + BEVEL / Math.cos(Math.PI / 6))));
    const rimGeo = new THREE.ExtrudeGeometry(shape, { depth: RIM_H - 2 * BEVEL, bevelEnabled: true, bevelThickness: BEVEL, bevelSize: BEVEL, bevelSegments: 3, curveSegments: 1 });
    woodMat.map.repeat.set(0.08, 0.5); // le UV dell'estrusione sono in unità di scena
    const rim = new THREE.Mesh(rimGeo, woodMat);
    rim.rotation.x = -Math.PI / 2; rim.position.y = BEVEL;
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
  const matCache = new Map();
  function diceMaterial(proto, hex) {
    const key = proto.type + '|' + hex;
    if (matCache.has(key)) return matCache.get(key);
    const C = 160, { cols, rows } = proto.atlas;
    const map = canvasTexture(cols * C, rows * C, (ctx) => drawAtlas(ctx, proto, hex, C));
    const mat = new THREE.MeshPhysicalMaterial({ map, roughness: 0.32, metalness: 0, clearcoat: 0.85, clearcoatRoughness: 0.16 });
    matCache.set(key, mat);
    return mat;
  }

  let anims = [], meshes = [], lastSimMs = 0;
  const q0 = new THREE.Quaternion(), q1 = new THREE.Quaternion();

  function clearDice() { meshes.forEach((m) => scene.remove(m)); meshes = []; }

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
   * @param {{color: string, list: string[], values: number[], seed: number, onDone?: (seen: number[]) => void}} roll
   */
  function play({ color, list, values, seed, onDone }) {
    const t0 = performance.now();
    const sim = simulate(list, seed);
    const qRs = plan(list, values, sim);
    lastSimMs = performance.now() - t0;

    if (!anims.length) clearDice();
    const dice = list.map((type, i) => {
      const proto = PROTOS[type];
      const mesh = new THREE.Mesh(proto.geometry, diceMaterial(proto, color));
      mesh.castShadow = true; mesh.receiveShadow = true;
      scene.add(mesh); meshes.push(mesh);
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
      if (a.onDone) a.onDone(a.dice.map((d) => d.proto.faces[resultFace(d.proto, d.mesh.quaternion)].value));
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
    renderer.render(scene, camera);
  }

  resize();
  requestAnimationFrame(loop);

  return { play, clear: clearDice };
}
