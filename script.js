/**
 * Kaka Andrea Yahya - Code Necromancer Portfolio
 * Pure Vanilla JavaScript (Retro Halloween Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Elements Selection
  // -------------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const bgNight = document.getElementById('bgNight');
  const bgSunset = document.getElementById('bgSunset');
  const bgDay = document.getElementById('bgDay');
  const soundToggle = document.getElementById('soundToggle');
  const settingsToggle = document.getElementById('settingsToggle');
  const settingsDropdown = document.getElementById('settingsDropdown');
  // settings elements declared at top in Elements Selection
  const dr = document.getElementById('dragon');
  const witchCottage = document.getElementById('witchCottage');
  const witchManor = document.getElementById('witchManor');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const navLinksItems = document.querySelectorAll('.nav-link');
  const headerContainer = document.querySelector('.header-container');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const pixelToast = document.getElementById('pixelToast');
  const toastMessage = document.getElementById('toastMessage');
  const earthquakeContainer = document.getElementById('earthquakeContainer');
  const pixelMusicHud = document.getElementById('pixelMusicHud');
  const bgMusicAudio = document.getElementById('bgMusicAudio');
  const musicHudCard = document.getElementById('musicHudCard');
  const musicHudBtn = document.getElementById('musicHudBtn');
  const musicHudIconBox = document.getElementById('musicHudIconBox');
  const musicHudCollapseBtn = document.getElementById('musicHudCollapseBtn');
  const musicHudTitle = document.getElementById('musicHudTitle');
  const musicHudSub = document.getElementById('musicHudSub');
  const musicSpeakerOn = document.getElementById('musicSpeakerOn');
  const musicSpeakerOff = document.getElementById('musicSpeakerOff');
  const bgMusicVolSlider = document.getElementById('bgMusicVolSlider');
  const btnResurrectTrigger = document.getElementById('btnResurrectTrigger');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // -------------------------------------------------------------------------
  // 2. Synthesized 8-Bit Web Audio Engine
  // -------------------------------------------------------------------------
  let audioCtx = null;
  let isSoundEnabled = true;
  try {
    const savedSound = localStorage.getItem('kaka_sound_enabled');
    if (savedSound !== null) {
      isSoundEnabled = savedSound === 'true';
    }
  } catch (_) {}
  let isBGMPlaying = false;
  let hasUserInteracted = false;
  let currentBGMVolume = 0.15;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function isMusicActive() {
    return isBGMPlaying || (bgMusicAudio && !bgMusicAudio.paused);
  }

  function playMascotSound(type = 'blip') {
    // If background music is actively playing, mute mascot audio sounds completely!
    if (isMusicActive() || !isSoundEnabled) return;
    playSound(type, true);
  }

  function playSound(type = 'blip') {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;

      if (type === 'blip' || type === 'system') {
        // Solo Leveling System Alert / Hologram Crystal Ping
        // Two crystal sine tones (E6 1318.5Hz & B6 1975.5Hz) + shimmer harmonic (E7 2637Hz)
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const osc3 = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc1.type = 'sine';
        osc2.type = 'sine';
        osc3.type = 'triangle';

        osc1.frequency.setValueAtTime(1318.5, now);
        osc2.frequency.setValueAtTime(1975.5, now);
        osc3.frequency.setValueAtTime(2637.0, now + 0.03);

        osc1.connect(gain);
        osc2.connect(gain);
        osc3.connect(gain);
        gain.connect(audioCtx.destination);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.09, now + 0.006);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

        osc1.start(now);
        osc2.start(now);
        osc3.start(now + 0.03);
        osc1.stop(now + 0.32);
        osc2.stop(now + 0.32);
        osc3.stop(now + 0.32);

      } else if (type === 'click') {
        // Tactile Obsidian & Bone Keystroke Snap (Filtered Bandpass Click + Body)
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(420, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.035);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1400, now);
        filter.Q.setValueAtTime(2.5, now);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.038);

        osc.start(now);
        osc.stop(now + 0.04);

      } else if (type === 'toggle') {
        // Eclipse Shimmer (Dark Moon / Autumn Sun)
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc1.type = 'sine';
        osc2.type = 'sine';

        osc1.frequency.setValueAtTime(329.63, now); // E4
        osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.18); // E5
        osc2.frequency.setValueAtTime(493.88, now + 0.04); // B4
        osc2.frequency.exponentialRampToValueAtTime(987.77, now + 0.22); // B5

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(audioCtx.destination);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc1.start(now);
        osc2.start(now + 0.04);
        osc1.stop(now + 0.35);
        osc2.stop(now + 0.35);

      } else if (type === 'victory') {
        // Shadow Monarch Awakening / Cathedral Requiem (D-minor triumph)
        // Deep cathedral sub-bass toll (D3 146.8Hz) + chord: D4, F4, A4, D5
        const chord = [146.83, 293.66, 349.23, 440.00, 587.33];
        chord.forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = idx === 0 ? 'triangle' : 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);

          osc.connect(gain);
          gain.connect(audioCtx.destination);

          gain.gain.setValueAtTime(0.001, now + idx * 0.08);
          gain.gain.linearRampToValueAtTime(0.07, now + idx * 0.08 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.65);

          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.7);
        });

      } else if (type === 'spin') {
        // Arcane Dimensional Spin & Vortex Whoosh
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.16);
        osc.frequency.exponentialRampToValueAtTime(240, now + 0.38);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.1, now + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);

        osc.start(now);
        osc.stop(now + 0.42);

      } else if (type === 'unroll') {
        // Solo Leveling System Quest Unfurl / Parchment Chime
        // Ascending mystic crystal arpeggio: C5, E5, G5, B5, C6
        const notes = [523.25, 659.25, 783.99, 987.77, 1046.5];
        notes.forEach((freq, idx) => {
          const subOsc = audioCtx.createOscillator();
          const subGain = audioCtx.createGain();
          subOsc.type = 'sine';
          subOsc.frequency.setValueAtTime(freq, now + idx * 0.06);

          subOsc.connect(subGain);
          subGain.connect(audioCtx.destination);

          subGain.gain.setValueAtTime(0.001, now + idx * 0.06);
          subGain.gain.linearRampToValueAtTime(0.06, now + idx * 0.06 + 0.01);
          subGain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.28);

          subOsc.start(now + idx * 0.06);
          subOsc.stop(now + idx * 0.06 + 0.3);
        });

      } else if (type === 'roll') {
        // Descending folding chime
        const notes = [1046.5, 783.99, 659.25, 523.25];
        notes.forEach((freq, idx) => {
          const subOsc = audioCtx.createOscillator();
          const subGain = audioCtx.createGain();
          subOsc.type = 'sine';
          subOsc.frequency.setValueAtTime(freq, now + idx * 0.05);

          subOsc.connect(subGain);
          subGain.connect(audioCtx.destination);

          subGain.gain.setValueAtTime(0.001, now + idx * 0.05);
          subGain.gain.linearRampToValueAtTime(0.05, now + idx * 0.05 + 0.01);
          subGain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.22);

          subOsc.start(now + idx * 0.05);
          subOsc.stop(now + idx * 0.05 + 0.24);
        });

      } else if (type === 'ghost') {
        // Eerie Spectral Shadow Whisper (vibrato wisp)
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(1080, now + 0.14);
        osc.frequency.exponentialRampToValueAtTime(620, now + 0.32);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.07, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.start(now);
        osc.stop(now + 0.35);

      } else if (type === 'bat') {
        // Mini Bat Wing Flutter & Squeak
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1600, now);
        osc.frequency.exponentialRampToValueAtTime(700, now + 0.06);

        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.start(now);
        osc.stop(now + 0.06);

      } else if (type === 'stone') {
        // Heavy Ancient Stone Vault Grinding & Hinges Creaking
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const filter = audioCtx.createBiquadFilter();
        const gain = audioCtx.createGain();

        osc1.type = 'sawtooth';
        osc2.type = 'triangle';

        // Low grinding rumble pitch slide
        osc1.frequency.setValueAtTime(95, now);
        osc1.frequency.linearRampToValueAtTime(145, now + 0.25);
        osc1.frequency.exponentialRampToValueAtTime(55, now + 0.65);

        osc2.frequency.setValueAtTime(75, now);
        osc2.frequency.linearRampToValueAtTime(120, now + 0.3);
        osc2.frequency.exponentialRampToValueAtTime(45, now + 0.65);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, now);
        filter.frequency.linearRampToValueAtTime(550, now + 0.25);
        filter.frequency.exponentialRampToValueAtTime(200, now + 0.65);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.7);
        osc2.stop(now + 0.7);

      } else if (type === 'earthquake') {
        // Subterranean tectonic tremor
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(audioCtx.destination);

        osc1.type = 'sawtooth';
        osc2.type = 'triangle';
        osc1.frequency.setValueAtTime(65, now);
        osc1.frequency.exponentialRampToValueAtTime(28, now + 0.7);
        osc2.frequency.setValueAtTime(52, now);
        osc2.frequency.exponentialRampToValueAtTime(22, now + 0.7);

        gain.gain.setValueAtTime(0.16, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.75);
        osc2.stop(now + 0.75);

      } else if (type === 'arise') {
        // Solo Leveling "ARISE!" (Shadow Extraction Dimensional Blast)
        // Sub-bass dimensional drop + sweeping sawtooth warmth
        const subOsc = audioCtx.createOscillator();
        const subGain = audioCtx.createGain();
        const subFilter = audioCtx.createBiquadFilter();

        subOsc.type = 'sawtooth';
        subOsc.frequency.setValueAtTime(140, now);
        subOsc.frequency.exponentialRampToValueAtTime(32, now + 0.85);

        subFilter.type = 'lowpass';
        subFilter.frequency.setValueAtTime(280, now);
        subFilter.frequency.exponentialRampToValueAtTime(90, now + 0.85);

        subOsc.connect(subFilter);
        subFilter.connect(subGain);
        subGain.connect(audioCtx.destination);

        subGain.gain.setValueAtTime(0.01, now);
        subGain.gain.linearRampToValueAtTime(0.24, now + 0.08);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

        subOsc.start(now);
        subOsc.stop(now + 0.9);

        // Ascending crystalline monarch chords: F#5 (739.99), A#5 (932.33), C#6 (1108.73), F#6 (1479.98)
        const chimeNotes = [739.99, 932.33, 1108.73, 1479.98];
        chimeNotes.forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + 0.12 + idx * 0.08);

          osc.connect(gain);
          gain.connect(audioCtx.destination);

          gain.gain.setValueAtTime(0.001, now + 0.12 + idx * 0.08);
          gain.gain.linearRampToValueAtTime(0.09, now + 0.12 + idx * 0.08 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12 + idx * 0.08 + 0.45);

          osc.start(now + 0.12 + idx * 0.08);
          osc.stop(now + 0.12 + idx * 0.08 + 0.5);
        });
      }
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  // Sound toggle button is wired in Halloween navbar tools section

  // -------------------------------------------------------------------------
  // Minecraft Achievement Toast Notification Helper & Chime
  // -------------------------------------------------------------------------
  const toastTitle = document.getElementById('toastTitle');
  const toastIcon = document.getElementById('toastIcon');

  function playMinecraftDing() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const now = audioCtx.currentTime;

      // Authentic Minecraft Achievement Chime (F#5, A#5, C#6 sparkling triad)
      const notes = [
        { f: 739.99, t: 0, d: 0.1 },
        { f: 932.33, t: 0.08, d: 0.1 },
        { f: 1108.73, t: 0.16, d: 0.45 }
      ];

      notes.forEach(note => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, now + note.t);

        gain.gain.setValueAtTime(0, now + note.t);
        gain.gain.linearRampToValueAtTime(0.22, now + note.t + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + note.t);
        osc.stop(now + note.t + note.d + 0.02);
      });
    } catch(e) {}
  }

  let toastTimer = null;
  function showToast(msg, title = null, icon = null) {
    if (!pixelToast || window.innerWidth <= 860) return;
    const lang = localStorage.getItem('kaka_portfolio_lang') || 'id';
    
    // Default Minecraft achievement header
    const defaultTitle = lang === 'en' ? 'Advancement Made!' : 'Pencapaian Diraih!';
    if (toastTitle) toastTitle.textContent = title || defaultTitle;
    if (toastMessage) toastMessage.textContent = msg;

    // Smart icon selection
    if (toastIcon) {
      if (icon) {
        toastIcon.textContent = icon;
      } else {
        const m = msg.toLowerCase();
        if (m.includes('resurrect') || m.includes('bangkit')) toastIcon.textContent = '⚡';
        else if (m.includes('musik') || m.includes('music')) toastIcon.textContent = '🎵';
        else if (m.includes('buku') || m.includes('semanggi') || m.includes('grimoire') || m.includes('scroll')) toastIcon.textContent = '📜';
        else if (m.includes('bahasa') || m.includes('language')) toastIcon.textContent = '🌐';
        else if (m.includes('kursor') || m.includes('reaper')) toastIcon.textContent = '🗡️';
        else if (m.includes('makhluk') || m.includes('maskot')) toastIcon.textContent = '💀';
        else toastIcon.textContent = '🏆';
      }
    }

    pixelToast.classList.add('show');
    playMinecraftDing();

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      pixelToast.classList.remove('show');
    }, 3800);
  }

  // -------------------------------------------------------------------------
  // 3. Tri-Phase Time Mode Switching: Siang / Sore (Sunset) / Malam (Real-Time Auto-Detection)
  // -------------------------------------------------------------------------
  const ATMOSPHERIC_THEMES = {
    pagi: {
      key: 'pagi',
      title: 'Mode Pagi (Fajar Jingga) — Klik untuk Ganti ke Siang',
      aria: 'Mode Pagi (Klik untuk ganti ke Mode Siang)',
      do: '1',
      d1: '#6fb1e8',
      d2: '#ffd9a8',
      d3: '#ffe9c8',
      dg: '#ffc878aa',
      gx: '20%',
      mb: '#fff3b0',
      ms: '0 0 0 8px #fff3b044, 0 0 70px 30px #ffd27a88',
      mr: '80%',
      mt: '470px',
      m1: '#9fb4dc',
      m2: '#7890c0',
      cf: 'brightness(2.4) saturate(.3)',
      co: '0.8',
      sc: '#fff4dc',
      sk: 'transparent',
      toast: '🌅 Mode Pagi Diaktifkan: Fajar jingga keemasan menyambut hari baru!'
    },
    siang: {
      key: 'siang',
      title: 'Mode Siang (Cahaya Mentari) — Klik untuk Ganti ke Sore',
      aria: 'Mode Siang (Klik untuk ganti ke Mode Sore)',
      do: '1',
      d1: '#2f8fe8',
      d2: '#6fc0ff',
      d3: '#bfe8ff',
      dg: 'transparent',
      gx: '50%',
      mb: '#fff8c0',
      ms: '0 0 0 8px #fff8c044, 0 0 80px 30px #fff2a099',
      mr: '12%',
      mt: '104px',
      m1: '#7aa0d0',
      m2: '#5a82b0',
      cf: 'brightness(2.6) saturate(.2)',
      co: '0.9',
      sc: '#fff4dc',
      sk: 'transparent',
      toast: '☀️ Mode Siang Diaktifkan: Cahaya terang benderang menyelimuti sanctum!'
    },
    sore: {
      key: 'sore',
      title: 'Mode Sore / Senja (Lembayung Magis) — Klik untuk Ganti ke Malam',
      aria: 'Mode Sore (Klik untuk ganti ke Mode Malam)',
      do: '1',
      d1: '#3a2f7a',
      d2: '#d9566f',
      d3: '#ffb347',
      dg: '#ff8a1fcc',
      gx: '75%',
      mb: '#ffb347',
      ms: '0 0 0 8px #ff8a1f44, 0 0 90px 36px #ff6a3d88',
      mr: '16%',
      mt: '540px',
      m1: '#7a4a8a',
      m2: '#4a2a5e',
      cf: 'brightness(1.7)',
      co: '0.6',
      sc: '#fff4dc',
      sk: 'transparent',
      toast: '🌇 Mode Sore/Senja Diaktifkan: Lembayung jingga magis menyelimuti langit!'
    },
    malam: {
      key: 'malam',
      title: 'Mode Malam (Bulan Purnama) — Klik untuk Ganti ke Tengah Malam',
      aria: 'Mode Malam (Klik untuk ganti ke Mode Tengah Malam)',
      do: '0',
      d1: '#000',
      d2: '#000',
      d3: '#000',
      dg: 'transparent',
      gx: '75%',
      mb: '#ffe9a8',
      ms: '0 0 0 6px #ffe9a822, 0 0 50px 16px #ffb34755, inset -14px -8px 0 #f0cf84',
      mr: '12%',
      mt: '104px',
      m1: '#2a1c48',
      m2: '#1a0f30',
      cf: 'none',
      co: '0.45',
      sc: '#ffb347',
      sk: 'transparent',
      toast: '🌙 Mode Malam Diaktifkan: Bulan Purnama menerangi makam bayangan!'
    },
    tm: {
      key: 'tm',
      title: 'Mode Tengah Malam (Midnight Crimson) — Klik untuk Ganti ke Pagi',
      aria: 'Mode Tengah Malam (Klik untuk ganti ke Mode Pagi)',
      do: '1',
      d1: '#01010a',
      d2: '#060a24',
      d3: '#0f1a3d',
      dg: '#3a6fd855',
      gx: '50%',
      mb: '#d9f4ff',
      ms: '0 0 0 6px #bfe8ff22, 0 0 70px 24px #7fb8ff66, inset -14px -8px 0 #b5d8ea',
      mr: '30%',
      mt: '90px',
      m1: '#070b1e',
      m2: '#040712',
      cf: 'brightness(.7)',
      co: '0.35',
      sc: '#bfe8ff',
      sk: '#fff',
      toast: '🌌 Mode Tengah Malam Diaktifkan: Kabut tebal & atmosfer misterius terbangkitkan!'
    }
  };

  const THEME_KEYS = ['pagi', 'siang', 'sore', 'malam', 'tm'];

  function normalizeThemeKey(k) {
    if (!k) return 'malam';
    if (k === 'day') return 'siang';
    if (k === 'sunset') return 'sore';
    if (k === 'night') return 'malam';
    if (k === 'midnight') return 'tm';
    if (ATMOSPHERIC_THEMES[k]) return k;
    return 'malam';
  }

  function getRealTimeTheme() {
    const hour = new Date().getHours() + (new Date().getMinutes() / 60);
    if (hour >= 5 && hour < 8) return 'pagi';
    if (hour >= 8 && hour < 15) return 'siang';
    if (hour >= 15 && hour < 18.5) return 'sore';
    if (hour >= 18.5 && hour < 23) return 'malam';
    return 'tm';
  }

  const shadowBadgeText = document.getElementById('shadowBadgeText');
  const shadowArmySubtitle = document.getElementById('shadowArmySubtitle');
  const shadowArenaStatus = document.getElementById('shadowArenaStatus');
  const shadowCrownLeft = document.getElementById('shadowCrownLeft');
  const shadowCrownRight = document.getElementById('shadowCrownRight');
  const shadowMonarchCrest = document.getElementById('shadowMonarchCrest');

  const NOTICE_BOARD_DATA = {
    pagi: {
      text: 'Embun fajar menyelimuti nisan purba. Pekuburan masih tenang dan sejuk. Mulai petualangan barumu!',
      badge: '🌅 FAJAR'
    },
    siang: {
      text: 'Matahari bersinar di atas makam. Cahaya terang menembus celah pepohonan. Jelajahi Grimoire Kaka!',
      badge: '☀️ SIANG'
    },
    sore: {
      text: 'Langit keemasan mulai meredup. Kabut tipis perlahan turun di antara pepohonan purba...',
      badge: '🌇 SENJA'
    },
    malam: {
      text: 'Malam tiba. Kerangka dan zombie bangkit dari peraduannya. Berhati-hatilah saat menggali!',
      badge: '🌙 MALAM'
    },
    tm: {
      text: 'Tengah malam mistis. Gerbang dimensi terbuka, arwah kuno berbisik di kegelapan...',
      badge: '🌌 TENGAH MALAM'
    }
  };

  function updateNoticeBoardText(themeKey) {
    const k = normalizeThemeKey(themeKey);
    const data = NOTICE_BOARD_DATA[k] || NOTICE_BOARD_DATA.malam;
    const noticeEl = document.getElementById('boardNoticeText');
    const badgeEl = document.getElementById('boardTimeBadge');
    if (noticeEl) {
      noticeEl.style.opacity = '0';
      setTimeout(() => {
        noticeEl.textContent = data.text;
        noticeEl.style.opacity = '1';
      }, 150);
    }
    if (badgeEl) {
      badgeEl.textContent = data.badge;
    }
  }

  function updateThemeDynamicTexts(themeKey) {
    const k = normalizeThemeKey(themeKey);
    updateNoticeBoardText(k);

    if (k === 'pagi') {
      if (shadowBadgeText) shadowBadgeText.textContent = 'BUKU TAMU & KAWANAN MASKOT SANCTUM (PAGI)';
      if (shadowArmySubtitle) shadowArmySubtitle.textContent = 'Buku tamu interaktif & arena kawanan maskot sahabat yang menyambut fajar keemasan di Sanctum.';
      if (shadowArenaStatus) shadowArenaStatus.textContent = 'PATROLI PAGI SEGAR & AKTIF';
      if (shadowCrownLeft) shadowCrownLeft.textContent = '🌅';
      if (shadowCrownRight) shadowCrownRight.textContent = '🌅';
      if (shadowMonarchCrest) shadowMonarchCrest.textContent = '🌅 🐱 🐕 🧙‍♂️ 🦅';
    } else if (k === 'siang') {
      if (shadowBadgeText) shadowBadgeText.textContent = 'BUKU TAMU & KAWANAN MASKOT SANCTUM (SIANG)';
      if (shadowArmySubtitle) shadowArmySubtitle.textContent = 'Buku tamu interaktif & arena kawanan maskot sahabat yang berkumpul di bawah hangatnya mentari siang untuk menyapa pengembara digital.';
      if (shadowArenaStatus) shadowArenaStatus.textContent = 'PATROLI SIANG CERIA & AKTIF';
      if (shadowCrownLeft) shadowCrownLeft.textContent = '☀️';
      if (shadowCrownRight) shadowCrownRight.textContent = '☀️';
      if (shadowMonarchCrest) shadowMonarchCrest.textContent = '☀️ 🐱 🐕 🧙‍♂️ 🦅';
    } else if (k === 'sore') {
      if (shadowBadgeText) shadowBadgeText.textContent = 'BUKU TAMU & KAWANAN MASKOT SENJA (SORE)';
      if (shadowArmySubtitle) shadowArmySubtitle.textContent = 'Buku tamu interaktif & arena kawanan maskot sahabat yang menikmati lembayung senja magis menjelang malam keramat.';
      if (shadowArenaStatus) shadowArenaStatus.textContent = 'PATROLI SENJA JINGGA & BERJAGA';
      if (shadowCrownLeft) shadowCrownLeft.textContent = '🌇';
      if (shadowCrownRight) shadowCrownRight.textContent = '🌇';
      if (shadowMonarchCrest) shadowMonarchCrest.textContent = '🌇 🦇 🐱 💀 🧙‍♂️';
    } else if (k === 'tm') {
      if (shadowBadgeText) shadowBadgeText.textContent = 'BUKU TAMU & KAWANAN MASKOT SANCTUM (TENGAH MALAM)';
      if (shadowArmySubtitle) shadowArmySubtitle.textContent = 'Buku tamu interaktif & arena kawanan maskot sahabat yang berpatroli di bawah keheningan malam keramat.';
      if (shadowArenaStatus) shadowArenaStatus.textContent = 'PATROLI TENGAH MALAM MISTERIUS';
      if (shadowCrownLeft) shadowCrownLeft.textContent = '🌌';
      if (shadowCrownRight) shadowCrownRight.textContent = '🌌';
      if (shadowMonarchCrest) shadowMonarchCrest.textContent = '🌌 🦇 🐱 💀 🧙‍♂️';
    } else {
      if (shadowBadgeText) shadowBadgeText.textContent = 'BUKU TAMU & KAWANAN MASKOT HALLOWEEN (MALAM)';
      if (shadowArmySubtitle) shadowArmySubtitle.textContent = 'Buku tamu interaktif & arena kawanan maskot sahabat yang singgah untuk memberikan dukungan serta pesan apresiasi dalam perjalanan portofolio Kaka Andrea Yahya.';
      if (shadowArenaStatus) shadowArenaStatus.textContent = 'RAMAH & BERPATROLI BEBAS';
      if (shadowCrownLeft) shadowCrownLeft.textContent = '🎃';
      if (shadowCrownRight) shadowCrownRight.textContent = '🎃';
      if (shadowMonarchCrest) shadowMonarchCrest.textContent = '👻 🦇 🐱 💀 🧙‍♂️';
    }
  }

  function setTheme(rawTheme) {
    const k = normalizeThemeKey(rawTheme);
    const cfg = ATMOSPHERIC_THEMES[k];

    document.body.dataset.t = k;
    document.body.classList.remove('theme-pagi', 'theme-day', 'theme-sunset', 'theme-night', 'theme-midnight');
    if (bgDay) bgDay.classList.remove('active');
    if (bgSunset) bgSunset.classList.remove('active');
    if (bgNight) bgNight.classList.remove('active');

    if (k === 'pagi') {
      document.body.classList.add('theme-pagi');
    } else if (k === 'siang') {
      document.body.classList.add('theme-day');
      if (bgDay) bgDay.classList.add('active');
    } else if (k === 'sore') {
      document.body.classList.add('theme-sunset');
      if (bgSunset) bgSunset.classList.add('active');
    } else if (k === 'tm') {
      document.body.classList.add('theme-midnight');
      if (bgNight) bgNight.classList.add('active');
    } else {
      document.body.classList.add('theme-night');
      if (bgNight) bgNight.classList.add('active');
    }

    const rootStyle = document.documentElement.style;
    const varNames = ['do', 'd1', 'd2', 'd3', 'dg', 'gx', 'mb', 'ms', 'mr', 'mt', 'm1', 'm2', 'cf', 'co', 'sc', 'sk'];
    varNames.forEach(vn => {
      if (cfg[vn] !== undefined) {
        rootStyle.setProperty('--' + vn, cfg[vn]);
      }
    });

    const celestialOrb = document.getElementById('celestialOrb');
    if (celestialOrb) {
      if (cfg.mt) celestialOrb.style.top = cfg.mt;
      if (cfg.mr) celestialOrb.style.right = cfg.mr;
    }

    updateThemeDynamicTexts(k);

    if (themeToggle) {
      themeToggle.title = cfg.title;
      themeToggle.setAttribute('aria-label', cfg.aria);
    }
    localStorage.setItem('kaka_theme', k);
  }

  const hasManualOverride = sessionStorage.getItem('kaka_theme_manual') === 'true';
  const realTimeTheme = getRealTimeTheme();
  const initialTheme = hasManualOverride && localStorage.getItem('kaka_theme') 
    ? localStorage.getItem('kaka_theme') 
    : realTimeTheme;

  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = normalizeThemeKey(document.body.dataset.t || 'malam');
      const idx = THEME_KEYS.indexOf(current);
      const next = THEME_KEYS[(idx + 1) % THEME_KEYS.length];

      sessionStorage.setItem('kaka_theme_manual', 'true');
      setTheme(next);
      playSound('toggle');

      const nextCfg = ATMOSPHERIC_THEMES[next];
      if (nextCfg && nextCfg.toast) {
        showToast(nextCfg.toast);
      }
    });
  }

  // -------------------------------------------------------------------------
  // 4. Halloween Navbar Controller (from Navbar Halloween.html)
  const navEl = document.getElementById('nav');
  const navHead = document.getElementById('head');
  const navCur = document.getElementById('cur');
  const navLinksList = [].slice.call(document.querySelectorAll('#links a'));
  let isNavPinned = false;

  const isNarrowNav = () => window.matchMedia('(max-width: 720px)').matches;

  const SECTION_MAP = [
    { id: 'home', name: 'Sanctum' },
    { id: 'about', name: 'Grimoire' },
    { id: 'projects', name: 'Spells' },
    { id: 'sertificat', name: 'Relics' },
    { id: 'shadows', name: 'Companions' },
    { id: 'achievements', name: 'Katakombe' },
    { id: 'contact', name: 'Altar' }
  ];

  function updateHalloweenNav() {
    if (!navEl) return;
    let current = SECTION_MAP[0];
    SECTION_MAP.forEach(item => {
      const el = document.getElementById(item.id);
      if (el && el.getBoundingClientRect().top <= 140) {
        current = item;
      }
    });

    navLinksList.forEach(a => {
      const isActive = (a.dataset.t === current.id);
      a.classList.toggle('on', isActive);
      if (isActive) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });

    if (navCur) navCur.textContent = current.name;

    // Mini mode when scrolled down (> 40px)
    if (!isNarrowNav() && window.scrollY > 40 && !isNavPinned) {
      navEl.classList.add('mini');
    } else {
      navEl.classList.remove('mini');
    }
  }

  window.addEventListener('scroll', () => {
    isNavPinned = false;
    updateHalloweenNav();
  }, { passive: true });

  window.addEventListener('resize', updateHalloweenNav);

  if (navEl) {
    navEl.addEventListener('mouseenter', () => {
      if (!isNarrowNav()) {
        isNavPinned = true;
        updateHalloweenNav();
      }
    });

    navEl.addEventListener('mouseleave', () => {
      isNavPinned = false;
      updateHalloweenNav();
    });
  }

  if (navHead) {
    navHead.addEventListener('click', (e) => {
      if (isNarrowNav()) {
        navEl.classList.toggle('open');
      } else {
        isNavPinned = !isNavPinned;
        updateHalloweenNav();
      }
    });
  }

  navLinksList.forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        const sec = document.querySelector(href);
        if (sec) {
          e.preventDefault();
          if (!isBGMPlaying) playSound('click');
          if (navEl) navEl.classList.remove('open');
          isNavPinned = false;
          sec.scrollIntoView({ behavior: 'smooth' });
          setTimeout(updateHalloweenNav, 400);
        }
      }
    });
  });

  // Tools in Halloween navbar:
  // Sound & Music button
  function updateSoundToggleUI(enabled) {
    if (!soundToggle) return;
    soundToggle.classList.toggle('sound-off', !enabled);
    soundToggle.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    soundToggle.title = enabled 
      ? 'Suara 8-Bit & Musik: NYALA (Klik untuk Mematikan)' 
      : 'Suara 8-Bit & Musik: MATI (Klik untuk Menyalakan)';
    soundToggle.setAttribute('aria-label', enabled ? 'Matikan Suara 8-Bit' : 'Nyalakan Suara 8-Bit');
  }

  updateSoundToggleUI(isSoundEnabled);

  if (soundToggle) {
    soundToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      isSoundEnabled = !isSoundEnabled;
      try {
        localStorage.setItem('kaka_sound_enabled', isSoundEnabled ? 'true' : 'false');
      } catch (_) {}

      if (isSoundEnabled) {
        initAudio();
        playSound('click');
        if (!isBGMPlaying) {
          playBGM();
        }
        showToast('🎵 Suara 8-Bit & Musik Dinyalakan');
      } else {
        if (isBGMPlaying) {
          pauseBGM();
        }
        showToast('🔇 Suara 8-Bit & Musik Dimatikan');
      }

      updateSoundToggleUI(isSoundEnabled);
    });
  }

  // Settings toggle button
  if (settingsToggle && settingsDropdown) {
    settingsToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!isBGMPlaying) playSound('click');
      settingsDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (settingsDropdown && !settingsDropdown.contains(e.target) && e.target !== settingsToggle) {
        settingsDropdown.classList.remove('show');
      }
    });
  }

  updateHalloweenNav();

    // -------------------------------------------------------------------------
  // 5. Typing Effect on Subtitle
  // -------------------------------------------------------------------------
  const typingElement = document.getElementById('typingText');
  const typingRolePhrases = {
    id: [
      "Code Necromancer & Pengembang Web",
      "Membangkitkan Baris Kode Menjadi Kehidupan",
      "Sihir Web Retro • Pixel Art & Kode Modern",
      "Siap Memulai Petualangan Digital Epik!"
    ],
    en: [
      "Code Necromancer & Spooky Web Developer",
      "Resurrecting Dead Pixels & Living Code",
      "HTML5 • CSS3 • JavaScript Sorcery",
      "Ready for Dark & Epic Digital Quests!"
    ]
  };

  let currentLanguage = localStorage.getItem('kaka_portfolio_lang') || 'id';
  let rolePhrases = typingRolePhrases[currentLanguage] || typingRolePhrases.id;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!typingElement) return;
    const current = rolePhrases[phraseIndex];

    if (!isDeleting) {
      typingElement.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(typeLoop, 2000);
        return;
      }
      setTimeout(typeLoop, 75);
    } else {
      typingElement.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % rolePhrases.length;
        setTimeout(typeLoop, 400);
        return;
      }
      setTimeout(typeLoop, 35);
    }
  }
  typeLoop();

  // -------------------------------------------------------------------------
  // 5.5 THE NECROMANCER GRIMOIRE (3D Card Flip & Unrolling Scroll)
  // -------------------------------------------------------------------------
  const grimoireCardFrame = document.getElementById('grimoireCardFrame');
  const btnExpandGrimoire = document.getElementById('btnExpandGrimoire');
  const btnCloseGrimoireCorner = document.getElementById('btnCloseGrimoireCorner');
  const btnCloseGrimoireBottom = document.getElementById('btnCloseGrimoireBottom');

  let isGrimoireAnimating = false;

  function expandGrimoire() {
    if (!grimoireCardFrame || isGrimoireAnimating || grimoireCardFrame.classList.contains('expanded')) return;
    isGrimoireAnimating = true;

    playSound('spin');
    grimoireCardFrame.classList.add('flipping');

    // Midway through 3D flip (280ms), switch content to expanded scroll view
    setTimeout(() => {
      grimoireCardFrame.classList.remove('collapsed');
      grimoireCardFrame.classList.add('expanded');
      playSound('unroll');
    }, 280);

    setTimeout(() => {
      grimoireCardFrame.classList.remove('flipping');
      isGrimoireAnimating = false;
      showToast('📜 Gulungan suci Necromancer terbuka!');
    }, 620);
  }

  function collapseGrimoire() {
    if (!grimoireCardFrame || isGrimoireAnimating || grimoireCardFrame.classList.contains('collapsed')) return;
    isGrimoireAnimating = true;

    playSound('spin');
    grimoireCardFrame.classList.add('flipping');

    // Midway through 3D flip (280ms), switch back to collapsed portrait card view
    setTimeout(() => {
      grimoireCardFrame.classList.remove('expanded');
      grimoireCardFrame.classList.add('collapsed');
      playSound('roll');
    }, 280);

    setTimeout(() => {
      grimoireCardFrame.classList.remove('flipping');
      isGrimoireAnimating = false;
      showToast('🃏 Grimoire tergulung kembali menjadi kartu potret!');
      grimoireCardFrame.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 620);
  }

  if (btnExpandGrimoire) {
    btnExpandGrimoire.addEventListener('click', (e) => {
      e.stopPropagation();
      expandGrimoire();
    });
  }

  // 3D Flippable Avatar Card: Front (Pixel Art) <-> Back (Real Photo of Kaka)
  const avatarFlipCard = document.getElementById('avatarFlipCard');
  if (avatarFlipCard) {
    let isAvatarFlipped = false;

    // Clicking the avatar toggles flip
    avatarFlipCard.addEventListener('click', (e) => {
      e.stopPropagation();
      isAvatarFlipped = !isAvatarFlipped;
      avatarFlipCard.classList.toggle('flipped', isAvatarFlipped);
      playSound('ghost');
      const msg = isAvatarFlipped 
        ? '📸 Menampilkan potret asli Kaka Andrea Yahya!' 
        : '🧙‍♂️ Menampilkan avatar pixel art Code Necromancer!';
      showToast(msg);
    });

    avatarFlipCard.addEventListener('mouseenter', () => {
      playSound('blip');
    });

    // When cursor leaves, always return back to Pixel Art so it never stays locked on photo
    avatarFlipCard.addEventListener('mouseleave', () => {
      isAvatarFlipped = false;
      avatarFlipCard.classList.remove('flipped');
    });
  }

  // Clicking anywhere on the portrait card triggers expansion
  if (grimoireCardFrame) {
    grimoireCardFrame.addEventListener('click', (e) => {
      if (grimoireCardFrame.classList.contains('collapsed')) {
        expandGrimoire();
      }
    });
  }

  if (btnCloseGrimoireCorner) {
    btnCloseGrimoireCorner.addEventListener('click', (e) => {
      e.stopPropagation();
      collapseGrimoire();
    });
  }

  if (btnCloseGrimoireBottom) {
    btnCloseGrimoireBottom.addEventListener('click', (e) => {
      e.stopPropagation();
      collapseGrimoire();
    });
  }

  const PROJECTS_DATA = [
    {
      y: "2025 • GEOSPATIAL & FULL-STACK",
      n: "SIMULASI & PEMANTAUAN KEBAKARAN HUTAN",
      l: "Lead Full-Stack Developer • Laravel 11/12 & Leaflet.js",
      img: "./Assets/Projects/project-clinic.jpg",
      d: "Sistem informasi geospasial level enterprise untuk pemantauan titik api kehutanan, pelacakan GPS riil, dan simulator perambatan api dinamis multi-insiden berbasis arah angin.",
      b: [
        "Simulator perambatan kebakaran dinamis dengan variabel arah & kecepatan angin",
        "Pemetaan spasial GIS interaktif dengan Leaflet.draw & koordinat GPS riil",
        "Arsitektur reaktif modern berbasis Laravel 11/12, Livewire 3, dan Tailwind CSS"
      ],
      q: "“Teknologi hadir untuk melindungi alam dan menjaga kelestarian kehidupan.”",
      tags: ["Laravel 11", "Livewire 3", "Leaflet.js", "GPS Geolocation", "Tailwind CSS"],
      demo: "https://github.com/Kalzz76/Web-Pemerintahan-Kehutanan",
      github: "https://github.com/Kalzz76/Web-Pemerintahan-Kehutanan.git"
    },
    {
      y: "2025 • MULTIPLATFORM & DESKTOP APP",
      n: "CLASSIO SCHOOL CBT & ADMINISTRATION",
      l: "Multiplatform Engineer • Flutter, Dart & Windows C++",
      img: "./Assets/Projects/project-school.jpg",
      d: "Platform Penilaian Berbasis Komputer (CBT) dan tata kelola administrasi sekolah multiplatform lengkap dengan berkas distribusi desktop Windows (.exe installer) dan mobile Android.",
      b: [
        "Aplikasi multiplatform sejati (Windows Desktop Executable & Mobile Android)",
        "Sistem ujian CBT aman, modul presensi cerdas, dan rekapitulasi nilai otomatis",
        "Arsitektur SQLite offline-first yang terintegrasi dengan RESTful API terpusat"
      ],
      q: "“Disiplin dalam rancangan menghasilkan sistem yang kokoh dan siap didistribusikan.”",
      tags: ["Flutter", "Dart", "Windows .exe", "SQLite", "REST API"],
      demo: "https://github.com/Kalzz76/Project-Aplikasi-PBT-Sekolah",
      github: "https://github.com/Kalzz76/Project-Aplikasi-PBT-Sekolah.git"
    },
    {
      y: "2025 • ALGORITHMIC & CREATIVE TECH",
      n: "INDOOR HOSPITAL PATHFINDING VISUALIZER",
      l: "Algorithm Engineer • JavaScript ES6+ & PathFinding.js",
      img: "./Assets/Projects/project-sanctum.jpg",
      d: "Visualizer navigasi denah rumah sakit multi-lantai interaktif yang mengimplementasikan Algoritma Graf A* (Shortest Path) untuk panduan rute tercepat pasien dan tenaga medis.",
      b: [
        "Implementasi algoritma pencarian rute terpendek A* (A-Star Graph Search)",
        "Visualisasi interaktif denah multi-lantai dengan render grafis Canvas & DOM",
        "Rancang bangun fondasi Computer Science murni tanpa ketergantungan library berat"
      ],
      q: "“Algoritma yang presisi menuntun kita melalui labirin terumit sekalipun.”",
      tags: ["JavaScript ES6+", "Vite", "A* Algorithm", "PathFinding.js", "HTML5 Canvas"],
      demo: "https://github.com/Kalzz76/rsm2",
      github: "https://github.com/Kalzz76/rsm2.git"
    },
    {
      y: "2025 • HEALTHTECH & ARTIFICIAL INTELLIGENCE",
      n: "RHEA AI HEALTHCARE & INTELLIGENT ASSISTANCE",
      l: "AI Full-Stack Developer • Laravel, Blade & AI Integration",
      img: "./Assets/Projects/project-library.jpg",
      d: "Platform asisten kesehatan cerdas berbasis kecerdasan buatan (AI) yang dirancang untuk pameran Gelar Karya RPL guna memberikan konsultasi gejala awal dan triase kesehatan.",
      b: [
        "Integrasi model AI diagnostik awal untuk analisa gejala kesehatan pengguna",
        "Antarmuka responsif ramah pengguna dengan alur konsultasi yang intuitif",
        "Penyimpanan data riwayat konsultasi terenkripsi dengan basis data MySQL"
      ],
      q: "“Menggabungkan empati medis dengan presisi kecerdasan buatan masa depan.”",
      tags: ["Laravel", "Blade", "MySQL", "AI Integration", "HealthTech"],
      demo: "https://github.com/Kalzz76/rhea",
      github: "https://github.com/Kalzz76/rhea.git"
    },
    {
      y: "2025 • MODERN DECOUPLED FULL-STACK",
      n: "KELOMPOKKU COLLABORATION PLATFORM",
      l: "Full-Stack Specialist • React 19 SPA & Laravel REST API",
      img: "./Assets/Projects/project-cashier.jpg",
      d: "Platform manajemen kolaborasi tim dan tugas kelompok dengan arsitektur industri decoupled: frontend SPA berbasis React 19 mutakhir dan backend RESTful API Laravel.",
      b: [
        "Frontend Single Page Application (SPA) reaktif dan super cepat dengan React 19 & Vite",
        "Backend RESTful API kokoh berbasis Laravel dengan otentikasi token aman",
        "Desain antarmuka modern, modular, dan terstruktur sesuai standar industri"
      ],
      q: "“Kolaborasi yang terstruktur melipatgandakan potensi sebuah tim.”",
      tags: ["React 19", "Vite", "Tailwind CSS", "Laravel REST API", "Decoupled Architecture"],
      demo: "https://github.com/Kalzz76/kelompokku-fullstack",
      github: "https://github.com/Kalzz76/kelompokku-fullstack.git"
    }
  ];

  let currentProjectIdx = 0;
  let isGrimoireBusy = false;

  const stageGrimoire = document.getElementById('stageGrimoire');
  const grimoireBook = document.getElementById('book');
  const grimoireCover = document.getElementById('cover');
  const grimoireBack = document.getElementById('back');
  const grimoirePl = document.getElementById('pl');
  const grimoirePr = document.getElementById('pr');
  const grimoireQuote = document.getElementById('quote');
  const grimoireMetaBadge = document.getElementById('metaBadge');
  const grimoireYr = document.getElementById('yr');
  const grimoireNm = document.getElementById('nm');
  const grimoireLv = document.getElementById('lv');
  const grimoireDs = document.getElementById('ds');
  const grimoireUl = document.getElementById('ul');
  const grimoireDots = document.getElementById('dots');
  const grimoirePrevBtn = document.getElementById('prev');
  const grimoireNextBtn = document.getElementById('next');
  const grimoireCloseBtn = document.getElementById('close');
  const projectDemoBtn = document.getElementById('projectDemoBtn');
  const projectGithubBtn = document.getElementById('projectGithubBtn');

  function renderGrimoireProject() {
    renderGrimoireLeft(currentProjectIdx);
    renderGrimoireRight(currentProjectIdx);
  }

  function renderGrimoireLeft(idx) {
    const p = PROJECTS_DATA[idx];
    if (!p) return;
    const projectIllustrationImg = document.getElementById('projectIllustrationImg');
    if (projectIllustrationImg && p.img) {
      projectIllustrationImg.src = p.img;
      projectIllustrationImg.alt = p.n;
    }
    if (grimoireQuote) {
      grimoireQuote.textContent = p.q;
    }
    if (grimoireMetaBadge) {
      grimoireMetaBadge.innerHTML = p.tags.map(t => `<span class="pg-tag">${t}</span>`).join('');
    }
  }

  function renderGrimoireRight(idx) {
    const p = PROJECTS_DATA[idx];
    if (grimoireYr) grimoireYr.textContent = p.y;
    if (grimoireNm) grimoireNm.textContent = p.n;
    if (grimoireLv) grimoireLv.textContent = p.l;
    if (grimoireDs) grimoireDs.textContent = p.d;
    if (grimoireUl) {
      grimoireUl.innerHTML = p.b.map(b => `<li>${b}</li>`).join('');
    }
    if (projectDemoBtn) projectDemoBtn.href = p.demo;
    if (projectGithubBtn) projectGithubBtn.href = p.github;

    if (grimoireDots) {
      grimoireDots.innerHTML = PROJECTS_DATA.map((_, j) => `<i class="${j === idx ? 'on' : ''}"></i>`).join('');
    }
    if (grimoirePrevBtn) {
      grimoirePrevBtn.textContent = idx === 0 ? "◂ Sampul" : "◂ Kembali";
    }
    if (grimoireNextBtn) {
      grimoireNextBtn.textContent = idx === PROJECTS_DATA.length - 1 ? "Tutup ▸" : "Next ▸";
    }
  }

  function isWideScreen() {
    return !window.matchMedia("(max-width: 640px)").matches;
  }

  function deskGrimoireTransition(actionKey) {
    isGrimoireBusy = true;
    if (stageGrimoire) stageGrimoire.classList.add('transitioning');
    const bk = grimoireBook;
    const pl = grimoirePl;
    const pr = grimoirePr;
    const cv = grimoireCover;
    const bc = grimoireBack;
    const isOpening = actionKey[0] === 'o';
    const isFront = actionKey[1] === 'f';
    const isNext = (isOpening === isFront);
    const shift = isFront ? "calc(var(--wp) * -.5)" : "calc(var(--wp) * .5)";

    const stripIds = (html) => html.replace(/ id="[^"]*"/g, "");
    const createFace = (cls, html) => {
      const el = document.createElement("div");
      el.className = cls;
      el.innerHTML = stripIds(html);
      return el;
    };

    const leaf = document.createElement("div");
    let faceFront, faceBack;
    const hiddenPage = isFront ? pl : pr;
    const activeCover = isFront ? cv : bc;

    if (isOpening) {
      currentProjectIdx = isFront ? 0 : PROJECTS_DATA.length - 1;
      renderGrimoireProject();
    }

    if (actionKey === 'of') {
      faceFront = createFace("face cover-grimoire", cv.innerHTML);
      faceBack = createFace("face bk pg-grimoire l", pl.innerHTML);
    } else if (actionKey === 'ob') {
      faceFront = createFace("face cover-grimoire back", bc.innerHTML);
      faceBack = createFace("face bk pg-grimoire r", pr.innerHTML);
    } else if (actionKey === 'cf') {
      faceFront = createFace("face pg-grimoire l", pl.innerHTML);
      faceBack = createFace("face bk cover-grimoire", cv.innerHTML);
    } else if (actionKey === 'cb') {
      faceFront = createFace("face pg-grimoire r", pr.innerHTML);
      faceBack = createFace("face bk cover-grimoire back", bc.innerHTML);
    }

    leaf.className = "leaf " + (isNext ? "next" : "prev");
    leaf.appendChild(faceFront);
    leaf.appendChild(faceBack);

    if (isOpening) {
      playSound('arise');
      playSound('unroll');
      bk.style.transition = "none";
      bk.classList.add("open", "pre");
      bk.style.transform = "translateX(" + shift + ")";
      hiddenPage.style.visibility = "hidden";
      bk.appendChild(leaf);
      activeCover.style.display = "none";
      void bk.offsetWidth;
      bk.style.transition = "";
      leaf.classList.add("go");
      bk.classList.remove("pre");
      bk.style.transform = "";
    } else {
      playSound('stone');
      playSound('roll');
      hiddenPage.style.visibility = "hidden";
      bk.appendChild(leaf);
      void leaf.offsetWidth;
      leaf.classList.add("go");
      bk.classList.add("pre");
      bk.style.transform = "translateX(" + shift + ")";
    }

    setTimeout(() => {
      if (!isOpening) {
        bk.classList.remove("open", "pre");
        bk.style.transform = "";
        activeCover.style.display = "flex";
      }
      pl.style.visibility = "";
      pr.style.visibility = "";
      leaf.remove();
      if (stageGrimoire) stageGrimoire.classList.remove('transitioning');
      isGrimoireBusy = false;
    }, 950);
  }

  function flipGrimoire(direction) {
    if (isGrimoireBusy) return;
    playSound('spin');

    if (!isWideScreen()) {
      currentProjectIdx += direction;
      renderGrimoireProject();
      [grimoirePl, grimoirePr].forEach(el => {
        if (!el) return;
        el.classList.remove('fade');
        void el.offsetWidth;
        el.classList.add('fade');
      });
      return;
    }

    isGrimoireBusy = true;
    if (stageGrimoire) stageGrimoire.classList.add('transitioning');
    const bk = grimoireBook;
    const pl = grimoirePl;
    const pr = grimoirePr;
    const oldIdx = currentProjectIdx;
    const newIdx = currentProjectIdx + direction;

    const stripIds = (html) => html.replace(/ id="[^"]*"/g, "");
    const leaf = document.createElement("div");
    const faceF = document.createElement("div");
    const faceB = document.createElement("div");

    leaf.className = "leaf " + (direction > 0 ? "next" : "prev");
    faceF.className = "face pg-grimoire " + (direction > 0 ? "r" : "l");
    faceB.className = "face bk pg-grimoire " + (direction > 0 ? "l" : "r");

    if (direction > 0) {
      faceF.innerHTML = stripIds(pr.innerHTML);
      renderGrimoireLeft(newIdx);
      faceB.innerHTML = stripIds(pl.innerHTML);
      renderGrimoireLeft(oldIdx);
      renderGrimoireRight(newIdx);
    } else {
      faceF.innerHTML = stripIds(pl.innerHTML);
      renderGrimoireRight(newIdx);
      faceB.innerHTML = stripIds(pr.innerHTML);
      renderGrimoireRight(oldIdx);
      renderGrimoireLeft(newIdx);
    }

    leaf.appendChild(faceF);
    leaf.appendChild(faceB);
    bk.appendChild(leaf);
    void leaf.offsetWidth;
    leaf.classList.add("go");

    setTimeout(() => {
      currentProjectIdx = newIdx;
      renderGrimoireProject();
      leaf.remove();
      if (stageGrimoire) stageGrimoire.classList.remove('transitioning');
      isGrimoireBusy = false;
    }, 900);
  }

  function openGrimoireFrom(el) {
    if (isGrimoireBusy) return;
    if (isWideScreen()) {
      return deskGrimoireTransition(el.id === 'back' ? 'ob' : 'of');
    }
    isGrimoireBusy = true;
    if (stageGrimoire) stageGrimoire.classList.add('transitioning');
    playSound('arise');
    playSound('unroll');
    el.classList.add('opening');

    setTimeout(() => {
      currentProjectIdx = el.id === 'back' ? PROJECTS_DATA.length - 1 : 0;
      if (grimoireBook) grimoireBook.classList.add('open', 'bookin');
      renderGrimoireProject();
    }, 450);

    setTimeout(() => {
      el.style.display = 'none';
      el.classList.remove('opening');
      if (grimoireBook) grimoireBook.classList.remove('bookin');
      if (stageGrimoire) stageGrimoire.classList.remove('transitioning');
      isGrimoireBusy = false;
    }, 950);
  }

  function closeGrimoireTo(el) {
    if (isGrimoireBusy) return;
    if (isWideScreen()) {
      return deskGrimoireTransition(el.id === 'back' ? 'cb' : 'cf');
    }
    isGrimoireBusy = true;
    if (stageGrimoire) stageGrimoire.classList.add('transitioning');
    playSound('stone');
    playSound('roll');
    if (grimoireBook) grimoireBook.classList.add('bookout');

    setTimeout(() => {
      if (grimoireBook) grimoireBook.classList.remove('open', 'bookout');
      el.style.display = 'flex';
      el.classList.add('closing');
    }, 450);

    setTimeout(() => {
      el.classList.remove('closing');
      if (stageGrimoire) stageGrimoire.classList.remove('transitioning');
      isGrimoireBusy = false;
    }, 1350);
  }

  if (grimoireCover) {
    grimoireCover.addEventListener('click', () => openGrimoireFrom(grimoireCover));
  }
  if (grimoireBack) {
    grimoireBack.addEventListener('click', () => openGrimoireFrom(grimoireBack));
  }
  if (grimoireCloseBtn) {
    grimoireCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeGrimoireTo(currentProjectIdx < PROJECTS_DATA.length / 2 ? grimoireCover : grimoireBack);
    });
  }
  if (grimoirePrevBtn) {
    grimoirePrevBtn.addEventListener('click', () => {
      if (isGrimoireBusy) return;
      if (currentProjectIdx > 0) {
        flipGrimoire(-1);
      } else {
        closeGrimoireTo(grimoireCover);
      }
    });
  }
  if (grimoireNextBtn) {
    grimoireNextBtn.addEventListener('click', () => {
      if (isGrimoireBusy) return;
      if (currentProjectIdx < PROJECTS_DATA.length - 1) {
        flipGrimoire(1);
      } else {
        closeGrimoireTo(grimoireBack);
      }
    });
  }

  const certificates = [
    {
      issuer: "INNOVENTURE • HMIF",
      rarity: "Legendary",
      color: "#ff8a1f",
      title: "Juara 3 Lomba Web Development",
      shortTitle: "Juara 3 Web Dev",
      pxImg: "./Assets/Certificates/cert-innoventure-juara3-px.png",
      img: "./Assets/Certificates/cert-innoventure-juara3.jpg",
      desc: "Penghargaan Juara Ketiga kompetisi Web Development tingkat regional Bandung yang diselenggarakan oleh Himpunan Mahasiswa Teknik Informatika (NoeronLabs). Diraih bersama Tim TIMBER.",
      tech: ["Web Development", "Frontend & Backend", "System Architecture", "Team Competition"],
      verifyUrl: "#"
    },
    {
      issuer: "DICODING ACADEMY",
      rarity: "Legendary",
      color: "#a566e0",
      title: "Memulai Pemrograman dengan Dart",
      shortTitle: "Pemrograman Dart",
      pxImg: "./Assets/Certificates/cert-dicoding-dart-px.png",
      img: "./Assets/Certificates/cert-dicoding-dart.jpg",
      desc: "Sertifikasi kompetensi resmi pemrograman Dart berstandar industri: OOP, Functional Programming, Collections, Asynchronous (Futures), dan Effective Dart Guidelines.",
      tech: ["Dart", "OOP", "Async Futures", "Clean Code", "Google Training Partner"],
      verifyUrl: "https://www.dicoding.com/certificates/N9ZOYKN0YPG5"
    },
    {
      issuer: "ASEAN FOUNDATION",
      rarity: "Epic",
      color: "#4fd0ff",
      title: "AI Ready ASEAN - Youth Empowerment",
      shortTitle: "AI Ready ASEAN",
      pxImg: "./Assets/Certificates/cert-ai-asean-px.png",
      img: "./Assets/Certificates/cert-ai-asean.jpg",
      desc: "Penyelesaian 15 modul pembelajaran komprehensif Artificial Intelligence: Generative AI, AI Prompting, Etika AI, dan Pengembangan Tools Berbasis AI untuk dampak sosial.",
      tech: ["Generative AI", "AI Ethics", "Prompt Engineering", "Google.org Support", "AI Tools"],
      verifyUrl: "https://www.AIclassASEAN.org"
    },
    {
      issuer: "PLAN INTERNATIONAL & KEMENPORA",
      rarity: "Epic",
      color: "#8cff6e",
      title: "Berinovasi dengan AI",
      shortTitle: "Inovasi AI",
      pxImg: "./Assets/Certificates/cert-kemenpora-ai-px.png",
      img: "./Assets/Certificates/cert-kemenpora-ai.jpg",
      desc: "Pelatihan intensif 15 jam pembelajaran seputar Artificial Intelligence, Generative AI, dan Pemanfaatan Bertanggung Jawab AI bersama Kemenpora RI & ADB.",
      tech: ["Artificial Intelligence", "Generative AI", "Responsible AI", "ADB & Google.org"],
      verifyUrl: "https://plan-international.or.id"
    },
    {
      issuer: "DBS FOUNDATION & PLAN",
      rarity: "Epic",
      color: "#f6c445",
      title: "Financial Literacy & Soft Skill",
      shortTitle: "Financial Literacy",
      pxImg: "./Assets/Certificates/cert-dbs-literacy-px.png",
      img: "./Assets/Certificates/cert-dbs-literacy.jpg",
      desc: "Kelulusan modul kesiapan kerja, literasi finansial, dan pengembangan soft skill kepemimpinan muda dalam program You RISE powered by DBS Foundation.",
      tech: ["Financial Literacy", "Workplace Readiness", "Soft Skills", "Leadership"],
      verifyUrl: "https://www.dbs.com"
    }
  ];

  function cvRelic(w, h, f) {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const x = c.getContext("2d");
    f(x, w, h);
    return c.toDataURL();
  }

  function relicRows(R, P) {
    return function(x) {
      R.forEach(function(r, j) {
        for (let i = 0; i < r.length; i++) {
          if (P[r[i]]) {
            x.fillStyle = P[r[i]];
            x.fillRect(i, j, 1, 1);
          }
        }
      });
    };
  }

  const relicCP = { o: "#ff7a1a", y: "#ffe27a", k: "#2a2230", w: "#e8dcc0", W: "#fff5da", s: "#b8a888" };
  const relicCandleBody = [];
  for (let q = 0; q < 10; q++) relicCandleBody.push("Wwwwwws");
  relicCandleBody.push("WwwSwws", "kkkkkkk");

  const relicCandleA = cvRelic(7, 19, relicRows(["...o...", "..oyo..", "..oyo..", ".oyyyo.", ".oyyyo.", "..ooo..", "...k..."].concat(relicCandleBody), relicCP));
  const relicCandleB = cvRelic(7, 19, relicRows(["..o....", "..oyo..", ".oyyo..", ".oyyyo.", ".oyyyo.", "..ooo..", "...k..."].concat(relicCandleBody), relicCP));
  document.querySelectorAll("[data-relic-candle]").forEach((e) => {
    e.src = e.dataset.relicCandle === "a" ? relicCandleA : relicCandleB;
  });

  const relicSeal = cvRelic(16, 16, function(x) {
    for (let j = 0; j < 16; j++) {
      for (let i = 0; i < 16; i++) {
        const d = Math.hypot(i - 7.5, j - 7.5);
        if (d < 7.6) {
          x.fillStyle = d < 6 ? "#b3263d" : "#8e1b2c";
          if (d > 6.6 && (i * 7 + j * 3) % 5 === 0) x.fillStyle = "#5e0f1c";
          x.fillRect(i, j, 1, 1);
        }
      }
    }
    relicRows(["...g...", ".ooooo.", "ooXoXoo", "ooooooo", "oXXXXXo", ".ooooo."], { g: "#7fe08a", o: "#f6c445", X: "#8e1b2c" })({
      fillRect: function(a, b, c, d) { x.fillRect(a + 4, b + 5, c, d); },
      set fillStyle(v) { x.fillStyle = v; }
    });
  });
  const relicSealEl = document.getElementById("relicSealImg");
  if (relicSealEl) relicSealEl.src = relicSeal;

  const relicWeb = cvRelic(20, 20, function(x) {
    x.fillStyle = "#ffffffaa";
    for (let j = 0; j < 20; j++) {
      for (let i = 0; i < 20; i++) {
        const d = Math.hypot(i, j);
        if (i === 0 || j === 0 || i === j || i === 2 * j || j === 2 * i || Math.abs(d - 6) < 0.55 || Math.abs(d - 11) < 0.55 || Math.abs(d - 16) < 0.55) {
          x.fillRect(i, j, 1, 1);
        }
      }
    }
  });
  const relicWebLEl = document.getElementById("relicWebL");
  const relicWebREl = document.getElementById("relicWebR");
  if (relicWebLEl) relicWebLEl.src = relicWeb;
  if (relicWebREl) relicWebREl.src = relicWeb;

  const relicBat = cvRelic(9, 5, relicRows(["b.......b", "bb.b.b.bb", "bbbbbbbbb", ".bb.b.bb.", "..b...b.."], { b: "#b78cff" }));
  document.querySelectorAll(".relic-bat-icon").forEach((e) => { e.src = relicBat; });

  let relicActive = 0;
  const relicCertImg = document.getElementById("relicCertImg");
  const relicHang = document.getElementById("relicHang");
  const relicRight = document.getElementById("relicRight");
  const relicCnt = document.getElementById("relicCnt");
  const relicRar = document.getElementById("relicRar");
  const relicOrg = document.getElementById("relicOrg");
  const relicTtl = document.getElementById("relicTtl");
  const relicDsc = document.getElementById("relicDsc");
  const relicRns = document.getElementById("relicRns");
  const relicVerifyLink = document.getElementById("relicVerifyLink");
  const relicTrack = document.getElementById("relicTrack");
  const relicPrev = document.getElementById("relicPrev");
  const relicNext = document.getElementById("relicNext");

  function showRelic(n, anim) {
    if (!certificates.length) return;
    relicActive = (n + certificates.length) % certificates.length;
    const r = certificates[relicActive];

    if (relicCertImg) {
      relicCertImg.src = r.pxImg || r.img;
      relicCertImg.className = "relic-cert-img px";
    }
    if (relicCnt) relicCnt.textContent = `RELIK ${String(relicActive + 1).padStart(2, "0")} / ${String(certificates.length).padStart(2, "0")}`;
    if (relicRar) {
      relicRar.textContent = `★ ${r.rarity.toUpperCase()}`;
      relicRar.style.color = r.color;
    }
    if (relicOrg) relicOrg.textContent = r.issuer;
    if (relicTtl) relicTtl.textContent = r.title;
    if (relicDsc) relicDsc.textContent = r.desc;
    if (relicVerifyLink) relicVerifyLink.href = r.verifyUrl;

    if (relicRns) {
      relicRns.innerHTML = r.tech.map(t => `<span class="relic-rn">${t}</span>`).join("");
    }

    if (relicTrack) {
      relicTrack.innerHTML = certificates.map((x, i) => `
        <button type="button" class="relic-tb ${i === relicActive ? "on" : ""}" data-idx="${i}">
          <img src="${x.pxImg || x.img}" alt="${x.title}">
          <div>
            <b>${x.shortTitle || x.title}</b>
            <small>${x.issuer}</small>
          </div>
        </button>
      `).join("");
      const activeBtn = relicTrack.querySelector('.relic-tb.on');
      if (activeBtn) {
        const offset = activeBtn.offsetLeft - (relicTrack.clientWidth / 2) + (activeBtn.clientWidth / 2);
        relicTrack.scrollTo({ left: Math.max(0, offset), behavior: 'smooth' });
      }
    }

    if (anim) {
      [relicHang, relicRight].forEach(el => {
        if (!el) return;
        el.classList.remove("relic-chg");
        void el.offsetWidth;
        el.classList.add("relic-chg");
      });
    }
  }

  let relicAutoTimer = null;
  let isRelicSectionVisible = false;

  function nextRelicAutoSlide() {
    showRelic(relicActive + 1, true);
  }

  function startRelicAutoSlide() {
    stopRelicAutoSlide();
    if (!isRelicSectionVisible) return;
    relicAutoTimer = setInterval(nextRelicAutoSlide, 4500);
  }

  function stopRelicAutoSlide() {
    if (relicAutoTimer) {
      clearInterval(relicAutoTimer);
      relicAutoTimer = null;
    }
  }

  const relicSectionEl = document.getElementById('sertificat');
  if (relicSectionEl) {
    relicSectionEl.addEventListener('mouseenter', stopRelicAutoSlide);
    relicSectionEl.addEventListener('mouseleave', () => {
      if (isRelicSectionVisible) startRelicAutoSlide();
    });

    if ('IntersectionObserver' in window) {
      const relicObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isRelicSectionVisible = entry.isIntersecting;
          if (isRelicSectionVisible) {
            startRelicAutoSlide();
          } else {
            stopRelicAutoSlide();
          }
        });
      }, { threshold: 0.15 });
      relicObs.observe(relicSectionEl);
    } else {
      isRelicSectionVisible = true;
      startRelicAutoSlide();
    }
  }

  if (relicTrack) {
    relicTrack.addEventListener("click", (e) => {
      const b = e.target.closest(".relic-tb");
      if (b && Number(b.dataset.idx) !== relicActive) {
        showRelic(Number(b.dataset.idx), true);
        if (isRelicSectionVisible) startRelicAutoSlide();
        playSound('click');
      }
    });
  }

  if (relicPrev) {
    relicPrev.addEventListener("click", () => {
      showRelic(relicActive - 1, true);
      if (isRelicSectionVisible) startRelicAutoSlide();
      playSound('click');
    });
  }
  if (relicNext) {
    relicNext.addEventListener("click", () => {
      showRelic(relicActive + 1, true);
      if (isRelicSectionVisible) startRelicAutoSlide();
      playSound('click');
    });
  }

  const relicZoomModal = document.getElementById("relicZoomModal");
  const relicZoomImg = document.getElementById("relicZoomImg");
  const relicDarkOverlay = document.getElementById("relicDarkOverlay");
  const btnToggleZoomTorch = document.getElementById("btnToggleZoomTorch");
  const btnCloseZoomModal = document.getElementById("btnCloseZoomModal");
  const btnZoomRelicQuick = document.getElementById("btnZoomRelicQuick");
  const btnZoomRelicDoc = document.getElementById("btnZoomRelicDoc");

  function openRelicZoom() {
    if (!relicZoomModal || !relicZoomImg) return;
    const r = certificates[relicActive];
    relicZoomImg.src = r.img;
    relicZoomImg.className = "relic-zm-img";
    relicZoomModal.classList.remove("lit");
    if (btnToggleZoomTorch) btnToggleZoomTorch.textContent = "💡 Terangi semua";
    relicZoomModal.hidden = false;
    playSound('blip');
  }

  function closeRelicZoom() {
    if (!relicZoomModal) return;
    relicZoomModal.hidden = true;
    playSound('click');
  }

  if (btnZoomRelicQuick) btnZoomRelicQuick.addEventListener("click", (e) => { e.stopPropagation(); openRelicZoom(); });
  if (btnZoomRelicDoc) btnZoomRelicDoc.addEventListener("click", openRelicZoom);
  if (btnCloseZoomModal) btnCloseZoomModal.addEventListener("click", closeRelicZoom);

  if (btnToggleZoomTorch) {
    btnToggleZoomTorch.addEventListener("click", function() {
      const isLit = relicZoomModal.classList.toggle("lit");
      this.textContent = isLit ? "🌑 Redupkan" : "💡 Terangi semua";
      playSound('toggle');
    });
  }

  function moveZoomTorch(e) {
    if (!relicDarkOverlay) return;
    const t = e.touches ? e.touches[0] : e;
    relicDarkOverlay.style.setProperty("--mx", t.clientX + "px");
    relicDarkOverlay.style.setProperty("--my", t.clientY + "px");
  }

  if (relicDarkOverlay) {
    relicDarkOverlay.addEventListener("pointermove", moveZoomTorch, { passive: true });
    relicDarkOverlay.addEventListener("pointerdown", moveZoomTorch, { passive: true });
    relicDarkOverlay.addEventListener("touchmove", moveZoomTorch, { passive: true });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && relicZoomModal && !relicZoomModal.hidden) {
      closeRelicZoom();
    }
    if (relicZoomModal && relicZoomModal.hidden) {
      if (e.key === "ArrowLeft") {
        showRelic(relicActive - 1, true);
        if (isRelicSectionVisible) startRelicAutoSlide();
      }
      if (e.key === "ArrowRight") {
        showRelic(relicActive + 1, true);
        if (isRelicSectionVisible) startRelicAutoSlide();
      }
    }
  });

  showRelic(0, false);

  const mascotTypeMap = {
    'type-pumpkin': { label: '🎃 Labu Ceria (Pumpkin Sprite)', icon: '🎃', role: 'Pumpkin Sprite' },
    'type-ghost': { label: '👻 Hantu Imut (Friendly Ghost)', icon: '👻', role: 'Friendly Ghost' },
    'type-bat': { label: '🦇 Kelelawar Malam (Night Bat)', icon: '🦇', role: 'Night Bat' },
    'type-cat': { label: '🐱 Kucing Hitam (Midnight Cat)', icon: '🐱', role: 'Midnight Cat' },
    'type-skeleton': { label: '💀 Tengkorak Santuy (Chibi Skeleton)', icon: '💀', role: 'Chibi Skeleton' },
    'type-wizard': { label: '🧙‍♂️ Penyihir Cilik (Little Wizard)', icon: '🧙‍♂️', role: 'Little Wizard' },
    'type-frog': { label: '🐸 Katak Rawa (Swamp Guardian Toad)', icon: '🐸', role: 'Swamp Guardian Toad' },
    'type-voyager': { label: '🎭 Tamu Bertopeng (Mysterious Voyager)', icon: '🎭', role: 'Mysterious Voyager' }
  };

  const R = [
    {
      n: "Moonlit Manor",
      e: "🏚️",
      s: [0.5, 0.24],
      c: ["#7a54b8", "#5b3a8c", "#3d2766"],
      a: [255, 226, 122],
      d: "Rumah besar di bawah naungan bulan purnama abadi. Tempat pusat segala cerita dan takdir, di mana para penjaga menyambut tamu dengan kebijaksanaan malam.",
      p: [
        ["Grand Hall", "Aula megah penyambut tamu sanctum", 0.44, 0.2],
        ["Attic Library", "Perpustakaan kitab mantra kuno", 0.57, 0.16],
        ["Black Cat Garden", "Taman rahasia kucing hitam berkabut", 0.58, 0.31]
      ]
    },
    {
      n: "Whispering Graveyard",
      e: "💀",
      s: [0.22, 0.36],
      c: ["#7d8aa0", "#5d6a7d", "#434d5e"],
      a: [200, 210, 225],
      d: "Pemakaman tua tenang yang diselimuti kabut perak. Di sini roh-roh ramah saling bersenda gurau di antara batu nisan dan denting musik 8-bit.",
      p: [
        ["Tombstone Row", "Barisan nisan kuno pahlawan masa lalu", 0.16, 0.31],
        ["Lantern Crypt", "Kripta keramat dengan lentera biru abadi", 0.27, 0.42],
        ["Old Chapel", "Kapel tua tempat berkumpulnya jiwa santai", 0.28, 0.29]
      ]
    },
    {
      n: "Pumpkin Hollow",
      e: "🎃",
      s: [0.8, 0.38],
      c: ["#e08a2c", "#c8741f", "#9a5316"],
      a: [255, 210, 60],
      d: "Lembah ladang labu raksasa yang bercahaya oranye hangat. Setiap labu menyala dengan semangat pantang menyerah dan aroma kayu manis musim gugur.",
      p: [
        ["Gourd Gate", "Gerbang kayu lentera labu utama", 0.74, 0.33],
        ["Jack's Farm", "Kebun lentera labu magis berpanen emas", 0.86, 0.44],
        ["Scarecrow Hill", "Bukit jerami dengan pemandangan lembah ceria", 0.85, 0.3]
      ]
    },
    {
      n: "Batwing Caverns",
      e: "🦇",
      s: [0.3, 0.7],
      c: ["#8a4848", "#6b3030", "#4a2020"],
      a: [183, 140, 255],
      d: "Gua kristal violet yang berdengung kepakan sayap kelelawar. Labirin lorong bawah tanah yang menyimpan rahasia sonar dan jalan pintas tersembunyi.",
      p: [
        ["Echo Grotto", "Gua kristal gema tanpa batas", 0.24, 0.66],
        ["Moon Roost", "Sarang puncak kelelawar pengintai", 0.35, 0.63],
        ["Guano Falls", "Mata air mineral gelap berpendar ungu", 0.33, 0.78]
      ]
    },
    {
      n: "Bubbling Bog",
      e: "🧪",
      s: [0.58, 0.7],
      c: ["#57a05e", "#3f7a45", "#2c5a33"],
      a: [140, 255, 110],
      d: "Rawa zamrud berkabut tebal yang selalu menggelegak dengan ramuan alkimia. Tempat penelitian magis para penyihir muda dan habitat katak penjaga teratai.",
      p: [
        ["Cauldron Pond", "Danau kuali alkimia berasap hijau", 0.51, 0.65],
        ["Toad Hut", "Gubuk teratai sang penjaga rawa", 0.65, 0.77],
        ["Fogwood", "Hutan lumut fosfor yang menyala", 0.67, 0.63]
      ]
    },
    {
      n: "Ghost Ship Bay",
      e: "⚓",
      s: [0.83, 0.72],
      c: ["#4aa5a5", "#3b8a8a", "#2a6a6a"],
      a: [240, 240, 255],
      d: "Teluk misterius tempat kapal hantu bercahaya toska berlabuh dari samudra dimensi. Tempat singgah para musafir lintas alam yang membawa pesan rahasia.",
      p: [
        ["Wreck Dock", "Dermaga kayu terapung kapal legendaris", 0.77, 0.67],
        ["Siren Rock", "Karang laut bersenandung kidung samudra", 0.89, 0.77],
        ["Old Lighthouse", "Mercusuar berkabut pemandu jalan dimensi", 0.85, 0.63]
      ]
    }
  ];

  const defaultMascots = [
    { n: "Luna", i: "🐱", r: "Midnight Cat", b: "Meong! Arsip bayangan tercatat rapi dan tanpa bug.", g: 0, x: 0.48, y: 0.32 },
    { n: "Boo Casper", i: "👻", r: "Friendly Ghost", b: "Halo pengembara! Senang bertemu teman baru di pemakaman!", g: 1, x: 0.18, y: 0.46 },
    { n: "Skully", i: "💀", r: "Chibi Skeleton", b: "Hidup santuy sambil ngopi di atas nisan, musik 8-bit tetap jalan!", g: 1, x: 0.23, y: 0.50 },
    { n: "Pumpkin Pete", i: "🎃", r: "Pumpkin Sprite", b: "Lentera oranye kami akan selalu menerangi jalan pulangmu!", g: 2, x: 0.76, y: 0.46 },
    { n: "Battie", i: "🦇", r: "Night Bat", b: "Sonar aktif! Siap bermanuver di langit malam dan bangkit lagi!", g: 3, x: 0.31, y: 0.72 },
    { n: "Archie", i: "🧙‍♂️", r: "Little Wizard", b: "Satu tetes ramuan, seribu baris kode tercipta! Semangat belajar!", g: 4, x: 0.53, y: 0.73 },
    { n: "Gully", i: "🐸", r: "Marsh Scout", b: "Ribbit! Awas lumpur licin, ikuti jejak daun teratai fosfor!", g: 4, x: 0.61, y: 0.70 },
    { n: "Pengunjung Misterius", i: "🎭", r: "Dimensional Voyager", b: "Aku berlayar melintasi dimensi untuk mengagumi semesta portofolio ini.", g: 5, x: 0.77, y: 0.70 }
  ];

  const safeRegionAnchors = [
    [0.48, 0.32], // Moonlit Manor (Region 0)
    [0.21, 0.44], // Whispering Graveyard (Region 1)
    [0.76, 0.46], // Pumpkin Hollow (Region 2)
    [0.31, 0.72], // Batwing Caverns (Region 3)
    [0.56, 0.72], // Bubbling Bog (Region 4)
    [0.77, 0.70]  // Ghost Ship Bay (Region 5)
  ];

  const defaultMX = {
    "Luna": {
      o: "Menara Jam Hantu, Moonlit Manor",
      d: "Kucing hitam penjaga arsip takdir Moonlit Manor yang bermata zamrud kembar.",
      m: "Dilahirkan di bawah gerhana purnama merah di lantai tertinggi Menara Jam Hantu. Luna memiliki kemampuan mencium keanehan kode dan bug sebelum program dijalankan. Selalu menemani para pengelana yang mencari arah di tengah labirin malam.",
      h: [["Boo Casper", "Sahabat Karib"], ["Archie", "Mitra Alkimia"], ["Pengunjung Misterius", "Pengamat Dimensi"]]
    },
    "Boo Casper": {
      o: "Tombstone Row, Whispering Graveyard",
      d: "Hantu cilik berhati lembut yang mengapung ramah menyapa setiap tamu yang melintas.",
      m: "Berbeda dari hantu menyeramkan pada umumnya, Casper memilih menyebarkan senyuman dan kehangatan. Setiap senja ia melayang dari barisan nisan kuno menuju kapel untuk menyalakan lilin persahabatan bagi siapa pun yang singgah.",
      h: [["Skully", "Rekan Sekubur"], ["Luna", "Sahabat Karib"], ["Pumpkin Pete", "Kawan Festival"]]
    },
    "Skully": {
      o: "Old Chapel, Whispering Graveyard",
      d: "Tengkorak santuy penikmat kopi yang paling rileks dan bijak di seantero alam baka.",
      m: "Bangkit di teras kapel kuno pemakaman. Hobinya adalah mendengarkan alunan melodi chiptune 8-bit sembari menyeruput kopi hitam di atas peti batu. Skully percaya bahwa ketenangan pikiran adalah kunci menyelesaikan masalah serumit apa pun.",
      h: [["Boo Casper", "Rekan Sekubur"], ["Battie", "Teman Begadang"], ["Pumpkin Pete", "Rekan Pesta"]]
    },
    "Pumpkin Pete": {
      o: "Gourd Gate, Pumpkin Hollow",
      d: "Pangeran lentera labu musim gugur yang apinya tidak pernah redup oleh angin badai.",
      m: "Lahir dari benih labu emas terbesar di gerbang utama Pumpkin Hollow. Pete mengemban tugas sakral menyalakan api lentera setiap petang agar para musafir tidak tersesat di kegelapan rimba, menyebarkan aroma rempah manis yang menenangkan.",
      h: [["Luna", "Kawan Festival"], ["Gully", "Tetangga Lembah"], ["Battie", "Rival Lomba Lari"]]
    },
    "Battie": {
      o: "Echo Grotto, Batwing Caverns",
      d: "Kelelawar pengintai bersayap violet yang menguasai seni navigasi gema gua terdalam.",
      m: "Menetas di dalam kristal gema gua Batwing Caverns. Pandangan matanya tajam menembus pekatnya malam, mencatat setiap pergerakan di langit Land of Dusk. Sekalipun terjatuh berkali-kali, ia selalu bangkit mengepakkan sayap dengan gigih.",
      h: [["Skully", "Teman Begadang"], ["Boo Casper", "Sahabat Langit"], ["Gully", "Mitra Patroli"]]
    },
    "Archie": {
      o: "Cauldron Pond, Bubbling Bog",
      d: "Penyihir muda bersemangat tinggi yang meneliti sintesis ramuan magis dan algoritma kuno.",
      m: "Mengenakan topi runcing berukuran besar yang diwariskan leluhurnya. Dari gubuk rawa Bubbling Bog, Archie tak henti bereksperimen menggabungkan lumut bersinar dengan logika pemrograman untuk menciptakan mantra web yang memukau.",
      h: [["Gully", "Asisten Lab"], ["Luna", "Mitra Alkimia"], ["Pengunjung Misterius", "Rekan Diskusi"]]
    },
    "Gully": {
      o: "Toad Hut, Bubbling Bog",
      d: "Katak rawa cerdik pelindung teratai yang memiliki indera tajam membaca cuaca dan kabut.",
      m: "Penjaga setia jalan rawa berkabut. Gully mengenali setiap jengkal lumut dan genangan air magis. Ketika ia melompat dan berkwek nyaring, hal itu menandakan ada tamu istimewa yang baru saja tiba di perbatasan Land of Dusk.",
      h: [["Archie", "Asisten Lab"], ["Pumpkin Pete", "Tetangga Lembah"], ["Battie", "Mitra Patroli"]]
    },
    "Pengunjung Misterius": {
      o: "Wreck Dock, Ghost Ship Bay",
      d: "Musafir bertopeng yang berlayar melintasi samudra dimensi membawa kekaguman dunia luar.",
      m: "Sosok pengelana legendaris yang kapalnya berlabuh di Ghost Ship Bay setiap kali ada karya baru yang bangkit di Sanctum. Ia mengumpulkan jejak apresiasi dari para pengunjung dan menyimpannya dalam peti harta karun digital abadi.",
      h: [["Luna", "Pengamat Dimensi"], ["Boo Casper", "Tamu Kehormatan"], ["Archie", "Rekan Diskusi"]]
    }
  };

  const mascotGreetings = {
    "Luna": [
      "Meong! Menara Jam Hantu aman terkendali! 🌙",
      "Arsip bayangan mencatat kedatanganmu! ✨",
      "Sstt, rahasia malam ada di balik bintang! 🐱",
      "Kode bersih tanpa bug di malam purnama! 🐾"
    ],
    "Boo Casper": [
      "Halo pengembara! Mau kuajak keliling nisan? 👻",
      "Hehe, jangan takut, aku hantu ramah! ✨",
      "Lilin persahabatan selalu menyala untukmu! 🕯️",
      "Melayang di Whispering Graveyard asyik lho! 💨"
    ],
    "Skully": [
      "Santuy dulu, seruput kopi hitam panas! ☕💀",
      "Musik 8-bit paling asik dinikmati di kuburan! 🎵",
      "Rebahan di atas nisan itu nikmat abadi! 💀",
      "Tenang kawan, hidup cuma sekali, santuy selamanya! ☕"
    ],
    "Pumpkin Pete": [
      "Labu lentera kami siap menerangi jalanmu! 🎃",
      "Aroma kayu manis musim gugur harum sekali! 🍂",
      "Semangat terus dalam petualangan portofolio! 🔥",
      "Lentera oranye tidak akan pernah padam! 🎃"
    ],
    "Battie": [
      "Sonar gua mendeteksi keberadaanmu! 🦇",
      "Gema lorong kristal sangat merdu malam ini! 💎",
      "Sayap violet siap bermanuver di kegelapan! ⚡",
      "Jalan pintas gua ada di balik stalaktit ini! 🌌"
    ],
    "Archie": [
      "Satu tetes embun rawa untuk ramuan ajaib! 🧪",
      "Kuali alkimia meletupkan ide kreatif baru! 🧙‍♂️",
      "Belajar web dan mobile itu sangat magis! ✨",
      "Lumut fosfor ini bisa menyala ungu lho! 🔮"
    ],
    "Gully": [
      "Ribbit! Awas jangan terpeleset di lumpur rawa! 🐸",
      "Kwek! Daun teratai di sini empuk sekali! 🌿",
      "Selamat datang di rawa berkabut fosfor! 💚",
      "Lompat satu daun, sampai ke Toad Hut! 🐸"
    ],
    "Pengunjung Misterius": [
      "Kapal hantu dimensi membawa salam hangat! ⚓",
      "Karya di Sanctum ini sungguh menakjubkan! 🎭",
      "Aku datang dari seberang samudra kosmik! 🌌",
      "Jejak petualanganmu tercatat abadi di sini! 📜"
    ]
  };

  let visitorMascots = [];
  try {
    const raw = localStorage.getItem('kaka_land_of_dusk_mascots_v2');
    if (raw) visitorMascots = JSON.parse(raw);
  } catch (e) {}

  let M = [...defaultMascots];
  let MX = Object.assign({}, defaultMX);

  function addCompanionToMap(vm) {
    if (!vm || !vm.name) return false;
    const exists = M.some(m => m.isGuest && m.n === vm.name && m.b === '"' + vm.text + '"');
    if (exists) return false;

    const regIdx = typeof vm.region === 'number' && R[vm.region] ? vm.region : 2;
    const reg = R[regIdx] || R[0];

    M.push({
      id: vm.id || null,
      n: vm.name,
      i: vm.icon || '🎃',
      r: vm.role || 'Visitor Sprite',
      b: '"' + vm.text + '"',
      g: regIdx,
      x: typeof vm.x === 'number' ? vm.x : (reg.s[0] + (Math.random() * 0.08 - 0.04)),
      y: typeof vm.y === 'number' ? vm.y : (reg.s[1] + (Math.random() * 0.08 - 0.04)),
      isGuest: true,
      mascotType: vm.mascotType || vm.mascot_type
    });

    MX[vm.name] = {
      o: reg.p && reg.p[0] ? reg.p[0][0] + ", " + reg.n : reg.n,
      d: 'Pengunjung Sanctum berwujud ' + (vm.role || 'Visitor') + ' dari ' + reg.n + '.',
      m: 'Bergabung di Land of Dusk melalui Sanctum Guestbook. Pesan: "' + vm.text + '"',
      h: [[defaultMascots[regIdx % defaultMascots.length].n, "Teman Sekawasan"]]
    };

    return true;
  }

  // Preload cached visitor mascots from localStorage
  visitorMascots.forEach(vm => addCompanionToMap(vm));

  // -------------------------------------------------------------------------
  // SUPABASE CONFIGURATION FOR REAL-TIME COMPANIONS GUESTBOOK
  // -------------------------------------------------------------------------
  const DEFAULT_SUPABASE_URL = 'https://kzapgweajqioupgiufqf.supabase.co';
  const DEFAULT_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6YXBnd2VhanFpb3VwZ2l1ZnFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzMTM2MjYsImV4cCI6MjEwODg4OTYyNn0.5gPKB7lAydL9Z3qNkrff2ZA2dQ77PE-E9Q_FHtE8fFU';

  const SUPABASE_URL = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SUPABASE_URL) 
    || (typeof window !== 'undefined' && window.VITE_SUPABASE_URL) 
    || DEFAULT_SUPABASE_URL;
  const SUPABASE_ANON_KEY = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SUPABASE_ANON_KEY) 
    || (typeof window !== 'undefined' && window.VITE_SUPABASE_ANON_KEY) 
    || DEFAULT_SUPABASE_ANON_KEY;

  let supabaseClient = null;
  if (typeof window !== 'undefined' && window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY && !SUPABASE_URL.includes('YOUR_')) {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } catch (e) {
      console.warn('[Supabase] Init warning:', e);
    }
  }

  // Robust function to insert companion into Supabase (Client + direct REST fetch fallback)
  async function persistCompanionToSupabase(payload) {
    let inserted = false;
    if (supabaseClient) {
      try {
        const { data, error } = await supabaseClient.from('companions').insert([payload]);
        if (!error) {
          console.log('[Supabase] Inserted successfully via client:', payload.name);
          inserted = true;
        } else {
          console.warn('[Supabase] Client insert notice, trying REST fallback:', error.message);
        }
      } catch (err) {
        console.warn('[Supabase] Client insert exception, trying REST fallback:', err);
      }
    }
    if (!inserted && SUPABASE_URL && SUPABASE_ANON_KEY) {
      try {
        const res = await fetch(SUPABASE_URL + '/rest/v1/companions', {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
          },
          body: JSON.stringify([payload])
        });
        if (res.ok) {
          console.log('[Supabase] Inserted successfully via direct REST API:', payload.name);
          inserted = true;
        } else {
          const errText = await res.text();
          console.warn('[Supabase] REST insert response:', res.status, errText);
        }
      } catch (e) {
        console.warn('[Supabase] REST fetch failed:', e);
      }
    }
    return inserted;
  }

  async function loadSupabaseCompanions() {
    let rows = null;
    // 1. Try via Supabase JS client
    if (supabaseClient) {
      try {
        const { data, error } = await supabaseClient
          .from('companions')
          .select('*')
          .order('created_at', { ascending: true })
          .limit(100);
        if (!error && Array.isArray(data)) {
          rows = data;
        }
      } catch (e) {
        console.warn('[Supabase] Client fetch error, falling back to REST:', e);
      }
    }

    // 2. Direct REST API fallback if client was unavailable or errored
    if (!rows && SUPABASE_URL && SUPABASE_ANON_KEY) {
      try {
        const res = await fetch(SUPABASE_URL + '/rest/v1/companions?select=*&order=created_at.asc&limit=100', {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
          }
        });
        if (res.ok) {
          rows = await res.json();
        }
      } catch (err) {
        console.warn('[Supabase] Direct REST fetch notice:', err);
      }
    }

    if (Array.isArray(rows) && rows.length > 0) {
      let addedCount = 0;
      rows.forEach(row => {
        const companion = {
          id: row.id,
          name: row.name || 'Pengunjung Anonim',
          role: row.role || 'Visitor Sprite',
          icon: row.icon || '🎃',
          mascotType: row.mascot_type || 'type-pumpkin',
          region: typeof row.region === 'number' ? row.region : 2,
          text: row.message || '',
          x: typeof row.x === 'number' ? row.x : null,
          y: typeof row.y === 'number' ? row.y : null,
          time: row.created_at ? new Date(row.created_at).getTime() : Date.now()
        };
        if (addCompanionToMap(companion)) addedCount++;
      });

      if (addedCount > 0) {
        updateHUDCount();
        if (lodRgs) {
          lodRgs.innerHTML = R.map((r, i) => {
            const count = M.filter((m) => m.g === i).length;
            return '<button class="rg" data-i="' + i + '" style="left:' + (r.s[0] * 100) + '%;top:' + (r.s[1] * 100) + '%"><b>' + r.e + '</b><span>' + r.n + ' (' + count + ')</span></button>';
          }).join('');
        }
        renderMascots();
      }
    }

    // Realtime subscription: Show newly inserted mascots on-the-fly
    if (supabaseClient) {
      try {
        supabaseClient
          .channel('public:companions')
          .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'companions' }, payload => {
            if (payload && payload.new) {
              const row = payload.new;
              const companion = {
                id: row.id,
                name: row.name,
                role: row.role,
                icon: row.icon,
                mascotType: row.mascot_type,
                region: row.region,
                text: row.message,
                x: row.x,
                y: row.y
              };
              if (addCompanionToMap(companion)) {
                updateHUDCount();
                renderMascots();
                playSound('blip');
                showToast('✨ Sahabat baru "' + companion.name + '" bergabung di Land of Dusk!');
              }
            }
          })
          .subscribe();
      } catch (err) {
        console.warn('[Supabase] Subscription error:', err);
      }
    }
  }

  const lodWrapper = document.getElementById('lodWrapper');
  const lodStage = document.getElementById('lodStage');
  const lodWorld = document.getElementById('lodWorld');
  const lodCv = document.getElementById('lodCv');
  const lodRoute = document.getElementById('lodRoute');
  const lodRgs = document.getElementById('lodRgs');
  const lodLayer = document.getElementById('lodLayer');
  const lodBk = document.getElementById('lodBk');
  const lodMascotToggle = document.getElementById('lodMascotToggle');
  const lodMascotToggleStatus = document.getElementById('lodMascotToggleStatus');
  const lodTtl = document.getElementById('lodTtl');
  const lodPanel = document.getElementById('lodPanel');
  const lodPh = document.getElementById('lodPh');
  const lodPb = document.getElementById('lodPb');
  const lodT0 = document.getElementById('lodT0');
  const lodT1 = document.getElementById('lodT1');
  const lodDt = document.getElementById('lodDt');
  const lodDtC = document.getElementById('lodDtC');
  const lodDtE = document.getElementById('lodDtE');
  const lodDtN = document.getElementById('lodDtN');
  const lodDtD = document.getElementById('lodDtD');
  const lodDtM = document.getElementById('lodDtM');
  const lodMore = document.getElementById('lodMore');
  const lodDtH = document.getElementById('lodDtH');
  const lodDtX = document.getElementById('lodDtX');
  const lodSnd = document.getElementById('lodSnd');
  const shadowTotalCount = document.getElementById('shadowTotalCount');

  const W = 256;
  const H = 144;
  const N = W * H;
  let cx = lodCv ? lodCv.getContext('2d') : null;
  let img = cx ? cx.createImageData(W, H) : null;
  const px = new Uint8ClampedArray(N * 4);
  const reg = new Int8Array(N).fill(-1);
  const bd = new Uint8Array(N);

  function rgb(h) {
    return [parseInt(h.substr(1, 2), 16), parseInt(h.substr(3, 2), 16), parseInt(h.substr(5, 2), 16)];
  }
  function hsh(x, y) {
    const n = Math.sin(x * 127.1 + y * 311.7 + 7) * 43758.5453;
    return n - Math.floor(n);
  }
  function vn(x, y) {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const xf = x - xi;
    const yf = y - yi;
    const u = xf * xf * (3 - 2 * xf);
    const v = yf * yf * (3 - 2 * yf);
    return hsh(xi, yi) * (1 - u) * (1 - v) + hsh(xi + 1, yi) * u * (1 - v) + hsh(xi, yi + 1) * (1 - u) * v + hsh(xi + 1, yi + 1) * u * v;
  }
  function fb(x, y) {
    return vn(x, y) * 0.6 + vn(x * 2, y * 2) * 0.3 + vn(x * 4, y * 4) * 0.1;
  }

  R.forEach((r) => {
    r.k = r.c.map(rgb);
  });

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const k = y * W + x;
      const u = x / W;
      const v = y / H;
      const e = Math.hypot((u - 0.5) / 0.5, (v - 0.5) / 0.5);
      const o = k * 4;
      let c;
      if (fb(u * 7, v * 4) + (1 - e) > 0.62) {
        const wu = u + (fb(u * 9 + 3, v * 5) - 0.5) * 0.14;
        const wv = v + (fb(u * 9, v * 5 + 7) - 0.5) * 0.14;
        let b = 0;
        let m = 9;
        R.forEach((r, i) => {
          const q = Math.hypot((wu - r.s[0]) * 1.78, wv - r.s[1]);
          if (q < m) {
            m = q;
            b = i;
          }
        });
        reg[k] = b;
        const n = fb(u * 42, v * 24) + ((x + y) & 1) * 0.05;
        c = n < 0.42 ? R[b].k[2] : n < 0.62 ? R[b].k[1] : R[b].k[0];
        if (hsh(x, y) > 0.991 || (x > 0 && reg[k - 1] === b && hsh(x - 1, y) > 0.991) || (y > 0 && reg[k - W] === b && hsh(x, y - 1) > 0.991)) {
          c = R[b].a;
        }
      } else {
        const n2 = fb(u * 30, v * 17);
        c = (n2 > 0.6 && ((x >> 1) + y) % 3 === 0) ? [40, 36, 102] : [26, 20, 71];
      }
      px[o] = c[0];
      px[o + 1] = c[1];
      px[o + 2] = c[2];
      px[o + 3] = 255;
    }
  }

  for (let k = 0; k < N; k++) {
    const x = k % W;
    const y = (k / W) | 0;
    const r = reg[k];
    const o = k * 4;
    let w = 0;
    let t = 0;
    let s = 0;
    [x > 0 ? k - 1 : -1, x < W - 1 ? k + 1 : -1, y > 0 ? k - W : -1, y < H - 1 ? k + W : -1].forEach((q) => {
      if (q < 0 || reg[q] === r) return;
      bd[k] = 1;
      if (r >= 0) {
        if (reg[q] < 0) w = 1;
        else t = 1;
      } else if (reg[q] >= 0) {
        s = 1;
      }
    });
    if (w) {
      px[o] = 14;
      px[o + 1] = 9;
      px[o + 2] = 28;
    } else if (t) {
      px[o] = px[o] * 0.6 + 102;
      px[o + 1] = px[o + 1] * 0.6 + 96;
      px[o + 2] = px[o + 2] * 0.6 + 86;
    } else if (s) {
      px[o] = 88;
      px[o + 1] = 84;
      px[o + 2] = 170;
    }
  }

  function paint(s, st) {
    if (!cx || !img) return;
    const d = img.data;
    const fo = st ? 0.36 : 0.72;
    for (let k = 0; k < N; k++) {
      const r = reg[k];
      const o = k * 4;
      const f = s < 0 ? 1 : (r === s ? 1.1 : fo);
      if (s >= 0 && r === s && bd[k]) {
        d[o] = 255;
        d[o + 1] = 138;
        d[o + 2] = 31;
      } else {
        d[o] = Math.min(255, px[o] * f);
        d[o + 1] = Math.min(255, px[o + 1] * f);
        d[o + 2] = Math.min(255, px[o + 2] * f);
      }
      d[o + 3] = 255;
    }
    cx.putImageData(img, 0, 0);
  }

  const EDGES = [[1, 0], [0, 2], [2, 5], [5, 4], [4, 3], [3, 1], [0, 4], [1, 4], [2, 4], [0, 5], [1, 2], [3, 5]];

  function buildRouteNetwork() {
    if (!lodRoute) return;
    const A = {};
    const P = {};
    let out = "";
    EDGES.forEach((g, n) => {
      [[g[0], g[1]], [g[1], g[0]]].forEach((p) => {
        const s = R[p[0]].s;
        const t = R[p[1]].s;
        (A[p[0]] = A[p[0]] || []).push({
          n: n,
          t: Math.atan2((t[1] - s[1]) * 900, (t[0] - s[0]) * 1600)
        });
      });
    });
    for (const r in A) {
      const L = A[r].sort((a, b) => a.t - b.t);
      let m0 = 0;
      let m1 = 0;
      L.forEach((q) => { m0 += q.t; });
      for (let i = 1; i < L.length; i++) {
        if (L[i].t - L[i - 1].t < 0.62) L[i].t = L[i - 1].t + 0.62;
      }
      L.forEach((q) => { m1 += q.t; });
      const sh = (m1 - m0) / L.length;
      L.forEach((q) => {
        const t = q.t - sh;
        P[q.n + "_" + r] = [
          R[r].s[0] * 1600 + Math.cos(t) * 165,
          R[r].s[1] * 900 + Math.sin(t) * 58
        ];
      });
    }
    EDGES.forEach((g, n) => {
      const a = P[n + "_" + g[0]];
      const b = P[n + "_" + g[1]];
      if (!a || !b) return;
      const dx = b[0] - a[0];
      const dy = b[1] - a[1];
      const l = Math.hypot(dx, dy) || 1;
      const k = (n % 2 ? -1 : 1) * Math.min(70, l * 0.12);
      const d = "M" + a[0] + "," + a[1] + " Q" + ((a[0] + b[0]) / 2 - dy / l * k) + "," + ((a[1] + b[1]) / 2 + dx / l * k) + " " + b[0] + "," + b[1];
      out += '<path class="rt1" d="' + d + '"/><path class="rt2" d="' + d + '"/>';
    });
    lodRoute.innerHTML = out;
  }
  buildRouteNetwork();

  let cur = -1;
  let hv = -1;
  let tab = 0;
  let opened = "";
  let isOverviewMascotsEnabled = false;
  try {
    const saved = localStorage.getItem('kaka_lod_mascots_overview');
    if (saved !== null) {
      isOverviewMascotsEnabled = saved === 'true';
    }
  } catch (_) {}

  function updateMascotToggleUI() {
    const statusText = isOverviewMascotsEnabled ? 'ON' : 'OFF';
    if (lodMascotToggle) {
      lodMascotToggle.classList.toggle('active', isOverviewMascotsEnabled);
    }
    if (lodMascotToggleStatus) lodMascotToggleStatus.textContent = statusText;
  }
  updateMascotToggleUI();

  function toggleMascotMode(e) {
    if (e) e.stopPropagation();
    isOverviewMascotsEnabled = !isOverviewMascotsEnabled;
    try {
      localStorage.setItem('kaka_lod_mascots_overview', String(isOverviewMascotsEnabled));
    } catch (_) {}
    updateMascotToggleUI();
    if (cur < 0) {
      renderMascots();
    }
    playSound('blip');
    const msg = isOverviewMascotsEnabled
      ? 'Mode Maskot Peta Aktif (ON): Maskot dapat dilihat berpatroli di seluruh peta!'
      : 'Mode Maskot Peta Nonaktif (OFF): Maskot disembunyikan di peta utama.';
    showToast(msg, 'Land of Dusk', isOverviewMascotsEnabled ? '👻' : '🗺️');
  }

  function updateHUDCount() {
    if (shadowTotalCount) {
      shadowTotalCount.textContent = M.length + " Sahabat Singgah";
    }
  }
  updateHUDCount();

  if (lodRgs) {
    lodRgs.innerHTML = R.map((r, i) => {
      const count = M.filter((m) => m.g === i).length;
      return '<button class="rg" data-i="' + i + '" style="left:' + (r.s[0] * 100) + '%;top:' + (r.s[1] * 100) + '%"><b>' + r.e + '</b><span>' + r.n + ' (' + count + ')</span></button>';
    }).join('');
  }

  function regAt(e) {
    if (!lodWorld) return -1;
    const b = lodWorld.getBoundingClientRect();
    const x = Math.floor((e.clientX - b.left) / b.width * W);
    const y = Math.floor((e.clientY - b.top) / b.height * H);
    return x < 0 || y < 0 || x >= W || y >= H ? -1 : reg[y * W + x];
  }

  function isInsideRegion(nx, ny, targetRegionIndex) {
    if (nx < 0.08 || nx > 0.92 || ny < 0.10 || ny > 0.88) return false;
    const cx = Math.floor(nx * W);
    const cy = Math.floor(ny * H);
    // Footprint check: 5x5 bounding box around mascot must strictly remain on targetRegionIndex
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        const px = cx + dx;
        const py = cy + dy;
        if (px < 0 || px >= W || py < 0 || py >= H) return false;
        if (reg[py * W + px] !== targetRegionIndex) return false;
      }
    }
    return true;
  }

  function escapeHTML(str) {
    return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function getMascotChibiHTML(m) {
    if (!m) return '';
    const name = typeof m === 'string' ? m : (m.n || m.name || '');
    const role = (m && (m.r || m.role)) || '';
    const type = (m && (m.mascotType || m.mascot_type)) || '';
    const icon = (m && (m.i || m.icon)) || '';
    const lowerName = name.toLowerCase();

    // 1. Ghost (Boo Casper, Friendly Ghost, 👻)
    if (name === 'Boo Casper' || role === 'Friendly Ghost' || type === 'type-ghost' || icon === '👻' || lowerName.includes('ghost') || lowerName.includes('casper') || lowerName.includes('hantu')) {
      return '<svg class="chibi-svg chibi-casper" viewBox="0 0 48 52"><path d="M 24 8 C 15 8 12 18 12 30 C 9 28 6 29 6 32 C 6 35 9 37 12 35 C 12 42 16 45 19 41 C 22 38 26 38 29 41 C 32 45 36 42 36 35 C 39 37 42 35 42 32 C 42 29 39 28 36 30 C 36 18 33 8 24 8 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="1.8"/><ellipse cx="17" cy="27" rx="3" ry="1.8" fill="#f472b6" opacity="0.85"/><ellipse cx="31" cy="27" rx="3" ry="1.8" fill="#f472b6" opacity="0.85"/><ellipse cx="19" cy="22" rx="2.4" ry="3.2" fill="#0f172a"/><ellipse cx="29" cy="22" rx="2.4" ry="3.2" fill="#0f172a"/><circle cx="20" cy="21" r="0.9" fill="#ffffff"/><circle cx="30" cy="21" r="0.9" fill="#ffffff"/><path d="M 22 26 Q 24 28 26 26" fill="none" stroke="#0f172a" stroke-width="1.4" stroke-linecap="round"/><path d="M 37 28 Q 44 24 43 19 Q 40 18 37 23" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/></svg>';
    }

    // 2. Skeleton (Skully, Chibi Skeleton, 💀)
    if (name === 'Skully' || role === 'Chibi Skeleton' || type === 'type-skeleton' || icon === '💀' || lowerName.includes('skully') || lowerName.includes('skeleton') || lowerName.includes('tengkorak')) {
      return '<svg class="chibi-svg chibi-skully" viewBox="0 0 48 52"><path d="M 24 33 L 24 45" stroke="#e2e8f0" stroke-width="2.5" stroke-linecap="round"/><path d="M 18 36 Q 24 34 30 36" fill="none" stroke="#e2e8f0" stroke-width="1.8" stroke-linecap="round"/><path d="M 17 39 Q 24 37 31 39" fill="none" stroke="#e2e8f0" stroke-width="1.8" stroke-linecap="round"/><path d="M 19 42 Q 24 40 29 42" fill="none" stroke="#e2e8f0" stroke-width="1.8" stroke-linecap="round"/><path d="M 20 46 Q 24 48 28 46" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/><path d="M 28 35 Q 36 36 34 42" fill="none" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/><g class="skully-coffee"><rect x="33" y="38" width="8" height="7" rx="1.5" fill="#78350f" stroke="#f59e0b" stroke-width="1"/><path d="M 41 40 Q 44 41.5 41 43" fill="none" stroke="#f59e0b" stroke-width="1"/><path class="steam" d="M 35 36 Q 36 34 35 32 M 38 36 Q 39 34 38 31" fill="none" stroke="#fef08a" stroke-width="0.9" opacity="0.8"/></g><g class="skully-head"><path d="M 14 20 C 14 10 34 10 34 20 C 34 24 31 25 31 28 C 31 30 29 31 24 31 C 19 31 17 30 17 28 C 17 25 14 24 14 20 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.6"/><ellipse class="skull-eye l" cx="19.5" cy="19.5" rx="3.5" ry="4" fill="#0f172a"/><circle class="skull-pupil l" cx="20" cy="19" r="1.2" fill="#38bdf8"/><ellipse class="skull-eye r" cx="28.5" cy="19.5" rx="3.5" ry="4" fill="#0f172a"/><circle class="skull-pupil r" cx="28" cy="19" r="1.2" fill="#38bdf8"/><path d="M 24 23 L 23 25 L 25 25 Z" fill="#1e293b"/><path d="M 20 28 L 28 28 M 22 27 L 22 29 M 24 27 L 24 29 M 26 27 L 26 29" stroke="#64748b" stroke-width="1" stroke-linecap="round"/><path d="M 26 12 L 28 14 L 27 16" fill="none" stroke="#cbd5e1" stroke-width="0.8"/><g class="skull-sweat"><path d="M 11 15 Q 9 17 11 18 Q 12 17 11 15 Z" fill="#38bdf8"/><path d="M 37 14 Q 39 16 37 17 Q 36 16 37 14 Z" fill="#38bdf8"/></g></g></svg>';
    }

    // 3. Pumpkin (Pumpkin Pete, Pumpkin Sprite, 🎃)
    if (name === 'Pumpkin Pete' || role === 'Pumpkin Sprite' || type === 'type-pumpkin' || icon === '🎃' || lowerName.includes('pete') || lowerName.includes('pumpkin') || lowerName.includes('labu')) {
      return '<svg class="chibi-svg chibi-pete" viewBox="0 0 48 52"><defs><radialGradient id="gd-pete" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#fdba74"/><stop offset="60%" stop-color="#ea580c"/><stop offset="100%" stop-color="#9a3412"/></radialGradient></defs><path d="M 24 16 Q 25 8 28 7 Q 31 6 30 10 Q 29 14 26 16" fill="#15803d" stroke="#166534" stroke-width="1.2"/><path d="M 27 11 Q 32 10 33 13 Q 34 16 31 15" fill="none" stroke="#22c55e" stroke-width="1.2" stroke-linecap="round"/><ellipse cx="16" cy="31" rx="9" ry="13" fill="#ea580c" stroke="#7c2d12" stroke-width="1.2"/><ellipse cx="32" cy="31" rx="9" ry="13" fill="#ea580c" stroke="#7c2d12" stroke-width="1.2"/><ellipse cx="24" cy="31" rx="10" ry="14" fill="url(#gd-pete)" stroke="#7c2d12" stroke-width="1.4"/><polygon points="18,25 22,28 17,29" fill="#fef08a" stroke="#f59e0b" stroke-width="0.8"/><polygon points="30,25 31,29 26,28" fill="#fef08a" stroke="#f59e0b" stroke-width="0.8"/><polygon points="24,28 23,31 25,31" fill="#fef08a"/><path d="M 17 33 L 19 35 L 21 34 L 23 36 L 25 34 L 27 35 L 29 33 Q 24 39 17 33 Z" fill="#fef08a" stroke="#f59e0b" stroke-width="0.8"/><circle cx="11" cy="33" r="2.5" fill="#ea580c" stroke="#7c2d12" stroke-width="1"/><circle cx="37" cy="33" r="2.5" fill="#ea580c" stroke="#7c2d12" stroke-width="1"/></svg>';
    }

    // 4. Bat (Battie, Night Bat, 🦇)
    if (name === 'Battie' || role === 'Night Bat' || type === 'type-bat' || icon === '🦇' || lowerName.includes('battie') || lowerName.includes('bat') || lowerName.includes('kelelawar')) {
      return '<svg class="chibi-svg chibi-battie" viewBox="0 0 48 52"><path class="bat-wing l" d="M 16 28 C 10 20 4 23 3 28 C 4 33 8 32 10 37 C 12 34 14 36 17 34 Z" fill="#581c87" stroke="#a855f7" stroke-width="1.4"/><path class="bat-wing r" d="M 32 28 C 38 20 44 23 45 28 C 44 33 40 32 38 37 C 36 34 34 36 31 34 Z" fill="#581c87" stroke="#a855f7" stroke-width="1.4"/><ellipse cx="24" cy="31" rx="10" ry="11" fill="#3b0764" stroke="#c084fc" stroke-width="1.6"/><polygon points="17,23 13,11 20,18" fill="#581c87" stroke="#c084fc" stroke-width="1.2"/><polygon points="16,21 14,14 18,18" fill="#f43f5e"/><polygon points="31,23 35,11 28,18" fill="#581c87" stroke="#c084fc" stroke-width="1.2"/><polygon points="32,21 34,14 30,18" fill="#f43f5e"/><ellipse cx="20" cy="28" rx="2.4" ry="2.8" fill="#ef4444"/><circle cx="19.5" cy="27.5" r="0.9" fill="#ffffff"/><ellipse cx="28" cy="28" rx="2.4" ry="2.8" fill="#ef4444"/><circle cx="27.5" cy="27.5" r="0.9" fill="#ffffff"/><path d="M 21 33 Q 24 36 27 33" fill="none" stroke="#f3e8ff" stroke-width="1.2"/><polygon points="21,33 22,36 23,33" fill="#ffffff"/><polygon points="25,33 26,36 27,33" fill="#ffffff"/><path d="M 21 42 L 21 44 M 27 42 L 27 44" stroke="#c084fc" stroke-width="1.5" stroke-linecap="round"/></svg>';
    }

    // 5. Cat (Luna, Midnight Cat, 🐱)
    if (name === 'Luna' || role === 'Midnight Cat' || type === 'type-cat' || icon === '🐱' || lowerName.includes('luna') || lowerName.includes('cat') || lowerName.includes('kucing')) {
      return '<svg class="chibi-svg chibi-luna" viewBox="0 0 48 52"><path class="cat-tail" d="M 32 38 Q 42 36 41 27 Q 40 24 37 25" fill="none" stroke="#1e1b4b" stroke-width="2.6" stroke-linecap="round"/><ellipse cx="24" cy="33" rx="10" ry="11" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.6"/><polygon points="15,22 13,10 21,17" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.2"/><polygon points="15,20 14,13 19,17" fill="#ec4899"/><polygon points="33,22 35,10 27,17" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.2"/><polygon points="33,20 34,13 29,17" fill="#ec4899"/><polygon points="24,9 20,18 28,18" fill="#4338ca" stroke="#fbbf24" stroke-width="1"/><ellipse cx="24" cy="18" rx="6" ry="1.8" fill="#312e81" stroke="#fbbf24" stroke-width="0.8"/><path d="M 23 16 Q 24 14 25 16" fill="none" stroke="#fde047" stroke-width="1"/><ellipse cx="19" cy="27" rx="3" ry="3.5" fill="#fde047"/><ellipse cx="19" cy="27" rx="1" ry="3" fill="#0f172a"/><ellipse cx="29" cy="27" rx="3" ry="3.5" fill="#fde047"/><ellipse cx="29" cy="27" rx="1" ry="3" fill="#0f172a"/><polygon points="24,31 23,32.5 25,32.5" fill="#f472b6"/><path d="M 15 31 L 8 30 M 15 33 L 9 34 M 33 31 L 40 30 M 33 33 L 39 34" stroke="#818cf8" stroke-width="1" stroke-linecap="round"/><circle cx="20" cy="42" r="2.2" fill="#312e81" stroke="#6366f1" stroke-width="1"/><circle cx="28" cy="42" r="2.2" fill="#312e81" stroke="#6366f1" stroke-width="1"/></svg>';
    }

    // 6. Wizard (Archie, Little Wizard, 🧙‍♂️)
    if (name === 'Archie' || role === 'Little Wizard' || type === 'type-wizard' || icon === '🧙‍♂️' || lowerName.includes('archie') || lowerName.includes('wizard') || lowerName.includes('penyihir')) {
      return '<svg class="chibi-svg chibi-archie" viewBox="0 0 48 52"><path d="M 17 32 L 14 45 L 34 45 L 31 32 Z" fill="#312e81" stroke="#6366f1" stroke-width="1.4"/><path d="M 24 32 L 24 45" stroke="#fbbf24" stroke-width="1.2"/><g class="alchem-flask"><path d="M 33 38 L 35 34 L 37 34 L 39 38 C 41 41 38 45 35 45 C 32 45 31 41 33 38 Z" fill="#06b6d4" stroke="#a5f3fc" stroke-width="1"/><path d="M 32.5 40 C 33 44 38 44 38.5 40 Z" fill="#22c55e"/><circle cx="35" cy="41" r="0.8" fill="#ffffff"/><circle cx="36.5" cy="39" r="0.6" fill="#ffffff"/></g><circle cx="24" cy="27" r="7.5" fill="#fed7aa"/><path d="M 18 29 C 18 36 24 39 24 39 C 24 39 30 36 30 29 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/><ellipse cx="21" cy="26" rx="1.8" ry="2" fill="#0f172a"/><circle cx="21.5" cy="25.5" r="0.7" fill="#38bdf8"/><ellipse cx="27" cy="26" rx="1.8" ry="2" fill="#0f172a"/><circle cx="26.5" cy="25.5" r="0.7" fill="#38bdf8"/><circle cx="24" cy="28.5" r="1" fill="#f97316"/><path d="M 12 23 Q 24 19 36 23 Q 24 21 12 23 Z" fill="#1e1b4b"/><ellipse cx="24" cy="22" rx="14" ry="3.5" fill="#4338ca" stroke="#818cf8" stroke-width="1.2"/><path d="M 15 21 Q 20 8 30 6 Q 26 12 32 20 Z" fill="#3730a3" stroke="#818cf8" stroke-width="1.2"/><path d="M 16 20 Q 24 18 31 20" stroke="#f59e0b" stroke-width="2.5" fill="none"/><polygon points="24,17 25,19 27,19 25.5,20.5 26,22.5 24,21 22,22.5 22.5,20.5 21,19 23,19" fill="#fef08a"/></svg>';
    }

    // 7. Toad / Frog (Gully, Swamp Guardian Toad, 🐸)
    if (name === 'Gully' || role === 'Swamp Guardian Toad' || type === 'type-frog' || icon === '🐸' || lowerName.includes('gully') || lowerName.includes('frog') || lowerName.includes('toad') || lowerName.includes('katak')) {
      return '<svg class="chibi-svg chibi-gully" viewBox="0 0 48 52"><ellipse cx="24" cy="33" rx="12" ry="11" fill="#22c55e" stroke="#15803d" stroke-width="1.6"/><ellipse cx="24" cy="35" rx="8" ry="7" fill="#86efac"/><circle cx="17" cy="21" r="5.5" fill="#22c55e" stroke="#15803d" stroke-width="1.4"/><circle cx="17" cy="21" r="4" fill="#ffffff"/><circle cx="17.5" cy="21" r="2.2" fill="#0f172a"/><circle cx="18" cy="20" r="0.8" fill="#ffffff"/><circle cx="31" cy="21" r="5.5" fill="#22c55e" stroke="#15803d" stroke-width="1.4"/><circle cx="31" cy="21" r="4" fill="#ffffff"/><circle cx="30.5" cy="21" r="2.2" fill="#0f172a"/><circle cx="30" cy="20" r="0.8" fill="#ffffff"/><ellipse cx="16" cy="32" rx="2.5" ry="1.6" fill="#f472b6" opacity="0.8"/><ellipse cx="32" cy="32" rx="2.5" ry="1.6" fill="#f472b6" opacity="0.8"/><path d="M 18 30 Q 24 35 30 30" fill="none" stroke="#14532d" stroke-width="1.6" stroke-linecap="round"/><path d="M 12 36 Q 9 37 11 39 M 36 36 Q 39 37 37 39" stroke="#15803d" stroke-width="1.8" stroke-linecap="round"/><ellipse cx="17" cy="43" rx="3.5" ry="1.8" fill="#16a34a"/><ellipse cx="31" cy="43" rx="3.5" ry="1.8" fill="#16a34a"/></svg>';
    }

    // 8. Mysterious Voyager (Pengunjung Misterius, Mysterious Voyager, 🎭 / 👤)
    return '<svg class="chibi-svg chibi-voyager" viewBox="0 0 48 52"><path d="M 16 28 L 12 46 L 36 46 L 32 28 Z" fill="#0f172a" stroke="#6366f1" stroke-width="1.4"/><path d="M 24 28 L 24 46" stroke="#f59e0b" stroke-width="1.5"/><circle cx="24" cy="40" r="1.5" fill="#fef08a"/><path d="M 13 25 C 12 11 36 11 35 25 C 35 29 33 31 24 32 C 15 31 13 29 13 25 Z" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.6"/><ellipse cx="24" cy="24" rx="8.5" ry="9" fill="#020617"/><path d="M 18 20 C 18 17 30 17 30 20 C 30 26 27 28 24 28 C 21 28 18 26 18 20 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/><path d="M 19.5 21 Q 21.5 20 22.5 22" stroke="#38bdf8" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M 28.5 21 Q 26.5 20 25.5 22" stroke="#38bdf8" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M 24 33 L 24 37 M 22 36 Q 24 38 26 36" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round" fill="none"/></svg>';
  }

  function sayMascotGreeting(mascotName, customText) {
    const el = document.querySelector('.mc[data-m="' + mascotName + '"]');
    if (!el) return;
    const bubble = el.querySelector('.mc-bubble');
    if (!bubble) return;
    const textSpan = bubble.querySelector('span');
    const pool = mascotGreetings[mascotName] || ["Halo traveler! ✨", "Selamat datang di Land of Dusk! 🎃"];
    const text = customText || pool[Math.floor(Math.random() * pool.length)];
    if (textSpan) textSpan.textContent = text;
    bubble.classList.add('show');
    clearTimeout(el._bubbleTimer);
    el._bubbleTimer = setTimeout(() => {
      bubble.classList.remove('show');
    }, 3400);
  }

  function renderMascots() {
    if (!lodLayer) return;

    function attachMascotHoverEvents() {
      lodLayer.querySelectorAll('.mc').forEach((el) => {
        const onHover = (e) => {
          if (el._isScared) return;
          const name = el.dataset.m;
          if (name) {
            sayMascotGreeting(name);
          }
        };
        el.addEventListener('mouseenter', onHover);
        el.addEventListener('pointerenter', onHover);
      });
    }

    if (cur < 0) {
      if (!isOverviewMascotsEnabled) {
        lodLayer.innerHTML = '';
        return;
      }
      const mascotsHtml = M.map((m) => {
        return '<div class="mc" data-m="' + escapeHTML(m.n) + '" style="left:' + (m.x * 100) + '%;top:' + (m.y * 100) + '%">' +
          '<div class="mc-bubble"><span></span></div>' +
          '<div class="mc-avatar">' + getMascotChibiHTML(m) + '</div>' +
          '<em>' + escapeHTML(m.n) + '</em>' +
          '</div>';
      }).join('');
      lodLayer.innerHTML = mascotsHtml;
      attachMascotHoverEvents();
      return;
    }
    const r = R[cur];
    const pinsHtml = (r && r.p)
      ? r.p.map((p) => '<div class="pl" style="left:' + (p[2] * 100) + '%;top:' + (p[3] * 100) + '%"><i></i><span>' + p[0] + '</span></div>').join('')
      : '';

    const visibleMascots = M.filter((m) => m.g === cur);
    const mascotsHtml = visibleMascots.map((m) => {
      return '<div class="mc" data-m="' + escapeHTML(m.n) + '" style="left:' + (m.x * 100) + '%;top:' + (m.y * 100) + '%">' +
        '<div class="mc-bubble"><span></span></div>' +
        '<div class="mc-avatar">' + getMascotChibiHTML(m) + '</div>' +
        '<em>' + escapeHTML(m.n) + '</em>' +
        '</div>';
    }).join('');

    lodLayer.innerHTML = pinsHtml + mascotsHtml;
    attachMascotHoverEvents();
  }

  function roamMascots() {
    if (cur < 0 && !isOverviewMascotsEnabled) return;
    const visibleMascots = cur >= 0 ? M.filter((m) => m.g === cur) : M;
    visibleMascots.forEach((m) => {
      if (m._isScared) return;

      // Ensure mascot's current position is strictly on safe dry land; if not, immediately pull to safe anchor
      if (!isInsideRegion(m.x, m.y, m.g)) {
        const anchor = safeRegionAnchors[m.g] || [0.5, 0.5];
        m.x = anchor[0];
        m.y = anchor[1];
        const el = document.querySelector('.mc[data-m="' + m.n + '"]');
        if (el) {
          el.style.left = (m.x * 100) + '%';
          el.style.top = (m.y * 100) + '%';
        }
      }

      // Gentle, controlled roam step so mascots never leap across borders or onto coastline
      const stepDist = 0.006 + Math.random() * 0.010;
      const angle = Math.random() * Math.PI * 2;
      const nx = m.x + Math.cos(angle) * stepDist;
      const ny = m.y + Math.sin(angle) * stepDist;

      if (isInsideRegion(nx, ny, m.g)) {
        m.x = nx;
        m.y = ny;
        const el = document.querySelector('.mc[data-m="' + m.n + '"]');
        if (el) {
          el.style.left = (m.x * 100) + '%';
          el.style.top = (m.y * 100) + '%';
          const avatar = el.querySelector('.mc-avatar');
          if (avatar) {
            if (Math.cos(angle) < -0.15) {
              avatar.style.transform = 'scaleX(-1)';
            } else if (Math.cos(angle) > 0.15) {
              avatar.style.transform = 'scaleX(1)';
            }
          }
        }
      } else {
        const anchor = safeRegionAnchors[m.g] || [0.5, 0.5];
        const dx = anchor[0] - m.x;
        const dy = anchor[1] - m.y;
        const dist = Math.hypot(dx, dy) || 1;
        const nudgeX = m.x + (dx / dist) * 0.010;
        const nudgeY = m.y + (dy / dist) * 0.010;
        if (isInsideRegion(nudgeX, nudgeY, m.g)) {
          m.x = nudgeX;
          m.y = nudgeY;
        } else {
          m.x = anchor[0];
          m.y = anchor[1];
        }
        const el = document.querySelector('.mc[data-m="' + m.n + '"]');
        if (el) {
          el.style.left = (m.x * 100) + '%';
          el.style.top = (m.y * 100) + '%';
        }
      }
    });
  }

  setInterval(roamMascots, 2500);

  setInterval(() => {
    if (cur < 0 && !isOverviewMascotsEnabled) return;
    const list = cur >= 0 ? M.filter((m) => m.g === cur) : M;
    if (list.length === 0) return;
    const randomMascot = list[Math.floor(Math.random() * list.length)];
    sayMascotGreeting(randomMascot.n);
  }, 5200);

  function fill() {
    if (!lodPh || !lodPb || cur < 0) return;
    const r = R[cur];
    const ms = M.filter((m) => m.g === cur);
    lodPh.innerHTML = '<span class="em">' + r.e + '</span><h2>' + r.n + '</h2>';
    if (lodT0) lodT0.classList.toggle('on', tab === 0);
    if (lodT1) lodT1.classList.toggle('on', tab === 1);
    if (tab === 0) {
      lodPb.innerHTML = '<p>' + r.d + '</p><div class="lb lod-lb">Tempat &amp; Landmark Ikonik</div>' +
        r.p.map((p) => '<div class="cd lod-cd"><b>' + p[0] + '</b><small>' + p[1] + '</small></div>').join('');
    } else {
      lodPb.innerHTML = '<div class="lb lod-lb">Penghuni &amp; Pengunjung (' + ms.length + ')</div>' +
        ms.map((m) => {
          const o = opened === m.n;
          return '<div class="cd lod-cd mm lod-mm' + (o ? ' o' : '') + '" data-m="' + escapeHTML(m.n) + '">' +
            '<span class="av lod-av">' + getMascotChibiHTML(m) + '</span>' +
            '<div><b>' + escapeHTML(m.n) + '</b><small>' + escapeHTML(m.r) + '</small></div>' +
            '<u>Detail</u>' +
            (o ? '<q>' + escapeHTML(m.b) + '</q>' : '') +
            '</div>';
        }).join('');
    }
  }

  function sel(i) {
    cur = i;
    tab = 0;
    opened = "";
    const r = R[i];
    const z = 2.15;
    const nar = window.innerWidth <= 760;
    const cl = (t) => Math.max(-(z - 1) / 2, Math.min((z - 1) / 2, t));
    const tx = cl((nar ? 0.5 : 0.33) - 0.5 - z * (r.s[0] - 0.5));
    const ty = cl(0 - z * (r.s[1] - 0.5));
    if (lodWorld) {
      lodWorld.style.setProperty('--z', z);
      lodWorld.style.transform = 'translate(' + (tx * 100) + '%,' + (ty * 100) + '%) scale(' + z + ')';
    }
    if (lodStage) lodStage.classList.add('sel');
    if (lodBk) lodBk.hidden = false;
    if (lodMascotToggle) lodMascotToggle.hidden = true;
    if (lodTtl) lodTtl.textContent = 'Land of Dusk · ' + r.n;
    renderMascots();
    paint(i, 1);
    fill();
    if (lodPb) lodPb.scrollTop = 0;
    playSound('blip');
  }

  function back() {
    cur = -1;
    hv = -1;
    if (lodWorld) {
      lodWorld.style.setProperty('--z', 1);
      lodWorld.style.transform = '';
    }
    if (lodStage) lodStage.classList.remove('sel');
    if (lodBk) lodBk.hidden = true;
    if (lodMascotToggle) lodMascotToggle.hidden = false;
    if (lodTtl) lodTtl.textContent = 'Land of Dusk';
    renderMascots();
    paint(-1);
    playSound('click');
  }

  function openM(n) {
    tab = 1;
    opened = (opened === n ? '' : n);
    fill();
  }

  if (lodRgs) {
    lodRgs.addEventListener('click', (e) => {
      const b = e.target.closest('.rg');
      if (b) sel(+b.dataset.i);
    });
  }

  if (lodWorld) {
    lodWorld.addEventListener('click', (e) => {
      const m = e.target.closest('.mc');
      if (m) {
        openD(m.dataset.m);
        return;
      }
      if (e.target.closest('.rg')) return;
      const r = regAt(e);
      if (r >= 0 && r !== cur) sel(r);
    });

    lodWorld.addEventListener('mousemove', (e) => {
      const hoveredMc = e.target.closest('.mc');
      if (hoveredMc && hoveredMc.dataset.m && !hoveredMc._isScared) {
        if (!hoveredMc._lastHoverTime || Date.now() - hoveredMc._lastHoverTime > 2500) {
          hoveredMc._lastHoverTime = Date.now();
          sayMascotGreeting(hoveredMc.dataset.m);
        }
      }

      if (cur < 0) {
        const r = regAt(e);
        if (r !== hv) {
          hv = r;
          paint(r, 0);
          lodWorld.style.cursor = r >= 0 ? 'pointer' : 'default';
        }
      }

      const skullyEl = document.querySelector('.mc[data-m="Skully"]');
      if (skullyEl && !skullyEl._isScared && (!skullyEl._lastScared || Date.now() - skullyEl._lastScared > 7500)) {
        const rect = skullyEl.getBoundingClientRect();
        const dist = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
        if (dist < 50) {
          skullyEl._isScared = true;
          skullyEl._lastScared = Date.now();
          skullyEl.classList.add('scared');
          playSound('blip');

          const scaredQuotes = [
            "Waa kaget! Jangan sergap mendadak dong, kopiku tumpah nih! ☕💀💦",
            "Aduh copot tulangku! Kirain siapa! 😱💀",
            "Ampun Tuan! Aku tengkorak santuy penikmat damai! 💀☕",
            "Waduh waduh! Tulang rusukku bergetar! 🦴⚡"
          ];
          sayMascotGreeting("Skully", scaredQuotes[Math.floor(Math.random() * scaredQuotes.length)]);

          const mSkully = M.find((x) => x.n === "Skully");
          if (mSkully) {
            const angle = Math.atan2((rect.top + rect.height / 2) - e.clientY, (rect.left + rect.width / 2) - e.clientX);
            const fleeX = mSkully.x + Math.cos(angle) * 0.018;
            const fleeY = mSkully.y + Math.sin(angle) * 0.018;
            if (isInsideRegion(fleeX, fleeY, mSkully.g)) {
              mSkully.x = fleeX;
              mSkully.y = fleeY;
              skullyEl.style.left = (mSkully.x * 100) + '%';
              skullyEl.style.top = (mSkully.y * 100) + '%';
            }
          }

          setTimeout(() => {
            skullyEl.classList.remove('scared');
            skullyEl._isScared = false;
          }, 900);

          setTimeout(() => {
            sayMascotGreeting("Skully", "Huft... santuy lagi... lanjut ngopi ☕💀");
          }, 2400);
        }
      }
    });

    lodWorld.addEventListener('mouseover', (e) => {
      const mc = e.target.closest('.mc');
      if (!mc || !mc.dataset.m) return;
      if (e.relatedTarget && mc.contains(e.relatedTarget)) return;
      const now = Date.now();
      if (mc._lastGreet && now - mc._lastGreet < 3500) return;
      mc._lastGreet = now;
      sayMascotGreeting(mc.dataset.m);
      playSound('blip');
    });

    lodWorld.addEventListener('mouseleave', () => {
      if (cur < 0 && hv >= 0) {
        hv = -1;
        paint(-1);
      }
    });
  }

  if (lodPb) {
    lodPb.addEventListener('click', (e) => {
      const c = e.target.closest('[data-m]');
      if (!c) return;
      if (e.target.tagName === 'U') {
        openD(c.dataset.m);
      } else {
        openM(c.dataset.m);
      }
    });
  }

  if (lodT0) lodT0.addEventListener('click', () => { tab = 0; fill(); playSound('click'); });
  if (lodT1) lodT1.addEventListener('click', () => { tab = 1; fill(); playSound('click'); });
  if (lodBk) lodBk.addEventListener('click', back);
  if (lodMascotToggle) lodMascotToggle.addEventListener('click', toggleMascotMode);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lodDt && !lodDt.hidden) {
        lodDt.hidden = true;
      } else if (cur >= 0) {
        back();
      }
    }
  });

  paint(-1);
  renderMascots();
  loadSupabaseCompanions();

  function openD(n) {
    const m = M.find((x) => x.n === n);
    if (!m) return;
    const X = MX[n] || {
      o: R[m.g].n,
      d: m.r,
      m: m.b,
      h: []
    };
    const r = R[m.g];
    if (lodDtC) {
      lodDtC.style.background = 'radial-gradient(circle at 50% 38%, ' + r.c[0] + ', ' + r.c[2] + ' 70%, #140b22)';
      lodDtC.innerHTML = getMascotChibiHTML(m);
    }
    if (lodDtN) lodDtN.textContent = m.n;
    if (lodDtD) {
      lodDtD.innerHTML = '<span class="lod-role-pill">' + escapeHTML(m.r) + '</span><br>' +
        '<strong>🚩 Asal Usul / Kelahiran:</strong> <em>' + escapeHTML(X.o || r.n) + '</em><br>' +
        escapeHTML(X.d) + '<br><span class="q">' + escapeHTML(m.b) + '</span>';
    }
    if (lodDtM) {
      lodDtM.textContent = X.m;
      lodDtM.hidden = true;
    }
    if (lodMore) lodMore.textContent = 'Lebih Banyak Cerita';
    if (lodDtH) {
      if (X.h && X.h.length > 0) {
        lodDtH.innerHTML = X.h.map((h) => {
          const targetMascot = M.find((x) => x.n === h[0]) || { n: h[0], i: '✨' };
          return '<button type="button" class="hi" data-m="' + escapeHTML(h[0]) + '"><span class="av">' + getMascotChibiHTML(targetMascot) + '</span><small>' + escapeHTML(h[1]) + '</small><span class="hi-name">' + escapeHTML(h[0]) + '</span></button>';
        }).join('');
      } else {
        lodDtH.innerHTML = '<em style="color:#a89bc2;font-size:12px;">Belum ada relasi tercatat</em>';
      }
    }
    if (lodDt) lodDt.hidden = false;
    playSound('blip');
  }

  if (lodDtX) lodDtX.addEventListener('click', () => { if (lodDt) lodDt.hidden = true; playSound('click'); });
  if (lodDt) {
    lodDt.addEventListener('click', (e) => {
      if (e.target === lodDt) lodDt.hidden = true;
      const h = e.target.closest('.hi');
      if (h) openD(h.dataset.m);
    });
  }
  if (lodMore) {
    lodMore.addEventListener('click', (e) => {
      e.preventDefault();
      if (!lodDtM) return;
      lodDtM.hidden = !lodDtM.hidden;
      lodMore.textContent = lodDtM.hidden ? 'Lebih Banyak Cerita' : 'Lebih Sedikit Cerita';
      playSound('click');
    });
  }
  if (lodSnd) {
    lodSnd.addEventListener('click', () => playSound('blip'));
  }

  const shadowModalOverlay = document.getElementById('shadowModalOverlay');
  const openAriseModalBtn = document.getElementById('openAriseModalBtn');
  const closeShadowModalBtn = document.getElementById('closeShadowModalBtn');
  const shadowExtractionForm = document.getElementById('shadowExtractionForm');
  const shadowAuthorInput = document.getElementById('shadowAuthorInput');
  const shadowAuthorFieldWrap = document.getElementById('shadowAuthorFieldWrap');
  const shadowClassSelect = document.getElementById('shadowClassSelect');
  const shadowRegionSelect = document.getElementById('shadowRegionSelect');
  const shadowMessageInput = document.getElementById('shadowMessageInput');
  const shadowAnonCheckbox = document.getElementById('shadowAnonCheckbox');

  function openShadowModal() {
    if (!shadowModalOverlay) return;
    shadowModalOverlay.classList.add('open');
    shadowModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    playSound('blip');
  }

  function closeShadowModal() {
    if (!shadowModalOverlay) return;
    shadowModalOverlay.classList.remove('open');
    shadowModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    playSound('click');
  }

  if (openAriseModalBtn) openAriseModalBtn.addEventListener('click', openShadowModal);
  if (closeShadowModalBtn) closeShadowModalBtn.addEventListener('click', closeShadowModal);
  if (shadowModalOverlay) {
    shadowModalOverlay.addEventListener('click', (e) => {
      if (e.target === shadowModalOverlay) closeShadowModal();
    });
  }

  if (shadowAnonCheckbox && shadowAuthorInput && shadowAuthorFieldWrap) {
    shadowAnonCheckbox.addEventListener('change', () => {
      if (shadowAnonCheckbox.checked) {
        shadowAuthorInput.disabled = true;
        shadowAuthorInput.value = '';
        shadowAuthorInput.placeholder = 'Pengunjung Anonim (Guest)';
        shadowAuthorFieldWrap.style.opacity = '0.5';
      } else {
        shadowAuthorInput.disabled = false;
        shadowAuthorInput.placeholder = 'Nama Anda / Alias...';
        shadowAuthorFieldWrap.style.opacity = '1';
      }
      playSound('click');
    });
  }

  if (shadowExtractionForm) {
    shadowExtractionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = (shadowMessageInput ? shadowMessageInput.value : '').trim();
      if (!text) return;

      const isAnon = shadowAnonCheckbox ? shadowAnonCheckbox.checked : false;
      let name = 'Pengunjung Misterius';
      if (!isAnon && shadowAuthorInput && shadowAuthorInput.value.trim()) {
        name = shadowAuthorInput.value.trim();
      }

      const selectedType = shadowClassSelect ? shadowClassSelect.value : 'type-pumpkin';
      const typeInfo = mascotTypeMap[selectedType] || { label: '🎃 Labu Ceria', icon: '🎃', role: 'Pumpkin Sprite' };
      const regionIndex = shadowRegionSelect ? parseInt(shadowRegionSelect.value, 10) : 2;
      const targetRegion = R[regionIndex] || R[0];

      const newMascot = {
        name: name,
        role: typeInfo.role,
        icon: typeInfo.icon,
        mascotType: selectedType,
        region: regionIndex,
        text: text,
        time: Date.now(),
        x: targetRegion.s[0] + (Math.random() * 0.08 - 0.04),
        y: targetRegion.s[1] + (Math.random() * 0.08 - 0.04)
      };

      visitorMascots.push(newMascot);
      try {
        localStorage.setItem('kaka_land_of_dusk_mascots_v2', JSON.stringify(visitorMascots));
      } catch (err) {}

      addCompanionToMap(newMascot);

      // Asynchronously send to Supabase (via client or direct REST fallback)
      persistCompanionToSupabase({
        name: newMascot.name,
        role: newMascot.role,
        icon: newMascot.icon,
        mascot_type: newMascot.mascotType,
        region: newMascot.region,
        message: newMascot.text,
        x: newMascot.x,
        y: newMascot.y
      });

      updateHUDCount();

      if (lodRgs) {
        lodRgs.innerHTML = R.map((r, i) => {
          const count = M.filter((m) => m.g === i).length;
          return '<button class="rg" data-i="' + i + '" style="left:' + (r.s[0] * 100) + '%;top:' + (r.s[1] * 100) + '%"><b>' + r.e + '</b><span>' + r.n + ' (' + count + ')</span></button>';
        }).join('');
      }

      renderMascots();
      playSound('blip');

      const btn = document.getElementById('btnSubmitArise');
      if (btn) {
        const rect = btn.getBoundingClientRect();
        for (let i = 0; i < 6; i++) {
          const wisp = document.createElement('span');
          wisp.className = 'ghost-spirit';
          wisp.textContent = i % 2 === 0 ? '✨' : typeInfo.icon;
          wisp.style.left = (rect.left + rect.width / 2 + (Math.random() * 60 - 30)) + 'px';
          wisp.style.top = (rect.top + (Math.random() * 30 - 15)) + 'px';
          wisp.style.setProperty('--dx', (Math.random() * 120 - 60) + 'px');
          wisp.style.setProperty('--dy', (-80 - Math.random() * 60) + 'px');
          document.body.appendChild(wisp);
          setTimeout(() => wisp.remove(), 900);
        }
      }

      shadowExtractionForm.reset();
      if (shadowAuthorInput) {
        shadowAuthorInput.disabled = false;
        shadowAuthorInput.placeholder = 'Nama Anda / Alias...';
      }
      if (shadowAuthorFieldWrap) shadowAuthorFieldWrap.style.opacity = '1';

      closeShadowModal();
      sel(regionIndex);
      showToast('✨ Terima kasih! "' + name + '" (' + typeInfo.icon + ') kini bergabung di wilayah ' + targetRegion.n + '!');
    });
  }

  // -------------------------------------------------------------------------
  // 9. THE CRYPT ALTAR (VAULT 3D DOORS, CONTACT SECTION & CANDELABRAS)
  // -------------------------------------------------------------------------
  const candelabraLeft = document.getElementById('candelabraLeft');
  const candelabraRight = document.getElementById('candelabraRight');
  const altarContactForm = document.getElementById('altarContactForm');
  const altarTableMonolith = document.getElementById('altarTableMonolith');
  const btnUnlockAltar = document.getElementById('btnUnlockAltar');
  const btnCloseAltarVault = document.getElementById('btnCloseAltarVault');
  const btnCloseAltarBottom = document.getElementById('btnCloseAltarBottom');

  // Altar Vault 3D Doors: Open & Close Mechanism
  function openAltarVault() {
    if (!altarTableMonolith) return;
    playSound('stone');
    setTimeout(() => playSound('unroll'), 280);

    altarTableMonolith.classList.remove('vault-closed');
    altarTableMonolith.classList.add('vault-open');

    // Trigger subtle sacred ground tremor
    if (earthquakeContainer) {
      earthquakeContainer.classList.add('tremor');
      setTimeout(() => earthquakeContainer.classList.remove('tremor'), 550);
    }

    showToast('⚡ Segel Mezbah Terbuka! Gerbang Kripta Terbuka Lebar!');
  }

  function closeAltarVault() {
    if (!altarTableMonolith) return;
    playSound('stone');
    setTimeout(() => playSound('click'), 400);

    altarTableMonolith.classList.remove('vault-open');
    altarTableMonolith.classList.add('vault-closed');

    showToast('🔒 Gerbang Mezbah Kripta Tertutup & Tersegel Kembali!');
  }

  if (btnUnlockAltar) {
    btnUnlockAltar.addEventListener('click', openAltarVault);
  }

  if (btnCloseAltarVault) {
    btnCloseAltarVault.addEventListener('click', closeAltarVault);
  }

  if (btnCloseAltarBottom) {
    btnCloseAltarBottom.addEventListener('click', closeAltarVault);
  }

  // Interactive Candelabra Chimes and Flame Flares
  function flickerCandelabra(el, soundType) {
    if (!el) return;
    playSound(soundType || 'ghost');
    el.style.transform = 'scale(1.08) translateY(-6px)';
    setTimeout(() => {
      el.style.transform = '';
    }, 300);
  }

  if (candelabraLeft) {
    candelabraLeft.addEventListener('click', () => {
      flickerCandelabra(candelabraLeft, 'ghost');
      showToast('🕯️ Lilin arwah ungu berkobar memancarkan energi gaib!');
    });
  }

  if (candelabraRight) {
    candelabraRight.addEventListener('click', () => {
      flickerCandelabra(candelabraRight, 'toggle');
      showToast('🎃 Lilin labu oranye berkedip ramah menyambutmu!');
    });
  }

  // Trigger from Hero section button (Auto open Altar if closed)
  document.querySelectorAll('.summon-trigger-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          if (altarTableMonolith && altarTableMonolith.classList.contains('vault-closed')) {
            openAltarVault();
          }
        }, 700);
      }
      playSound('blip');
    });
  });

  const WEB3FORMS_KEY = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_WEB3FORMS_KEY) 
    ? import.meta.env.VITE_WEB3FORMS_KEY 
    : '33c1fbdf-f08c-48a2-8ef0-59cccb96b6fc';

  if (altarContactForm) {
    let isSubmitting = false;

    altarContactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const nameInput = document.getElementById('altarSenderName');
      const emailInput = document.getElementById('altarSenderEmail');
      const subjectInput = document.getElementById('altarSenderSubject');
      const messageInput = document.getElementById('altarSenderMessage');
      const btn = document.getElementById('btnSubmitAltar');

      const name = (nameInput?.value || 'Pengembara').trim();
      const email = (emailInput?.value || '').trim();
      const subject = (subjectInput?.value || 'Pesan dari Altar Keramat').trim();
      const message = (messageInput?.value || '').trim();

      if (!message || !email) return;

      isSubmitting = true;
      let originalBtnContent = '';
      if (btn) {
        originalBtnContent = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<span class="wax-stamp">⏳</span><span class="btn-text">MENTRANSMISIKAN MANTRA...</span>';
      }

      try {
        const payload = {
          access_key: WEB3FORMS_KEY,
          name: name,
          email: email,
          subject: `[Altar Necromancer] ${subject}`,
          message: message,
          from_name: `${name} (Via Altar Portfolio)`
        };

        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (data.success) {
          playSound('victory');

          if (btn) {
            const rect = btn.getBoundingClientRect();
            for (let i = 0; i < 6; i++) {
              const seal = document.createElement('span');
              seal.className = 'ghost-spirit';
              seal.textContent = i % 2 === 0 ? '🩸' : '🕯️';
              seal.style.left = (rect.left + rect.width / 2 + (Math.random() * 40 - 20)) + 'px';
              seal.style.top = (rect.top + (Math.random() * 20 - 10)) + 'px';
              seal.style.setProperty('--dx', (Math.random() * 80 - 40) + 'px');
              seal.style.setProperty('--dy', (-60 - Math.random() * 50) + 'px');
              document.body.appendChild(seal);
              setTimeout(() => seal.remove(), 850);
            }
          }

          showToast(`🩸 Segel lilin terukir! Pesan dari ${name} berhasil terkirim ke Kaka Andrea Yahya!`);
          altarContactForm.reset();
        } else {
          showToast(`⚠️ Transmisi gagal: ${data.message || 'Periksa kembali formulir Anda.'}`);
        }
      } catch (err) {
        showToast('⚠️ Gagal terhubung ke jaringan astral. Silakan periksa koneksi internet Anda!');
      } finally {
        isSubmitting = false;
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = originalBtnContent;
        }
      }
    });
  }

  // -------------------------------------------------------------------------
  // 10. Autonomous Mascot Characters (Skully & Pumpling)
  // -------------------------------------------------------------------------
  function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function waitMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const skullyQuotes = [
    "Salam, Tuan Necromancer! 💀",
    "Malam ini kode terasa begitu hidup...",
    "Jangan lupa git commit sebelum tengah malam!",
    "Hii... ada bug terkubur di baris 42!",
    "Skully siap membantumu membangkitkan proyek!",
    "Ngopi dulu, Tuan, biar mantranya manjur...",
    "Wah, desain kripta ini memikat sekali!",
    "Kuburanku sejuk dan empuk sekali! 🪦",
    "Tulang-tulangku bergetar kagum!"
  ];

  const pumplingQuotes = [
    "Trick or Treat! 🎃",
    "Labu manis penuh sihir JavaScript!",
    "Hehe, kode tanpa bug itu cuma mitos!",
    "Pondok nenek sihir hangat banget lho!",
    "Mencium aroma pull request baru!",
    "Malam yang seru untuk coding!",
    "Pumpling kenyang pie labu! 🥧",
    "Pumpling selalu siap berjaga!"
  ];

  const zombieQuotes = [
    "Braaaaains... eh maksudku, Codeeee! 🧟",
    "Baru bangkit dari kubur, siap tempur lagi!",
    "Jangan ajak aku ke rumah, aku suka di liang lahat! 🪦",
    "Tanah beracun ini rumah terbaikku!",
    "Merge conflict lebih seram daripada zombie!",
    "Raaargh! Kopi mana kopi? ☕",
    "Jalan pelan tapi commit pasti jalan terus!",
    "Ada bug yang bisa kudaur ulang nggak? 🧪"
  ];

  const witchQuotes = [
    "Hihihi! Butuh ramuan anti-bug? 🧙‍♀️",
    "Kuali di dalam pondok lagi mendidih lho! 🧪",
    "Sihir CSS-ku bisa bikin antarmuka memukau!",
    "Pumpling dan aku penghuni resmi pondok ini~ 🚪",
    "Abracadabra! Kode langsung berjalan mulus!",
    "Jangan biarkan zombie masuk, nanti lantainya kotor!",
    "Malam purnama yang sempurna untuk coding!",
    "Aroma ramuan manis semerbak dari cerobong! ✨"
  ];

  // -------------------------------------------------------------------------
  // Mascot Social Dialogues & Multi-Turn Conversations
  // -------------------------------------------------------------------------
  const mascotSocialDialogues = {
    // A (Skully) & B (Pumpling)
    'a-b': [
      {
        speaker1: "Hai Skully! Mau coba pie labu hangat buatanku? 🥧✨",
        speaker2: "Wah makasih Pumpling! Pas banget dicelup ke kopi hitamku! ☕💀",
        reaction1: "🥧", reaction2: "☕", heart: true
      },
      {
        speaker1: "Yo Pumpling! Kenapa malam ini auramu cerah banget? 🎃",
        speaker2: "Karena baru panen bug dan dibikin jadi permen manis! 🍬😋",
        reaction1: "✨", reaction2: "🎉", heart: true
      },
      {
        speaker1: "Pumpling, jangan kebanyakan ngemil nanti labumu bulet banget! 😂🎃",
        speaker2: "Hehe, biar menggelindingnya makin kenceng di panggung! 🥧✨",
        reaction1: "🤣", reaction2: "🥧", heart: true
      },
      {
        speaker1: "Santuy dulu Pumpling, temani aku ngopi di bawah rembulan! ☕💀",
        speaker2: "Siap Skully! Pemandangan kripta malam ini syahdu banget ya! 🌟🎃",
        reaction1: "☕", reaction2: "⭐", heart: true
      }
    ],
    // B (Pumpling) & D (Witch Hazel) - Cottage Roommates!
    'b-d': [
      {
        speaker1: "Hazel! Kuali di pondok udah mendidih, aroma rempahnya sedap! 🍲✨",
        speaker2: "Hihihi! Itu ramuan pie labu kayu manis spesial buatmu, Pumpling! 🪄🥧",
        reaction1: "🎃", reaction2: "🪄", heart: true
      },
      {
        speaker1: "Pumpling, topi sihirku tadi nggak sengaja kamu dudukin ya? 🧙‍♀️",
        speaker2: "Ups... pantesan rasanya empuk banget kayak kasur bulu! 😂🎃",
        reaction1: "🎩", reaction2: "🤣", heart: true
      },
      {
        speaker1: "Malam ini kita patroli keliling halaman pondok bareng yuk, Hazel! 🎃",
        speaker2: "Ayo! Biar nggak ada serangga bug yang mendekati sanctum! 🪄✨",
        reaction1: "🛡️", reaction2: "🔮", heart: true
      },
      {
        speaker1: "Hazel, tongkat bintangmu kerlap-kerlip terang banget! 🪄✨",
        speaker2: "Baru kuisi energi kristal ungu! Cantik kan, Pumpling? 💜🌟",
        reaction1: "✨", reaction2: "🪄", heart: true
      }
    ],
    // A (Skully) & C (Zombo) - Cemetery Roommates!
    'a-c': [
      {
        speaker1: "Braaaains... eh, Skully, liang kubur sebelahmu kosong nggak? 🪦🧟",
        speaker2: "Kosong bro! Tapi tanahnya dingin, bawa selimut lumut ya! 💀☕",
        reaction1: "🪦", reaction2: "☕", heart: true
      },
      {
        speaker1: "Yo Zombo! Serum hijau di tabungmu itu rasa apa sih? 🧪💀",
        speaker2: "Rasa matcha campur energi sintaks TypeScript murni! 🧪🧟",
        reaction1: "💀", reaction2: "🧪", heart: true
      },
      {
        speaker1: "Zombo, jangan lupa merge branch sebelum jam 12 malam! ⏰💀",
        speaker2: "Tenang bro, serum kodenya udah lolos unit test semua! 🧪🧟",
        reaction1: "⚡", reaction2: "💻", heart: true
      },
      {
        speaker1: "Skully... kopi hitammu tumpah ke tulang leher tuh! ☕😂",
        speaker2: "Waduh! Pantesan kerongkonganku anget tapi perut kosong melompong! 💀☕",
        reaction1: "🤣", reaction2: "☕", heart: true
      }
    ],
    // C (Zombo) & D (Witch Hazel)
    'c-d': [
      {
        speaker1: "Hazel... tolong jahit lagi lenganku pakai sihir benangmu dong! 🧵🧟",
        speaker2: "Abracadabra! Nah, sekarang lenganmu bisa ngetik 200 WPM! 🪄⚡",
        reaction1: "🧟", reaction2: "✨", heart: true
      },
      {
        speaker1: "Zombo! Jangan deket-deket ramuan kualiku, baumu kayak Lumut 404! 🧪🧙‍♀️",
        speaker2: "Raaagh... tapi ramuanmu warnanya persis minuman energiku! 🧪🧟",
        reaction1: "🧪", reaction2: "🌸", heart: true
      },
      {
        speaker1: "Zombo, mau ramuan pemulih kulit zombie beraroma melati? 🧪✨",
        speaker2: "Nggak usah Hazel, kulit hijau lumut ini udah style terkerenku! 😎🧟",
        reaction1: "😎", reaction2: "🪄", heart: true
      }
    ],
    // B (Pumpling) & C (Zombo)
    'b-c': [
      {
        speaker1: "Hai Zombo! Mau sepotong pie labu biar tenagamu pulih? 🥧🎃",
        speaker2: "Mauuu! Makasih Pumpling, kamu labu paling baik sedunia! 🧟‍♂️🥧",
        reaction1: "🥧", reaction2: "💖", heart: true
      },
      {
        speaker1: "Labu oranye... kamu keliatan kayak lentera pemandu malam! 🏮",
        speaker2: "Hehe, biar kita nggak tersesat di rimba repository! 🎃✨",
        reaction1: "🏮", reaction2: "✨", heart: true
      },
      {
        speaker1: "Zombo, jangan makan tanah kuburan terus, nih permen labu manis! 🍬🎃",
        speaker2: "Nyam nyam! Manis banget, energiku langsung 100%! ⚡🧟",
        reaction1: "🍬", reaction2: "⚡", heart: true
      }
    ],
    // A (Skully) & D (Witch Hazel)
    'a-d': [
      {
        speaker1: "Sore Hazel! Ada mantra instan buat beresin merge conflict? 💀☕",
        speaker2: "Tentu ada! Cukup taburkan debu bintang `git reset --hard`! 🪄✨",
        reaction1: "☕", reaction2: "🪄", heart: true
      },
      {
        speaker1: "Hazel, mau kubuatkan cangkir kopi sihir yang nggak pernah habis? ☕🔮",
        speaker2: "Wah idaman semua programmer! Langsung kubayar pakai permata kripta! 💀✨",
        reaction1: "☕", reaction2: "💎", heart: true
      },
      {
        speaker1: "Witch Hazel, tongkat bintangmu kinclong banget malam ini! ⭐💀",
        speaker2: "Baru kupoles pakai cairan pembersih kristal kripta! Indah kan? 🪄✨",
        reaction1: "✨", reaction2: "🌟", heart: true
      }
    ]
  };

  let isAnyMascotSocializing = false;

  function spawnMascotParticle(charEl, emoji) {
    if (!charEl || window.isEcoMode) return;
    const p = document.createElement('div');
    p.className = 'mascot-social-particle';
    p.textContent = emoji;
    const rect = charEl.getBoundingClientRect();
    p.style.left = (rect.left + rect.width / 2 - 14) + 'px';
    p.style.top = (rect.top - 24) + 'px';
    p.style.setProperty('--pdx', (Math.random() * 28 - 14) + 'px');
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1650);
  }

  function findNearbyAvailableMascot(mascot, maxDistance = 200) {
    if (!allMascots || !mascot || !mascot.el) return null;
    const p1 = mascot.el.offsetLeft;
    let closest = null;
    let minDist = maxDistance;

    for (const m of allMascots) {
      if (!m || m === mascot || !m.el) continue;
      if (m.el.offsetParent === null) continue;
      if (m.busy || m.sleeping || m.fleeing || m.insideCottage || m.isUnderground) continue;
      const dist = Math.abs(p1 - m.el.offsetLeft);
      if (dist <= minDist) {
        minDist = dist;
        closest = m;
      }
    }
    return closest;
  }

  async function triggerMascotSocialEncounter(m1, m2, customDialogue = null) {
    if (!m1 || !m2 || !m1.el || !m2.el || isAnyMascotSocializing) return false;
    if (m1.busy || m2.busy || m1.isUnderground || m2.isUnderground || m1.insideCottage || m2.insideCottage || m1.sleeping || m2.sleeping || m1.fleeing || m2.fleeing) {
      return false;
    }

    isAnyMascotSocializing = true;
    m1.busy = true;
    m2.busy = true;
    m1.el.classList.remove('walk');
    m2.el.classList.remove('walk');

    // Turn both mascots to face each other
    const p1 = m1.el.offsetLeft;
    const p2 = m2.el.offsetLeft;
    if (p1 < p2) {
      m1.el.classList.remove('look-l');
      m1.el.classList.add('look-r');
      m2.el.classList.remove('look-r');
      m2.el.classList.add('look-l');
    } else {
      m1.el.classList.remove('look-r');
      m1.el.classList.add('look-l');
      m2.el.classList.remove('look-l');
      m2.el.classList.add('look-r');
    }

    // Pick dialogue based on character pair
    const id1 = m1.el.id; // 'a', 'b', 'c', 'd'
    const id2 = m2.el.id;
    const key = `${id1}-${id2}`;
    const altKey = `${id2}-${id1}`;
    let list = mascotSocialDialogues[key] || mascotSocialDialogues[altKey];
    let isReversed = false;
    if (!mascotSocialDialogues[key] && mascotSocialDialogues[altKey]) {
      isReversed = true;
    }
    if (!list || !list.length) {
      list = [{
        speaker1: 'Yo kawan! Senang melihatmu malam ini! 👋✨',
        speaker2: 'Yo kawan! Malam yang indah untuk bertualang! 🎃💀',
        reaction1: '✨', reaction2: '💖', heart: true
      }];
    }

    const chosen = customDialogue || list[Math.floor(Math.random() * list.length)];
    const line1 = isReversed ? chosen.speaker2 : chosen.speaker1;
    const line2 = isReversed ? chosen.speaker1 : chosen.speaker2;
    const em1 = isReversed ? chosen.reaction2 : chosen.reaction1;
    const em2 = isReversed ? chosen.reaction1 : chosen.reaction2;

    try {
      // 1. Mascot 1 waves with raised glowing hand and speaks
      playMascotSound('click');
      m1.el.classList.add('hi', 'jump');
      spawnMascotParticle(m1.el, em1 || '💬');
      if (m1.bubble) {
        m1.bubble.textContent = line1;
        m1.bubble.classList.add('show');
      }
      await waitMs(350);
      m1.el.classList.remove('jump');

      await waitMs(2300);

      // 2. Mascot 2 responds, waves with glowing hand and speaks
      m1.el.classList.remove('hi');
      if (m1.bubble) m1.bubble.classList.remove('show');

      playMascotSound('click');
      m2.el.classList.add('hi', 'jump');
      spawnMascotParticle(m2.el, em2 || '💬');
      if (m2.bubble) {
        m2.bubble.textContent = line2;
        m2.bubble.classList.add('show');
      }
      await waitMs(350);
      m2.el.classList.remove('jump');

      await waitMs(2300);

      // 3. Shared joyful reaction (both cheer, hearts float)
      m2.el.classList.remove('hi');
      if (m2.bubble) m2.bubble.classList.remove('show');

      if (chosen.heart) {
        spawnMascotParticle(m1.el, '💖');
        spawnMascotParticle(m2.el, '💖');
        m1.el.classList.add('jump');
        m2.el.classList.add('jump');
        await waitMs(400);
        m1.el.classList.remove('jump');
        m2.el.classList.remove('jump');
      }

      await waitMs(300);
    } catch (err) {
      console.warn('Mascot encounter error recovered:', err);
    } finally {
      if (m1.bubble) m1.bubble.classList.remove('show');
      if (m2.bubble) m2.bubble.classList.remove('show');
      m1.el.classList.remove('hi');
      m2.el.classList.remove('hi');
      m1.busy = false;
      m2.busy = false;
      isAnyMascotSocializing = false;
    }

    return true;
  }

  class SpookyMascot {
    constructor(el, quotes, defaultGreeting, options = {}) {
      this.el = el;
      this.quotes = quotes;
      this.hello = defaultGreeting;
      this.homeType = options.homeType || 'house'; // 'house' or 'grave'
      this.homeId = options.homeId || null;
      this.canEnterHouse = (this.homeType === 'house');
      this.canEnterGrave = (this.homeType === 'grave');
      this.minLeftBound = (this.homeType === 'grave') ? 185 : 110;
      this.bubble = el ? el.querySelector('.bubble') : null;
      this.sleeping = false;
      this.fleeing = false;
      this.busy = false;
      this.insideCottage = false;
      this.isUnderground = false;

      if (this.el) {
        this.el.addEventListener('click', () => {
          playMascotSound('click');
          this.poke();
        });
      }
      this.loop();
    }

    async say(text, ms = 2600, wave = true) {
      if (!this.bubble || !this.el || this.busy || this.isUnderground) return;
      this.busy = true;
      this.bubble.textContent = text;
      this.bubble.classList.add('show');
      if (wave) this.el.classList.add('hi');
      await waitMs(ms);
      this.bubble.classList.remove('show');
      if (wave) this.el.classList.remove('hi');
      this.busy = false;
    }

    async blink() {
      if (!this.el || this.sleeping || this.fleeing || this.insideCottage || this.isUnderground) return;
      this.el.classList.add('blink');
      await waitMs(180);
      this.el.classList.remove('blink');
    }

    async look() {
      if (!this.el || this.sleeping || this.fleeing || this.insideCottage || this.isUnderground) return;
      const dir = Math.random() < 0.5 ? 'look-l' : 'look-r';
      this.el.classList.add(dir);
      await waitMs(randNum(700, 1500));
      this.el.classList.remove(dir);
    }

    async walk() {
      if (!this.el || this.sleeping || this.fleeing || this.insideCottage || this.isUnderground) return;
      const stageEl = this.el.parentElement || document.getElementById('stage');
      const isMobile = window.innerWidth <= 860;
      const W = (stageEl ? stageEl.clientWidth : window.innerWidth) - (isMobile ? 36 : 50);
      const from = this.el.offsetLeft;
      
      const minLeft = isMobile ? 65 : this.minLeftBound;
      const maxRightBound = Math.max(120, W - (isMobile ? 15 : 30));
      let to = randNum(minLeft, maxRightBound);
      
      const maxDist = isMobile ? randNum(60, 160) : randNum(140, 280);
      if (Math.abs(to - from) > maxDist) {
        to = to > from ? from + maxDist : from - maxDist;
      }
      to = Math.min(maxRightBound, Math.max(minLeft, to));

      const dur = Math.max(0.6, Math.abs(to - from) / (isMobile ? 75 : 95));
      const isLeft = to < from;

      this.el.style.transitionDuration = dur + 's';
      this.el.classList.remove('look-l', 'look-r');
      this.el.classList.add('walk', isLeft ? 'look-l' : 'look-r');
      this.el.style.left = to + 'px';
      
      await waitMs(dur * 1000);
      this.el.classList.remove('walk');

      if (!this.busy && !this.sleeping && !this.fleeing && !this.insideCottage && !this.isUnderground && !isAnyMascotSocializing) {
        const friend = findNearbyAvailableMascot(this, isMobile ? 130 : 175);
        if (friend && Math.random() < 0.65) {
          triggerMascotSocialEncounter(this, friend);
        }
      }
    }

    async enterGrave() {
      if (!this.canEnterGrave || !this.el || this.isUnderground || this.sleeping || this.fleeing || this.busy) return;
      const allGraves = [].slice.call(document.querySelectorAll('.gravesite.grave-item')).filter(g => {
        return window.getComputedStyle(g).display !== 'none';
      });
      if (!allGraves.length) return;

      const grave = allGraves[Math.floor(Math.random() * allGraves.length)];
      this.currentGrave = grave;
      this.busy = true;

      const isMobile = window.innerWidth <= 860;
      const minLeft = isMobile ? 65 : this.minLeftBound;
      const from = this.el.offsetLeft;
      const to = Math.max(minLeft, grave.offsetLeft - 8);
      const dur = Math.max(0.6, Math.abs(to - from) / 110);
      this.el.style.transitionDuration = dur + 's';
      this.el.classList.remove('look-l', 'look-r');
      this.el.classList.add('walk', to < from ? 'look-l' : 'look-r');
      this.el.style.left = to + 'px';
      await waitMs(dur * 1000);
      this.el.classList.remove('walk');

      // 2. Shake grave and burrow underground
      grave.classList.add('shaking');
      playMascotSound('stone');
      playMascotSound('ghost');
      this.el.classList.add('underground');
      this.isUnderground = true;

      const graveBubble = grave.querySelector('.grave-bubble');
      if (graveBubble) {
        graveBubble.textContent = this.el.id === 'a' 
          ? 'Skully lagi istirahat di liang kubur... 🪦' 
          : 'Zombo lagi bertapa di tanah beracun... 🧟';
        graveBubble.classList.add('show');
        setTimeout(() => graveBubble.classList.remove('show'), 2800);
      }

      await waitMs(450);
      grave.classList.remove('shaking');
      this.busy = false;

      // Rest underground for 5 to 8.5 seconds
      await waitMs(randNum(5000, 8500));

      // Rise back up autonomously
      if (this.isUnderground) {
        await this.riseFromGrave();
      }
    }

    // Grave Dwellers (Skeleton & Zombie): Resurrect and Rise from Grave
    async riseFromGrave(targetGrave) {
      if (!this.isUnderground || !this.el) return;
      this.busy = true;
      const allGraves = [].slice.call(document.querySelectorAll('.gravesite.grave-item'));
      const grave = targetGrave || this.currentGrave || allGraves[Math.floor(Math.random() * allGraves.length)];

      playMascotSound('stone');
      playMascotSound('arise');
      if (grave) grave.classList.add('shaking');

      if (grave && !window.isEcoMode) {
        const rect = grave.getBoundingClientRect();
        const isZombie = this.el.id === 'c';
        const glyphs = isZombie 
          ? ['🧪', '🍄', '🦠', '🌱', '💚', '✨'] 
          : ['🪨', '🌿', '🦴', '💀', '💜', '✨'];
        for (let i = 0; i < 8; i++) {
          const p = document.createElement('span');
          p.className = 'dirt-eruption-particle';
          p.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
          p.style.fontSize = randNum(14, 22) + 'px';
          p.style.left = (rect.left + rect.width / 2 + randNum(-20, 20)) + 'px';
          p.style.top = (rect.top + rect.height * 0.7 + randNum(-10, 10)) + 'px';
          p.style.setProperty('--dx', randNum(-75, 75) + 'px');
          p.style.setProperty('--dy', randNum(-95, -45) + 'px');
          document.body.appendChild(p);
          setTimeout(() => p.remove(), 850);
        }
      }

      this.el.classList.remove('underground');
      this.el.classList.add('rising');
      this.isUnderground = false;

      if (grave) {
        this.el.style.left = (grave.offsetLeft + 8) + 'px';
      }

      await waitMs(900);
      this.el.classList.remove('rising');
      if (grave) grave.classList.remove('shaking');
      this.busy = false;

      const quote = this.el.id === 'a' 
        ? 'Aku bangkit dari liang kubur! 💀✨' 
        : 'BRAAAINS! Zombo kembali dari kubur! 🧟⚡';
      await this.say(quote, 2400);

      await waitMs(400);
      await this.walk();
    }

    // House Dwellers (Pumpkin & Witch): Enter ONE of the two witch houses (Left Cottage or Right Manor Spire)
    async enterCottage() {
      if (!this.canEnterHouse || !this.el || this.sleeping || this.fleeing || this.busy || this.insideCottage) return;
      this.busy = true;

      const stageEl = this.el.parentElement || document.getElementById('stage');
      const isMobile = window.innerWidth <= 860;
      const manorX = stageEl ? Math.max(200, stageEl.clientWidth - 110) : (window.innerWidth - 140);
      const houses = isMobile
        ? [{ id: 'witchCottage', doorId: 'cottageDoor', bubbleId: 'cottageBubble', targetX: 38, name: 'Pondok Nenek Sihir' }]
        : [
            { id: 'witchCottage', doorId: 'cottageDoor', bubbleId: 'cottageBubble', targetX: 54, name: 'Pondok Nenek Sihir' },
            { id: 'witchManor', doorId: 'manorDoor', bubbleId: 'manorBubble', targetX: manorX, name: 'Menara Alkimia' }
          ];

      const chosenHouse = houses[Math.floor(Math.random() * houses.length)];
      this.currentOccupiedHouse = chosenHouse;
      const houseEl = document.getElementById(chosenHouse.id);
      const bubbleEl = document.getElementById(chosenHouse.bubbleId);

      const from = this.el.offsetLeft;
      const to = chosenHouse.targetX;
      const dur = Math.max(0.6, Math.abs(to - from) / 110);
      this.el.style.transitionDuration = dur + 's';
      this.el.classList.remove('look-l', 'look-r');
      this.el.classList.add('walk', to < from ? 'look-l' : 'look-r');
      this.el.style.left = to + 'px';
      await waitMs(dur * 1000);
      this.el.classList.remove('walk');

      if (houseEl) houseEl.classList.add('door-open');
      playMascotSound('stone');
      await waitMs(350);

      this.el.classList.add('entering');
      this.insideCottage = true;
      await waitMs(450);

      if (houseEl) houseEl.classList.remove('door-open');

      if (bubbleEl) {
        bubbleEl.textContent = this.el.id === 'd' 
          ? 'Witch Hazel lagi meracik ramuan rahasia! 🔮' 
          : 'Pumpling lagi ngemil pie labu hangat! 🥧';
        bubbleEl.classList.add('show');
        setTimeout(() => bubbleEl.classList.remove('show'), 2600);
      }

      this.busy = false;

      await waitMs(randNum(5000, 8500));

      if (this.insideCottage) {
        await this.exitCottage();
      }
    }

    async exitCottage() {
      if (!this.insideCottage || !this.el) return;
      this.busy = true;

      const stageEl = this.el.parentElement || document.getElementById('stage');
      const isMobile = window.innerWidth <= 860;
      const houses = isMobile
        ? [{ id: 'witchCottage', targetX: 42, name: 'Pondok Nenek Sihir' }]
        : [
            { id: 'witchCottage', targetX: 64, name: 'Pondok Nenek Sihir' },
            { id: 'witchManor', targetX: (stageEl ? stageEl.clientWidth - 130 : 600), name: 'Menara Alkimia' }
          ];

      let exitHouse = isMobile ? houses[0] : (this.currentOccupiedHouse || houses[0]);
      if (!isMobile && Math.random() < 0.45) {
        exitHouse = (exitHouse.id === 'witchCottage') ? houses[1] : houses[0];
      }

      const houseEl = document.getElementById(exitHouse.id);

      if (houseEl) houseEl.classList.add('door-open');
      playMascotSound('stone');
      await waitMs(350);

      this.insideCottage = false;
      this.el.classList.remove('entering');
      const startX = (exitHouse.id === 'witchManor') 
        ? (stageEl ? stageEl.clientWidth - 130 : 600) 
        : (isMobile ? 42 : 64);
      this.el.style.left = startX + 'px';
      await waitMs(300);

      const isRightHouse = (exitHouse.id === 'witchManor');
      const to = isRightHouse 
        ? Math.max(120, (stageEl ? stageEl.clientWidth - randNum(180, 300) : 500)) 
        : (isMobile ? randNum(55, 120) : randNum(140, 260));
      const from = this.el.offsetLeft;
      const dur = Math.max(0.6, Math.abs(to - from) / 100);
      this.el.style.transitionDuration = dur + 's';
      this.el.classList.add('walk', to < from ? 'look-l' : 'look-r');
      this.el.style.left = to + 'px';
      await waitMs(dur * 1000);
      this.el.classList.remove('walk');

      // 4. Close door
      if (houseEl) houseEl.classList.remove('door-open');
      this.busy = false;

      // 5. Speak after exiting
      const houseName = (exitHouse && exitHouse.name) ? exitHouse.name : 'Pondok Alkimia';
      const quote = this.el.id === 'd' 
        ? 'Ramuan baru dari ' + houseName + ' sudah siap! ✨' 
        : 'Pumpling kenyang! Ayo lanjut bertualang! 🎃';
      await this.say(quote, 2200);
    }

    async sleep() {
      if (!this.el || this.sleeping || this.fleeing || this.insideCottage || this.isUnderground) return;
      this.sleeping = true;
      this.el.classList.add('sleep');
      await waitMs(randNum(2500, 4500));
      await this.wake();
    }

    async wake() {
      if (!this.el || !this.sleeping) return;
      this.sleeping = false;
      this.el.classList.remove('sleep');
      this.el.classList.add('jump');
      await waitMs(350);
      this.el.classList.remove('jump');
    }

    async poke() {
      if (!this.el) return;
      if (this.isUnderground) {
        await this.riseFromGrave();
        return;
      }
      if (this.insideCottage) {
        await this.exitCottage();
        return;
      }
      if (this.sleeping) {
        await this.wake();
        await this.say('Hah?! Siapa mengusik tidurku?!', 1800, false);
      } else {
        // If a friend is nearby, initiate interactive companion greeting!
        const friend = findNearbyAvailableMascot(this, 210);
        if (friend && !friend.busy && !isAnyMascotSocializing) {
          const started = await triggerMascotSocialEncounter(this, friend);
          if (started) return;
        }

        this.el.classList.add('jump');
        const randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        await this.say(randomQuote, 2500, true);
        this.el.classList.remove('jump');
        await waitMs(400);
        await this.walk();
      }
    }

    async greetAutonomously() {
      if (this.sleeping || this.fleeing || this.busy || this.insideCottage || this.isUnderground) return;
      this.el.classList.add('jump');
      const randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
      await this.say(randomQuote, 2600, true);
      this.el.classList.remove('jump');
    }

    async flee(mx) {
      if (!this.el || this.fleeing || this.insideCottage || this.isUnderground) return;
      this.fleeing = true;
      if (this.sleeping) {
        this.sleeping = false;
        this.el.classList.remove('sleep');
      }
      const isMobile = window.innerWidth <= 860;
      const minLeft = isMobile ? 65 : this.minLeftBound;
      const stageEl = this.el.parentElement || document.getElementById('stage');
      const W = (stageEl ? stageEl.clientWidth : window.innerWidth) - (isMobile ? 36 : 80);
      const from = this.el.offsetLeft;
      const dir = (from + 38 < mx) ? -1 : 1;
      let to = from + dir * (isMobile ? randNum(60, 140) : randNum(160, 280));
      const maxRightBound = Math.max(120, W - (isMobile ? 20 : 250));
      if (to < minLeft || to > maxRightBound) {
        to = dir < 0 ? maxRightBound - randNum(0, 30) : minLeft + randNum(0, 30);
      }
      to = Math.min(maxRightBound, Math.max(minLeft, to));

      const dur = Math.max(0.35, Math.abs(to - from) / (isMobile ? 220 : 320));
      const isLeft = to < from;

      this.el.style.transitionDuration = dur + 's';
      this.el.classList.remove('look-l', 'look-r');
      this.el.classList.add('scared', 'walk', isLeft ? 'look-l' : 'look-r');

      if (this.el.id === 'a') {
        const scaredQuotes = [
          'WAA! Jangan kejar aku, kopi santuy-ku belum abis! 💀☕',
          'Ampuun Tuan! Santuy dulu napa, jangan kagetin tengkorak! 😱💀',
          'Copoooot rusukku! Kabur duluuu! 🏃‍♂️💨',
          'Waduh waduh! Santuy bro, kirain reaper mau nagih utang! 💀⚡'
        ];
        this.say(scaredQuotes[Math.floor(Math.random() * scaredQuotes.length)], 1400, false);
      } else if (Math.random() < 0.6) {
        const scaredText = this.el.id === 'c' 
          ? 'Raaagh! Ampun Tuan Reaper!' 
          : (this.el.id === 'd' ? 'Kyaaa, sapu terbangku mana?!' : 'Ampun, Tuan Reaper!');
        this.say(scaredText, 1000, false);
      }

      this.el.style.left = to + 'px';
      await waitMs(dur * 1000);
      this.el.classList.remove('scared', 'walk');
      if (this.el.id === 'a') {
        await waitMs(150);
        this.say('Hadehh... kaget banget, lanjut santuy lagi dehh... ☕💀', 1600, false);
      }
      await waitMs(200);
      this.fleeing = false;
    }

    async loop() {
      // Immediate initial wander
      await waitMs(randNum(500, 1200));
      try {
        await this.walk();
      } catch (err) {
        console.warn('Initial walk recovered:', err);
      }

      while (true) {
        try {
          await waitMs(randNum(800, 2200));
          if (this.sleeping || this.fleeing || this.insideCottage || this.isUnderground) continue;
          const r = Math.random();

          // Separate residency behaviors:
          // Grave Dwellers (Skeleton & Zombie) can enter grave!
          if (this.homeType === 'grave' && r < 0.20) {
            await this.enterGrave();
          }
          // House Dwellers (Pumpkin & Witch) can enter witch cottage/manor!
          else if (this.homeType === 'house' && r < 0.20) {
            await this.enterCottage();
          }
          // Wander freely along the road
          else if (r < 0.65) {
            await this.walk();
          } 
          // Speak greeting
          else if (r < 0.80) {
            await this.greetAutonomously();
          } 
          // Look around
          else if (r < 0.90) {
            await this.look();
          } 
          // Blink
          else {
            await this.blink();
          }
        } catch (err) {
          console.warn('Mascot loop iteration recovered:', err);
          this.busy = false;
        }
      }
    }
  }

  // -------------------------------------------------------------------------
  // 11. Settings Menu (Toggle Kursor Arwah Reaper & Makhluk Kuburan)
  // -------------------------------------------------------------------------
  // Settings elements declared at top in Elements Selection

  let isDragonEnabled = localStorage.getItem('kaka_pumpkin_active') !== 'false';
  window.isDragonEnabled = isDragonEnabled;
  if (dr && isDragonEnabled) dr.style.display = 'block';
  let isMascotsEnabled = localStorage.getItem('kaka_mascots_active') !== 'false';
  let isMidnightEnabled = localStorage.getItem('kaka_midnight_mode') === 'true';

  const systemPrefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let isEcoMode = localStorage.getItem('kaka_eco_mode') !== null
    ? localStorage.getItem('kaka_eco_mode') === 'true'
    : !!systemPrefersReducedMotion;
  window.isEcoMode = isEcoMode;

  const btnToggleDragon = document.getElementById('btnToggleDragon');
  const btnToggleMascots = document.getElementById('btnToggleMascots');
  const btnToggleMidnight = document.getElementById('btnToggleMidnight');
  const btnTogglePerfMode = document.getElementById('btnTogglePerfMode');

  function updateDragonSwitchUI() {
    if (!btnToggleDragon) return;
    const label = btnToggleDragon.querySelector('.switch-label');
    if (isDragonEnabled) {
      btnToggleDragon.classList.add('active');
      btnToggleDragon.setAttribute('aria-checked', 'true');
      if (label) label.textContent = 'ON';
    } else {
      btnToggleDragon.classList.remove('active');
      btnToggleDragon.setAttribute('aria-checked', 'false');
      if (label) label.textContent = 'OFF';
    }
  }

  function updateMascotsSwitchUI() {
    if (!btnToggleMascots) return;
    const label = btnToggleMascots.querySelector('.switch-label');
    if (isMascotsEnabled) {
      btnToggleMascots.classList.add('active');
      btnToggleMascots.setAttribute('aria-checked', 'true');
      if (label) label.textContent = 'ON';
    } else {
      btnToggleMascots.classList.remove('active');
      btnToggleMascots.setAttribute('aria-checked', 'false');
      if (label) label.textContent = 'OFF';
    }
  }

  function updateMidnightSwitchUI() {
    if (!btnToggleMidnight) return;
    const label = btnToggleMidnight.querySelector('.switch-label');
    if (isMidnightEnabled) {
      btnToggleMidnight.classList.add('active');
      btnToggleMidnight.setAttribute('aria-checked', 'true');
      if (label) label.textContent = 'ON';
    } else {
      btnToggleMidnight.classList.remove('active');
      btnToggleMidnight.setAttribute('aria-checked', 'false');
      if (label) label.textContent = 'OFF';
    }
  }

  function updateEcoSwitchUI() {
    if (!btnTogglePerfMode) return;
    const label = btnTogglePerfMode.querySelector('.switch-label');
    if (isEcoMode) {
      btnTogglePerfMode.classList.add('active');
      btnTogglePerfMode.setAttribute('aria-checked', 'true');
      if (label) label.textContent = 'ON';
    } else {
      btnTogglePerfMode.classList.remove('active');
      btnTogglePerfMode.setAttribute('aria-checked', 'false');
      if (label) label.textContent = 'OFF';
    }
  }

  function applyDragonState() {
    window.isDragonEnabled = isDragonEnabled;
    updateDragonSwitchUI();
    if (dr) {
      if (!isDragonEnabled) {
        dr.style.display = 'none';
      } else {
        dr.style.display = window.reaperCursorShown ? 'block' : 'none';
      }
    }
  }

  function applyMascotsState() {
    updateMascotsSwitchUI();
    const stage = document.getElementById('stage');
    const floor = document.querySelector('.floor');
    if (stage) stage.style.display = isMascotsEnabled ? '' : 'none';
    if (floor) floor.style.display = isMascotsEnabled ? '' : 'none';
  }

  function applyMidnightState() {
    updateMidnightSwitchUI();
    if (isMidnightEnabled) {
      document.body.classList.add('mode-tengah-malam');
    } else {
      document.body.classList.remove('mode-tengah-malam');
    }
  }

  function applyEcoModeState() {
    window.isEcoMode = isEcoMode;
    updateEcoSwitchUI();
    if (isEcoMode) {
      document.body.classList.add('eco-performance-mode');
    } else {
      document.body.classList.remove('eco-performance-mode');
    }
  }

  function updateGlobalTorch(e) {
    const x = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : window.innerWidth / 2);
    const y = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : window.innerHeight / 2);
    document.documentElement.style.setProperty('--torch-x', x + 'px');
    document.documentElement.style.setProperty('--torch-y', y + 'px');
  }

  window.addEventListener('pointermove', (e) => {
    if (isMidnightEnabled) updateGlobalTorch(e);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isMidnightEnabled) updateGlobalTorch(e);
  }, { passive: true });

  if (btnToggleDragon) {
    btnToggleDragon.addEventListener('click', (e) => {
      e.stopPropagation();
      playSound('toggle');
      isDragonEnabled = !isDragonEnabled;
      window.isDragonEnabled = isDragonEnabled;
      localStorage.setItem('kaka_pumpkin_active', isDragonEnabled ? 'true' : 'false');
      applyDragonState();
      showToast(isDragonEnabled ? '⚡ Mode Arwah Reaper aktif: Makhluk kubur panik!' : '🌿 Mode Biasa aktif: Makhluk kubur tenang');
    });
  }

  if (btnToggleMascots) {
    btnToggleMascots.addEventListener('click', (e) => {
      e.stopPropagation();
      playSound('toggle');
      isMascotsEnabled = !isMascotsEnabled;
      localStorage.setItem('kaka_mascots_active', isMascotsEnabled);
      applyMascotsState();
      showToast(isMascotsEnabled ? '💀 Makhluk Kuburan diaktifkan' : 'Makhluk Kuburan dinonaktifkan');
    });
  }

  if (btnToggleMidnight) {
    btnToggleMidnight.addEventListener('click', (e) => {
      e.stopPropagation();
      playSound('toggle');
      isMidnightEnabled = !isMidnightEnabled;
      localStorage.setItem('kaka_midnight_mode', isMidnightEnabled);
      applyMidnightState();
      showToast(isMidnightEnabled ? '🌑 Mode Tengah Malam aktif: Senter kursor menyala!' : '☀️ Mode Normal diaktifkan');
    });
  }

  if (btnTogglePerfMode) {
    btnTogglePerfMode.addEventListener('click', (e) => {
      e.stopPropagation();
      playSound('toggle');
      isEcoMode = !isEcoMode;
      localStorage.setItem('kaka_eco_mode', isEcoMode ? 'true' : 'false');
      applyEcoModeState();
      showToast(
        isEcoMode
          ? '⚡ Mode Hemat Daya AKTIF: Efek visual disederhanakan untuk baterai & RAM.'
          : '✨ Mode Grafis Penuh AKTIF: Seluruh efek animasi visual dinyalakan kembali.'
      );
    });
  }

  if (window.matchMedia) {
    try {
      window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
        if (localStorage.getItem('kaka_eco_mode') === null) {
          isEcoMode = e.matches;
          applyEcoModeState();
        }
      });
    } catch (_) {}
  }

  applyDragonState();
  applyMascotsState();
  applyMidnightState();
  applyEcoModeState();

  // -------------------------------------------------------------------------
  // 11. Autonomous Mascot Characters (Skeleton, Pumpkin, Zombie, Witch)
  // -------------------------------------------------------------------------

  // Instantiate Mascots with their residency settings & quote sets
  const charA = document.getElementById('a');
  const charB = document.getElementById('b');
  const charC = document.getElementById('c');
  const charD = document.getElementById('d');

  let mascotA = null; // Skully (Grave Dweller)
  let mascotB = null; // Pumpling (House Dweller)
  let mascotC = null; // Zombo (Grave Dweller)
  let mascotD = null; // Witch Hazel (House Dweller)

  if (charA) {
    mascotA = new SpookyMascot(charA, skullyQuotes, 'Yo, Necromancer!', {
      homeType: 'grave',
      homeId: 'graveSkully'
    });
  }
  if (charB) {
    mascotB = new SpookyMascot(charB, pumplingQuotes, 'Trick or Treat!', {
      homeType: 'house',
      homeId: 'witchCottage'
    });
  }
  if (charC) {
    mascotC = new SpookyMascot(charC, zombieQuotes, 'Braaaains... Code!', {
      homeType: 'grave',
      homeId: 'graveZombie'
    });
  }
  if (charD) {
    mascotD = new SpookyMascot(charD, witchQuotes, 'Hihihi, Butuh Ramuan?', {
      homeType: 'house',
      homeId: 'witchCottage'
    });
  }

  const allMascots = [mascotA, mascotB, mascotC, mascotD].filter(Boolean);

  function checkMascotFlee(cx, cy) {
    if (!isMascotsEnabled || !isDragonEnabled) return;
    const now = Date.now();
    for (const m of allMascots) {
      if (!m || !m.el || m.insideCottage || m.isUnderground || m.fleeing) continue;
      if (m.lastFleeTime && now - m.lastFleeTime < 3800) continue;
      const r = m.el.getBoundingClientRect();
      const d = Math.hypot(cx - (r.left + r.width / 2), cy - (r.top + r.height / 2));
      if (d < 110) {
        m.lastFleeTime = now;
        m.flee(cx);
      }
    }
  }

  window.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch') return;
    checkMascotFlee(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener('mousemove', e => {
    checkMascotFlee(e.clientX, e.clientY);
  }, { passive: true });

  setTimeout(() => mascotA && isMascotsEnabled && mascotA.greetAutonomously(), 1200);
  setTimeout(() => mascotD && isMascotsEnabled && mascotD.greetAutonomously(), 2400);
  setTimeout(() => mascotB && isMascotsEnabled && mascotB.greetAutonomously(), 3600);
  setTimeout(() => mascotC && isMascotsEnabled && mascotC.greetAutonomously(), 4800);

  // -------------------------------------------------------------------------
  // Autonomous Mascot Social Director (Periodic Meetups & Conversations)
  // -------------------------------------------------------------------------
  let isSocialDirectorRunning = false;
  function startAutonomousSocialDirector() {
    if (isSocialDirectorRunning) return;
    isSocialDirectorRunning = true;

    setInterval(async () => {
      if (!isMascotsEnabled || isAnyMascotSocializing) return;

      // Mascots actively roaming on the stage
      const activeStageMascots = allMascots.filter(m => 
        m && m.el && 
        !m.busy && 
        !m.isUnderground && 
        !m.insideCottage && 
        !m.sleeping && 
        !m.fleeing
      );

      if (activeStageMascots.length < 2) return;

      // 1. If any 2 are already close (< 190px), trigger encounter!
      for (let i = 0; i < activeStageMascots.length; i++) {
        for (let j = i + 1; j < activeStageMascots.length; j++) {
          const m1 = activeStageMascots[i];
          const m2 = activeStageMascots[j];
          const dist = Math.abs(m1.el.offsetLeft - m2.el.offsetLeft);
          if (dist < 190) {
            triggerMascotSocialEncounter(m1, m2);
            return;
          }
        }
      }

      // 2. Otherwise pick 2 mascots to meet up and chat
      if (Math.random() < 0.75) {
        const idx1 = Math.floor(Math.random() * activeStageMascots.length);
        let idx2 = (idx1 + 1 + Math.floor(Math.random() * (activeStageMascots.length - 1))) % activeStageMascots.length;
        const walker = activeStageMascots[idx1];
        const target = activeStageMascots[idx2];

        if (walker && target && !walker.busy && !target.busy) {
          const p1 = walker.el.offsetLeft;
          const p2 = target.el.offsetLeft;
          const offsetDir = p1 < p2 ? -100 : 100;
          const destination = Math.max(walker.minLeftBound, p2 + offsetDir);
          
          walker.busy = true;
          const dur = Math.max(0.7, Math.abs(destination - p1) / 95);
          walker.el.style.transitionDuration = dur + 's';
          walker.el.classList.remove('look-l', 'look-r');
          walker.el.classList.add('walk', destination < p1 ? 'look-l' : 'look-r');
          walker.el.style.left = destination + 'px';

          await waitMs(dur * 1000);
          walker.el.classList.remove('walk');
          walker.busy = false;

          if (!walker.sleeping && !target.sleeping && !walker.isUnderground && !target.isUnderground && !walker.insideCottage && !target.insideCottage) {
            triggerMascotSocialEncounter(walker, target);
          }
        }
      }
    }, 13000);
  }

  // Launch Social Director after initial warmup
  setTimeout(() => {
    if (isMascotsEnabled) {
      startAutonomousSocialDirector();
    }
  }, 6500);

  // Interactive Second Witch House: Menara Alkimia Nenek Sihir (Right Side)
  if (witchManor) {
    witchManor.addEventListener('click', (e) => {
      e.stopPropagation();
      playMascotSound('click');
      playMascotSound('stone');

      const manorBubble = document.getElementById('manorBubble');
      const insideMascot = [mascotB, mascotD].find(m => m && m.insideCottage && m.currentOccupiedHouse?.id === 'witchManor');

      if (insideMascot) {
        insideMascot.exitCottage();
        if (manorBubble) {
          manorBubble.textContent = "Tok tok! Ada yang mengetuk pintu menara! 🚪";
          manorBubble.classList.add('show');
          setTimeout(() => manorBubble.classList.remove('show'), 2200);
        }
      } else {
        const targetMascot = Math.random() < 0.5 ? mascotB : mascotD;
        if (targetMascot && !targetMascot.fleeing) {
          targetMascot.say("Mau mampir ke Menara Alkimia dulu ah! 🔮", 1800);
          targetMascot.currentOccupiedHouse = { id: 'witchManor', doorId: 'manorDoor', bubbleId: 'manorBubble', name: 'Menara Alkimia' };
          setTimeout(() => targetMascot.enterCottage(), 600);
        }
      }
    });
  }

  // Interactive Witch Cottage Door & Enclosure (House Dwellers: Pumpkin & Witch)
  if (witchCottage) {
    witchCottage.addEventListener('click', (e) => {
      e.stopPropagation();
      playMascotSound('click');
      playMascotSound('stone');
      
      const cottageBubble = document.getElementById('cottageBubble');
      const insideMascot = [mascotB, mascotD].find(m => m && m.insideCottage);
      
      if (insideMascot) {
        insideMascot.exitCottage();
        if (cottageBubble) {
          cottageBubble.textContent = "Tok tok! Ada yang mengetuk pintu! 🚪";
          cottageBubble.classList.add('show');
          setTimeout(() => cottageBubble.classList.remove('show'), 2200);
        }
      } else {
        const targetMascot = Math.random() < 0.5 ? mascotB : mascotD;
        if (targetMascot && !targetMascot.fleeing) {
          targetMascot.say("Mau bertamu ke pondok nenek sihir dulu ah!", 1800);
          setTimeout(() => targetMascot.enterCottage(), 700);
        }
      }
    });
  }

  // Interactive Cemetery: 7 Diverse Gravesites along the road
  const allGraveElements = document.querySelectorAll('.gravesite.grave-item');
  allGraveElements.forEach((grave, idx) => {
    grave.addEventListener('click', (e) => {
      e.stopPropagation();
      playMascotSound('click');
      playMascotSound('stone');

      // Check if an undead mascot is underground and awaken it from this grave
      const buriedUndead = [mascotA, mascotC].find(m => m && m.isUnderground);
      if (buriedUndead) {
        buriedUndead.riseFromGrave(grave);
      } else {
        grave.classList.add('shaking');
        const bubble = grave.querySelector('.grave-bubble');
        if (bubble) {
          const msgs = [
            "Tok tok! Makam keramat bergetar! 🪦",
            "Hii! Arwah kuburan berbisik lembut... 👻",
            "Batu nisan purba berderak misterius! ⚡",
            "Makam sejuk tempat istirahat para undead! 💀"
          ];
          bubble.textContent = msgs[idx % msgs.length];
          bubble.classList.add('show');
          setTimeout(() => bubble.classList.remove('show'), 2200);
        }
        setTimeout(() => grave.classList.remove('shaking'), 450);

        // One wandering mascot comments
        const randomUndead = Math.random() < 0.5 ? mascotA : mascotC;
        if (randomUndead && !randomUndead.busy && !randomUndead.sleeping) {
          const quotes = [
            "Makam di situ nyaman banget lho! 🪦",
            "Tanah kuburan ini sejuk dan penuh kenangan!",
            "Ranjang batu terbaik bagi seorang undead! 💀"
          ];
          randomUndead.say(quotes[Math.floor(Math.random() * quotes.length)], 2000);
        }
      }
    });
  });

    // -------------------------------------------------------------------------
  // 12. Floating Phantom Reaper Flying Cursor & Click Particles
  // -------------------------------------------------------------------------
  if (dr) {
    const di = dr.querySelector('i');
    let tx = window.innerWidth / 2, ty = window.innerHeight * 0.45, x = tx, y = ty;
    let shown = true, face = 1;
    window.reaperCursorShown = true;
    if (isDragonEnabled) {
      dr.style.display = 'block';
      dr.style.transform = `translate(${x - 60}px, ${y - 60}px)`;
    }

    function handleReaperMove(clientX, clientY) {
      if (!isDragonEnabled) return;
      if (!shown) {
        shown = true;
        window.reaperCursorShown = true;
        x = tx = clientX;
        y = ty = clientY;
        dr.style.display = 'block';
      }
      if (Math.abs(clientX - tx) > 2) {
        face = clientX > tx ? 1 : -1;
      }
      tx = clientX;
      ty = clientY;
      if (di) di.style.transform = `scaleX(${face})`;
    }

    window.addEventListener('pointermove', e => {
      if (e.pointerType === 'touch') return;
      handleReaperMove(e.clientX, e.clientY);
    }, { passive: true });

    window.addEventListener('mousemove', e => {
      handleReaperMove(e.clientX, e.clientY);
    }, { passive: true });

    function handleReaperClick(clientX, clientY) {
      if (!isDragonEnabled) return;
      initAudio();
      playSound('click');
      playSound('ghost');
      if (Math.random() < 0.5) playSound('bat');

      if (di) {
        di.style.transform = `scaleX(${face}) rotate(${face * 20}deg) scale(1.15)`;
        setTimeout(() => {
          di.style.transform = `scaleX(${face})`;
        }, 180);
      }

      if (window.isEcoMode) return;

      requestAnimationFrame(() => {
        // 3 Purple Spirits
        for (let i = 0; i < 3; i++) {
          const spirit = document.createElement('span');
          spirit.className = 'ghost-spirit';
          spirit.textContent = '👻';
          spirit.style.left = (clientX + randNum(-15, 15)) + 'px';
          spirit.style.top = (clientY + randNum(-15, 15)) + 'px';
          spirit.style.setProperty('--dx', (randNum(-70, 70)) + 'px');
          spirit.style.setProperty('--dy', (randNum(-95, -45)) + 'px');
          document.body.appendChild(spirit);
          setTimeout(() => spirit.remove(), 850);
        }

        // 2 Mini Bats
        for (let i = 0; i < 2; i++) {
          const bat = document.createElement('span');
          bat.className = 'mini-bat';
          bat.textContent = '🦇';
          bat.style.left = (clientX + randNum(-10, 10)) + 'px';
          bat.style.top = (clientY + randNum(-10, 10)) + 'px';
          const dx = (face === 1 ? randNum(50, 110) : randNum(-110, -50)) + 'px';
          bat.style.setProperty('--dx', dx);
          bat.style.setProperty('--dy', randNum(-80, 20) + 'px');
          document.body.appendChild(bat);
          setTimeout(() => bat.remove(), 950);
        }
      });
    }

    window.addEventListener('pointerdown', e => {
      if (e.pointerType === 'touch') return;
      handleReaperClick(e.clientX, e.clientY);
    });

    document.addEventListener('mouseenter', e => {
      handleReaperMove(e.clientX, e.clientY);
    });

    document.addEventListener('mouseleave', () => {
      dr.style.display = 'none';
      shown = false;
      window.reaperCursorShown = false;
    });

    (function tick() {
      if (isDragonEnabled && shown) {
        x += (tx - x) * 0.22;
        y += (ty - y) * 0.22;
        // Float centered around cursor
        const offsetX = face === 1 ? -60 : -65;
        const offsetY = -60;
        dr.style.transform = `translate(${x + offsetX}px, ${y + offsetY}px)`;
      }
      requestAnimationFrame(tick);
    })();
  }

  // -------------------------------------------------------------------------
  // 17. FLOATING RETRO PIXEL MUSIC PLAYER (Halloween-bg.mp3)
  // -------------------------------------------------------------------------

  // Synchronize audio state directly
  if (bgMusicAudio) {
    bgMusicAudio.addEventListener('play', () => updateMusicHUD(true));
    bgMusicAudio.addEventListener('playing', () => updateMusicHUD(true));
    bgMusicAudio.addEventListener('pause', () => updateMusicHUD(false));
    bgMusicAudio.addEventListener('ended', () => updateMusicHUD(false));
  }

  function updateMusicHUD(playing) {
    isBGMPlaying = playing;
    if (pixelMusicHud) pixelMusicHud.classList.toggle('playing', playing);
    const lang = localStorage.getItem('kaka_portfolio_lang') || 'id';
    if (musicHudTitle) musicHudTitle.textContent = playing 
      ? (lang === 'en' ? 'MUSIC ON' : 'MUSIK NYALA') 
      : (lang === 'en' ? 'MUSIC MUTED' : 'MUSIK MATI');
    if (musicHudSub) musicHudSub.textContent = playing 
      ? (lang === 'en' ? 'HALLOWEEN THEME' : 'ALUNAN HALLOWEEN') 
      : (lang === 'en' ? 'PEACEFUL SILENCE' : 'NIKMATI KETENANGAN');
    if (musicSpeakerOn) musicSpeakerOn.classList.toggle('hidden', !playing);
    if (musicSpeakerOff) musicSpeakerOff.classList.toggle('hidden', playing);
    if (playing && !isSoundEnabled) {
      isSoundEnabled = true;
      try { localStorage.setItem('kaka_sound_enabled', 'true'); } catch (_) {}
      updateSoundToggleUI(true);
    }
  }

  function playBGM() {
    if (!bgMusicAudio) return;
    const targetVol = bgMusicVolSlider ? parseFloat(bgMusicVolSlider.value) : currentBGMVolume;
    bgMusicAudio.volume = Math.max(0.02, targetVol);
    const playPromise = bgMusicAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        updateMusicHUD(true);
      }).catch((err) => {
        console.warn('Autoplay prevented by browser:', err);
        updateMusicHUD(false);
      });
    }
  }

  function pauseBGM() {
    if (!bgMusicAudio) return;
    bgMusicAudio.pause();
    updateMusicHUD(false);
  }

  function toggleBGM() {
    if (!bgMusicAudio) return;
    if (isBGMPlaying) {
      pauseBGM();
      showToast('🤫 Musik latar dihentikan.');
    } else {
      playBGM();
      showToast('🎵 Memutar alunan Halloween di Sanctum...');
    }
  }

  // Minimize / Expand Music HUD (Bisa diminimalis jadi sisa logo musik)
  let isMusicHudMinimized = false;
  try {
    isMusicHudMinimized = localStorage.getItem('kaka_music_hud_minimized') === 'true';
  } catch (_) {}

  function setMusicHudMinimized(minimized) {
    isMusicHudMinimized = minimized;
    try {
      localStorage.setItem('kaka_music_hud_minimized', minimized ? 'true' : 'false');
    } catch (_) {}
    if (pixelMusicHud) {
      pixelMusicHud.classList.toggle('minimized', minimized);
    }
    if (musicHudCard) {
      musicHudCard.setAttribute('title', minimized ? 'Pemutar Musik (Klik untuk memperluas)' : 'Pemutar Musik Retro Sanctum');
    }
  }

  if (isMusicHudMinimized) {
    setMusicHudMinimized(true);
  }

  if (musicHudCollapseBtn) {
    musicHudCollapseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setMusicHudMinimized(true);
    });
  }

  if (musicHudIconBox) {
    musicHudIconBox.addEventListener('click', (e) => {
      e.stopPropagation();
      if (pixelMusicHud && pixelMusicHud.classList.contains('minimized')) {
        setMusicHudMinimized(false);
      } else {
        toggleBGM();
      }
    });
  }

  const musicHudInfoEl = document.querySelector('.music-hud-info');
  if (musicHudInfoEl) {
    musicHudInfoEl.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBGM();
    });
  }

  if (musicHudBtn) {
    musicHudBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBGM();
    });
  }

  if (musicHudCard) {
    musicHudCard.addEventListener('click', (e) => {
      if (e.target && (
        e.target.id === 'bgMusicVolSlider' || 
        e.target.classList.contains('music-vol-slider') ||
        e.target.closest('#bgMusicVolSlider') ||
        e.target.closest('.music-hud-vol-wrap')
      )) {
        return;
      }
      if (e.target && (e.target.id === 'musicHudCollapseBtn' || e.target.closest('#musicHudCollapseBtn'))) {
        return;
      }
      if (pixelMusicHud && pixelMusicHud.classList.contains('minimized')) {
        e.stopPropagation();
        setMusicHudMinimized(false);
        return;
      }
      toggleBGM();
    });
  }

  if (bgMusicVolSlider) {
    bgMusicVolSlider.addEventListener('input', (e) => {
      e.stopPropagation();
      const val = parseFloat(e.target.value);
      currentBGMVolume = val;
      if (bgMusicAudio) {
        bgMusicAudio.volume = val;
        if (val > 0 && bgMusicAudio.paused) {
          playBGM();
        } else if (val === 0 && !bgMusicAudio.paused) {
          pauseBGM();
        }
      }
    });
    bgMusicVolSlider.addEventListener('click', (e) => e.stopPropagation());
  }

  // Seamless First-Interaction Auto-Start
  function handleFirstUserInteraction() {
    if (hasUserInteracted) return;
    hasUserInteracted = true;
    playBGM();
    window.removeEventListener('click', handleFirstUserInteraction);
    window.removeEventListener('keydown', handleFirstUserInteraction);
    window.removeEventListener('touchstart', handleFirstUserInteraction);
  }

  window.addEventListener('click', handleFirstUserInteraction, { passive: true });
  window.addEventListener('keydown', handleFirstUserInteraction, { passive: true });
  window.addEventListener('touchstart', handleFirstUserInteraction, { passive: true });

  // -------------------------------------------------------------------------
  // 18. RESURRECTION EASTER EGG & BACK TO TOP ACTION
  // -------------------------------------------------------------------------

  function triggerResurrection(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    playSound('arise');
    playSound('victory');

    const lang = localStorage.getItem('kaka_portfolio_lang') || 'id';
    const title = lang === 'en' ? 'Advancement Made!' : 'Pencapaian Diraih!';
    const desc = lang === 'en' ? 'The Necromancer Resurrected!' : 'Kebangkitan Sang Necromancer!';
    showToast(desc, title, '⚡');

    // Subterranean Screen Tremor (Cukup Gempa Saja, Jangan Hilang Fokus)
    if (earthquakeContainer) {
      earthquakeContainer.classList.add('tremor');
      setTimeout(() => earthquakeContainer.classList.remove('tremor'), 1200);
    }

    // Awaken any buried undead mascots immediately!
    [mascotA, mascotC].forEach(m => {
      if (m && m.isUnderground) {
        m.riseFromGrave();
      }
    });

    // Burst of resurrection soul particles around center
    for (let i = 0; i < 22; i++) {
      const spark = document.createElement('span');
      spark.className = 'resurrect-soul-burst';
      spark.textContent = ['⚡', '✨', '👻', '💀', '🔥', '✦'][Math.floor(Math.random() * 6)];
      spark.style.left = (window.innerWidth / 2 + (Math.random() * 280 - 140)) + 'px';
      spark.style.top = (window.innerHeight * 0.75 + (Math.random() * 120 - 60)) + 'px';
      spark.style.setProperty('--dx', (Math.random() * 450 - 225) + 'px');
      spark.style.setProperty('--dy', (Math.random() * -360 - 80) + 'px');
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 1100);
    }

    // Cinematic Ascension back to surface - starts immediately, glides up smoothly without any delay
    resurrectToSurface(2800);
  }

  let isGraveyardUnlocked = false;
  let isResurrecting = false;

  function resurrectToSurface(duration = 2800) {
    if (isResurrecting) return;
    isResurrecting = true;
    isGraveyardUnlocked = true; // Subterranean boundary remains open during ascension!

    // Immediately disable native smooth scroll on HTML and Body so rAF window.scrollTo moves instantly without hesitation or stutter
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    document.documentElement.classList.add('resurrect-ascending');
    document.body.classList.add('resurrect-ascending');

    try { playSound('arise'); } catch (_) {}
    try { playSound('victory'); } catch (_) {}
    showToast('Jiwa Necromancer Bangkit Melayang Kembali ke Permukaan!', 'RESURRECTION ASCENDING...', '✨');

    const startY = window.scrollY;
    if (startY <= 10) {
      document.documentElement.classList.remove('resurrect-ascending');
      document.body.classList.remove('resurrect-ascending');
      document.documentElement.style.scrollBehavior = '';
      document.body.style.scrollBehavior = '';
      isResurrecting = false;
      isGraveyardUnlocked = false;
      return;
    }

    const startTime = performance.now();

    // Gentle ease-out sine: starts traveling IMMEDIATELY on frame 0, steadily decelerates smoothly without any dead pause!
    function easeOutSine(t) {
      return Math.sin((t * Math.PI) / 2);
    }

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = easeOutSine(progress);
      const currentY = Math.round(startY * (1 - ease));

      window.scrollTo(0, currentY);
      if (typeof window.updateCatacombDepthMeter === 'function') {
        window.updateCatacombDepthMeter(currentY);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Firmly ensure we land at exact top (0, 0) matching user screenshot
        window.scrollTo(0, 0);
        document.documentElement.classList.remove('resurrect-ascending');
        document.body.classList.remove('resurrect-ascending');
        document.documentElement.style.scrollBehavior = '';
        document.body.style.scrollBehavior = '';
        isResurrecting = false;
        isGraveyardUnlocked = false; // Re-lock strictly AFTER safely reaching surface top!
        if (typeof window.updateCatacombDepthMeter === 'function') {
          window.updateCatacombDepthMeter(0);
        }
        if (typeof window.onReturnFromUnderground === 'function') {
          window.onReturnFromUnderground();
        }
        try { playSound('system'); } catch (_) {}
      }
    }

    requestAnimationFrame(step);
  }

  if (btnResurrectTrigger) {
    btnResurrectTrigger.addEventListener('click', triggerResurrection);
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      resurrectToSurface(2800);
    });
  }

  function initSkyAndCatacombs() {
    function mk(w, h, f) {
      const c = document.createElement('canvas');
      c.width = w;
      c.height = h;
      f(c.getContext('2d'));
      return c.toDataURL();
    }

    function rs(R, P) {
      return function(x) {
        R.forEach((r, j) => {
          for (let i = 0; i < r.length; i++) {
            if (P[r[i]]) {
              x.fillStyle = P[r[i]];
              x.fillRect(i, j, 1, 1);
            }
          }
        });
      };
    }

    function gm(a, b) {
      return mk(7, 6, rs(['..bbb..', '.bBBBb.', 'bBBbbbb', '.bbbbb.', '..bbb..', '...b...'], { b: a, B: b }));
    }

    const S = {
      skull: mk(8, 8, rs(['..wwww..', '.wwwwww.', 'wwwwwwww', 'wkkwwkkw', 'wkkwwkkw', 'wwwkkwww', '.wwwwww.', '..wkwk..'], { w: '#e8dcc0', k: '#1a1020' })),
      bone: mk(12, 4, rs(['ww......ww', 'wwwwwwwwwwww', 'wwwwwwwwwwww', 'ww......ww'].map(r => r.length < 12 ? 'ww........ww' : r), { w: '#e8dcc0' })),
      pump: mk(10, 8, rs(['....gg....', '..oooooo..', '.oooooooo.', 'ooXooooXoo', 'oooooooooo', 'ooXXXXXXoo', '.oooooooo.', '..oooooo..'], { o: '#ff8a1f', g: '#5cc26a', X: '#2a0f3a' })),
      bat: mk(9, 5, rs(['b.......b', 'bb.b.b.bb', 'bbbbbbbbb', '.bb.b.bb.', '..b...b..'], { b: '#b78cff' })),
      tomb: mk(14, 18, function(x) {
        for (let j = 0; j < 18; j++) {
          for (let i = 0; i < 14; i++) {
            const ok = j >= 3 || (j >= 2 && i >= 1 && i < 13) || (j >= 1 && i >= 2 && i < 12) || (i >= 3 && i < 11);
            if (!ok) continue;
            x.fillStyle = (i === 0 || i === 13 || j === 0 || j === 17) ? '#4a5568' : (i + j) % 7 === 0 ? '#8a97ad' : '#7d8aa0';
            x.fillRect(i, j, 1, 1);
          }
        }
        x.fillStyle = '#2f3744';
        x.fillRect(6, 4, 2, 8);
        x.fillRect(4, 6, 6, 2);
        x.fillStyle = '#57a05e';
        x.fillRect(1, 16, 3, 1);
        x.fillRect(9, 16, 4, 1);
      }),
      coffin: mk(12, 13, function(x) {
        const w = [4, 6, 8, 10, 12, 12, 12, 10, 8, 8, 6, 6, 4];
        w.forEach((n, j) => {
          const x0 = (12 - n) / 2;
          x.fillStyle = '#2a160a';
          x.fillRect(x0, j, n, 1);
          if (j > 0 && j < 12) {
            x.fillStyle = '#6b3d1c';
            x.fillRect(x0 + 1, j, n - 2, 1);
          }
        });
        x.fillStyle = '#f6c445';
        x.fillRect(5, 2, 2, 7);
        x.fillRect(3, 4, 6, 2);
      }),
      worm: mk(16, 6, function(x) {
        for (let i = 0; i < 16; i++) {
          x.fillStyle = i > 13 ? '#c0607a' : '#e58aa0';
          x.fillRect(i, 2 + Math.round(Math.sin(i * 0.7) * 2), 1, 2);
        }
      }),
      house: mk(26, 28, function(x) {
        let j;
        for (j = 0; j < 12; j++) {
          const w = 2 + j * 2;
          x.fillStyle = j % 4 === 3 ? '#2a1240' : '#3a1a5c';
          x.fillRect(13 - w / 2, j, w, 1);
        }
        x.fillStyle = '#4b3f5e';
        x.fillRect(3, 12, 20, 15);
        x.fillStyle = '#3a3046';
        for (j = 15; j < 27; j += 3) x.fillRect(3, j, 20, 1);
        x.fillStyle = '#1a0a2e';
        x.fillRect(2, 12, 22, 1);
        x.fillRect(2, 27, 22, 1);
        x.fillStyle = '#3a3446';
        x.fillRect(17, 3, 3, 6);
        x.fillStyle = '#1a0a2e';
        x.fillRect(16, 2, 5, 1);
        x.fillStyle = '#ffcf4a';
        x.fillRect(5, 15, 5, 5);
        x.fillRect(16, 15, 5, 5);
        x.fillStyle = '#1a0a2e';
        x.fillRect(7, 15, 1, 5);
        x.fillRect(5, 17, 5, 1);
        x.fillRect(18, 15, 1, 5);
        x.fillRect(16, 17, 5, 1);
        x.fillStyle = '#2a160a';
        x.fillRect(11, 20, 4, 7);
        x.fillStyle = '#f6c445';
        x.fillRect(13, 23, 1, 1);
        x.fillStyle = '#8cff6e';
        x.fillRect(12, 6, 2, 2);
      }),
      tree: mk(24, 56, function(x) {
        let i;
        const t = '#3b2a1f';
        x.fillStyle = t;
        x.fillRect(10, 8, 4, 26);
        x.fillStyle = '#5a4030';
        x.fillRect(10, 8, 1, 26);
        x.fillStyle = t;
        for (i = 0; i < 8; i++) {
          x.fillRect(9 - i, 18 - i, 2, 2);
          x.fillRect(14 + i, 12 - i, 2, 2);
        }
        x.fillRect(2, 8, 1, 3);
        x.fillRect(5, 7, 1, 3);
        x.fillRect(21, 2, 1, 3);
        x.fillRect(18, 2, 1, 3);
        x.fillStyle = '#4a3426';
        for (i = 0; i < 22; i++) {
          x.fillRect(10 - Math.round(i * 0.8), 32 + i, 2, 1);
          x.fillRect(12 + Math.round(i * 0.8), 32 + i, 2, 1);
        }
        x.fillRect(11, 34, 2, 22);
        for (i = 0; i < 10; i++) {
          x.fillRect(8 - i * 2, 36 + i, 2, 1);
          x.fillRect(15 + i * 2, 36 + i, 2, 1);
        }
        x.fillStyle = '#ffb347';
        x.fillRect(10, 20, 1, 2);
        x.fillRect(12, 20, 1, 2);
        x.fillRect(10, 25, 4, 1);
      }),
      ghost: mk(9, 9, rs(['.wwwwwww.', 'wwwwwwwww', 'wwkwwwkww', 'wwkwwwkww', 'wwwwkwwww', 'wwwwwwwww', 'wwwwwwwww', 'ww.www.ww', 'w..w.w..w'], { w: '#e8dcff', k: '#1a1020' })),
      fen: mk(16, 12, function(x) {
        x.fillStyle = '#4a3426';
        x.fillRect(1, 3, 3, 9);
        x.fillRect(2, 2, 1, 1);
        x.fillRect(9, 3, 3, 9);
        x.fillRect(10, 2, 1, 1);
        x.fillStyle = '#3a2a20';
        x.fillRect(0, 5, 16, 1);
        x.fillRect(0, 9, 16, 1);
      }),
      chest: mk(14, 11, function(x) {
        x.fillStyle = '#1a0d06';
        x.fillRect(0, 1, 14, 10);
        x.fillStyle = '#7a4a22';
        x.fillRect(1, 2, 12, 8);
        x.fillStyle = '#5a3418';
        x.fillRect(1, 6, 12, 1);
        x.fillStyle = '#f6c445';
        x.fillRect(2, 1, 1, 10);
        x.fillRect(11, 1, 1, 10);
        x.fillRect(6, 5, 2, 3);
        x.fillStyle = '#fff2b0';
        x.fillRect(3, 2, 3, 1);
      }),
      cloud: mk(24, 9, function(x) {
        x.fillStyle = '#7d5aa6';
        [[4, 4, 16, 4], [8, 1, 9, 5], [13, 3, 8, 4], [0, 6, 24, 3]].forEach(r => {
          x.fillRect(r[0], r[1], r[2], r[3]);
        });
        x.fillStyle = '#a07fcb';
        x.fillRect(9, 1, 6, 1);
        x.fillRect(5, 4, 3, 1);
      }),
      pine: mk(16, 28, function(x) {
        x.fillStyle = '#3a2416';
        x.fillRect(7, 23, 2, 5);
        [[0, 3, 6], [5, 5, 7], [11, 6, 8], [17, 7, 8]].forEach(t => {
          for (let j = 0; j < t[2]; j++) {
            const h = Math.round(t[1] * (j + 1) / t[2]);
            x.fillStyle = j % 3 === 0 ? '#2f6a4c' : '#24473a';
            x.fillRect(8 - h, t[0] + j, h * 2, 1);
          }
        });
      }),
      bare: mk(20, 26, function(x) {
        let i;
        x.fillStyle = '#2a1a10';
        x.fillRect(9, 10, 3, 16);
        for (i = 0; i < 6; i++) {
          x.fillRect(8 - i, 10 - i, 2, 2);
          x.fillRect(12 + i, 8 - i, 2, 2);
        }
        x.fillRect(10, 2, 2, 9);
        x.fillRect(5, 3, 1, 3);
        x.fillRect(15, 1, 1, 3);
        x.fillStyle = '#ff8a1f';
        [[2, 3], [4, 2], [6, 4], [14, 1], [17, 3], [16, 5], [11, 1], [9, 2], [3, 8], [17, 7]].forEach(p => {
          x.fillRect(p[0], p[1], 2, 2);
        });
        x.fillStyle = '#c8501a';
        [[1, 5], [18, 1], [7, 6]].forEach(p => {
          x.fillRect(p[0], p[1], 2, 2);
        });
      }),
      pile: mk(14, 6, function(x) {
        for (let j = 0; j < 6; j++) {
          const w = 4 + j * 2;
          for (let i = 0; i < w; i++) {
            x.fillStyle = (i + j) % 3 === 0 ? '#fff2b0' : '#f6c445';
            x.fillRect(7 - w / 2 + i, j, 1, 1);
          }
        }
      }),
      coin: mk(5, 5, rs(['.yyy.', 'yYYYy', 'yYyYy', 'yYYYy', '.yyy.'], { y: '#f6c445', Y: '#fff2b0' })),
      candle: mk(5, 12, rs(['..f..', '.fFf.', '.fFf.', '..w..', '..w..', '..w..', '..w..', '..w..', '..w..', '.www.', '.www.', 'wwwww'], { f: '#ff8a1f', F: '#ffe27a', w: '#e8dcc0' })),
      crow: mk(11, 5, rs(['bb.......bb', '.bbb.b.bbb.', '..bbbbbbb..', '....bbb....', '.....b.....'], { b: '#1a1020' })),
      hut: mk(16, 14, function(x) {
        let j;
        x.fillStyle = '#5cc26a';
        x.fillRect(7, 0, 2, 2);
        for (j = 0; j < 4; j++) {
          x.fillStyle = '#4a2a14';
          x.fillRect(6 - j * 2, 2 + j, 4 + j * 4, 1);
        }
        x.fillStyle = '#d9751a';
        x.fillRect(1, 6, 14, 8);
        x.fillStyle = '#b85c10';
        x.fillRect(5, 6, 1, 8);
        x.fillRect(10, 6, 1, 8);
        x.fillStyle = '#ffcf4a';
        x.fillRect(2, 8, 2, 2);
        x.fillRect(12, 8, 2, 2);
        x.fillStyle = '#2a0f3a';
        x.fillRect(6, 9, 4, 5);
      }),
      gemC: gm('#4fd0ff', '#e0fbff'),
      gemP: gm('#c05cff', '#f3d6ff'),
      gemR: gm('#ff4d6d', '#ffd0d8')
    };

    const CH = {
      pumpkin: ['#ff8a1f', '#3a7a45'],
      witch: ['#e8c9a0', '#6b2fa0'],
      skel: ['#e8dcc0', '#2a2238'],
      zomb: ['#8ccf6e', '#4a5f8c'],
      gd1: ['#e8dcc0', '#5a6275'],
      gd2: ['#ff8a1f', '#5a6275']
    };
    const SP = {};
    function cs(k, f) {
      return mk(12, 18, function(x) {
        const C = CH[k];
        const Z = '#1a1020';
        function r(c, a, b, w, h) {
          x.fillStyle = c;
          x.fillRect(a, b, w, h);
        }
        if (k === 'cat') {
          r(Z, 2, 13, 8, 5);
          r(Z, 3, 8, 6, 5);
          r(Z, 3, 6, 1, 2);
          r(Z, 8, 6, 1, 2);
          r(Z, 10, f % 2 ? 10 : 12, 1, 4);
          r('#ffd84a', 4, 10, 1, 1);
          r('#ffd84a', 7, 10, 1, 1);
          r('#c0392b', 3, 12, 6, 1);
          r('#f6c445', 5, 13, 2, 1);
          return;
        }
        r(Z, 3, 15, 2, f === 2 ? 2 : 3);
        r(Z, 7, 15, 2, f === 1 ? 2 : 3);
        r(C[1], 3, 10, 6, 5);
        r(C[1], 1, 11, 2, 3);
        if (f === 3) r(C[1], 9, 6, 2, 5);
        else r(C[1], 9, 11, 2, 3);
        if (k === 'zomb' && f !== 3) {
          r(C[1], 9, 10, 3, 2);
          r(C[1], 0, 10, 3, 2);
        }
        r(C[0], 2, 3, 8, 7);
        r(Z, 4, 6, 1, 2);
        r(Z, 7, 6, 1, 2);
        if (k === 'pumpkin') {
          r('#5cc26a', 5, 2, 2, 1);
          r(Z, 4, 8, 4, 1);
          r('#c0392b', 3, 10, 6, 1);
          r('#c0392b', 8, 11, 1, 3);
        }
        if (k === 'witch') {
          r('#2a1240', 4, 0, 4, 1);
          r('#2a1240', 3, 1, 6, 2);
          r('#2a1240', 1, 3, 10, 1);
          r('#ff8a1f', 3, 2, 6, 1);
          r('#7a4a22', 11, 9, 1, 9);
          r('#e6c229', 10, 16, 2, 2);
        }
        if (k === 'skel') {
          r(Z, 3, 5, 2, 3);
          r(Z, 7, 5, 2, 3);
          r(C[0], 3, 11, 6, 1);
          r(C[0], 3, 13, 6, 1);
          r('#c0392b', 2, 3, 8, 2);
        }
        if (k === 'zomb') {
          r('#c0392b', 4, 9, 4, 1);
          r('#e8dcc0', 2, 3, 8, 2);
          r('#ff4d4d', 7, 6, 1, 2);
        }
        if (k.slice(0, 2) === 'gd') {
          r('#8d97ab', 2, 1, 8, 4);
          r('#5a6275', 5, 0, 2, 1);
          r('#7a4a22', 0, 3, 1, 15);
          r('#e8edf5', 0, 1, 1, 2);
          if (k === 'gd2') r(Z, 4, 8, 4, 1);
        }
      });
    }
    function fr(k, f) {
      const n = k + f;
      return SP[n] || (SP[n] = cs(k, f));
    }

    function cg(f) {
      const n = 'cg' + f;
      return SP[n] || (SP[n] = mk(16, 20, function(x) {
        function r(c, a, b, w, h) {
          x.fillStyle = c;
          x.fillRect(a, b, w, h);
        }
        const C = '#1d1433';
        const E = '#2e1f4d';
        r('#7a4a22', 0, 2, 1, 18);
        r('#3a2416', 0, 3, 3, 1);
        r('#ff8a1f', 0, 4, 3, 3);
        r('#ffe27a', 1, 5, 1, 1);
        for (let j = 9; j < 20; j++) {
          const w = Math.min(14, 8 + ((j - 9) >> 1) * 2);
          const x0 = 8 - w / 2;
          r(C, x0, j, w, 1);
          r(E, x0, j, 1, 1);
          r(E, x0 + w - 1, j, 1, 1);
        }
        r(C, 6, 0, 4, 1);
        r(C, 5, 1, 6, 2);
        r(C, 4, 3, 8, 6);
        r(E, 4, 3, 1, 6);
        r('#07040d', 5, 4, 6, 4);
        r('#ffb347', 6, 5, 1, 1);
        r('#ffb347', 9, 5, 1, 1);
        r('#f6c445', 7, 9, 2, 1);
        r('#6b2fa0', 1, 19, 14, 1);
        r(C, 1, 10, 2, 2);
        r('#e8dcc0', 1, 11, 1, 1);
        if (f == 3) {
          r(C, 12, 5, 2, 6);
          r('#e8dcc0', 12, 4, 2, 1);
        }
      }));
    }

    const skyAtmosphere = document.getElementById('skyAtmosphere');
    const pixelFence = document.getElementById('pixelFence');
    const pixelGrass = document.getElementById('pixelGrass');

    if (skyAtmosphere && pixelFence && pixelGrass) {
      pixelFence.style.backgroundImage = 'url(' + S.fen + ')';

      const cldConfigs = [
        [150, 190, 70, -10, 0],
        [250, 140, 95, -50, 1],
        [200, 230, 120, -70, 0],
        [330, 120, 80, -20, 1],
        [120, 160, 110, -90, 1],
        [400, 170, 100, -40, 0]
      ];
      cldConfigs.forEach(c => {
        const img = document.createElement('img');
        img.src = S.cloud;
        img.className = 'cld';
        img.alt = '';
        img.style.cssText = 'top:' + c[0] + 'px;width:' + c[1] + 'px;animation-duration:' + c[2] + 's;animation-delay:' + c[3] + 's' + (c[4] ? ';animation-direction:reverse' : '');
        skyAtmosphere.insertBefore(img, pixelFence);
      });

      const pineConfigs = [[0, 100], [8, 70], [36, 86], [58, 96], [68, 74], [90, 110]];
      pineConfigs.forEach(p => {
        const img = document.createElement('img');
        img.src = S.pine;
        img.className = 'pn';
        img.alt = '';
        img.style.cssText = 'left:' + p[0] + '%;width:clamp(50px,' + (p[1] / 12) + 'vw,' + p[1] + 'px)';
        skyAtmosphere.insertBefore(img, pixelFence);
      });

      const bareConfigs = [[27, 140], [64, 130]];
      bareConfigs.forEach(p => {
        const img = document.createElement('img');
        img.src = S.bare;
        img.className = 'pn';
        img.alt = '';
        img.style.cssText = 'left:' + p[0] + '%;width:clamp(70px,' + (p[1] / 12) + 'vw,' + p[1] + 'px)';
        skyAtmosphere.insertBefore(img, pixelFence);
        for (let k = 0; k < 6; k++) {
          const lf = document.createElement('i');
          lf.className = 'lf';
          const b = 30 + p[1] * 1.3 * (0.55 + Math.random() * 0.35);
          lf.style.cssText = 'left:calc(' + p[0] + '% + ' + (Math.random() * p[1] * 0.8) + 'px);bottom:' + b + 'px;--dx:' + (Math.random() * 110 - 40) + 'px;--dy:' + (b - 30) + 'px;animation-duration:' + (5 + Math.random() * 4) + 's;animation-delay:-' + (Math.random() * 8) + 's;background:' + ['#ff8a1f', '#ffb347', '#c8501a', '#e6c229'][k % 4];
          skyAtmosphere.insertBefore(lf, pixelFence);
        }
      });

      // Atmospheric Spooky Sky: Calm & Balanced Night Spirits
      const isMobileSky = window.innerWidth <= 768;
      const ghostConfigs = isMobileSky
        ? [[80, 240, 36]]
        : [[14, 220, 36], [82, 260, 40], [52, 410, 42]];

      ghostConfigs.forEach((g, i) => {
        const img = document.createElement('img');
        img.src = S.ghost;
        img.className = 'ghost' + (i === 0 ? ' gs' : '');
        img.alt = '';
        img.style.cssText = 'left:' + g[0] + '%;top:' + g[1] + 'px;width:' + g[2] + 'px;opacity:0.55;animation-duration:' + (4.5 + i * 1.2) + 's;animation-delay:-' + (i * 1.5) + 's' + (i % 2 ? ';animation-direction:alternate-reverse' : '');
        skyAtmosphere.insertBefore(img, pixelGrass);
      });

      const batConfigs = isMobileSky
        ? [[110, 8, 16]]
        : [[75, 12, 16], [210, 5, 18]];

      batConfigs.forEach(b => {
        const img = document.createElement('img');
        img.src = S.bat;
        img.className = 'bat bn';
        img.alt = '';
        img.style.cssText = 'top:' + b[0] + 'px;animation-delay:-' + b[1] + 's;animation-duration:' + b[2] + 's';
        skyAtmosphere.insertBefore(img, pixelGrass);
      });

      const crowConfigs = [
        [140, 40, 38, -12, 0], [200, 34, 52, -30, 1], [260, 44, 44, -5, 0], [330, 30, 60, -40, 1]
      ];
      crowConfigs.forEach(c => {
        const img = document.createElement('img');
        img.src = S.crow;
        img.className = 'cw';
        img.alt = '';
        img.style.cssText = 'top:' + c[0] + 'px;width:' + c[1] + 'px;animation-duration:' + c[2] + 's,0.5s;animation-delay:' + c[3] + 's,0s' + (c[4] ? ';animation-direction:reverse,normal' : '');
        skyAtmosphere.insertBefore(img, pixelGrass);
      });

      const houseImg = document.createElement('img');
      houseImg.src = S.house;
      houseImg.className = 'house';
      houseImg.alt = '';
      skyAtmosphere.insertBefore(houseImg, pixelGrass);

      const hutImg = document.createElement('img');
      hutImg.src = S.hut;
      hutImg.className = 'hut';
      hutImg.alt = '';
      skyAtmosphere.insertBefore(hutImg, pixelGrass);

      [[2, 4], [13, 3], [22, 3]].forEach((p, i) => {
        const e = document.createElement('img');
        e.src = S.tomb;
        e.alt = '';
        e.style.cssText = 'position:absolute;bottom:30px;left:' + p[0] + '%;width:' + (14 * (p[1] + (i % 2))) + 'px;z-index:3;';
        skyAtmosphere.insertBefore(e, pixelGrass);
      });

      [[42, 46], [68, 46]].forEach(p => {
        const e = document.createElement('img');
        e.src = S.pump;
        e.alt = '';
        e.style.cssText = 'position:absolute;bottom:30px;left:' + p[0] + '%;width:' + p[1] + 'px;z-index:3;';
        skyAtmosphere.insertBefore(e, pixelGrass);
      });

      const cast = [];
      let vis = 0;
      let seen = 0;
      let last = 0;
      let W = 0;
      let sc = 5;
      let X0 = 0;
      let X1 = 0;
      const HI = ['Halo!', 'Hai hai~', 'Boo! eh, halo', 'Apa kabar?', 'Hehe, hai!'];
      const TL = {
        pagi: [
          'Selamat pagi! Udara fajar Sanctum sejuk banget! 🌅',
          'Matahari pagi terbit, ayo mulai ngoding dengan semangat!',
          'Kaka biasanya ngopi dulu sebelum kompilasi pagi! ☕',
          'Pagi yang cerah di atas kuburan para master koding~',
          'Embun pagi membasahi lumut di batu nisan bertuah 🌿',
          'Selamat pagi pengembara! Semoga harimu bebas dari bug!'
        ],
        siang: [
          'Siang yang benderang! Kacamata pixelku kinclong ☀️',
          'Panas-panas begini enaknya ngoding di bawah naungan pohon pinus.',
          'Siang hari Sanctum ramai oleh lalu lalang maskot sahabat!',
          'Server tetap dingin walau matahari lagi terik-teriknya.',
          'Waktu istirahat siang, jangan lupa regangkan pinggangmu ya!',
          'Siang hari di pemukiman arwah tetap adem dan damai ✨'
        ],
        sore: [
          'Senja temaram... langit jingga Sanctum sungguh magis 🌇',
          'Matahari terbenam, sebentar lagi para arwah mulai bangun!',
          'Waktu sore paling asyik membaca riwayat proyek di Grimoire.',
          'Lentera labu mulai menyala satu per satu di sepanjang pagar.',
          'Angin sore berhembus membawa aroma daun gugur musim gugur 🍂',
          'Senja yang tenang untuk merenungkan arsitektur kode terbaik.'
        ],
        malam: [
          'Malam tiba! Waktu favorit Code Necromancer beraksi 🌙',
          'Bulan purnama bersinar terang! Kelelawar mulai berpatroli 🦇',
          'Selamat malam pengembara, nikmati suasana mistis Sanctum!',
          'Malam sunyi ditemani suara detak keyboard mekanik...',
          'Lilin-lilin ungu di altar mulai menyala dengan sendirinya 🕯️',
          'Kegelapan malam adalah kanvas terbaik untuk cahaya pixel!'
        ],
        tm: [
          'Sssst... sudah tengah malam! Jam keramat para programmer 🌌',
          'Jam 00:00 adalah waktu mustajab membangkitkan kode legendaris!',
          'Hantu-hantu lagi asyik nobar tutorial algoritma di awan.',
          'Begadang tanpa error adalah anugerah terindah malam ini! ✨',
          'Tengah malam begini jangan lupa minum air putih kawan 💧',
          'Para arwah kode berbisik: "Kompilasi sukses tanpa warning!"'
        ]
      };

      const GENERAL_LINES = [
        'Selamat datang di Sanctum! Rumah bagi arwah kode 🎃',
        'Tekan tombol Enter Graveyard kalau mau uji nyali ke bawah tanah!',
        'Portofolio Kaka Andrea Yahya penuh rahasia tersembunyi loh~',
        'Kucing hitam kami bisa mencium aroma bug dari jarak 100 meter 🐱',
        'Peti emas di dasar Katakombe dijaga dua prajurit bertombak!',
        'Semua maskot di sini ramah dan sudah divaksin anti-kutukan ✨',
        'Di bawah tanah ada 13 pencapaian yang bisa kamu gali!',
        'Pondok nenek sihir di pojok kiri selalu sedia ramuan konsentrasi 🧪',
        'Jangan ragu menjelajah, setiap sudut punya cerita mistis tersendiri!',
        'Buku Grimoire di lantai pertama menyimpan rekam jejak Kaka!',
        'Lava di dasar jurang -66M adalah sumber energi Sanctum ini 🔥',
        'Setiap commit adalah mantra baru yang menghidupkan dunia digital.'
      ];

      const CHAR_LINES = {
        pumpkin: [
          'Halo pengembara! Senang melihatmu mampir di Sanctum! 🎃',
          'Tahukah kamu? Kaka suka ngoding Laravel & Flutter larut malam! ☕',
          'Wahai musafir, selamat datang di pemukiman arwah ramah! ✨',
          'Gali ke bawah tanah yuk, di dasar ada 13 pencapaian rahasia!',
          'Labu ini bersinar berkat sintaks Tailwind dan CSS murni! 💡',
          'Pondok nenek sihir di sebelah baunya harum ramuan herbal~',
          'Jangan lupa sapa kucing hitam di pojok ya, dia pemalu tapi manis 🐱',
          'Hari yang sempurna untuk membangkitkan proyek web baru!',
          'Pssst... kalau mau masuk katakombe, pencet tombol Enter Graveyard ya! ⛏️',
          'Si tengkorak lagi latihan tari balet di atas kuburan, haha! 💀',
          'Aku labu paling ceria di seluruh jagat digital! 🎃',
          'Aw geli! Jangan cubit tangkaiku dong hehe~',
          'Kaka itu murid berprestasi di SMKN 13 Bandung lho! 🎓',
          'Senyum ramah labuku bisa mengusir bad mood seharian!',
          'Aroma pai labu hangat baru matang dari perapian nenek sihir!',
          'Mau kupandu keliling pemukiman arwah yang asri ini?'
        ],
        witch: [
          'Mantra JavaScript kunoku baru saja selesai dikompilasi! 🔮',
          'Sedang meracik ramuan anti-bug dan konsentrasi 100%! 🧪',
          'Sapu terbangku lagi servis rutin di bengkel SMKN 13 Bandung~ 🧹',
          'Salam sihir! Mau kubacakan ramalan masa depan kodingmu? ✨',
          'Kuali sihirku mendidih tiap kali ada commit baru di GitHub! 🐱‍💻',
          'Koleksi relik di lantai -24M punya energi magis luar biasa!',
          'Jangan sentuh ramuan ungu di meja altar ya, bisa bikin kursor melayang!',
          'Bintang-bintang di langit Sanctum selalu memandu jiwa pengembara.',
          'Necromancer Kaka selalu menulis kode yang bersih dan terstruktur!',
          'Awas kuali ramuanku meletup! Kadang keluar partikel CSS!',
          'Sihir modern itu namanya responsive design berstandar industri! 📱',
          'Buku sihir Grimoire di bawah bisa kamu bolak-balik lembarannya loh!',
          'Topi runcingku menangkap sinyal Wi-Fi dari dunia astral 📡',
          'Kucing hitam itu asisten setia yang paling rajin mengawasi ramuan.',
          'Mantra terbaik adalah kode yang mudah dibaca oleh tim!',
          'Jampi-jampi malam ini: semoga deploy ke production selalu lancar!'
        ],
        skel: [
          'Krik-krik! Tulang igaku berbunyi tiap kali ketemu fitur baru 🦴',
          'Santai dulu kawan, jangan begadang tanpa secangkir kopi hangat! ☕',
          'Hai manusia! Tengkorak ini ramah, nggak suka gigit kok~',
          'Di bawah sana ada lantai tulang -12M... tempat tidur favoritku! 💀',
          'Makan kolak di atas nisan, jangan galau kalau kodingan lisan!',
          'Duh, engsel lututku butuh oli pelumas semantik HTML nih!',
          'Peti harta karun di Katakombe dijaga ketat sama prajurit bertombak lho!',
          'Kelihatannya kamu orang baik, semoga harimu berkah & bebas error!',
          'Tulangku kuat karena rajin minum susu kalsium berkalori tinggi 🥛',
          'Si zombie di sebelah sering lupa naruh otaknya di mana, haha!',
          'Kalau lelah, istirahat sejenak sambil dengar musik 8-bit Sanctum 🎵',
          'Aku cuma numpang duduk santai di makam leluhur digital ini.',
          'Tengkorak tanpa stres adalah tengkorak yang selalu rajin git push!',
          'Mau pinjam tulang keringku buat stik drum 8-bit? 🥁',
          'Kuburan di sini bersih dan ber-AC alami dari angin malam.',
          'Kaka punya sertifikat resmi yang tersimpan rapi di peti relik!'
        ],
        zomb: [
          'Braaaains... eh maksudku, halo sahabat internet! 🧟',
          'Jalanku memang santai kayak query database yang belum diindeks~',
          'Api di kepalaku abadi, melambangkan semangat ngoding tanpa lelah! 🔥',
          'Kaka Andrea Yahya itu Code Necromancer berbakat dari Bandung!',
          'Walau aku zombie, aku rajin mandi air rawa wangi loh!',
          'Coba klik buku Grimoire di bawah, bisa membalik lembaran 3D sungguhan!',
          'Jangan takut, monster di Sanctum semuanya bersertifikat ramah turis!',
          'Uuugh... kopi dingin jam 2 malam rasanya nikmat tiada tara...',
          'Teman-temanku di bawah tanah lagi sibuk menambang diamond biru 💎',
          'Jangan lari ya, aku cuma pengen kenalan dan berteman!',
          'Bawah tanah Sanctum penuh lapisan sejarah yang menakjubkan!',
          'Aku pelindung kuburan yang setia menemani petualanganmu.',
          'Otakku mungkin lambat, tapi hatiku tulus mendukung karyamu!',
          'Langkah kaki zombie: kiri, kanan, seret... santai tapi pasti sampai!',
          'Di bawah sana hawanya hangat berkat inti lava bumi -66M.',
          'Kamu hebat sudah meluangkan waktu melihat portofolio ini!'
        ],
        cat: [
          'Meooww! 🐾 Kucing hitam pembawa keberuntungan hadir!',
          'Purrr... dielus kursor angin rasanya geli-geli enak~',
          'Aku baru saja menangkap bug memori yang sembunyi di semak-semak!',
          'Mataku bisa mendeteksi pixel yang geser walau cuma 1px! 👁️',
          'Ngeong~ Temani aku rebahan di pagar kayu sebentar yuk!',
          'Kucing hitam di Halloween bukan pembawa sial, tapi penjaga setia! 🎃',
          'Lompat sana lompat sini, mengejar kunang-kunang digital...',
          'Meong! Coba klik nisan di samping, kadang ada bisikan arwah!',
          'Malam ini buluku berkilau di bawah sinar rembulan ungu.',
          'Miau! Aku suka tidur di atas keyboard waktu Kaka lagi coding 💤',
          'Kalau lapar, aku berburu ikan pixel di kolam lava bawah tanah!',
          'Purrr... semoga kodemu selalu sukses di-deploy ke production!',
          'Ekor kucingku bergoyang mengikuti irama musik chiptune 🎵',
          'Kucing penyihir punya sembilan nyawa dan sembilan sertifikat!',
          'Meooong~ Jangan lupa kirim pesan ke Kaka lewat altar di bawah ya!',
          'Purrr... tidur siang di atas tumpukan kode rapi itu nikmat sekali.'
        ]
      };
      const CK = ['Aw, geli! 🎃', 'Boo!', 'Gali ke bawah tanah yuk!', 'Jangan ganggu aku, lagi seru nih!'];
      const PK = { pagi: 0.03, siang: 0.03, sore: 0.05, malam: 0.08, tm: 0.12 };
      const GV = [[2, 56], [13, 56], [22, 42]];

      function gx(i) {
        return (GV[i][0] * W) / 100 + GV[i][1] / 2;
      }
      function hx(h) {
        return h === 1 ? 0.96 * W - Math.max(120, Math.min(210, 0.3 * W)) * 0.52 : 0.31 * W + Math.max(60, Math.min(92, 0.08 * W)) / 2;
      }
      function pk(a) {
        return a[Math.floor(Math.random() * a.length)];
      }
      function st(c, s, t) {
        c.s = s;
        c.t = t;
        c.a = 0;
      }
      function sy(c, m, d) {
        c.b.textContent = m;
        c.b.classList.add('on');
        c.bt = d || 2.4;
      }
      function ok(c) {
        return c.s === 'idle' || c.s === 'walk';
      }
      function hi(c, m) {
        st(c, 'wave', 1.6);
        sy(c, m || pk(HI));
      }
      function sp(c) {
        c.v = Math.random() < c.rn ? (110 + Math.random() * 60) : (34 + Math.random() * 21);
        c.fr = c.v > 90 ? 11 : 5;
      }
      function wk(c, x) {
        c.g = Math.max(X0, Math.min(X1, x));
        sp(c);
        st(c, 'walk', Math.abs(c.g - c.x) / c.v + 2);
      }
      function dim() {
        W = skyAtmosphere.clientWidth || window.innerWidth;
        sc = W < 640 ? 4 : 5;
        X0 = 0.04 * W;
        X1 = 0.96 * W - 24;
        cast.forEach(c => {
          c.el.style.width = (12 * sc) + 'px';
          c.el.style.height = (18 * sc) + 'px';
        });
      }
      function rd(c) {
        const u = c.k + c.f;
        c.el.style.left = (c.x - 6 * sc) + 'px';
        c.el.classList.toggle('fl', !!c.fl);
        const sn = c.s === 'sink' || c.s === 'hid';
        c.el.classList.toggle('sk', (sn && !c.hm) || c.s === 'gone');
        c.el.classList.toggle('fd', sn && !!c.hm);
        if (c.u !== u) {
          c.u = u;
          c.im.src = fr(c.k, c.f);
        }
        c.b.style.left = c.x + 'px';
        c.b.style.bottom = (36 + 18 * sc) + 'px';
      }

      const castDefs = [
        ['pumpkin', 0.12, 0.5, 2],
        ['witch', 0.3, 0.25, 1],
        ['skel', 0.5, 0.15, 0],
        ['zomb', 0.7, 0, 0],
        ['cat', 0.9, 0.6, 0]
      ];
      castDefs.forEach(d => {
        const el = document.createElement('div');
        const im = document.createElement('img');
        const b = document.createElement('div');
        el.className = 'mc';
        b.className = 'bb';
        im.alt = '';
        el.appendChild(im);
        skyAtmosphere.insertBefore(el, pixelGrass);
        skyAtmosphere.insertBefore(b, pixelGrass);
        const c = {
          k: d[0],
          f: 0,
          x: 0,
          fl: 0,
          s: 'idle',
          t: 1 + Math.random() * 2,
          a: 0,
          cd: 0,
          bt: 0,
          el: el,
          im: im,
          b: b,
          d: d[1],
          rn: d[2],
          hm: d[3],
          fz: 0,
          bz: 0
        };
        el.addEventListener('click', e => {
          e.stopPropagation();
          const isReaperActive = typeof window.isDragonEnabled !== 'undefined' ? window.isDragonEnabled : (localStorage.getItem('kaka_pumpkin_active') !== 'false');
          if (isReaperActive) {
            scare(c);
          } else if (ok(c)) {
            const lines = CHAR_LINES[c.k] || CK;
            hi(c, pk(lines));
            try { playMascotSound('blip'); } catch (_) {}
          }
        });
        el.addEventListener('mouseenter', () => {
          const isReaperActive = typeof window.isDragonEnabled !== 'undefined' ? window.isDragonEnabled : (localStorage.getItem('kaka_pumpkin_active') !== 'false');
          if (isReaperActive) {
            scare(c);
          } else if (ok(c) && c.s !== 'wave' && Math.random() < 0.6) {
            const lines = CHAR_LINES[c.k] || CK;
            hi(c, pk(lines));
          }
        });
        cast.push(c);
      });

      dim();
      cast.forEach(c => {
        c.x = X0 + c.d * (X1 - X0);
        rd(c);
      });

      let cx = -999, cy = -999;
      const PN = ['AAAH!', 'Kabur!! 💨', 'Tolong!', 'Jangan dekat!', 'Eeeek!', 'Waaaa! 👻', 'Kaget! ⚡'];

      function scare(c) {
        const rc = skyAtmosphere.getBoundingClientRect();
        const mx = cx - rc.left;
        const d = Math.sign(c.x - mx) || (Math.random() < 0.5 ? 1 : -1);
        let g = Math.max(X0, Math.min(X1, c.x + d * 320));
        const hm = c.hm || c.k === 'skel' || c.k === 'zomb';
        c.toG = 0;
        if (Math.abs(g - c.x) < 60 || Math.random() < 0.25) {
          if (hm) {
            c.toG = 1;
            g = c.hm ? hx(c.hm) : gx(Math.floor(Math.random() * 3));
          } else {
            g = Math.max(X0, Math.min(X1, c.x - d * 320));
          }
        }
        c.g = g;
        c.v = 200 + Math.random() * 60;
        c.fr = 16;
        st(c, 'walk', 8);
        c.fz = 0.5;
        if (c.bz <= 0) {
          sy(c, pk(PN), 1.5);
          c.bz = 1.6;
          try { playMascotSound('blip'); } catch (_) {}
        }
      }

      function pickAction(c, T) {
        const r = Math.random();
        if (c.k === 'cat') return wk(c, c.x + (Math.random() * 320 - 160));
        if (r < (PK[T] || 0.1)) {
          c.toG = 1;
          c.g = c.hm ? hx(c.hm) : gx(Math.floor(Math.random() * 3));
          sp(c);
          st(c, 'walk', 20);
        } else if (T === 'tm' && r > 0.65) {
          st(c, 'sleep', 6 + Math.random() * 4);
          sy(c, '💤', c.t);
        } else {
          wk(c, X0 + Math.random() * (X1 - X0));
        }
      }

      function tick(ts) {
        requestAnimationFrame(tick);
        const dt = Math.min(0.05, (ts - last) / 1000);
        last = ts;
        const T = document.body.dataset.t || 'malam';
        const nt = T === 'malam' || T === 'tm';
        const NI = { skel: 1, zomb: 1 };

        cast.forEach(c => {
          const al = !NI[c.k] || nt;
          if (!al && c.s !== 'gone') {
            c.s = 'gone';
            c.b.classList.remove('on');
            rd(c);
          } else if (al && c.s === 'gone') {
            c.x = gx(Math.floor(Math.random() * 3));
            st(c, 'rise', 0.8);
            rd(c);
          }
        });

        if (!vis) return;

        const rc = skyAtmosphere.getBoundingClientRect();
        const mx = cx - rc.left;
        const my = rc.bottom - cy;
        const R2 = Math.pow(sc * 32, 2);

        cast.forEach(c => {
          c.t -= dt;
          c.a += dt;
          c.cd -= dt;
          if (c.bt > 0 && (c.bt -= dt) <= 0) c.b.classList.remove('on');
          c.fz -= dt;
          c.bz -= dt;

          const isReaperActive = typeof window.isDragonEnabled !== 'undefined' ? window.isDragonEnabled : (localStorage.getItem('kaka_pumpkin_active') !== 'false');

          if (isReaperActive && cx > -900 && (c.s === 'idle' || c.s === 'walk' || c.s === 'wave' || c.s === 'sleep') && c.fz <= 0 && !(c.toG && c.v > 180)) {
            const q = c.x - mx;
            const h = 30 + 9 * sc - my;
            if (q * q + h * h < R2) scare(c);
          } else if (!isReaperActive && cx > -900 && ok(c) && c.cd <= 0) {
            // Mode biasa: kursor mendekat menyapa ramah tanpa panik atau lari
            const q = c.x - mx;
            const h = 30 + 9 * sc - my;
            if (q * q + h * h < Math.pow(sc * 14, 2)) {
              c.fl = c.x > mx;
              hi(c);
              c.cd = 12;
            }
          }
          const s = c.s;
          if (s === 'walk') {
            const d = c.g - c.x;
            if (Math.abs(d) < 3 || c.t <= 0) {
              if (c.toG) {
                c.toG = 0;
                st(c, 'sink', 0.8);
              } else {
                st(c, 'idle', 0.6 + Math.random() * 1.6);
              }
            } else {
              c.x += Math.sign(d) * Math.min(Math.abs(d), c.v * dt);
              c.fl = d < 0;
              c.f = 1 + (Math.floor(c.a * c.fr) % 2);
            }
          } else if (s === 'wave') {
            c.f = Math.floor(c.a * 4) % 2 ? 3 : 0;
            if (c.t <= 0) st(c, 'idle', 1 + Math.random() * 2);
          } else if (s === 'idle') {
            c.f = 0;
            if (c.t <= 0) pickAction(c, T);
          } else if (s === 'sleep') {
            c.f = 0;
            if (c.t <= 0) {
              sy(c, '...hoaam', 2);
              st(c, 'idle', 2);
            }
          } else if (s === 'sink') {
            if (c.t <= 0) st(c, 'hid', (3 + Math.random() * 3) * (T === 'tm' ? 2 : 1));
          } else if (s === 'hid') {
            if (c.t <= 0) {
              c.x = c.hm ? hx(c.hm) : gx(Math.floor(Math.random() * 3));
              st(c, 'rise', 0.8);
            }
          } else if (s === 'rise') {
            if (c.t <= 0) st(c, 'idle', 1);
          }
          rd(c);
        });

        for (let i = 0; i < cast.length; i++) {
          for (let j = i + 1; j < cast.length; j++) {
            const a = cast[i];
            const b = cast[j];
            if (a.cd <= 0 && b.cd <= 0 && ok(a) && ok(b) && Math.abs(a.x - b.x) < sc * 14) {
              a.fl = a.x > b.x;
              b.fl = !a.fl;
              hi(a);
              hi(b);
              a.cd = 14;
              b.cd = 14;
            }
          }
        }
      }

      const surfaceObserver = new IntersectionObserver(es => {
        const v = es[0].isIntersecting;
        const n = performance.now();
        if (v && n - seen > 5000) {
          setTimeout(() => {
            const l = cast.filter(ok);
            if (l.length) {
              const curT = document.body.dataset.t || 'malam';
              const curLines = TL[curT] || TL.malam;
              hi(pk(l), Array.isArray(curLines) ? pk(curLines) : curLines);
            }
          }, 700);
        }
        vis = v;
        if (!v) seen = n;
      }, { threshold: 0.15 });

      surfaceObserver.observe(skyAtmosphere);
      window.addEventListener('resize', () => {
        dim();
        cast.forEach(c => {
          c.x = Math.max(X0, Math.min(X1, c.x));
        });
      });

      ['pointermove', 'pointerdown'].forEach(evt => {
        window.addEventListener(evt, e => {
          cx = e.clientX;
          cy = e.clientY;
        }, { passive: true });
      });
      window.addEventListener('pointerleave', () => {
        cx = -999;
        cy = -999;
      });

      // Autonomous Mascot Chatter: mascots spontaneously greet & converse without waiting for mouse!
      setInterval(() => {
        const isReaperActive = typeof window.isDragonEnabled !== 'undefined' ? window.isDragonEnabled : (localStorage.getItem('kaka_pumpkin_active') !== 'false');
        if (isReaperActive || !vis) return;

        const eligible = cast.filter(c => ok(c) && c.bt <= 0 && c.s !== 'gone' && c.s !== 'sleep');
        if (!eligible.length) return;

        const chosen = pk(eligible);
        const roll = Math.random();
        let speech = '';
        const T = document.body.dataset.t || 'malam';
        if (roll < 0.65 && CHAR_LINES[chosen.k] && CHAR_LINES[chosen.k].length) {
          speech = pk(CHAR_LINES[chosen.k]);
        } else if (roll < 0.85 && TL[T] && Array.isArray(TL[T])) {
          speech = pk(TL[T]);
        } else {
          speech = pk(GENERAL_LINES);
        }

        st(chosen, 'wave', 1.8);
        sy(chosen, speech, 3.8);
        chosen.cd = 6;
      }, 4200);

      requestAnimationFrame(tick);
    }

    const catacombDepth = document.getElementById('catacombDepth');
    const catacombCount = document.getElementById('catacombCount');
    const btnToSurface = document.getElementById('btnToSurface');
    const soilLayers = document.getElementById('soilLayers');

    if (!soilLayers) return;

    const ACHIEVEMENT_LAYERS = [
      {
        n: 'TANAH GEMBUR',
        r: '0 s.d. -12 M',
        a: [
          { e: '🎃', t: 'Benih Pertama', d: 'Menulis baris kode pertama.', u: 1 },
          { e: '⛏️', t: 'Penggali Pemula', d: 'Menyelesaikan kelas Dasar Pemrograman Web.', u: 1 },
          { e: '🐛', t: 'Pemburu Bug', d: 'Memperbaiki 100 bug tanpa menyerah.', u: 1 }
        ]
      },
      {
        n: 'LAPISAN TULANG',
        r: '-12 s.d. -24 M',
        a: [
          { e: '🦴', t: 'Tulang Responsif', d: 'Membuat tampilan rapi di semua layar.', u: 1 },
          { e: '💀', t: 'Si Semantik', d: 'Menguasai HTML semantik berstandar industri.', u: 1 },
          { e: '🔮', t: 'Penyihir CSS', d: 'Membuat 10 animasi yang halus dan hidup.', u: 0 }
        ]
      },
      {
        n: 'KATAKOMBE',
        r: '-24 s.d. -36 M',
        br: 1,
        a: [
          { e: '🕯️', t: 'Penjaga JavaScript', d: 'Menyelesaikan kelas dasar JavaScript.', u: 1 },
          { e: '📱', t: 'Pembuat Aplikasi', d: 'Merilis aplikasi mobile pertama.', u: 0 },
          { e: '🧙', t: 'Kolaborator', d: 'Mengerjakan proyek bersama tim.', u: 0 }
        ]
      },
      {
        n: 'RUANG PETI MATI',
        r: '-36 s.d. -46 M',
        br: 1,
        a: [
          { e: '📜', t: 'Sertifikat Bertuah', d: 'Mengumpulkan 3 sertifikat resmi.', u: 1 },
          { e: '⚰️', t: 'Proyek Terkutuk', d: 'Menyelesaikan proyek besar sampai rilis.', u: 0 },
          { e: '🌙', t: 'Malam Tanpa Error', d: 'Begadang tanpa satu pun error muncul.', u: 0 }
        ]
      },
      {
        n: 'JURANG TERDALAM',
        r: '-46 s.d. -58 M',
        dp: 1,
        a: [
          { e: '🕳️', t: 'Dunia Seberang', d: 'Menggali sampai ke dasar halaman.', u: 0, s: 1 }
        ]
      }
    ];

    const allAchievements = [];
    ACHIEVEMENT_LAYERS.forEach(l => {
      l.a.forEach(a => allAchievements.push(a));
    });

    const unlockedState = allAchievements.map(a => !!a.u);

    function renderCard(el, i) {
      const a = allAchievements[i];
      const isOk = unlockedState[i];
      const isVisible = isOk || !a.s;
      el.className = 'ac ' + (isOk ? 'ok' : 'lk') + (a.s ? ' sec' : '') + (el.classList.contains('in') ? ' in' : '');
      el.innerHTML = '<div class="ic">' + (isOk ? a.e : '🔒') + '</div>' +
        '<div class="tt">' +
        '<b>' + (isVisible ? a.t : '???') + '</b>' +
        '<p>' + (isVisible ? a.d : 'Rahasia. Gali terus sampai paling dasar.') + '</p>' +
        '<em>' + (isOk ? '✔ TERBUKA' : '✖ TERKUNCI') + '</em>' +
        '</div>';
    }

    // Render all 13 achievements into Katakombe section
    allAchievements.forEach((a, i) => {
      const c = document.createElement('div');
      c.dataset.i = i;
      renderCard(c, i);
      soilLayers.appendChild(c);
    });

    const aboutSection = document.getElementById('about');
    if (aboutSection && S && S.tree) {
      const rootTreeImg = document.createElement('img');
      rootTreeImg.src = S.tree;
      rootTreeImg.className = 'tree';
      rootTreeImg.alt = '';
      aboutSection.insertBefore(rootTreeImg, aboutSection.firstChild);
    }

    // Ore sprites from Reference 6
    function ore(a) {
      return mk(10, 8, function(x) {
        x.fillStyle = "#6b6660";
        x.fillRect(1, 1, 8, 7);
        x.fillRect(2, 0, 6, 1);
        x.fillStyle = "#4a4540";
        x.fillRect(1, 6, 8, 2);
        x.fillStyle = a;
        [[3, 2], [6, 3], [4, 5], [7, 5], [2, 4]].forEach(function(p) {
          x.fillRect(p[0], p[1], 2, 1);
          x.fillRect(p[0], p[1] + 1, 1, 1);
        });
      });
    }
    S.coal = ore("#15151a");
    S.fe = ore("#d9a46a");
    S.au = ore("#f6c445");
    S.dia = ore("#6ee7ff");
    S.fos = mk(10, 10, function(x) {
      x.fillStyle = "#b9a98a";
      [[3, 0, 4, 1], [1, 1, 8, 1], [0, 2, 10, 6], [1, 8, 8, 1], [3, 9, 4, 1]].forEach(function(r) {
        x.fillRect(r[0], r[1], r[2], r[3]);
      });
      x.fillStyle = "#7a6a4a";
      [[3, 3, 4, 1], [3, 4, 1, 3], [3, 6, 4, 1], [6, 4, 1, 2], [5, 4, 1, 1]].forEach(function(r) {
        x.fillRect(r[0], r[1], r[2], r[3]);
      });
    });

    // Jagged pixel rock strata edge dividers between layers from Reference 6 (High density 50 teeth)
    document.querySelectorAll(".soil-stratum").forEach(function(l, i) {
      if (!i) return;
      var e = document.createElement("i"), p = "0 100%";
      for (var k = 0; k < 50; k++) {
        var seed = (k * 7 + i * 13) % 23;
        var y = (seed % 5) * 3; // Fine rocky teeth: 0, 3, 6, 9, 12px
        var x1 = (k * 2);
        var x2 = (k * 2 + 2);
        p += "," + x1 + "% " + y + "px," + x2 + "% " + y + "px";
      }
      p += ",100% 100%";
      e.className = "ed";
      e.style.clipPath = "polygon(" + p + ")";
      l.insertBefore(e, l.firstChild);
    });

    const decoConfig = [
      ['worm', 'about', 3, 22, 4],
      ['worm', 'about', 84, 62, 4],
      ['bone', 'about', 8, 78, 4],
      ['pump', 'about', 88, 26, 4],
      ['skull', 'projects', 5, 18, 5],
      ['bone', 'projects', 82, 30, 5],
      ['bone', 'projects', 4, 62, 5],
      ['skull', 'projects', 86, 72, 4],
      ['skull', 'sertificat', 6, 40, 5],
      ['bone', 'sertificat', 84, 20, 5],
      ['coffin', 'shadows', 3, 26, 5],
      ['coffin', 'shadows', 88, 58, 5],
      ['skull', 'shadows', 85, 12, 4],
      ['bat', 'achievements', 5, 20, 4],
      ['bat', 'achievements', 93, 25, 4],
      ['skull', 'achievements', 92, 60, 4],
      ['bone', 'achievements', 4, 70, 4],
      ['bat', 'contact', 12, 30, 4],
      ['bat', 'contact', 84, 40, 4]
    ];
    const spriteBaseSizes = { skull: 8, bone: 12, pump: 10, bat: 9, tomb: 14, coffin: 12, worm: 16, chest: 14 };

    decoConfig.forEach(d => {
      const parent = document.getElementById(d[1]);
      if (!parent) return;
      const img = document.createElement('img');
      img.src = S[d[0]];
      img.className = 'dc';
      img.alt = '';
      const w = (spriteBaseSizes[d[0]] || 12) * d[4];
      img.style.cssText = 'left:' + d[2] + '%;top:' + d[3] + '%;width:' + w + 'px';
      parent.appendChild(img);
    });

    const orePlacements = [
      ["fe", 'about', 84, 38],
      ["fos", 'projects', 5, 52],
      ["au", 'projects', 91, 70],
      ["coal", 'sertificat', 3, 72],
      ["dia", 'sertificat', 92, 48],
      ["au", 'shadows', 5, 22],
      ["fe", 'shadows', 90, 62],
      ["dia", 'achievements', 6, 45],
      ["au", 'achievements', 93, 65]
    ];
    orePlacements.forEach(o => {
      const parent = document.getElementById(o[1]);
      if (!parent) return;
      const img = document.createElement('img');
      img.src = S[o[0]];
      img.className = 'dc';
      img.alt = '';
      img.style.cssText = 'left:' + o[2] + '%;top:' + o[3] + '%;width:50px' + (o[0] === 'au' || o[0] === 'dia' ? ';animation:fl 2s steps(3) infinite' : '');
      parent.appendChild(img);
    });

    // Treasure Vault & Guards stationed directly on the Katakombe Floor Boundary (-58 M threshold)
    const treasureLayer = document.getElementById('achievements');
    if (treasureLayer) {
      const treasureItems = [
        ['pile', 50, -160, 0, 112],
        ['pile', 50, 50, 0, 98],
        ['chest', 50, -56, 0, 112],
        ['candle', 50, -210, 0, 25],
        ['candle', 50, 185, 0, 25],
        ['skull', 50, -265, 0, 44],
        ['bone', 50, 235, 0, 60],
        ['coin', 50, -110, 32, 22],
        ['coin', 50, -85, 4, 20],
        ['coin', 50, 75, 28, 22],
        ['coin', 50, 125, 4, 20],
        ['gemC', 50, -185, 4, 28],
        ['gemP', 50, 160, 4, 28],
        ['gemR', 50, -62, 2, 24],
        ['gemC', 50, 62, 2, 24]
      ];
      treasureItems.forEach(s => {
        const img = document.createElement('img');
        img.src = S[s[0]];
        img.className = 'ob';
        img.alt = '';
        img.style.cssText = 'left:calc(' + s[1] + '% + ' + s[2] + 'px);bottom:' + s[3] + 'px;width:' + s[4] + 'px' + (s[0] === 'candle' ? ';animation:fl 1.6s steps(3) infinite' : '');
        treasureLayer.appendChild(img);
      });

      const GUARD_LINES = [
        'Halt! Siapa yang berani mendekati peti rahasia ini?! ⚔️',
        'Tenang pengembara, peti emas ini berisi arsip karya suci Kaka!',
        'Kami prajurit penjaga arwah, setia mengawal perbatasan Katakombe! 🛡️',
        'Di bawah kaki kami adalah Jurang Bedrock -66 M yang membara 🔥',
        'Tombak ini ditempa dari CSS murni dan logika JavaScript kuno! ✨',
        'Kamu berhasil menjelajah sampai sedalam -58 meter! Luar biasa! 🏆',
        'Peti ini hanya terbuka bagi mereka yang menghargai clean code 💎',
        'Jangan colek koin emasnya ya, itu buat bayar langganan server haha!',
        'Kaka Andrea Yahya adalah Code Necromancer sejati, karyanya kokoh!',
        'Mau kembali ke pemukiman atas? Tekan tombol "Ke permukaan" di bawah! ⬆️',
        'Sssst... arwah di lapisan lava terdalam lagi tidur lelap 💤',
        'Salam hormat dari kami berdua, sang penjaga gerbang bawah tanah! ⚔️',
        'Kami berjaga siang dan malam tanpa pernah kena bug!',
        'Semua pencapaian di dinding bata ini adalah bukti kerja keras Kaka 📜',
        'Peti pusaka ini dijaga ketat, tapi kami ramah pada tamu baik hati! 😊',
        'Kekuatan arwah Katakombe selalu melindungi setiap baris kode di sini!'
      ];

      function pkGuard(arr) {
        if (!arr || !arr.length) return '';
        return arr[Math.floor(Math.random() * arr.length)];
      }

      const guards = [
        { id: 'gd1', style: 'left:max(8px,calc(50% - 330px))', name: 'Penjaga Kiri' },
        { id: 'gd2', style: 'right:max(8px,calc(50% - 330px))', name: 'Penjaga Kanan' }
      ];

      const guardInstances = [];

      guards.forEach((g, i) => {
        const wrap = document.createElement('div');
        wrap.className = 'guard-character ' + (i === 0 ? 'guard-left' : 'guard-right');
        wrap.style.cssText = 'position:absolute;bottom:0px;width:60px;height:90px;z-index:25;cursor:pointer;' + g.style;
        wrap.setAttribute('role', 'button');
        wrap.setAttribute('tabindex', '0');
        wrap.setAttribute('aria-label', g.name + ' - Klik untuk menyapa');
        wrap.title = 'Klik penjaga arwah untuk berbicara!';

        const img = document.createElement('img');
        img.src = fr(g.id, 0);
        img.className = 'guard-sprite';
        img.alt = g.name;
        img.style.cssText = 'width:60px;height:90px;image-rendering:pixelated;display:block;transition:transform 0.18s ease;' + (i ? 'transform:scaleX(-1);' : '');

        const bb = document.createElement('div');
        bb.className = 'bb guard-bb';
        bb.style.cssText = 'bottom:96px;left:50%;';

        wrap.appendChild(img);
        wrap.appendChild(bb);
        treasureLayer.appendChild(wrap);

        let speakTimer = null;
        function speak(text) {
          bb.textContent = text || pkGuard(GUARD_LINES);
          bb.classList.add('on');
          try { playMascotSound('blip'); } catch (_) {}
          // Little spear flourish animation
          img.style.transform = (i ? 'scaleX(-1) ' : '') + 'translateY(-8px) scale(1.1)';
          setTimeout(() => {
            img.style.transform = i ? 'scaleX(-1)' : '';
          }, 240);
          clearTimeout(speakTimer);
          speakTimer = setTimeout(() => {
            bb.classList.remove('on');
          }, 3800);
        }

        wrap.addEventListener('click', e => {
          e.stopPropagation();
          speak();
        });

        wrap.addEventListener('mouseenter', () => {
          if (!bb.classList.contains('on')) {
            speak();
          }
        });

        // Alternating spear idle stance
        let n = 0;
        setInterval(() => {
          img.src = fr(g.id, (n ^= 1) * 3);
        }, 1500 + i * 400);

        guardInstances.push({ wrap, img, bb, speak });
      });

      // Observe the guards directly so they immediately greet the user upon arrival at the Katakombe floor boundary!
      let hasGreetedArrival = false;
      const guardArrivalObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasGreetedArrival) {
            hasGreetedArrival = true;
            // Immediate arrival greeting dialogue between the two guards
            setTimeout(() => {
              if (guardInstances[0]) {
                guardInstances[0].speak('⚔️ Halt! Siapa yang berani mendekati peti rahasia ini?!');
              }
            }, 300);
            setTimeout(() => {
              if (guardInstances[1]) {
                guardInstances[1].speak('Tenang kawan! Dia pengembara yang berhasil menggali 13 pencapaian! 🏆');
              }
            }, 2600);
            setTimeout(() => {
              if (guardInstances[0]) {
                guardInstances[0].speak('Baguslah kalau begitu! Selamat datang di perbatasan Katakombe -58 M! ✨');
              }
            }, 5500);
          }
        });
      }, { threshold: 0.15 });

      guardInstances.forEach(g => guardArrivalObserver.observe(g.wrap));

      // Autonomous Guard Chatter:
      // When guards are in viewport, they periodically converse autonomously every 5.5 seconds
      setInterval(() => {
        if (!guardInstances.length) return;
        const rect = guardInstances[0].wrap.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (!isInView) return;

        const isSpeaking = guardInstances.some(g => g.bb.classList.contains('on'));
        if (isSpeaking) return;

        const chosen = pkGuard(guardInstances);
        if (chosen) chosen.speak();
      }, 5500);
    }

    const sittingMascotConfigs = [
      [3, 'skel', 'right:18px', [0, 3], 'Woy! Enak rebahan di tulang nih... Dingin empuk!'],
      [10, 'zomb', 'left:18px', [0, 2], 'Gelap banget di sini! Untung kepalaku berapi 🔥']
    ];
    sittingMascotConfigs.forEach(r => {
      const cardEl = document.querySelector('.ac[data-i="' + r[0] + '"]');
      if (!cardEl) return;
      const s = document.createElement('span');
      const im = document.createElement('img');
      s.className = 'rs';
      s.style.cssText = r[2];
      s.dataset.say = r[4];
      im.alt = '';
      im.src = fr(r[1], 0);
      s.appendChild(im);
      cardEl.appendChild(s);
      let n = 0;
      setInterval(() => {
        im.src = fr(r[1], r[3][n ^= 1]);
      }, 700);
      s.addEventListener('click', e => {
        e.stopPropagation();
        playMascotSound('blip');
        s.classList.add('say');
        setTimeout(() => s.classList.remove('say'), 2600);
      });
    });

    const cardObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          cardObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '600px 0px' });

    document.querySelectorAll('.ac').forEach(c => cardObserver.observe(c));

    function updateCatacombCount() {
      const opened = unlockedState.filter(Boolean).length;
      if (catacombCount) {
        catacombCount.textContent = '🏆 ' + opened + '/' + allAchievements.length;
      }
    }

    // ===== SURFACE SCROLL LOCK UNTIL "ENTER GRAVEYARD" / "GALI KE BAWAH" IS CLICKED =====
    isGraveyardUnlocked = false;
    let isTransitioningUnderground = false;
    let hasScrolledUnderground = false;
    let lastPulseTime = 0;
    const homeSection = document.getElementById('home');
    const enterGraveyardBtn = document.getElementById('btnEnterGraveyard') || document.querySelector('.scroll-down-indicator');
    const btnDigDown = document.getElementById('btnDigDown');

    function getSurfaceScrollLimit() {
      if (!homeSection) return 0;
      return Math.max(0, homeSection.offsetTop + homeSection.offsetHeight - window.innerHeight);
    }

    function pulseEnterGraveyard() {
      const now = performance.now();
      if (now - lastPulseTime < 900) return; // Prevent layout thrashing on fast scroll!
      lastPulseTime = now;
      const btn = document.getElementById('btnDigDown') || enterGraveyardBtn;
      if (btn) {
        btn.classList.add('pulse-hint');
        setTimeout(() => btn.classList.remove('pulse-hint'), 800);
      }
    }

    function unlockGraveyardAndScroll(targetSelector) {
      isGraveyardUnlocked = true;
      hasScrolledUnderground = true;
      isTransitioningUnderground = true;
      playSound('blip');

      const target = document.querySelector(targetSelector || '#about');
      if (target) {
        const navHeight = 70;
        const targetTop = Math.max(0, target.offsetTop - navHeight);
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }

      // Safely release transition lock once smooth scroll settles
      setTimeout(() => {
        isTransitioningUnderground = false;
      }, 1300);
    }

    if (btnDigDown) {
      btnDigDown.addEventListener('click', e => {
        e.preventDefault();
        unlockGraveyardAndScroll('#about');
      });
    }

    if (enterGraveyardBtn) {
      enterGraveyardBtn.addEventListener('click', e => {
        e.preventDefault();
        unlockGraveyardAndScroll('#about');
      });
    }

    // Nav links & buttons: unlock if going underground, re-lock if going to surface
    document.querySelectorAll('#links a, .hero-actions a').forEach(link => {
      link.addEventListener('click', () => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        if (href === '#home') {
          isGraveyardUnlocked = false; // Re-lock when returning to surface
          hasScrolledUnderground = false;
        } else {
          isGraveyardUnlocked = true; // Unlock for subterranean exploration
          hasScrolledUnderground = true;
        }
      });
    });

    // Intercept wheel past surface when locked (desktop mouse wheel)
    window.addEventListener('wheel', e => {
      if (isGraveyardUnlocked || isResurrecting || isTransitioningUnderground) return;
      const limit = getSurfaceScrollLimit();
      if (window.scrollY >= limit - 4 && e.deltaY > 0) {
        e.preventDefault();
        window.scrollTo({ top: limit, behavior: 'instant' });
        pulseEnterGraveyard();
      }
    }, { passive: false });

    // Touch dragging on mobile: smoothly unlock on intentional swipe down
    let touchStartY = 0;
    window.addEventListener('touchstart', e => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchmove', e => {
      if (isGraveyardUnlocked || isResurrecting || isTransitioningUnderground) return;
      const limit = getSurfaceScrollLimit();
      const delta = touchStartY - e.touches[0].clientY;
      if (window.scrollY >= limit - 4 && delta > 25) {
        // User swiped down past surface board on mobile: seamlessly unlock & glide down
        unlockGraveyardAndScroll('#about');
      }
    }, { passive: true });

    // Cartesian Y-Axis depth & altitude calculation:
    // Surface ground is 0 m (Y=0).
    // Sky/atmosphere is positive altitude (35 m down to 0 m, no '+' sign).
    // Going underground descends on negative Y axis (0 m down to -66 m).
    function updateCatacombDepthMeter(scrollY = window.scrollY) {
      const limit = getSurfaceScrollLimit();
      const totalDist = document.documentElement.scrollHeight - window.innerHeight;
      const undergroundDist = totalDist - limit;
      let depthMeters = 0;

      if (scrollY > limit && undergroundDist > 0) {
        const ratio = Math.min(1, Math.max(0, (scrollY - limit) / undergroundDist));
        depthMeters = -Math.round(ratio * 66);
      } else if (limit > 0) {
        const skyRatio = Math.max(0, Math.min(1, (limit - scrollY) / limit));
        depthMeters = Math.round(skyRatio * 35);
      } else {
        depthMeters = 0;
      }

      if (catacombDepth) {
        catacombDepth.textContent = '⛏ ' + depthMeters + ' m';
      }

      // Check if user was previously deep underground (< -15m) and returns to surface (>= 0m)
      if (typeof window._lastRecordedDepth === 'number') {
        if (window._lastRecordedDepth < -15 && depthMeters >= 0) {
          if (typeof window.onReturnFromUnderground === 'function') {
            window.onReturnFromUnderground();
          }
        }
      }
      window._lastRecordedDepth = depthMeters;

      // Secret 13th Achievement unlock when reaching the deepest bedrock (-64m to -66m)
      if (depthMeters <= -64) {
        const lastIdx = allAchievements.length - 1;
        if (!unlockedState[lastIdx]) {
          unlockedState[lastIdx] = true;
          const secretCard = document.querySelector('.ac[data-i="' + lastIdx + '"]');
          if (secretCard) {
            renderCard(secretCard, lastIdx);
          }
          updateCatacombCount();
          playSound('achievement');
          showToast(allAchievements[lastIdx].t + ' — ' + allAchievements[lastIdx].d, 'ACHIEVEMENT TERBUKA!', '🏆');
        }
      }

      return depthMeters;
    }

    window.updateCatacombDepthMeter = updateCatacombDepthMeter;

    function onCatacombScroll() {
      if (isResurrecting || isTransitioningUnderground) return; // Never clamp or halt scroll during transition or cinematic ascension!
      const limit = getSurfaceScrollLimit();

      if (window.scrollY > limit + 10) {
        hasScrolledUnderground = true;
      }

      // Clamp scroll if user scrolls past surface while locked
      if (!isGraveyardUnlocked && window.scrollY > limit) {
        // On mobile touch screens, gracefully unlock instead of fighting kinetic momentum and vibrating the screen
        if (window.innerWidth <= 768) {
          unlockGraveyardAndScroll('#about');
          return;
        }
        window.scrollTo({ top: limit, behavior: 'instant' });
        pulseEnterGraveyard();
        return;
      }

      // Re-lock ONLY when user has explored underground and now intentionally scrolls all the way back to the very top
      if (isGraveyardUnlocked && window.scrollY <= 15 && hasScrolledUnderground && !isTransitioningUnderground) {
        isGraveyardUnlocked = false;
        hasScrolledUnderground = false;
      }

      updateCatacombDepthMeter(window.scrollY);
    }

    // ===== PENJAGA BERJUBAH (CLOAKED GUARDIAN & NOTICE BOARD - Reference 7) =====
    const cloakedGuardian = document.getElementById('cloakedGuardian');
    const guardianImg = document.getElementById('guardianImg');
    const cloakedBubble = document.getElementById('cloakedBubble');
    const boardNoticeText = document.getElementById('boardNoticeText');

    if (guardianImg && typeof cg === 'function') {
      guardianImg.src = cg(0);
    }

    // Papan Pengumuman: teks berubah sesuai waktu (pagi, siang, sore, malam, tengah malam)
    const BN = {
      pagi: "Pagi cerah. Gagak beterbangan.",
      siang: "Siang terik. Kuburan sepi.",
      sore: "Senja tiba. Hantu mulai berbisik.",
      malam: "Malam tiba. Kerangka dan zombie bangkit.",
      tm: "Tengah malam. Jangan bangunkan mereka."
    };

    function updateNoticeBoard() {
      const tKey = document.body.dataset.t || (document.body.classList.contains('theme-day') ? 'siang' : document.body.classList.contains('theme-sunset') ? 'sore' : 'malam');
      const t = BN[tKey] || BN.malam;
      if (boardNoticeText) {
        boardNoticeText.textContent = t;
      }
    }
    updateNoticeBoard();
    setInterval(updateNoticeBoard, 1500);

    const HT = [
      "Gali ke bawah, pendatang. Penghargaanmu menunggu di dalam tanah.",
      "Ada satu achievement rahasia di dasar jurang. Gali sampai paling dalam.",
      "Penghuni pekuburan ini ramah. Sapa mereka, klik saja.",
      "Kerangka dan zombie hanya bangkit saat malam. Datanglah setelah gelap.",
      "Panel di pojok kanan bawah mengubah waktu. Coba tengah malam.",
      "Bawa Reaper mendekat, dan mereka kabur ketakutan. Aku tidak."
    ];

    const AUTONOMOUS_LINES = [
      "Ssst... ada 13 batu nisan rahasia di dalam Katakombe bawah tanah. 📜",
      "Papan pengumuman di sampingku selalu mengabarkan peristiwa pekuburan saat waktu bergulir. ⏳",
      "Lentera ini terus menyala membimbing para musafir yang singgah. ✨",
      "Berani menggali hingga ke Jurang Bedrock (-66 M)? Ada piala pusaka di dasar! ⛏️",
      "Angin malam pekuburan membawa bisikan kode yang tenang dan rapi... 🕯️",
      "Selamat datang di gerbang pekuburan. Santai dan nikmati petualanganmu. 🎃",
      "Bahkan kerangka dan zombie di sini ramah pada pengunjung yang baik hati. 💀",
      "Jika butuh petunjuk arah, klik saja aku atau periksa papan pengumuman! 📜"
    ];

    const REAPER_DEFENSE_LINES = [
      "Reaper, ya? Aku tidak takut padamu! ⚔️",
      "Lentera suciku akan menghalau kabut kelammu, Reaper! 🔥",
      "Pedang sabit gaibmu tak mempan di sini! Mundurlah! ✨",
      "Halt! Pekuburan ini di bawah penjagaanku, Reaper! 🛡️",
      "Cahaya lentera ini membakar arwah gelap! Jangan mendekat! ⚡"
    ];

    let hn = 0;
    let autoLineIdx = 0;
    let reaperLineIdx = 0;
    let gcd = 0; // Cooldown for Guardian Reaper projectile (ticks every 200ms; gcd=1.0 -> 1s cooldown)

    function gsay(t, d = 4200) {
      if (!cloakedBubble) return;
      cloakedBubble.textContent = t;
      if (cloakedGuardian) {
        cloakedBubble.style.left = (cloakedGuardian.offsetLeft + cloakedGuardian.offsetWidth / 2) + "px";
        cloakedBubble.style.bottom = (38 + cloakedGuardian.offsetHeight) + "px";
      }
      cloakedBubble.classList.add("on");
      if (guardianImg && typeof cg === 'function') {
        guardianImg.src = cg(3);
      }
      clearTimeout(gsay.a);
      clearTimeout(gsay.b);
      gsay.a = setTimeout(() => {
        if (guardianImg && typeof cg === 'function' && (!cloakedGuardian || !cloakedGuardian.classList.contains('defend'))) {
          guardianImg.src = cg(0);
        }
      }, 900);
      gsay.b = setTimeout(() => {
        cloakedBubble.classList.remove("on");
      }, d);
    }

    function gh() {
      gsay(HT[hn++ % HT.length], 5200);
    }

    let nw = 1;
    try {
      nw = !localStorage.getItem("gv");
      localStorage.setItem("gv", "1");
    } catch (x) {}

    function gv() {
      if (nw) {
        nw = 0;
        gsay("Hm. Pendatang baru. Selamat datang di pekuburan.", 4200);
        setTimeout(gh, 4800);
      } else {
        const welcomeBack = [
          "Kau kembali. Butuh petunjuk? Klik aku.",
          "Selamat datang kembali, penggali makam berjiwa kode! ✨",
          "Salam hangat dari pekuburan. Siap menjelajah ke bawah tanah?"
        ];
        gsay(welcomeBack[Math.floor(Math.random() * welcomeBack.length)], 3800);
      }
    }

    // Return from underground greeting
    window.onReturnFromUnderground = function() {
      if (window._justGreetedReturn) return;
      window._justGreetedReturn = true;
      setTimeout(() => { window._justGreetedReturn = false; }, 8000);
      gsay("Kau berhasil bangkit dari kedalaman! Selamat kembali ke daratan, kawan. ✨", 4500);
    };

    if (cloakedGuardian) {
      cloakedGuardian.addEventListener('mouseenter', () => {
        if (!cloakedBubble || !cloakedBubble.classList.contains('on')) {
          gh();
        }
      });
      cloakedGuardian.addEventListener('pointerenter', () => {
        if (!cloakedBubble || !cloakedBubble.classList.contains('on')) {
          gh();
        }
      });
      cloakedGuardian.onclick = (e) => {
        e.stopPropagation();
        playSound('blip');
        gh();
      };

      let gs = -1e5;
      const guardianObserver = new IntersectionObserver(entries => {
        const v = entries[0].isIntersecting;
        const n = performance.now();
        if (v && n - gs > 8000) {
          setTimeout(gv, 1200);
        }
        if (!v) gs = n;
      }, { threshold: 0.15 });

      guardianObserver.observe(cloakedGuardian);
    }

    // Sapaan Mandiri Proaktif: Maskot berbicara sendiri secara berkala saat terlihat di layar
    setInterval(() => {
      if (!cloakedGuardian) return;
      const rect = cloakedGuardian.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!isInView) return;

      // Jangan menginterupsi jika sedang berbicara atau sedang siaga menghadapi Reaper
      if (cloakedBubble && cloakedBubble.classList.contains('on')) return;
      if (cloakedGuardian.classList.contains('defend')) return;

      const line = AUTONOMOUS_LINES[autoLineIdx++ % AUTONOMOUS_LINES.length];
      gsay(line, 4500);
    }, 7000);

    // Track mouse coordinates for fast & responsive Reaper distance checks
    window._lastMouseX = -999;
    window._lastMouseY = -999;
    ['mousemove', 'pointermove', 'pointerdown'].forEach(ev => {
      window.addEventListener(ev, e => {
        window._lastMouseX = e.clientX;
        window._lastMouseY = e.clientY;
      }, { passive: true });
    });

    // Reactive Reaper Check Loop (checks every 200ms with 180px aura & 150px projectile defense)
    setInterval(() => {
      gcd -= 0.2;
      if (!cloakedGuardian) return;

      const isReaper = typeof window.isDragonEnabled !== 'undefined'
        ? window.isDragonEnabled
        : (localStorage.getItem('kaka_pumpkin_active') !== 'false');

      if (!isReaper) {
        cloakedGuardian.classList.remove('defend');
        return;
      }

      const rect = cloakedGuardian.getBoundingClientRect();
      if (rect.width === 0 || rect.top > window.innerHeight || rect.bottom < 0) {
        cloakedGuardian.classList.remove('defend');
        return;
      }

      const gx = rect.left + rect.width / 2;
      const gy = rect.top + rect.height / 2;
      const dist = Math.hypot(window._lastMouseX - gx, window._lastMouseY - gy);

      if (dist < 180) {
        // Visual alert stance immediately when Reaper enters 180px
        cloakedGuardian.classList.add('defend');
        if (guardianImg && typeof cg === 'function') {
          guardianImg.src = cg(3); // staff raised alert
        }

        // Attack & bold verbal challenge at 150px with 1s cooldown
        if (dist < 150 && gcd <= 0) {
          gcd = 1.0; // Exact 1-second cooldown (ticks every 0.2s: 1.0 / 0.2 = 5 ticks = 1.0s)
          const defQuote = REAPER_DEFENSE_LINES[reaperLineIdx++ % REAPER_DEFENSE_LINES.length];
          gsay(defQuote, 2000);
          fireGuardianProjectile(gx - 14, gy - 12, window._lastMouseX, window._lastMouseY);
        }
      } else {
        cloakedGuardian.classList.remove('defend');
        if (guardianImg && typeof cg === 'function' && (!cloakedBubble || !cloakedBubble.classList.contains('on'))) {
          guardianImg.src = cg(0);
        }
      }
    }, 200);

    function fireGuardianProjectile(originX, originY, targetX, targetY) {
      playSound('blip');
      const proj = document.createElement('div');
      proj.className = 'cloaked-projectile';
      proj.style.left = originX + 'px';
      proj.style.top = originY + 'px';
      document.body.appendChild(proj);

      void proj.offsetWidth; // Force reflow
      const dx = targetX - originX;
      const dy = targetY - originY;
      proj.style.transform = 'translate(' + dx + 'px, ' + dy + 'px) scale(0.6)';
      proj.style.opacity = '0.9';

      setTimeout(() => {
        proj.style.opacity = '0';
        setTimeout(() => {
          if (proj.parentNode) proj.parentNode.removeChild(proj);
        }, 180);
      }, 380);
    }

    // ===== DUST & CRACK CLEANING WITH CURSOR (Reference 7) =====
    // Moving cursor over .ac achievement cards sweeps away dust & cracks dynamically!
    document.querySelectorAll('.ac').forEach(c => {
      c.addEventListener('pointermove', e => {
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        c.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
      c.addEventListener('pointerleave', () => {
        c.style.setProperty('--mx', '-999px');
        c.style.setProperty('--my', '-999px');
      });
    });

    window.addEventListener('scroll', onCatacombScroll, { passive: true });
    window.addEventListener('resize', onCatacombScroll);

    if (btnToSurface) {
      btnToSurface.addEventListener('click', e => {
        e.preventDefault();
        resurrectToSurface(2800);
      });
    }

    updateCatacombCount();
    onCatacombScroll();
  }

  initSkyAndCatacombs();
});


