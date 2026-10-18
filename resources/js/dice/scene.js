// Scena Three.js: renderer, vaschetta, luci, materiali dei dadi e playback.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { PAD, PROTOS, cellOf, resultFace } from './geometry.js';
import { DT, TRAY, plan, simulate } from './physics.js';
import { playHit } from './audio.js';

const LABEL_FONT = '"Alegreya Sans", "Segoe UI", system-ui, sans-serif';
const LABEL_SIZE = { d8: 0.36, d10: 0.34, d12: 0.36, d20: 0.3 };
const PIPS = {
  1: [[0, 0]], 2: [[-1, 1], [1, -1]], 3: [[-1, 1], [0, 0], [1, -1]],
  4: [[-1, 1], [1, 1], [-1, -1], [1, -1]], 5: [[-1, 1], [1, 1], [0, 0], [-1, -1], [1, -1]],
  6: [[-1, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [1, -1]],
};

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

function drawLabel(ctx, str, x, y, size, rot, pal, underline) {
  ctx.save();
  ctx.translate(x, y); ctx.rotate(rot);
  ctx.font = `800 ${size}px ${LABEL_FONT}`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const dy = size * 0.05;
  ctx.fillStyle = pal.inkShadow; ctx.fillText(str, 0, dy + Math.max(1, size * 0.035));
  ctx.fillStyle = pal.ink; ctx.fillText(str, 0, dy);
  if (underline) ctx.fillRect(-size * 0.22, size * 0.46, size * 0.44, size * 0.07);
  ctx.restore();
}

function drawCell(ctx, proto, f, cell, C, pal) {
  const { cols } = proto.atlas, x0 = (cell % cols) * C, y0 = Math.floor(cell / cols) * C;
  const P = (u, v) => [x0 + (0.5 + (u - 0.5) * PAD) * C, y0 + (1 - (0.5 + (v - 0.5) * PAD)) * C];
  ctx.fillStyle = pal.base; ctx.fillRect(x0, y0, C, C);
  ctx.beginPath();
  f.uv.forEach(([u, v], i) => { const [x, y] = P(u, v); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); });
  ctx.closePath();
  const [mx, my] = P(0.5, 0.5);
  const g = ctx.createRadialGradient(mx, my - C * 0.1, C * 0.03, mx, my, C * 0.55);
  g.addColorStop(0, pal.hi); g.addColorStop(1, pal.lo);
  ctx.fillStyle = g; ctx.fill();
  ctx.lineJoin = 'round'; ctx.lineWidth = C * 0.06; ctx.strokeStyle = pal.edge; ctx.stroke();

  const S = C * PAD;
  if (proto.type === 'd6') {
    const r = S * 0.068, s = S * 0.2;
    for (const [px, py] of PIPS[f.value]) {
      const x = mx + px * s, y = my - py * s;
      ctx.beginPath(); ctx.arc(x, y + 1.2, r, 0, Math.PI * 2); ctx.fillStyle = pal.inkShadow; ctx.fill();
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = pal.ink; ctx.fill();
    }
  } else if (proto.type === 'd4') {
    f.idx.forEach((vi, k) => {
      const [u, v] = f.uv[k];
      const [x, y] = P(0.5 + (u - 0.5) * 0.56, 0.5 + (v - 0.5) * 0.56);
      drawLabel(ctx, String(vi + 1), x, y, S * 0.22, Math.atan2(u - 0.5, v - 0.5), pal, false);
    });
  } else {
    const str = String(f.value);
    drawLabel(ctx, str, mx, my + (proto.type === 'd10' ? S * 0.06 : 0), S * LABEL_SIZE[proto.type], 0, pal, str === '6' || str === '9');
  }
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
    map: canvasTexture(1024, 768, (ctx, w, h) => {
      ctx.fillStyle = '#1f4b55'; ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 26000; i++) {
        ctx.fillStyle = Math.random() < 0.5 ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.07)';
        ctx.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 1 + Math.random() * 2);
      }
      const g = ctx.createRadialGradient(w / 2, h / 2, h * 0.2, w / 2, h / 2, w * 0.62);
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

  // Vaschetta di dimensioni fisse (TRAY): si adatta solo la camera.
  (function buildTray() {
    const g = new THREE.Group(), { W, D } = TRAY, t = 0.7, h = 0.9;
    const felt = new THREE.Mesh(new THREE.PlaneGeometry(W, D), feltMat);
    felt.rotation.x = -Math.PI / 2; felt.receiveShadow = true; g.add(felt);
    for (const [sx, sz, x, z] of [[W + 2 * t, t, 0, -(D / 2 + t / 2)], [W + 2 * t, t, 0, D / 2 + t / 2], [t, D, -(W / 2 + t / 2), 0], [t, D, W / 2 + t / 2, 0]]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(sx, h, sz), woodMat);
      m.position.set(x, h / 2, z); m.castShadow = true; m.receiveShadow = true; g.add(m);
    }
    const table = new THREE.Mesh(new THREE.PlaneGeometry(240, 240), tableMat);
    table.rotation.x = -Math.PI / 2; table.position.y = -0.02; table.receiveShadow = true; g.add(table);
    scene.add(g);
    const s = Math.max(W, D) / 2 + 3, cam = sun.shadow.camera;
    cam.left = -s; cam.right = s; cam.top = s; cam.bottom = -s; cam.near = 1; cam.far = 70; cam.updateProjectionMatrix();
  })();

  function fitCamera() {
    const tilt = 0.42; // inclinazione dalla verticale, in radianti
    const fv = THREE.MathUtils.degToRad(camera.fov / 2), fh = Math.atan(Math.tan(fv) * camera.aspect);
    const hw = TRAY.W / 2 + 0.9, hd = TRAY.D / 2 + 0.9;
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
    const C = 160, { cols, rows } = proto.atlas, pal = palette(hex);
    const map = canvasTexture(cols * C, rows * C, (ctx) => {
      proto.faces.forEach((f, fi) => drawCell(ctx, proto, f, cellOf(proto, fi), C, pal));
    });
    const mat = new THREE.MeshPhysicalMaterial({ map, roughness: 0.32, metalness: 0, clearcoat: 0.85, clearcoatRoughness: 0.16 });
    matCache.set(key, mat);
    return mat;
  }

  let anim = null, meshes = [], lastSimMs = 0;
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
   * @param {{color: string, list: string[], values: number[], seed: number, onDone?: (seen: number[]) => void}} roll
   */
  function play({ color, list, values, seed, onDone }) {
    const t0 = performance.now();
    const sim = simulate(list, seed);
    const qRs = plan(list, values, sim);
    lastSimMs = performance.now() - t0;

    clearDice();
    const dice = list.map((type, i) => {
      const proto = PROTOS[type];
      const mesh = new THREE.Mesh(proto.geometry, diceMaterial(proto, color));
      mesh.castShadow = true; mesh.receiveShadow = true;
      scene.add(mesh); meshes.push(mesh);
      return { mesh, proto, frames: sim.frames[i], qR: qRs[i] };
    });
    anim = { dice, steps: sim.steps, sounds: sim.sounds, si: 0, start: performance.now(), onDone };
    poseDice(anim, 0);
  }

  function updateAnim(now) {
    const a = anim;
    if (!a) return;
    let s = ((now - a.start) / 1000) / DT;
    const done = s >= a.steps - 1;
    if (done) s = a.steps - 1;
    poseDice(a, s);
    let played = 0;
    while (a.si < a.sounds.length && a.sounds[a.si].step <= s) {
      const h = a.sounds[a.si++];
      if (played++ < 5) playHit(h.v, h.kind);
    }
    if (done) {
      anim = null;
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
    updateAnim(now);
    renderer.render(scene, camera);
  }

  resize();
  requestAnimationFrame(loop);

  return { play, clear: clearDice };
}
