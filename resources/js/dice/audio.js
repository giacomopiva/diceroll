// Suoni degli urti, sintetizzati con Web Audio (rumore filtrato).
let audio = null, noise = null, soundOn = true;

export function ensureAudio() {
  try {
    if (!audio) {
      audio = new (window.AudioContext || window.webkitAudioContext)();
      noise = audio.createBuffer(1, Math.floor(audio.sampleRate * 0.3), audio.sampleRate);
      const d = noise.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    if (audio.state === 'suspended') audio.resume();
  } catch (e) { audio = null; }
}

export function setSound(on) {
  soundOn = on;
  if (on) ensureAudio();
}

export function playHit(v, kind) {
  if (!soundOn || !audio || audio.state !== 'running') return;
  const t = audio.currentTime;
  const src = audio.createBufferSource(); src.buffer = noise;
  const bp = audio.createBiquadFilter(); bp.type = 'bandpass';
  const g = audio.createGain();
  let f = 600, q = 1.2, peak = 0.5, dec = 0.11;
  if (kind === 'die') { f = 2800 + Math.random() * 1800; q = 5; peak = 0.45; dec = 0.06; }
  else if (kind === 'wall') { f = 1100 + Math.random() * 300; q = 3; peak = 0.6; dec = 0.09; }
  else { f = 520 + Math.random() * 260; peak = 0.7; }
  bp.frequency.value = f; bp.Q.value = q;
  const amp = Math.max(0.0002, Math.min(1, v / 20) * peak);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(amp, t + 0.004);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dec);
  src.connect(bp).connect(g).connect(audio.destination);
  src.start(t, Math.random() * 0.12, dec + 0.02);
}
