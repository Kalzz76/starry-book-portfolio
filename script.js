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
  function getRealTimeTheme() {
    const hour = new Date().getHours() + (new Date().getMinutes() / 60);
    // Siang: 06:00 to 14:59 (6 AM to 3 PM)
    // Sore / Senja (Sunset): 15:00 to 18:29 (3 PM to 6:30 PM)
    // Malam: 18:30 to 05:59 (6:30 PM to 6 AM)
    if (hour >= 6 && hour < 15) return 'day';
    if (hour >= 15 && hour < 18.5) return 'sunset';
    return 'night';
  }

  const shadowBadgeText = document.getElementById('shadowBadgeText');
  const shadowArmySubtitle = document.getElementById('shadowArmySubtitle');
  const shadowArenaStatus = document.getElementById('shadowArenaStatus');
  const shadowCrownLeft = document.getElementById('shadowCrownLeft');
  const shadowCrownRight = document.getElementById('shadowCrownRight');
  const shadowMonarchCrest = document.getElementById('shadowMonarchCrest');

  function updateThemeDynamicTexts(theme) {
    if (theme === 'day') {
      if (shadowBadgeText) shadowBadgeText.textContent = 'BUKU TAMU & KAWANAN MASKOT SANCTUM (SIANG)';
      if (shadowArmySubtitle) shadowArmySubtitle.textContent = 'Buku tamu interaktif & arena kawanan maskot sahabat yang berkumpul di bawah hangatnya mentari siang untuk menyapa pengembara digital.';
      if (shadowArenaStatus) shadowArenaStatus.textContent = 'PATROLI SIANG CERIA & AKTIF';
      if (shadowCrownLeft) shadowCrownLeft.textContent = '☀️';
      if (shadowCrownRight) shadowCrownRight.textContent = '☀️';
      if (shadowMonarchCrest) shadowMonarchCrest.textContent = '☀️ 🐱 🐕 🧙‍♂️ 🦅';
    } else if (theme === 'sunset') {
      if (shadowBadgeText) shadowBadgeText.textContent = 'BUKU TAMU & KAWANAN MASKOT SENJA (SORE)';
      if (shadowArmySubtitle) shadowArmySubtitle.textContent = 'Buku tamu interaktif & arena kawanan maskot sahabat yang menikmati lembayung senja magis menjelang malam keramat.';
      if (shadowArenaStatus) shadowArenaStatus.textContent = 'PATROLI SENJA JINGGA & BERJAGA';
      if (shadowCrownLeft) shadowCrownLeft.textContent = '🌇';
      if (shadowCrownRight) shadowCrownRight.textContent = '🌇';
      if (shadowMonarchCrest) shadowMonarchCrest.textContent = '🌇 🦇 🐱 💀 🧙‍♂️';
    } else {
      if (shadowBadgeText) shadowBadgeText.textContent = 'BUKU TAMU & KAWANAN MASKOT HALLOWEEN (MALAM)';
      if (shadowArmySubtitle) shadowArmySubtitle.textContent = 'Buku tamu interaktif & arena kawanan maskot sahabat yang singgah untuk memberikan dukungan serta pesan apresiasi dalam perjalanan portofolio Kaka Andrea Yahya.';
      if (shadowArenaStatus) shadowArenaStatus.textContent = 'RAMAH & BERPATROLI BEBAS';
      if (shadowCrownLeft) shadowCrownLeft.textContent = '🎃';
      if (shadowCrownRight) shadowCrownRight.textContent = '🎃';
      if (shadowMonarchCrest) shadowMonarchCrest.textContent = '👻 🦇 🐱 💀 🧙‍♂️';
    }
  }

  function setTheme(theme) {
    document.body.classList.remove('theme-day', 'theme-sunset', 'theme-night');
    if (bgDay) bgDay.classList.remove('active');
    if (bgSunset) bgSunset.classList.remove('active');
    if (bgNight) bgNight.classList.remove('active');

    if (theme === 'day') {
      document.body.classList.add('theme-day');
      if (bgDay) bgDay.classList.add('active');
    } else if (theme === 'sunset') {
      document.body.classList.add('theme-sunset');
      if (bgSunset) bgSunset.classList.add('active');
    } else {
      document.body.classList.add('theme-night');
      if (bgNight) bgNight.classList.add('active');
    }
    
    updateThemeDynamicTexts(theme);
    if (themeToggle) {
      if (theme === 'day') {
        themeToggle.title = 'Mode Siang (Cahaya Mentari) — Klik untuk Ganti ke Sore';
        themeToggle.setAttribute('aria-label', 'Mode Siang (Klik untuk ganti ke Mode Sore)');
      } else if (theme === 'sunset') {
        themeToggle.title = 'Mode Sore / Senja (Lembayung Magis) — Klik untuk Ganti ke Malam';
        themeToggle.setAttribute('aria-label', 'Mode Sore (Klik untuk ganti ke Mode Malam)');
      } else {
        themeToggle.title = 'Mode Malam (Bulan Purnama) — Klik untuk Ganti ke Siang';
        themeToggle.setAttribute('aria-label', 'Mode Malam (Klik untuk ganti ke Mode Siang)');
      }
    }
    localStorage.setItem('kaka_theme', theme);
  }

  // Real-time synchronization: default to user's actual time of day unless manually toggled
  const hasManualOverride = sessionStorage.getItem('kaka_theme_manual') === 'true';
  const realTimeTheme = getRealTimeTheme();
  const initialTheme = hasManualOverride && localStorage.getItem('kaka_theme') 
    ? localStorage.getItem('kaka_theme') 
    : realTimeTheme;

  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      let current = 'night';
      if (document.body.classList.contains('theme-day')) current = 'day';
      else if (document.body.classList.contains('theme-sunset')) current = 'sunset';

      // Cycle: Day (Siang) -> Sunset (Sore) -> Night (Malam) -> Day
      let next = 'night';
      if (current === 'day') next = 'sunset';
      else if (current === 'sunset') next = 'night';
      else if (current === 'night') next = 'day';

      sessionStorage.setItem('kaka_theme_manual', 'true');
      setTheme(next);
      playSound('toggle');

      let msg = '🌙 Mode Malam Diaktifkan: Bulan Purnama menerangi makam bayangan!';
      if (next === 'day') {
        msg = '☀️ Mode Siang Diaktifkan: Cahaya terang menyelimuti sanctum!';
      } else if (next === 'sunset') {
        msg = '🌇 Mode Sore/Senja Diaktifkan: Lembayung jingga magis menyelimuti langit!';
      }
      showToast(msg);
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
    { n: "Luna", i: "🐱", r: "Midnight Cat", b: "Meong! Arsip bayangan tercatat rapi dan tanpa bug.", g: 0, x: 0.49, y: 0.28 },
    { n: "Boo Casper", i: "👻", r: "Friendly Ghost", b: "Halo pengembara! Senang bertemu teman baru di pemakaman!", g: 1, x: 0.21, y: 0.4 },
    { n: "Skully", i: "💀", r: "Chibi Skeleton", b: "Hidup santuy sambil ngopi di atas nisan, musik 8-bit tetap jalan!", g: 1, x: 0.26, y: 0.34 },
    { n: "Pumpkin Pete", i: "🎃", r: "Pumpkin Sprite", b: "Lentera oranye kami akan selalu menerangi jalan pulangmu!", g: 2, x: 0.79, y: 0.43 },
    { n: "Battie", i: "🦇", r: "Night Bat", b: "Sonar aktif! Siap bermanuver di langit malam dan bangkit lagi!", g: 3, x: 0.29, y: 0.73 },
    { n: "Archie", i: "🧙‍♂️", r: "Little Wizard", b: "Satu tetes ramuan, seribu baris kode tercipta! Semangat belajar!", g: 4, x: 0.54, y: 0.73 },
    { n: "Gully", i: "🐸", r: "Marsh Scout", b: "Ribbit! Awas lumpur licin, ikuti jejak daun teratai fosfor!", g: 4, x: 0.62, y: 0.7 },
    { n: "Pengunjung Misterius", i: "🎭", r: "Dimensional Voyager", b: "Aku berlayar melintasi dimensi untuk mengagumi semesta portofolio ini.", g: 5, x: 0.82, y: 0.74 }
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

  visitorMascots.forEach((vm) => {
    M.push({
      n: vm.name,
      i: vm.icon,
      r: vm.role,
      b: '"' + vm.text + '"',
      g: vm.region,
      x: vm.x || (R[vm.region].s[0] + (Math.random() * 0.1 - 0.05)),
      y: vm.y || (R[vm.region].s[1] + (Math.random() * 0.1 - 0.05)),
      isGuest: true
    });
    MX[vm.name] = {
      o: R[vm.region].p[0] ? R[vm.region].p[0][0] + ", " + R[vm.region].n : R[vm.region].n,
      d: 'Pengunjung Sanctum berwujud ' + vm.role + ' dari ' + R[vm.region].n + '.',
      m: 'Bergabung di Land of Dusk melalui Sanctum Guestbook. Pesan: "' + vm.text + '"',
      h: [[defaultMascots[vm.region % defaultMascots.length].n, "Teman Sekawasan"]]
    };
  });

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
    if (nx < 0.04 || nx > 0.96 || ny < 0.04 || ny > 0.96) return false;
    const px = Math.min(W - 1, Math.max(0, Math.floor(nx * W)));
    const py = Math.min(H - 1, Math.max(0, Math.floor(ny * H)));
    return reg[py * W + px] === targetRegionIndex;
  }

  function escapeHTML(str) {
    return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function getMascotChibiHTML(m) {
    const name = m && m.n ? m.n : '';
    if (name === 'Boo Casper') {
      return '<svg class="chibi-svg chibi-casper" viewBox="0 0 48 52"><defs><filter id="gw-casper" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#38bdf8" flood-opacity="0.8"/></filter></defs><path d="M 24 8 C 15 8 12 18 12 30 C 9 28 6 29 6 32 C 6 35 9 37 12 35 C 12 42 16 45 19 41 C 22 38 26 38 29 41 C 32 45 36 42 36 35 C 39 37 42 35 42 32 C 42 29 39 28 36 30 C 36 18 33 8 24 8 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="1.8" filter="url(#gw-casper)"/><ellipse cx="17" cy="27" rx="3" ry="1.8" fill="#f472b6" opacity="0.85"/><ellipse cx="31" cy="27" rx="3" ry="1.8" fill="#f472b6" opacity="0.85"/><ellipse cx="19" cy="22" rx="2.4" ry="3.2" fill="#0f172a"/><ellipse cx="29" cy="22" rx="2.4" ry="3.2" fill="#0f172a"/><circle cx="20" cy="21" r="0.9" fill="#ffffff"/><circle cx="30" cy="21" r="0.9" fill="#ffffff"/><path d="M 22 26 Q 24 28 26 26" fill="none" stroke="#0f172a" stroke-width="1.4" stroke-linecap="round"/><path d="M 37 28 Q 44 24 43 19 Q 40 18 37 23" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/></svg>';
    }
    if (name === 'Skully') {
      return '<svg class="chibi-svg chibi-skully" viewBox="0 0 48 52"><defs><filter id="gw-skully" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#a855f7" flood-opacity="0.75"/></filter></defs><path d="M 24 33 L 24 45" stroke="#e2e8f0" stroke-width="2.5" stroke-linecap="round"/><path d="M 18 36 Q 24 34 30 36" fill="none" stroke="#e2e8f0" stroke-width="1.8" stroke-linecap="round"/><path d="M 17 39 Q 24 37 31 39" fill="none" stroke="#e2e8f0" stroke-width="1.8" stroke-linecap="round"/><path d="M 19 42 Q 24 40 29 42" fill="none" stroke="#e2e8f0" stroke-width="1.8" stroke-linecap="round"/><path d="M 20 46 Q 24 48 28 46" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/><path d="M 28 35 Q 36 36 34 42" fill="none" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/><g class="skully-coffee"><rect x="33" y="38" width="8" height="7" rx="1.5" fill="#78350f" stroke="#f59e0b" stroke-width="1"/><path d="M 41 40 Q 44 41.5 41 43" fill="none" stroke="#f59e0b" stroke-width="1"/><path class="steam" d="M 35 36 Q 36 34 35 32 M 38 36 Q 39 34 38 31" fill="none" stroke="#fef08a" stroke-width="0.9" opacity="0.8"/></g><g class="skully-head"><path d="M 14 20 C 14 10 34 10 34 20 C 34 24 31 25 31 28 C 31 30 29 31 24 31 C 19 31 17 30 17 28 C 17 25 14 24 14 20 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.6" filter="url(#gw-skully)"/><ellipse class="skull-eye l" cx="19.5" cy="19.5" rx="3.5" ry="4" fill="#0f172a"/><circle class="skull-pupil l" cx="20" cy="19" r="1.2" fill="#38bdf8"/><ellipse class="skull-eye r" cx="28.5" cy="19.5" rx="3.5" ry="4" fill="#0f172a"/><circle class="skull-pupil r" cx="28" cy="19" r="1.2" fill="#38bdf8"/><path d="M 24 23 L 23 25 L 25 25 Z" fill="#1e293b"/><path d="M 20 28 L 28 28 M 22 27 L 22 29 M 24 27 L 24 29 M 26 27 L 26 29" stroke="#64748b" stroke-width="1" stroke-linecap="round"/><path d="M 26 12 L 28 14 L 27 16" fill="none" stroke="#cbd5e1" stroke-width="0.8"/><g class="skull-sweat"><path d="M 11 15 Q 9 17 11 18 Q 12 17 11 15 Z" fill="#38bdf8"/><path d="M 37 14 Q 39 16 37 17 Q 36 16 37 14 Z" fill="#38bdf8"/></g></g></svg>';
    }
    if (name === 'Pumpkin Pete') {
      return '<svg class="chibi-svg chibi-pete" viewBox="0 0 48 52"><defs><filter id="gw-pete" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="3.5" flood-color="#f97316" flood-opacity="0.85"/></filter><radialGradient id="gd-pete" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="#fdba74"/><stop offset="60%" stop-color="#ea580c"/><stop offset="100%" stop-color="#9a3412"/></radialGradient></defs><path d="M 24 16 Q 25 8 28 7 Q 31 6 30 10 Q 29 14 26 16" fill="#15803d" stroke="#166534" stroke-width="1.2"/><path d="M 27 11 Q 32 10 33 13 Q 34 16 31 15" fill="none" stroke="#22c55e" stroke-width="1.2" stroke-linecap="round"/><ellipse cx="16" cy="31" rx="9" ry="13" fill="#ea580c" stroke="#7c2d12" stroke-width="1.2"/><ellipse cx="32" cy="31" rx="9" ry="13" fill="#ea580c" stroke="#7c2d12" stroke-width="1.2"/><ellipse cx="24" cy="31" rx="10" ry="14" fill="url(#gd-pete)" stroke="#7c2d12" stroke-width="1.4" filter="url(#gw-pete)"/><polygon points="18,25 22,28 17,29" fill="#fef08a" stroke="#f59e0b" stroke-width="0.8"/><polygon points="30,25 31,29 26,28" fill="#fef08a" stroke="#f59e0b" stroke-width="0.8"/><polygon points="24,28 23,31 25,31" fill="#fef08a"/><path d="M 17 33 L 19 35 L 21 34 L 23 36 L 25 34 L 27 35 L 29 33 Q 24 39 17 33 Z" fill="#fef08a" stroke="#f59e0b" stroke-width="0.8"/><circle cx="11" cy="33" r="2.5" fill="#ea580c" stroke="#7c2d12" stroke-width="1"/><circle cx="37" cy="33" r="2.5" fill="#ea580c" stroke="#7c2d12" stroke-width="1"/></svg>';
    }
    if (name === 'Battie') {
      return '<svg class="chibi-svg chibi-battie" viewBox="0 0 48 52"><defs><filter id="gw-battie" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="3.5" flood-color="#a855f7" flood-opacity="0.85"/></filter></defs><path class="bat-wing l" d="M 16 28 C 10 20 4 23 3 28 C 4 33 8 32 10 37 C 12 34 14 36 17 34 Z" fill="#581c87" stroke="#a855f7" stroke-width="1.4"/><path class="bat-wing r" d="M 32 28 C 38 20 44 23 45 28 C 44 33 40 32 38 37 C 36 34 34 36 31 34 Z" fill="#581c87" stroke="#a855f7" stroke-width="1.4"/><ellipse cx="24" cy="31" rx="10" ry="11" fill="#3b0764" stroke="#c084fc" stroke-width="1.6" filter="url(#gw-battie)"/><polygon points="17,23 13,11 20,18" fill="#581c87" stroke="#c084fc" stroke-width="1.2"/><polygon points="16,21 14,14 18,18" fill="#f43f5e"/><polygon points="31,23 35,11 28,18" fill="#581c87" stroke="#c084fc" stroke-width="1.2"/><polygon points="32,21 34,14 30,18" fill="#f43f5e"/><ellipse cx="20" cy="28" rx="2.4" ry="2.8" fill="#ef4444"/><circle cx="19.5" cy="27.5" r="0.9" fill="#ffffff"/><ellipse cx="28" cy="28" rx="2.4" ry="2.8" fill="#ef4444"/><circle cx="27.5" cy="27.5" r="0.9" fill="#ffffff"/><path d="M 21 33 Q 24 36 27 33" fill="none" stroke="#f3e8ff" stroke-width="1.2"/><polygon points="21,33 22,36 23,33" fill="#ffffff"/><polygon points="25,33 26,36 27,33" fill="#ffffff"/><path d="M 21 42 L 21 44 M 27 42 L 27 44" stroke="#c084fc" stroke-width="1.5" stroke-linecap="round"/></svg>';
    }
    if (name === 'Luna') {
      return '<svg class="chibi-svg chibi-luna" viewBox="0 0 48 52"><defs><filter id="gw-luna" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="3.5" flood-color="#fbbf24" flood-opacity="0.8"/></filter></defs><path class="cat-tail" d="M 32 38 Q 42 36 41 27 Q 40 24 37 25" fill="none" stroke="#1e1b4b" stroke-width="2.6" stroke-linecap="round"/><ellipse cx="24" cy="33" rx="10" ry="11" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.6"/><polygon points="15,22 13,10 21,17" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.2"/><polygon points="15,20 14,13 19,17" fill="#ec4899"/><polygon points="33,22 35,10 27,17" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.2"/><polygon points="33,20 34,13 29,17" fill="#ec4899"/><polygon points="24,9 20,18 28,18" fill="#4338ca" stroke="#fbbf24" stroke-width="1"/><ellipse cx="24" cy="18" rx="6" ry="1.8" fill="#312e81" stroke="#fbbf24" stroke-width="0.8"/><path d="M 23 16 Q 24 14 25 16" fill="none" stroke="#fde047" stroke-width="1"/><ellipse cx="19" cy="27" rx="3" ry="3.5" fill="#fde047" filter="url(#gw-luna)"/><ellipse cx="19" cy="27" rx="1" ry="3" fill="#0f172a"/><ellipse cx="29" cy="27" rx="3" ry="3.5" fill="#fde047" filter="url(#gw-luna)"/><ellipse cx="29" cy="27" rx="1" ry="3" fill="#0f172a"/><polygon points="24,31 23,32.5 25,32.5" fill="#f472b6"/><path d="M 15 31 L 8 30 M 15 33 L 9 34 M 33 31 L 40 30 M 33 33 L 39 34" stroke="#818cf8" stroke-width="1" stroke-linecap="round"/><circle cx="20" cy="42" r="2.2" fill="#312e81" stroke="#6366f1" stroke-width="1"/><circle cx="28" cy="42" r="2.2" fill="#312e81" stroke="#6366f1" stroke-width="1"/></svg>';
    }
    if (name === 'Archie') {
      return '<svg class="chibi-svg chibi-archie" viewBox="0 0 48 52"><defs><filter id="gw-archie" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="3.5" flood-color="#38bdf8" flood-opacity="0.8"/></filter></defs><path d="M 17 32 L 14 45 L 34 45 L 31 32 Z" fill="#312e81" stroke="#6366f1" stroke-width="1.4"/><path d="M 24 32 L 24 45" stroke="#fbbf24" stroke-width="1.2"/><g class="alchem-flask"><path d="M 33 38 L 35 34 L 37 34 L 39 38 C 41 41 38 45 35 45 C 32 45 31 41 33 38 Z" fill="#06b6d4" stroke="#a5f3fc" stroke-width="1" filter="url(#gw-archie)"/><path d="M 32.5 40 C 33 44 38 44 38.5 40 Z" fill="#22c55e"/><circle cx="35" cy="41" r="0.8" fill="#ffffff"/><circle cx="36.5" cy="39" r="0.6" fill="#ffffff"/></g><circle cx="24" cy="27" r="7.5" fill="#fed7aa"/><path d="M 18 29 C 18 36 24 39 24 39 C 24 39 30 36 30 29 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/><ellipse cx="21" cy="26" rx="1.8" ry="2" fill="#0f172a"/><circle cx="21.5" cy="25.5" r="0.7" fill="#38bdf8"/><ellipse cx="27" cy="26" rx="1.8" ry="2" fill="#0f172a"/><circle cx="26.5" cy="25.5" r="0.7" fill="#38bdf8"/><circle cx="24" cy="28.5" r="1" fill="#f97316"/><path d="M 12 23 Q 24 19 36 23 Q 24 21 12 23 Z" fill="#1e1b4b"/><ellipse cx="24" cy="22" rx="14" ry="3.5" fill="#4338ca" stroke="#818cf8" stroke-width="1.2"/><path d="M 15 21 Q 20 8 30 6 Q 26 12 32 20 Z" fill="#3730a3" stroke="#818cf8" stroke-width="1.2"/><path d="M 16 20 Q 24 18 31 20" stroke="#f59e0b" stroke-width="2.5" fill="none"/><polygon points="24,17 25,19 27,19 25.5,20.5 26,22.5 24,21 22,22.5 22.5,20.5 21,19 23,19" fill="#fef08a"/></svg>';
    }
    if (name === 'Gully') {
      return '<svg class="chibi-svg chibi-gully" viewBox="0 0 48 52"><defs><filter id="gw-gully" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="3.5" flood-color="#22c55e" flood-opacity="0.8"/></filter></defs><ellipse cx="24" cy="33" rx="12" ry="11" fill="#22c55e" stroke="#15803d" stroke-width="1.6" filter="url(#gw-gully)"/><ellipse cx="24" cy="35" rx="8" ry="7" fill="#86efac"/><circle cx="17" cy="21" r="5.5" fill="#22c55e" stroke="#15803d" stroke-width="1.4"/><circle cx="17" cy="21" r="4" fill="#ffffff"/><circle cx="17.5" cy="21" r="2.2" fill="#0f172a"/><circle cx="18" cy="20" r="0.8" fill="#ffffff"/><circle cx="31" cy="21" r="5.5" fill="#22c55e" stroke="#15803d" stroke-width="1.4"/><circle cx="31" cy="21" r="4" fill="#ffffff"/><circle cx="30.5" cy="21" r="2.2" fill="#0f172a"/><circle cx="30" cy="20" r="0.8" fill="#ffffff"/><ellipse cx="16" cy="32" rx="2.5" ry="1.6" fill="#f472b6" opacity="0.8"/><ellipse cx="32" cy="32" rx="2.5" ry="1.6" fill="#f472b6" opacity="0.8"/><path d="M 18 30 Q 24 35 30 30" fill="none" stroke="#14532d" stroke-width="1.6" stroke-linecap="round"/><path d="M 12 36 Q 9 37 11 39 M 36 36 Q 39 37 37 39" stroke="#15803d" stroke-width="1.8" stroke-linecap="round"/><ellipse cx="17" cy="43" rx="3.5" ry="1.8" fill="#16a34a"/><ellipse cx="31" cy="43" rx="3.5" ry="1.8" fill="#16a34a"/></svg>';
    }
    if (name === 'Pengunjung Misterius') {
      return '<svg class="chibi-svg chibi-voyager" viewBox="0 0 48 52"><defs><filter id="gw-voyager" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="3.5" flood-color="#a855f7" flood-opacity="0.85"/></filter></defs><path d="M 16 28 L 12 46 L 36 46 L 32 28 Z" fill="#0f172a" stroke="#6366f1" stroke-width="1.4"/><path d="M 24 28 L 24 46" stroke="#f59e0b" stroke-width="1.5"/><circle cx="24" cy="40" r="1.5" fill="#fef08a"/><path d="M 13 25 C 12 11 36 11 35 25 C 35 29 33 31 24 32 C 15 31 13 29 13 25 Z" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.6" filter="url(#gw-voyager)"/><ellipse cx="24" cy="24" rx="8.5" ry="9" fill="#020617"/><path d="M 18 20 C 18 17 30 17 30 20 C 30 26 27 28 24 28 C 21 28 18 26 18 20 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/><path d="M 19.5 21 Q 21.5 20 22.5 22" stroke="#38bdf8" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M 28.5 21 Q 26.5 20 25.5 22" stroke="#38bdf8" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M 24 33 L 24 37 M 22 36 Q 24 38 26 36" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round" fill="none"/></svg>';
    }
    const icon = m && m.i ? escapeHTML(m.i) : '✨';
    return '<svg class="chibi-svg chibi-visitor" viewBox="0 0 48 52"><defs><filter id="gw-v" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0" stdDeviation="3.5" flood-color="#f59e0b" flood-opacity="0.8"/></filter></defs><path d="M 16 30 L 13 45 L 35 45 L 32 30 Z" fill="#1e1b4b" stroke="#f59e0b" stroke-width="1.4"/><circle cx="24" cy="24" r="11" fill="#2e1065" stroke="#f59e0b" stroke-width="1.6" filter="url(#gw-v)"/><text x="24" y="27" font-size="13" text-anchor="middle" dominant-baseline="central">' + icon + '</text></svg>';
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
  }

  function roamMascots() {
    if (cur < 0 && !isOverviewMascotsEnabled) return;
    const visibleMascots = cur >= 0 ? M.filter((m) => m.g === cur) : M;
    visibleMascots.forEach((m) => {
      if (m._isScared) return;
      const stepDist = 0.012 + Math.random() * 0.022;
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
        const center = R[m.g].s;
        const dx = center[0] - m.x;
        const dy = center[1] - m.y;
        const dist = Math.hypot(dx, dy) || 1;
        const nudgeX = m.x + (dx / dist) * 0.018;
        const nudgeY = m.y + (dy / dist) * 0.018;
        if (isInsideRegion(nudgeX, nudgeY, m.g)) {
          m.x = nudgeX;
          m.y = nudgeY;
          const el = document.querySelector('.mc[data-m="' + m.n + '"]');
          if (el) {
            el.style.left = (m.x * 100) + '%';
            el.style.top = (m.y * 100) + '%';
          }
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
      if (cur < 0) {
        const r = regAt(e);
        if (r !== hv) {
          hv = r;
          paint(r, 0);
          lodWorld.style.cursor = r >= 0 ? 'pointer' : 'default';
        }
      }

      const skullyEl = document.querySelector('.mc[data-m="Skully"]');
      if (skullyEl && !skullyEl._isScared && (!skullyEl._lastScared || Date.now() - skullyEl._lastScared > 4000)) {
        const rect = skullyEl.getBoundingClientRect();
        const dist = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
        if (dist < 65) {
          skullyEl._isScared = true;
          skullyEl._lastScared = Date.now();
          skullyEl.classList.add('scared');
          playSound('blip');

          const scaredQuotes = [
            "Waa kaget! Jangan sergap mendadak dong, kopiku tumpah nih! ☕💀💦",
            "Aduh copot tulangku! Kirain siapa! 😱💀",
            "Ampun Tuan! Aku tengkorak santuy penikmat damai! 💀☕",
            "Waduh waduh! Tulang rusukku bergetar hebat! 🦴⚡"
          ];
          sayMascotGreeting("Skully", scaredQuotes[Math.floor(Math.random() * scaredQuotes.length)]);

          const mSkully = M.find((x) => x.n === "Skully");
          if (mSkully) {
            const angle = Math.atan2((rect.top + rect.height / 2) - e.clientY, (rect.left + rect.width / 2) - e.clientX);
            const fleeX = mSkully.x + Math.cos(angle) * 0.045;
            const fleeY = mSkully.y + Math.sin(angle) * 0.045;
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
            sayMascotGreeting("Skully", "Huft... santuy lagi... lanjut ngopi ☕💀");
          }, 2600);
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

      M.push({
        n: newMascot.name,
        i: newMascot.icon,
        r: newMascot.role,
        b: '"' + newMascot.text + '"',
        g: newMascot.region,
        x: newMascot.x,
        y: newMascot.y,
        isGuest: true
      });

      MX[newMascot.name] = {
        o: targetRegion.p[0] ? targetRegion.p[0][0] + ", " + targetRegion.n : targetRegion.n,
        d: 'Pengunjung Sanctum berwujud ' + newMascot.role + ' dari ' + targetRegion.n + '.',
        m: 'Bergabung di Land of Dusk melalui Sanctum Guestbook. Pesan: "' + newMascot.text + '"',
        h: [[defaultMascots[regionIndex % defaultMascots.length].n, "Teman Sekawasan"]]
      };

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
    if (!charEl) return;
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

      if (grave) {
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
      const quote = this.el.id === 'd' 
        ? 'Ramuan baru dari ' + chosenHouse.name + ' sudah siap! ✨' 
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
  if (dr && isDragonEnabled) dr.style.display = 'block';
  let isMascotsEnabled = localStorage.getItem('kaka_mascots_active') !== 'false';
  let isMidnightEnabled = localStorage.getItem('kaka_midnight_mode') === 'true';

  const btnToggleMidnight = document.getElementById('btnToggleMidnight');

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

  function applyDragonState() {
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
      localStorage.setItem('kaka_pumpkin_active', isDragonEnabled);
      applyDragonState();
      showToast(isDragonEnabled ? '⚡ Kursor Arwah Reaper diaktifkan' : 'Kursor dinonaktifkan');
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

  applyDragonState();
  applyMascotsState();
  applyMidnightState();

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

    // Automatically smooth scroll back up to the sanctum!
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

    if (btnResurrectTrigger) {
    btnResurrectTrigger.addEventListener('click', triggerResurrection);
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      playSound('blip');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});


