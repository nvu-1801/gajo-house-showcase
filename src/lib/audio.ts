let audioCtx: AudioContext | null = null;

export function playPaperSound(soundEnabled: boolean = true) {
  if (!soundEnabled || typeof window === 'undefined') return;
  try {
    const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioCtxClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const sz = audioCtx.sampleRate * 0.12;
    const buf = audioCtx.createBuffer(1, sz, audioCtx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < sz; i++) {
      d[i] = Math.random() * 2 - 1;
    }

    const src = audioCtx.createBufferSource();
    src.buffer = buf;

    const flt = audioCtx.createBiquadFilter();
    flt.type = 'lowpass';
    flt.frequency.setValueAtTime(400, audioCtx.currentTime);
    flt.frequency.exponentialRampToValueAtTime(1600, audioCtx.currentTime + 0.08);
    flt.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.12);

    const g = audioCtx.createGain();
    g.gain.setValueAtTime(0.01, audioCtx.currentTime);
    g.gain.linearRampToValueAtTime(0.18, audioCtx.currentTime + 0.03);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);

    src.connect(flt);
    flt.connect(g);
    g.connect(audioCtx.destination);
    src.start();
  } catch (err) {
    console.warn('Audio play error:', err);
  }
}
