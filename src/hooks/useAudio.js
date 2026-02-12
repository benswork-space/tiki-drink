import { useState, useRef, useCallback } from 'react';

// Pentatonic scale frequencies for a tropical/tiki feel
const NOTES = {
  C4: 261.63, D4: 293.66, E4: 329.63, G4: 392.00, A4: 440.00,
  C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99, A5: 880.00,
};

// Melody pattern - a looping tropical vibraphone-style melody
const MELODY = [
  { note: 'E4', dur: 0.3 }, { note: 'G4', dur: 0.3 }, { note: 'A4', dur: 0.6 },
  { note: 'G4', dur: 0.3 }, { note: 'E4', dur: 0.3 }, { note: 'C5', dur: 0.6 },
  { note: 'A4', dur: 0.3 }, { note: 'G4', dur: 0.3 }, { note: 'E4', dur: 0.3 },
  { note: 'D4', dur: 0.3 }, { note: 'C4', dur: 0.6 }, { note: null, dur: 0.3 },
  { note: 'D4', dur: 0.3 }, { note: 'E4', dur: 0.3 }, { note: 'G4', dur: 0.6 },
  { note: 'A4', dur: 0.3 }, { note: 'C5', dur: 0.3 }, { note: 'A4', dur: 0.6 },
  { note: 'G4', dur: 0.3 }, { note: 'E4', dur: 0.6 }, { note: null, dur: 0.3 },
  { note: 'G4', dur: 0.3 }, { note: 'A4', dur: 0.3 }, { note: 'C5', dur: 0.3 },
  { note: 'D5', dur: 0.6 }, { note: 'C5', dur: 0.3 }, { note: 'A4', dur: 0.3 },
  { note: 'G4', dur: 0.6 }, { note: 'E4', dur: 0.3 }, { note: 'D4', dur: 0.3 },
  { note: 'E4', dur: 0.9 }, { note: null, dur: 0.3 },
];

// Secondary melody (higher register, plays every other loop)
const MELODY2 = [
  { note: null, dur: 0.6 }, { note: 'C5', dur: 0.3 }, { note: 'D5', dur: 0.3 },
  { note: 'E5', dur: 0.6 }, { note: null, dur: 0.3 }, { note: 'D5', dur: 0.3 },
  { note: 'C5', dur: 0.3 }, { note: 'A4', dur: 0.6 }, { note: null, dur: 0.6 },
  { note: 'G4', dur: 0.3 }, { note: 'A4', dur: 0.3 }, { note: 'C5', dur: 0.6 },
  { note: null, dur: 0.3 }, { note: 'E5', dur: 0.3 }, { note: 'D5', dur: 0.6 },
  { note: 'C5', dur: 0.3 }, { note: 'A4', dur: 0.3 }, { note: 'G4', dur: 0.9 },
  { note: null, dur: 0.3 }, { note: 'A4', dur: 0.3 }, { note: 'C5', dur: 0.3 },
  { note: 'D5', dur: 0.3 }, { note: 'E5', dur: 0.6 }, { note: 'D5', dur: 0.3 },
  { note: 'C5', dur: 0.6 }, { note: null, dur: 0.6 },
];

// Bass pattern
const BASS = [
  { note: 'C4', dur: 0.6 }, { note: null, dur: 0.6 },
  { note: 'G4', dur: 0.6 }, { note: null, dur: 0.6 },
  { note: 'A4', dur: 0.6 }, { note: null, dur: 0.6 },
  { note: 'E4', dur: 0.6 }, { note: null, dur: 0.6 },
  { note: 'C4', dur: 0.6 }, { note: null, dur: 0.6 },
  { note: 'G4', dur: 0.6 }, { note: null, dur: 0.6 },
  { note: 'D4', dur: 0.6 }, { note: null, dur: 0.6 },
  { note: 'E4', dur: 0.6 }, { note: null, dur: 0.6 },
];

function playNote(ctx, freq, startTime, duration, type = 'sine', volume = 0.08) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(volume, startTime + 0.02);
  gain.gain.setValueAtTime(volume, startTime + duration * 0.6);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration);
}

function playVibes(ctx, freq, startTime, duration, volume = 0.06) {
  // Vibraphone-like sound: sine + slight overtone with quick decay
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();
  osc1.type = 'sine';
  osc1.frequency.value = freq;
  osc2.type = 'sine';
  osc2.frequency.value = freq * 4; // 2nd overtone
  const gain2 = ctx.createGain();
  gain2.gain.value = 0.15; // much quieter overtone
  osc1.connect(gain);
  osc2.connect(gain2);
  gain2.connect(gain);
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(volume, startTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(volume * 0.3, startTime + duration * 0.3);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  gain.connect(ctx.destination);
  osc1.start(startTime);
  osc1.stop(startTime + duration);
  osc2.start(startTime);
  osc2.stop(startTime + duration);
}

function scheduleMelody(ctx, melody, startTime, playFn, volume) {
  let t = startTime;
  for (const { note, dur } of melody) {
    if (note && NOTES[note]) {
      playFn(ctx, NOTES[note], t, dur * 0.9, volume);
    }
    t += dur;
  }
  return t;
}

function getMelodyDuration(melody) {
  return melody.reduce((sum, n) => sum + n.dur, 0);
}

export function useAudio() {
  const ctxRef = useRef(null);
  const intervalRef = useRef(null);
  const loopCountRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scheduleLoop = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx || ctx.state === 'closed') return;

    const now = ctx.currentTime + 0.1;
    const loopNum = loopCountRef.current;

    // Main melody (vibraphone)
    scheduleMelody(ctx, MELODY, now, playVibes, 0.07);

    // Secondary melody every other loop
    if (loopNum % 2 === 1) {
      scheduleMelody(ctx, MELODY2, now, playVibes, 0.04);
    }

    // Bass (lower octave sine)
    let bt = now;
    for (const { note, dur } of BASS) {
      if (note && NOTES[note]) {
        playNote(ctx, NOTES[note] / 2, bt, dur * 0.8, 'sine', 0.05);
      }
      bt += dur;
    }

    loopCountRef.current++;
  }, []);

  const play = useCallback(() => {
    if (ctxRef.current) {
      ctxRef.current.close().catch(() => {});
    }
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctxRef.current = ctx;
    loopCountRef.current = 0;

    scheduleLoop();
    const loopDuration = getMelodyDuration(MELODY) * 1000;
    intervalRef.current = setInterval(scheduleLoop, loopDuration);

    setIsPlaying(true);
  }, [scheduleLoop]);

  const toggle = useCallback(() => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (ctxRef.current) {
        ctxRef.current.close().catch(() => {});
        ctxRef.current = null;
      }
      setIsPlaying(false);
    } else {
      play();
    }
  }, [isPlaying, play]);

  return { isPlaying, play, toggle };
}
