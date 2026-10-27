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
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const navLinksItems = document.querySelectorAll('.nav-link');
  const headerContainer = document.querySelector('.header-container');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const pixelToast = document.getElementById('pixelToast');
  const toastMessage = document.getElementById('toastMessage');
  const earthquakeContainer = document.getElementById('earthquakeContainer');

  // -------------------------------------------------------------------------
  // 2. Synthesized 8-Bit Web Audio Engine
  // -------------------------------------------------------------------------
  let audioCtx = null;
  let isSoundEnabled = true;

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

  // Sound toggle button
  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      soundToggle.classList.toggle('muted', !isSoundEnabled);
      if (isSoundEnabled) {
        playSound('blip');
      }
      showToast(isSoundEnabled ? '🔔 Dentang lonceng arwah bergema!' : '🤫 Kripta hening tanpa suara...');
    });
  }

  // Toast Helper
  let toastTimer = null;
  function showToast(msg) {
    if (!pixelToast || !toastMessage) return;
    toastMessage.textContent = msg;
    pixelToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      pixelToast.classList.remove('show');
    }, 3200);
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
  // 4. Header Shadow & Active Section Spy
  // -------------------------------------------------------------------------
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      headerContainer.classList.add('scrolled');
    } else {
      headerContainer.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  const sections = document.querySelectorAll('section[id]');
  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 160;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinksItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Mobile Navigation
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      playSound('click');
    });

    navLinksItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        playSound('click');
      });
    });
  }

  // Click sounds for general buttons
  document.querySelectorAll('.pixel-btn, .filter-btn, .proj-btn, .cert-btn').forEach(btn => {
    btn.addEventListener('click', () => playSound('click'));
  });

  // -------------------------------------------------------------------------
  // 5. Typing Effect on Subtitle
  // -------------------------------------------------------------------------
  const typingElement = document.getElementById('typingText');
  const rolePhrases = [
    "Code Necromancer & Spooky Web Developer",
    "Resurrecting Dead Pixels & Living Code",
    "HTML5 • CSS3 • JavaScript Sorcery",
    "Ready for Dark & Epic Digital Quests!"
  ];

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
    let isAvatarHovered = false;

    // Clicking the avatar toggles flip and prevents expanding the entire grimoire card
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
      isAvatarHovered = true;
      playSound('blip');
    });

    avatarFlipCard.addEventListener('mouseleave', () => {
      isAvatarHovered = false;
    });

    // Slow automatic flip rotation (every 7.5s, gently toggles between Pixel Art and Real Photo)
    setInterval(() => {
      if (!isAvatarHovered && grimoireCardFrame && grimoireCardFrame.classList.contains('collapsed')) {
        isAvatarFlipped = !isAvatarFlipped;
        avatarFlipCard.classList.toggle('flipped', isAvatarFlipped);
      }
    }, 7500);
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

  // -------------------------------------------------------------------------
  // 6. THE OPEN GRIMOIRE: Ancient 2-Page Spellbook (Option 1)
  // -------------------------------------------------------------------------
  const grimoireSpells = [
    {
      id: "klinik-mapping",
      title: "Sistem Mapping Klinik Pratama Bumi Sehat Bahagia",
      shortTitle: "Klinik Bumi Sehat GIS",
      category: "web",
      catLabel: "WEB & GIS",
      tier: "MASTER LARAVEL",
      year: "2025",
      icon: "🏥",
      bgGradient: "linear-gradient(135deg, #064e3b 0%, #022c22 60%, #041f17 100%)",
      tech: ["Laravel 10", "Leaflet.js", "MySQL", "Bootstrap 5", "GIS Mapping", "REST API"],
      desc: "Sistem web terintegrasi untuk pemetaan sebaran dan manajemen operasional Klinik Pratama Bumi Sehat Bahagia. Memungkinkan pemantauan lokasi pasien, visualisasi peta interaktif dengan Leaflet.js, serta pencatatan rekam medis dan data poli secara terstruktur, cepat, dan aman.",
      demoUrl: "#projects",
      githubUrl: "https://github.com/Kalzz76"
    },
    {
      id: "classio-system",
      title: "Classio - Integrated School Management System",
      shortTitle: "Classio School System",
      category: "system",
      catLabel: "ENTERPRISE SYSTEM",
      tier: "C# ASP.NET",
      year: "2024 - 2025",
      icon: "🏫",
      bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 60%, #020617 100%)",
      tech: ["C# ASP.NET", "MySQL", "REST API", "Tailwind CSS", "JWT Auth", "Responsive UI"],
      desc: "Platform manajemen sekolah terpusat untuk siswa, guru, dan staf administrasi. Dilengkapi modul presensi cerdas, input nilai akademik berstandar kurikulum, jadwal pelajaran dinamis, serta laporan otomatis yang menghemat 80% waktu rekapitulasi data.",
      demoUrl: "#projects",
      githubUrl: "https://github.com/Kalzz76"
    },
    {
      id: "perpustakaan-rpl",
      title: "Sistem Sirkulasi & Nilai Perpustakaan RPL",
      shortTitle: "Sistem Perpustakaan RPL",
      category: "system",
      catLabel: "ACADEMIC SYSTEM",
      tier: "FULLSTACK PHP",
      year: "2024",
      icon: "📚",
      bgGradient: "linear-gradient(135deg, #312e81 0%, #1e1b4b 60%, #09090b 100%)",
      tech: ["PHP Laravel", "MySQL", "JavaScript", "Chart.js", "Barcode Scan", "Bootstrap"],
      desc: "Aplikasi manajemen perpustakaan modern khusus laboratorium Rekayasa Perangkat Lunak SMKN 13 Bandung. Mempermudah peminjaman dan pengembalian buku dengan barcode scan, pelacakan denda otomatis, dan rekapitulasi nilai kompetensi siswa.",
      demoUrl: "#projects",
      githubUrl: "https://github.com/Kalzz76"
    },
    {
      id: "mobile-biodata",
      title: "Mobile Biodata & Profil Siswa RPL",
      shortTitle: "Mobile Biodata RPL",
      category: "mobile",
      catLabel: "MOBILE APP",
      tier: "FLUTTER & DART",
      year: "2025",
      icon: "📱",
      bgGradient: "linear-gradient(135deg, #4a044e 0%, #2e1065 60%, #090514 100%)",
      tech: ["Flutter", "Dart", "Provider State", "Material 3", "SQLite", "Cross-Platform"],
      desc: "Aplikasi mobile responsif dan mulus untuk pencatatan biodata lengkap, riwayat portofolio, dan sertifikasi siswa RPL SMKN 13 Bandung. Menyediakan offline storage lokal dengan SQLite, animasi UI modern, dan sinkronisasi cloud.",
      demoUrl: "#projects",
      githubUrl: "https://github.com/Kalzz76"
    },
    {
      id: "berkah-pancing",
      title: "E-Commerce Berkah Pancing & Fishing Store",
      shortTitle: "Berkah Pancing Store",
      category: "web",
      catLabel: "FULLSTACK E-COMMERCE",
      tier: "PHP & PAYMENT API",
      year: "2024",
      icon: "🎣",
      bgGradient: "linear-gradient(135deg, #0c4a6e 0%, #082f49 60%, #020617 100%)",
      tech: ["PHP Native", "MySQL", "Bootstrap", "Midtrans Payment", "AJAX", "Cart Engine"],
      desc: "Website e-commerce katalog produk perlengkapan pancing dengan keranjang belanja interaktif, kalkulator ongkir otomatis, integrasi payment gateway Midtrans, dan dasbor admin untuk manajemen stok realtime.",
      demoUrl: "#projects",
      githubUrl: "https://github.com/Kalzz76"
    },
    {
      id: "haunted-portfolio",
      title: "Haunted Gothic Sanctum Portfolio & Grimoire",
      shortTitle: "Necromancer Portfolio",
      category: "interactive",
      catLabel: "INTERACTIVE WEB",
      tier: "CREATIVE JS & CANVAS",
      year: "2026",
      icon: "🎃",
      bgGradient: "linear-gradient(135deg, #431407 0%, #2e1065 60%, #020617 100%)",
      tech: ["Vanilla JS", "HTML5 Canvas", "Web Audio API", "CSS Art", "Vite", "Local Storage"],
      desc: "Website portofolio berkonsep rumah angker Halloween retro. Memiliki 6 maskot bersahabat yang berpatroli mandiri ke segala arah, buku mantra kuno 2 halaman berdampingan, kartu biodata holografik, sistem audio 8-bit, serta sinkronisasi tema Siang, Sore, dan Malam.",
      demoUrl: "#home",
      githubUrl: "https://github.com/Kalzz76"
    }
  ];

  let currentGrimoireSpellIdx = 0;
  let currentGrimoireFilter = 'all';

  const spellFilterPills = document.getElementById('spellFilterPills');
  const spellCodexList = document.getElementById('spellCodexList');
  const activeSpellStatus = document.getElementById('activeSpellStatus');
  const activeSpellFolio = document.getElementById('activeSpellFolio');
  const activeSpellTitle = document.getElementById('activeSpellTitle');
  const activeSpellCategoryBadge = document.getElementById('activeSpellCategoryBadge');
  const activeSpellPreviewBox = document.getElementById('activeSpellPreviewBox');
  const activeSpellTags = document.getElementById('activeSpellTags');
  const activeSpellDesc = document.getElementById('activeSpellDesc');
  const activeSpellDemoBtn = document.getElementById('activeSpellDemoBtn');
  const activeSpellGithubBtn = document.getElementById('activeSpellGithubBtn');
  const grimoirePageRight = document.getElementById('grimoirePageRight');

  function renderSpellCodexList() {
    if (!spellCodexList) return;
    spellCodexList.innerHTML = '';

    grimoireSpells.forEach((spell, idx) => {
      const match = currentGrimoireFilter === 'all' || spell.category === currentGrimoireFilter;
      if (!match) return;

      const isActive = idx === currentGrimoireSpellIdx;
      const item = document.createElement('div');
      item.className = 'spell-codex-item' + (isActive ? ' active' : '');
      item.dataset.idx = idx;
      item.setAttribute('role', 'tab');
      item.setAttribute('aria-selected', isActive ? 'true' : 'false');
      item.tabIndex = 0;

      const numStr = idx < 9 ? `SPELL 0${idx + 1}` : `SPELL ${idx + 1}`;
      const flame = isActive ? '🔥' : '🕯️';

      item.innerHTML = `
        <div class="item-left-block">
          <span class="item-flame-icon">${flame}</span>
          <div class="item-meta">
            <div class="item-tag-row">
              <span class="item-num">${numStr}</span>
              <span class="item-cat">${spell.catLabel}</span>
            </div>
            <span class="item-title">${escapeHTML(spell.shortTitle || spell.title)}</span>
          </div>
        </div>
        <span class="item-chevron">❯</span>
      `;

      item.addEventListener('click', () => {
        if (currentGrimoireSpellIdx !== idx) {
          selectGrimoireSpell(idx);
          playSound('click');
        }
      });

      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectGrimoireSpell(idx);
          playSound('click');
        }
      });

      spellCodexList.appendChild(item);
    });
  }

  function selectGrimoireSpell(idx) {
    currentGrimoireSpellIdx = idx;
    const spell = grimoireSpells[idx];
    if (!spell) return;

    // Refresh active state in left list
    renderSpellCodexList();

    // Soft page transition effect on right page
    if (grimoirePageRight) {
      grimoirePageRight.style.opacity = '0.4';
      grimoirePageRight.style.transform = 'translateY(4px)';
      setTimeout(() => {
        grimoirePageRight.style.opacity = '1';
        grimoirePageRight.style.transform = 'translateY(0)';
      }, 140);
    }

    if (activeSpellTitle) activeSpellTitle.textContent = spell.title;
    if (activeSpellFolio) activeSpellFolio.textContent = `FOLIO 0${idx + 1}`;
    if (activeSpellCategoryBadge) activeSpellCategoryBadge.textContent = `${spell.catLabel} • ${spell.year}`;

    if (activeSpellPreviewBox) {
      activeSpellPreviewBox.style.background = spell.bgGradient;
      activeSpellPreviewBox.innerHTML = `
        <div class="crystal-rune-emblem">${spell.icon}</div>
        <div class="crystal-tagline">${escapeHTML(spell.shortTitle)}</div>
        <div class="crystal-sub-tagline">MATRIKS TINGKAT: ${spell.tier}</div>
      `;
    }

    if (activeSpellTags) {
      activeSpellTags.innerHTML = '';
      spell.tech.forEach(t => {
        const pill = document.createElement('span');
        pill.className = 'ingredient-pill';
        pill.innerHTML = `<span>✦</span> ${escapeHTML(t)}`;
        activeSpellTags.appendChild(pill);
      });
    }

    if (activeSpellDesc) activeSpellDesc.textContent = spell.desc;
    if (activeSpellDemoBtn) activeSpellDemoBtn.href = spell.demoUrl;
    if (activeSpellGithubBtn) activeSpellGithubBtn.href = spell.githubUrl;
  }

  // Filter Pills setup
  if (spellFilterPills) {
    const filterButtons = spellFilterPills.querySelectorAll('.spell-filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentGrimoireFilter = btn.dataset.filter || 'all';

        // Find first project matching filter
        const firstMatchIdx = grimoireSpells.findIndex(s => currentGrimoireFilter === 'all' || s.category === currentGrimoireFilter);
        if (firstMatchIdx !== -1) {
          selectGrimoireSpell(firstMatchIdx);
        } else {
          renderSpellCodexList();
        }
        playSound('toggle');
      });
    });
  }

  // Initial Open Grimoire Render
  selectGrimoireSpell(0);

  // -------------------------------------------------------------------------
  // 7. Sacred Relics & Certificates: Opsi A (Spotlight Showcase & Filmstrip)
  // -------------------------------------------------------------------------
  const certificates = [
    {
      issuer: "DICODING ACADEMY",
      tag: "DICODING ACADEMY • WEB DEVELOPMENT",
      title: "Belajar Dasar Pemrograman Web",
      img: "./Assets/Certificates/cert-web-dicoding.jpg",
      desc: "Sertifikasi resmi penguasaan fondasi HTML5, CSS3, teknik tata letak responsif modern (Flexbox & CSS Grid), serta kode semantik berstandar industri.",
      tech: ["HTML5", "CSS3", "Semantic Web", "Responsive Design", "Flexbox & Grid"],
      verifyUrl: "https://www.dicoding.com/certificates/DCA-WPB-20231115-00789"
    },
    {
      issuer: "DICODING ACADEMY",
      tag: "DICODING ACADEMY • JAVASCRIPT SPECIALIZATION",
      title: "Belajar Dasar Pemrograman JavaScript",
      img: "./Assets/Certificates/cert-js-dicoding.jpg",
      desc: "Sertifikasi kompetensi logika JavaScript modern (ES6+), OOP, penanganan Asynchronous (Promise & Async/Await), serta manipulasi DOM interaktif.",
      tech: ["JavaScript ES6+", "OOP", "Async / Await", "DOM Manipulation", "Clean Code"],
      verifyUrl: "https://www.dicoding.com/certificates/DCA-JS-2024101188"
    },
    {
      issuer: "FREECODECAMP",
      tag: "FREECODECAMP • DEVELOPER CERTIFICATION",
      title: "Responsive Web Design Certification",
      img: "./Assets/Certificates/cert-fcc-responsive.jpg",
      desc: "Penyelesaian kurikulum intensif 300 jam meliputi pembuatan berbagai proyek website responsif, media queries, dan standar aksesibilitas web (WCAG).",
      tech: ["Responsive Design", "CSS Grid", "Mobile First", "WCAG A11y", "UI/UX Layout"],
      verifyUrl: "https://www.freecodecamp.org/certification/refky-favian/responsive-web-design"
    }
  ];

  let certActive = 0;
  const spotlightImg = document.getElementById('spotlightImg');
  const spotlightBadge = document.getElementById('spotlightBadge');
  const spotlightIndex = document.getElementById('spotlightIndex');
  const spotlightTitle = document.getElementById('spotlightTitle');
  const spotlightDesc = document.getElementById('spotlightDesc');
  const spotlightTags = document.getElementById('spotlightTags');
  const btnZoomSpotlight = document.getElementById('btnZoomSpotlight');
  const btnZoomSpotlightQuick = document.getElementById('btnZoomSpotlightQuick');
  const spotlightVerifyLink = document.getElementById('spotlightVerifyLink');
  const spotlightFrame = document.getElementById('spotlightFrame');
  const certFilmstripTrack = document.getElementById('certFilmstripTrack');
  const certStripPrev = document.getElementById('certStripPrev');
  const certStripNext = document.getElementById('certStripNext');

  // Lightbox Modal
  const certModal = document.getElementById('certModal');
  const certModalClose = document.getElementById('certModalClose');
  const modalCertImg = document.getElementById('modalCertImg');

  function openCertLightbox(src) {
    if (!certModal || !modalCertImg) return;
    modalCertImg.src = src;
    certModal.classList.add('show');
    certModal.setAttribute('aria-hidden', 'false');
    playSound('blip');
  }

  function closeCertLightbox() {
    if (!certModal) return;
    certModal.classList.remove('show');
    certModal.setAttribute('aria-hidden', 'true');
    playSound('click');
  }

  if (certModalClose) certModalClose.addEventListener('click', closeCertLightbox);
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertLightbox();
    });
  }

  if (spotlightImg && certificates.length > 0) {
    // Render Filmstrip Items
    if (certFilmstripTrack) {
      certFilmstripTrack.innerHTML = '';
      certificates.forEach((c, idx) => {
        const item = document.createElement('div');
        item.className = 'filmstrip-item' + (idx === 0 ? ' active' : '');
        item.innerHTML = `
          <img src="${c.img}" alt="${c.title}" class="filmstrip-thumb-img" onerror="this.src='./Assets/Images/background-malam.jpg'" />
          <div class="filmstrip-meta">
            <span class="filmstrip-meta-title">${c.title}</span>
            <span class="filmstrip-meta-issuer">${c.issuer}</span>
          </div>
        `;
        item.addEventListener('click', () => {
          if (certActive !== idx) {
            certActive = idx;
            updateSpotlightUI();
            playSound('click');
          }
        });
        certFilmstripTrack.appendChild(item);
      });
    }

    function updateSpotlightUI() {
      const current = certificates[certActive];
      if (!current) return;

      // Soft transition animation for spotlight image
      if (spotlightImg) {
        spotlightImg.style.opacity = '0.35';
        spotlightImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
          spotlightImg.src = current.img;
          spotlightImg.style.opacity = '1';
          spotlightImg.style.transform = 'scale(1)';
        }, 120);
      }

      if (spotlightBadge) spotlightBadge.textContent = current.issuer;
      if (spotlightIndex) spotlightIndex.textContent = `RELIC 0${certActive + 1} / 0${certificates.length}`;
      if (spotlightTitle) spotlightTitle.textContent = current.title;
      if (spotlightDesc) spotlightDesc.textContent = current.desc;
      if (spotlightVerifyLink) spotlightVerifyLink.href = current.verifyUrl;

      if (spotlightTags) {
        spotlightTags.innerHTML = '';
        current.tech.forEach(t => {
          const pill = document.createElement('span');
          pill.textContent = t;
          spotlightTags.appendChild(pill);
        });
      }

      // Update filmstrip active states
      if (certFilmstripTrack) {
        const items = certFilmstripTrack.querySelectorAll('.filmstrip-item');
        items.forEach((it, idx) => {
          it.classList.toggle('active', idx === certActive);
          if (idx === certActive) {
            // Scroll ONLY the filmstrip container horizontally, NEVER the main page window!
            const offset = it.offsetLeft - (certFilmstripTrack.clientWidth / 2) + (it.clientWidth / 2);
            certFilmstripTrack.scrollTo({ left: Math.max(0, offset), behavior: 'smooth' });
          }
        });
      }
    }

    // Initial populate
    updateSpotlightUI();

    // Auto-slide rotation for certificates (snappier 3.5s interval, only runs when visible, pauses on hover)
    let certAutoSlideTimer = null;
    let isCertSectionVisible = false;

    function nextCertAutoSlide() {
      certActive = (certActive + 1) % certificates.length;
      updateSpotlightUI();
    }

    function startCertAutoSlide() {
      stopCertAutoSlide();
      if (!isCertSectionVisible) return;
      certAutoSlideTimer = setInterval(nextCertAutoSlide, 3500);
    }

    function stopCertAutoSlide() {
      if (certAutoSlideTimer) {
        clearInterval(certAutoSlideTimer);
        certAutoSlideTimer = null;
      }
    }

    const certSectionEl = document.getElementById('sertificat');
    if (certSectionEl) {
      certSectionEl.addEventListener('mouseenter', stopCertAutoSlide);
      certSectionEl.addEventListener('mouseleave', () => {
        if (isCertSectionVisible) startCertAutoSlide();
      });

      // IntersectionObserver: only auto-slide when the user has scrolled to the certificate section
      if ('IntersectionObserver' in window) {
        const certObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            isCertSectionVisible = entry.isIntersecting;
            if (isCertSectionVisible) {
              startCertAutoSlide();
            } else {
              stopCertAutoSlide();
            }
          });
        }, { threshold: 0.15 });
        certObserver.observe(certSectionEl);
      } else {
        isCertSectionVisible = true;
        startCertAutoSlide();
      }
    }

    if (certStripPrev) {
      certStripPrev.addEventListener('click', () => {
        certActive = (certActive - 1 + certificates.length) % certificates.length;
        updateSpotlightUI();
        if (isCertSectionVisible) startCertAutoSlide();
        playSound('click');
      });
    }

    if (certStripNext) {
      certStripNext.addEventListener('click', () => {
        certActive = (certActive + 1) % certificates.length;
        updateSpotlightUI();
        if (isCertSectionVisible) startCertAutoSlide();
        playSound('click');
      });
    }

    if (spotlightFrame) {
      spotlightFrame.addEventListener('click', () => {
        openCertLightbox(certificates[certActive].img);
      });
    }

    if (btnZoomSpotlight) {
      btnZoomSpotlight.addEventListener('click', () => {
        openCertLightbox(certificates[certActive].img);
      });
    }

    if (btnZoomSpotlightQuick) {
      btnZoomSpotlightQuick.addEventListener('click', (e) => {
        e.stopPropagation();
        openCertLightbox(certificates[certActive].img);
      });
    }
  }

  // -------------------------------------------------------------------------
  // 8. Sanctum Guestbook: Companions & 2D Roaming Mascot Arena
  // -------------------------------------------------------------------------
  const mascotTypeMap = {
    'type-pumpkin': { label: '🎃 Labu Ceria (Pumpkin Sprite)', icon: '🎃', role: 'Pumpkin Sprite' },
    'type-ghost': { label: '👻 Hantu Imut (Friendly Ghost)', icon: '👻', role: 'Friendly Ghost' },
    'type-bat': { label: '🦇 Kelelawar Malam (Night Bat)', icon: '🦇', role: 'Night Bat' },
    'type-cat': { label: '🐱 Kucing Hitam (Midnight Cat)', icon: '🐱', role: 'Midnight Cat' },
    'type-skeleton': { label: '💀 Tengkorak Santuy (Chibi Skeleton)', icon: '💀', role: 'Chibi Skeleton' },
    'type-wizard': { label: '🧙‍♂️ Penyihir Cilik (Little Wizard)', icon: '🧙‍♂️', role: 'Little Wizard' }
  };

  const defaultCompanions = [
    {
      id: 1,
      name: "Pumpkin Pete",
      role: "Pumpkin Sprite",
      mascotType: "type-pumpkin",
      icon: "🎃",
      time: "Sanctum Guestbook",
      text: "Portofolio dan animasinya keren banget! Suasana retro Halloween-nya berasa hidup!",
      skills: ["Visual Aesthetics", "Pumpkin Glow", "Good Vibes"]
    },
    {
      id: 2,
      name: "Boo Casper",
      role: "Friendly Ghost",
      mascotType: "type-ghost",
      icon: "👻",
      time: "Sanctum Guestbook",
      text: "Suka banget sama transisi warnanya dari siang ke sore dan malam! Halus dan ramah di mata.",
      skills: ["Floating Spirit", "UI Appreciation", "Spooky Kindness"]
    },
    {
      id: 3,
      name: "Battie",
      role: "Night Bat",
      mascotType: "type-bat",
      icon: "🦇",
      time: "Sanctum Guestbook",
      text: "Responsif di semua ukuran layar dan efek suaranya seru banget! Keren Kaka!",
      skills: ["Radar Navigation", "Clean Code", "Night Flight"]
    },
    {
      id: 4,
      name: "Luna",
      role: "Midnight Cat",
      mascotType: "type-cat",
      icon: "🐱",
      time: "Sanctum Guestbook",
      text: "Meong! Kodenya rapi dan tanpa error sama sekali. Sangat menginspirasi!",
      skills: ["Bug Hunting", "Agility", "Curiosity"]
    },
    {
      id: 5,
      name: "Skully",
      role: "Chibi Skeleton",
      mascotType: "type-skeleton",
      icon: "💀",
      time: "Sanctum Guestbook",
      text: "Sangat cocok buat dipresentasikan di depan guru dan juri kompetisi. Sukses terus Kaka!",
      skills: ["Sturdy Bones", "Logic Mastery", "Exam Slayer"]
    },
    {
      id: 6,
      name: "Archie",
      role: "Little Wizard",
      mascotType: "type-wizard",
      icon: "🧙‍♂️",
      time: "Sanctum Guestbook",
      text: "Keren maskotnya sekarang bisa jalan menyebar ke segala arah! Terlihat lebih hidup dan seru!",
      skills: ["Spell Crafting", "DOM Alchemy", "Infinite Energy"]
    }
  ];

  let companionsList = [];
  try {
    const saved = localStorage.getItem('kaka_companions_guestbook_v2');
    companionsList = saved ? JSON.parse(saved) : defaultCompanions;
  } catch (e) {
    companionsList = defaultCompanions;
  }

  const openAriseModalBtn = document.getElementById('openAriseModalBtn');
  const closeShadowModalBtn = document.getElementById('closeShadowModalBtn');
  const shadowModalOverlay = document.getElementById('shadowModalOverlay');
  const shadowExtractionForm = document.getElementById('shadowExtractionForm');
  const shadowMessageInput = document.getElementById('shadowMessageInput');
  const shadowAuthorInput = document.getElementById('shadowAuthorInput');
  const shadowClassSelect = document.getElementById('shadowClassSelect');
  const shadowAnonCheckbox = document.getElementById('shadowAnonCheckbox');
  const shadowAuthorFieldWrap = document.getElementById('shadowAuthorFieldWrap');
  const shadowTotalCount = document.getElementById('shadowTotalCount');
  const shadowPenStage = document.getElementById('shadowPenStage');
  const penTelemetryCount = document.getElementById('penTelemetryCount');

  // Status Window Elements
  const soloStatusOverlay = document.getElementById('soloStatusOverlay');
  const closeStatusWinBtn = document.getElementById('closeStatusWinBtn');
  const btnDismissStatus = document.getElementById('btnDismissStatus');
  const statusWinAvatar = document.getElementById('statusWinAvatar');
  const statusWinRank = document.getElementById('statusWinRank');
  const statusWinName = document.getElementById('statusWinName');
  const statusWinTitle = document.getElementById('statusWinTitle');
  const statusWinMessage = document.getElementById('statusWinMessage');
  const statusWinDate = document.getElementById('statusWinDate');
  const statusWinHpBar = document.getElementById('statusWinHpBar');
  const statusWinHpVal = document.getElementById('statusWinHpVal');
  const statusWinMpBar = document.getElementById('statusWinMpBar');
  const statusWinMpVal = document.getElementById('statusWinMpVal');
  const attrStr = document.getElementById('attrStr');
  const attrAgi = document.getElementById('attrAgi');
  const attrInt = document.getElementById('attrInt');
  const attrVit = document.getElementById('attrVit');
  const attrPer = document.getElementById('attrPer');
  const statusWinSkills = document.getElementById('statusWinSkills');

  const defaultGreetings = [
    "Halo pengembara!",
    "Selamat datang di Sanctum Kaka!",
    "Semoga harimu menyenangkan!",
    "Portofolio ini keren banget!",
    "Senang bisa singgah di sini!",
    "Meong! Kode bersih tanpa bug!",
    "Tetap semangat belajar web & mobile!",
    "Maskot siap menemani jalan-jalan!"
  ];

  let wanderingMascotsList = [];

  class WanderingCompanionMascot {
    constructor(companion, initialX, initialY, containerEl) {
      this.companion = companion;
      this.container = containerEl;
      this.x = initialX;
      this.y = initialY;
      this.isHovered = false;
      this.facing = Math.random() < 0.5 ? 'right' : 'left';
      this.bubbleTimeout = null;
      this.walkTimeout = null;
      this.speechTimeout = null;

      this.createDOM();
      this.setupEvents();
      this.startPatrolLoop();
      this.scheduleRandomSpeech();
    }

    createDOM() {
      const el = document.createElement('div');
      const typeClass = this.companion.mascotType || 'type-pumpkin';
      el.className = `pen-mascot facing-${this.facing} mascot-${typeClass}`;
      el.dataset.id = this.companion.id;
      el.style.left = `${this.x}px`;
      el.style.top = `${this.y}px`;
      el.style.zIndex = Math.floor(this.y) + 5;

      const name = escapeHTML(this.companion.name);

      let spriteHTML = '';
      if (typeClass === 'type-pumpkin') {
        spriteHTML = `
          <div class="mascot-sprite-wrap">
            <div class="pumpkin-stem"></div>
            <div class="mascot-torso pumpkin-body">
              <div class="pumpkin-carved-eyes">
                <span class="tri-eye"></span>
                <span class="tri-eye"></span>
              </div>
              <div class="pumpkin-carved-mouth"></div>
            </div>
            <div class="mascot-legs">
              <span class="mascot-leg leg-l"></span>
              <span class="mascot-leg leg-r"></span>
            </div>
          </div>
        `;
      } else if (typeClass === 'type-ghost') {
        spriteHTML = `
          <div class="mascot-sprite-wrap ghost-wrap">
            <div class="mascot-torso ghost-body">
              <div class="ghost-eyes">
                <span class="round-eye"></span>
                <span class="round-eye"></span>
              </div>
              <div class="ghost-cheeks">
                <span class="ghost-blush"></span>
                <span class="ghost-mouth"></span>
                <span class="ghost-blush"></span>
              </div>
              <div class="ghost-skirt-waves">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        `;
      } else if (typeClass === 'type-bat') {
        spriteHTML = `
          <div class="mascot-sprite-wrap bat-wrap">
            <div class="bat-ears">
              <span class="bat-ear ear-l"></span>
              <span class="bat-ear ear-r"></span>
            </div>
            <span class="bat-wing wing-l"></span>
            <div class="mascot-torso bat-body">
              <div class="bat-eyes">
                <span class="glow-red"></span>
                <span class="glow-red"></span>
              </div>
              <div class="bat-fangs"><span></span><span></span></div>
            </div>
            <span class="bat-wing wing-r"></span>
            <div class="mascot-legs">
              <span class="mascot-leg leg-l"></span>
              <span class="mascot-leg leg-r"></span>
            </div>
          </div>
        `;
      } else if (typeClass === 'type-cat') {
        spriteHTML = `
          <div class="mascot-sprite-wrap cat-wrap">
            <div class="cat-ears">
              <span class="cat-ear ear-l"></span>
              <span class="cat-ear ear-r"></span>
            </div>
            <span class="cat-tail"></span>
            <div class="mascot-torso cat-body">
              <div class="cat-eyes">
                <span class="slit-eye"></span>
                <span class="slit-eye"></span>
              </div>
              <div class="cat-muzzle">
                <span class="cat-whiskers-l"></span>
                <span class="cat-nose"></span>
                <span class="cat-whiskers-r"></span>
              </div>
            </div>
            <div class="mascot-legs">
              <span class="mascot-leg leg-l"></span>
              <span class="mascot-leg leg-r"></span>
            </div>
          </div>
        `;
      } else if (typeClass === 'type-skeleton') {
        spriteHTML = `
          <div class="mascot-sprite-wrap">
            <div class="mascot-torso skull-body">
              <div class="skull-sockets">
                <span class="skull-socket"><span class="skull-pupil"></span></span>
                <span class="skull-socket"><span class="skull-pupil"></span></span>
              </div>
              <div class="skull-nose"></div>
              <div class="skull-jaw">
                <span class="skull-tooth"></span>
                <span class="skull-tooth"></span>
                <span class="skull-tooth"></span>
              </div>
            </div>
            <div class="mascot-legs">
              <span class="mascot-leg leg-l bone"></span>
              <span class="mascot-leg leg-r bone"></span>
            </div>
          </div>
        `;
      } else { // type-wizard
        spriteHTML = `
          <div class="mascot-sprite-wrap wizard-wrap">
            <div class="wizard-hat">
              <div class="hat-cone"><span class="hat-star">★</span></div>
              <div class="hat-brim"></div>
            </div>
            <div class="mascot-torso wizard-body">
              <div class="wizard-eyes">
                <span class="starlight"></span>
                <span class="starlight"></span>
              </div>
              <div class="wizard-belt"></div>
            </div>
            <div class="wizard-wand"><span class="wand-sparkle">✦</span></div>
            <div class="mascot-legs">
              <span class="mascot-leg leg-l"></span>
              <span class="mascot-leg leg-r"></span>
            </div>
          </div>
        `;
      }

      el.innerHTML = `
        <div class="pen-bubble"><span class="bubble-txt">${name}</span></div>
        ${spriteHTML}
        <div class="pen-mascot-name">${name}</div>
      `;

      this.el = el;
      this.bubbleEl = el.querySelector('.pen-bubble');
      this.bubbleTxt = el.querySelector('.bubble-txt');
      this.container.appendChild(el);
    }

    setupEvents() {
      this.el.addEventListener('mouseenter', () => {
        this.isHovered = true;
        this.el.classList.remove('walking');
        const speech = this.companion.text ? `"${this.companion.text}"` : 'Halo pengembara!';
        this.showSpeech(speech, 3500);
      });

      this.el.addEventListener('mouseleave', () => {
        this.isHovered = false;
      });

      this.el.addEventListener('click', (e) => {
        e.stopPropagation();
        playSound('ghost');
        openSoloStatusWindow(this.companion);
      });
    }

    showSpeech(text, duration = 3000) {
      if (!this.bubbleEl || !this.bubbleTxt) return;
      this.bubbleTxt.textContent = text;
      this.bubbleEl.classList.add('show');

      clearTimeout(this.bubbleTimeout);
      this.bubbleTimeout = setTimeout(() => {
        this.bubbleEl.classList.remove('show');
      }, duration);
    }

    scheduleRandomSpeech() {
      const delay = randNum(8000, 20000);
      this.speechTimeout = setTimeout(() => {
        if (!this.isHovered) {
          const useComment = Math.random() < 0.65 && this.companion.text;
          const speechText = useComment 
            ? `"${this.companion.text}"` 
            : defaultGreetings[Math.floor(Math.random() * defaultGreetings.length)];
          this.showSpeech(speechText, 3200);
        }
        this.scheduleRandomSpeech();
      }, delay);
    }

    startPatrolLoop() {
      const planNextStep = () => {
        const pauseDuration = randNum(2500, 6500);
        this.walkTimeout = setTimeout(() => {
          if (!this.isHovered) {
            this.stepToNewPosition();
          }
          planNextStep();
        }, pauseDuration);
      };
      planNextStep();
    }

    stepToNewPosition() {
      if (!this.container || !this.el) return;
      const containerW = this.container.clientWidth || 900;
      const containerH = this.container.clientHeight || 320;
      const minX = 25;
      const maxX = Math.max(minX + 60, containerW - 85);
      const minY = 25;
      const maxY = Math.max(minY + 40, containerH - 110);

      // Localized wandering vector: take grounded, gentle steps rather than teleporting across the arena
      const stepDistX = randNum(-110, 110);
      const stepDistY = randNum(-45, 45);
      let targetX = this.x + stepDistX;
      let targetY = this.y + stepDistY;

      // Keep strictly within boundaries
      targetX = Math.max(minX, Math.min(maxX, targetX));
      targetY = Math.max(minY, Math.min(maxY, targetY));

      const dx = targetX - this.x;
      const dy = targetY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 18) return;

      this.facing = dx >= 0 ? 'right' : 'left';
      this.el.classList.remove('facing-left', 'facing-right');
      this.el.classList.add(`facing-${this.facing}`);

      // Duration proportional to distance for a natural, steady walking pace
      const dur = Math.max(2.2, Math.min(4.5, dist / 32));
      this.el.style.transition = `left ${dur}s cubic-bezier(0.25, 0.8, 0.25, 1), top ${dur}s cubic-bezier(0.25, 0.8, 0.25, 1)`;
      this.el.classList.add('walking');
      
      this.x = targetX;
      this.y = targetY;
      this.el.style.left = `${this.x}px`;
      this.el.style.top = `${this.y}px`;
      this.el.style.zIndex = Math.floor(this.y) + 5;

      setTimeout(() => {
        if (this.el) {
          this.el.classList.remove('walking');
        }
      }, dur * 1000);
    }

    destroy() {
      clearTimeout(this.bubbleTimeout);
      clearTimeout(this.walkTimeout);
      clearTimeout(this.speechTimeout);
      if (this.el) this.el.remove();
    }
  }

  function initShadowPenArena() {
    if (!shadowPenStage) return;
    shadowPenStage.innerHTML = `
      <div class="pen-dungeon-grid" aria-hidden="true"></div>
      <div class="pen-shadow-smoke" aria-hidden="true"></div>
    `;

    wanderingMascotsList.forEach(m => m.destroy());
    wanderingMascotsList = [];

    const containerW = shadowPenStage.clientWidth || 900;
    const containerH = shadowPenStage.clientHeight || 320;
    const count = companionsList.length;
    const spacingX = Math.max(45, (containerW - 120) / Math.max(1, count));

    companionsList.forEach((companion, idx) => {
      const startX = Math.min(containerW - 90, Math.max(20, 25 + idx * spacingX + randNum(-15, 15)));
      const startY = randNum(25, containerH - 110);
      const mascot = new WanderingCompanionMascot(companion, startX, startY, shadowPenStage);
      wanderingMascotsList.push(mascot);
    });

    updateShadowHUD();
  }

  function updateShadowHUD() {
    const txt = `${companionsList.length}+ Sahabat Terdaftar`;
    if (shadowTotalCount) shadowTotalCount.textContent = txt;
    if (penTelemetryCount) penTelemetryCount.textContent = `${companionsList.length} Maskot Sahabat Berpatroli`;
  }

  function openSoloStatusWindow(companion) {
    if (!soloStatusOverlay || !companion) return;

    playSound('victory');

    if (statusWinAvatar) {
      statusWinAvatar.innerHTML = `<span class="avatar-icon">${companion.icon || '🎃'}</span>`;
    }
    if (statusWinRank) {
      statusWinRank.textContent = (companion.role || 'SANCTUM COMPANION').toUpperCase();
    }
    if (statusWinName) {
      statusWinName.textContent = companion.name || 'PENGUNJUNG SANCTUM';
    }
    if (statusWinTitle) {
      statusWinTitle.textContent = `Sahabat Terverifikasi di Portofolio Kaka Andrea Yahya`;
    }
    if (statusWinMessage) {
      statusWinMessage.textContent = companion.text 
        ? `"${companion.text}"` 
        : `"Salam hangat untuk Kaka! Desain dan kodenya luar biasa!"`;
    }
    if (statusWinDate) {
      statusWinDate.textContent = `Kategori: ${companion.role || 'Visitor'} • Status: Terverifikasi di Sanctum`;
    }

    if (statusWinHpVal) statusWinHpVal.textContent = "100 / 100";
    if (statusWinMpVal) statusWinMpVal.textContent = "MAX / 100";
    if (attrStr) attrStr.textContent = 100;
    if (attrAgi) attrAgi.textContent = 96;
    if (attrInt) attrInt.textContent = 98;
    if (attrVit) attrVit.textContent = 99;
    if (attrPer) attrPer.textContent = 95;

    if (statusWinSkills) {
      const skills = companion.skills && companion.skills.length 
        ? companion.skills 
        : ["Web Explorer", "Code Appreciator", "Good Vibes"];
      statusWinSkills.innerHTML = skills.map(s => `<span class="skill-chip">${s}</span>`).join('');
    }

    soloStatusOverlay.classList.add('open');
    soloStatusOverlay.setAttribute('aria-hidden', 'false');
    // Lock background scroll so user cannot scroll the page behind the status window
    document.body.style.overflow = 'hidden';
  }

  function closeSoloStatusWindow() {
    if (!soloStatusOverlay) return;
    soloStatusOverlay.classList.remove('open');
    soloStatusOverlay.setAttribute('aria-hidden', 'true');
    // Restore background scroll
    document.body.style.overflow = '';
    playSound('click');
  }

  if (closeStatusWinBtn) closeStatusWinBtn.addEventListener('click', closeSoloStatusWindow);
  if (btnDismissStatus) btnDismissStatus.addEventListener('click', closeSoloStatusWindow);
  if (soloStatusOverlay) {
    soloStatusOverlay.addEventListener('click', (e) => {
      if (e.target === soloStatusOverlay) closeSoloStatusWindow();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSoloStatusWindow();
      closeShadowModal();
    }
  });

  initShadowPenArena();

  function escapeHTML(str) {
    return (str || '').replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // Guestbook Modal Handlers
  function openShadowModal() {
    if (!shadowModalOverlay) return;
    shadowModalOverlay.classList.add('open');
    shadowModalOverlay.setAttribute('aria-hidden', 'false');
    // Lock background scroll
    document.body.style.overflow = 'hidden';
    playSound('blip');
  }

  function closeShadowModal() {
    if (!shadowModalOverlay) return;
    shadowModalOverlay.classList.remove('open');
    shadowModalOverlay.setAttribute('aria-hidden', 'true');
    // Restore background scroll
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

      const newCompanion = {
        id: Date.now(),
        name: name,
        role: typeInfo.role,
        mascotType: selectedType,
        icon: typeInfo.icon,
        time: 'Sanctum Guestbook',
        text: text,
        skills: ["Sanctum Visitor", "Community Friend", "Appreciator"]
      };

      companionsList.unshift(newCompanion);
      try {
        localStorage.setItem('kaka_companions_guestbook_v2', JSON.stringify(companionsList));
      } catch (err) {}

      playSound('blip');

      // Spawn festive magic wisps
      const btn = document.getElementById('btnSubmitArise');
      if (btn) {
        const rect = btn.getBoundingClientRect();
        for (let i = 0; i < 6; i++) {
          const wisp = document.createElement('span');
          wisp.className = 'ghost-spirit';
          wisp.textContent = i % 2 === 0 ? '✨' : '🎃';
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
      initShadowPenArena();
      showToast(`✨ Terima kasih! "${name}" (${typeInfo.icon}) kini bergabung di arena.`);
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

  // Altar Inscription Form Submission with Wax Seal Animation & Particles
  if (altarContactForm) {
    altarContactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = (document.getElementById('altarSenderName')?.value || 'Pengembara').trim();
      playSound('victory');

      // Spawn bloody wax seal / purple ghost celebration particles
      const btn = document.getElementById('btnSubmitAltar');
      if (btn) {
        const rect = btn.getBoundingClientRect();
        for (let i = 0; i < 4; i++) {
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

      showToast(`🩸 Segel lilin terukir! Pesan dari ${name} terkirim ke Kaka Andrea Yahya!`);
      altarContactForm.reset();
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
    "Tulang-tulangku bergetar kagum!"
  ];

  const pumplingQuotes = [
    "Trick or Treat! 🎃",
    "Labu manis penuh sihir JavaScript!",
    "Hehe, kode tanpa bug itu cuma mitos!",
    "Mau coba ritual nisan di atas?",
    "Selamat datang di pemakaman keramat!",
    "Mencium aroma pull request baru!",
    "Malam yang seru untuk coding!",
    "Pumpling selalu siap berjaga!"
  ];

  class SpookyMascot {
    constructor(el, quotes, defaultGreeting) {
      this.el = el;
      this.quotes = quotes;
      this.hello = defaultGreeting;
      this.bubble = el ? el.querySelector('.bubble') : null;
      this.sleeping = false;
      this.fleeing = false;
      this.busy = false;

      if (this.el) {
        this.el.addEventListener('click', () => {
          playSound('click');
          this.poke();
        });
      }
      this.loop();
    }

    async say(text, ms = 2600, wave = true) {
      if (!this.bubble || !this.el || this.busy) return;
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
      if (!this.el || this.sleeping || this.fleeing) return;
      this.el.classList.add('blink');
      await waitMs(180);
      this.el.classList.remove('blink');
    }

    async look() {
      if (!this.el || this.sleeping || this.fleeing) return;
      const dir = Math.random() < 0.5 ? 'look-l' : 'look-r';
      this.el.classList.add(dir);
      await waitMs(randNum(700, 1500));
      this.el.classList.remove(dir);
    }

    async walk() {
      if (!this.el || !this.el.parentElement || this.sleeping || this.fleeing) return;
      const W = this.el.parentElement.clientWidth - 80;
      const from = this.el.offsetLeft;
      
      // Freely roam across the entire stage (from 5% to 90% of screen width)
      let to = randNum(30, W - 30);
      // Limit jump distance to look natural
      const maxDist = randNum(140, 280);
      if (Math.abs(to - from) > maxDist) {
        to = to > from ? from + maxDist : from - maxDist;
      }
      to = Math.min(W - 20, Math.max(20, to));

      const dur = Math.max(0.6, Math.abs(to - from) / 100);

      this.el.style.transitionDuration = dur + 's';
      this.el.classList.add('walk', to < from ? 'look-l' : 'look-r');
      this.el.style.left = to + 'px';
      await waitMs(dur * 1000);
      this.el.classList.remove('walk', 'look-l', 'look-r');
    }

    async sleep() {
      if (!this.el || this.sleeping || this.fleeing) return;
      this.sleeping = true;
      this.el.classList.add('sleep');
      await waitMs(randNum(3000, 7000));
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
      if (this.sleeping) {
        await this.wake();
        await this.say('Hah?! Siapa mengusik tidurku?!', 1800, false);
      } else {
        this.el.classList.add('jump');
        const randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        await this.say(randomQuote, 2400);
        this.el.classList.remove('jump');
      }
    }

    async greetAutonomously() {
      if (this.sleeping || this.fleeing || this.busy) return;
      this.el.classList.add('jump');
      const randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
      await this.say(randomQuote, 2600, true);
      this.el.classList.remove('jump');
    }

    async flee(mx) {
      if (!this.el || !this.el.parentElement || this.fleeing) return;
      this.fleeing = true;
      if (this.sleeping) {
        this.sleeping = false;
        this.el.classList.remove('sleep');
      }
      const W = this.el.parentElement.clientWidth - 80;
      const from = this.el.offsetLeft;
      const dir = (from + 38 < mx) ? -1 : 1;
      let to = from + dir * randNum(160, 260);
      if (to < 10 || to > W) to = dir < 0 ? W - randNum(0, 40) : 10 + randNum(0, 40);
      to = Math.min(W, Math.max(10, to));

      const dur = Math.max(0.35, Math.abs(to - from) / 320);
      this.el.style.transitionDuration = dur + 's';
      this.el.classList.add('scared', 'walk', to < from ? 'look-l' : 'look-r');

      if (Math.random() < 0.6) {
        this.say(this.el.id === 'a' ? 'Waa, ada arwah datang!' : 'Ampun, Tuan Reaper!', 1000, false);
      }

      this.el.style.left = to + 'px';
      await waitMs(dur * 1000);
      this.el.classList.remove('scared', 'walk', 'look-l', 'look-r');
      await waitMs(250);
      this.fleeing = false;
    }

    async loop() {
      while (true) {
        await waitMs(randNum(1000, 2800));
        if (this.sleeping || this.fleeing) continue;
        const r = Math.random();

        // 35% chance to wander and walk freely across the stage
        if (r < 0.35) {
          await this.walk();
        } 
        // 25% chance to speak a greeting autonomously
        else if (r < 0.60) {
          await this.greetAutonomously();
        } 
        // 15% look around
        else if (r < 0.75) {
          await this.look();
        } 
        // 15% blink
        else if (r < 0.90) {
          await this.blink();
        } 
        // 10% take a quick nap
        else {
          await this.sleep();
        }
      }
    }
  }

  // -------------------------------------------------------------------------
  // 11. Settings Menu (Toggle Kursor Arwah Reaper & Makhluk Kuburan)
  // -------------------------------------------------------------------------
  const settingsWrapper = document.getElementById('settingsWrapper');
  const settingsToggle = document.getElementById('settingsToggle');
  const settingsDropdown = document.getElementById('settingsDropdown');
  const btnToggleDragon = document.getElementById('btnToggleDragon');
  const btnToggleMascots = document.getElementById('btnToggleMascots');

  let isDragonEnabled = localStorage.getItem('kaka_pumpkin_active') !== 'false';
  let isMascotsEnabled = localStorage.getItem('kaka_mascots_active') !== 'false';

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

  function applyDragonState() {
    updateDragonSwitchUI();
    const dr = document.getElementById('dragon');
    if (dr) {
      dr.style.display = isDragonEnabled ? 'block' : 'none';
    }
  }

  function applyMascotsState() {
    updateMascotsSwitchUI();
    const stage = document.getElementById('stage');
    const floor = document.querySelector('.floor');
    if (stage) stage.style.display = isMascotsEnabled ? '' : 'none';
    if (floor) floor.style.display = isMascotsEnabled ? '' : 'none';
  }

  if (settingsToggle && settingsDropdown) {
    settingsToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      playSound('click');
      settingsDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (settingsWrapper && !settingsWrapper.contains(e.target)) {
        settingsDropdown.classList.remove('show');
      }
    });
  }

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

  applyDragonState();
  applyMascotsState();

  // Instantiate Mascots with their quote sets
  const charA = document.getElementById('a');
  const charB = document.getElementById('b');
  let mascotA = null;
  let mascotB = null;

  if (charA && charB) {
    mascotA = new SpookyMascot(charA, skullyQuotes, 'Yo, Necromancer!');
    mascotB = new SpookyMascot(charB, pumplingQuotes, 'Trick or Treat!');

    window.addEventListener('pointermove', e => {
      if (!isMascotsEnabled || !isDragonEnabled) return;
      if (e.pointerType !== 'mouse') return;
      for (const m of [mascotA, mascotB]) {
        if (!m || !m.el) continue;
        const r = m.el.getBoundingClientRect();
        const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
        if (d < 165) m.flee(e.clientX);
      }
    });

    setTimeout(() => mascotA && isMascotsEnabled && mascotA.greetAutonomously(), 1400);
    setTimeout(() => mascotB && isMascotsEnabled && mascotB.greetAutonomously(), 3800);
  }

  // -------------------------------------------------------------------------
  // 12. Floating Phantom Reaper Flying Cursor & Click Particles
  // -------------------------------------------------------------------------
  if (window.matchMedia('(pointer:fine)').matches) {
    const dr = document.getElementById('dragon');
    if (dr) {
      const di = dr.querySelector('i');
      let tx = 0, ty = 0, x = 0, y = 0, shown = false, face = 1;

      window.addEventListener('pointermove', e => {
        if (!isDragonEnabled) return;
        if (e.pointerType !== 'mouse') return;
        if (!shown) {
          shown = true;
          x = tx = e.clientX;
          y = ty = e.clientY;
          dr.style.display = 'block';
        }
        if (Math.abs(e.clientX - tx) > 2) {
          face = e.clientX > tx ? 1 : -1;
        }
        tx = e.clientX;
        ty = e.clientY;
        if (di) di.style.transform = `scaleX(${face})`;
      });

      // Click: Scythe Slash & Spawn Purple Spirit Wisps & Mini Bats
      window.addEventListener('pointerdown', e => {
        if (!isDragonEnabled) return;
        if (e.pointerType !== 'mouse') return;

        playSound('ghost');
        if (Math.random() < 0.6) playSound('bat');

        // Scythe tilt swing on click
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
            spirit.style.left = (e.clientX + randNum(-15, 15)) + 'px';
            spirit.style.top = (e.clientY + randNum(-15, 15)) + 'px';
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
            bat.style.left = (e.clientX + randNum(-10, 10)) + 'px';
            bat.style.top = (e.clientY + randNum(-10, 10)) + 'px';
            const dx = (face === 1 ? randNum(50, 110) : randNum(-110, -50)) + 'px';
            bat.style.setProperty('--dx', dx);
            bat.style.setProperty('--dy', randNum(-80, 20) + 'px');
            document.body.appendChild(bat);
            setTimeout(() => bat.remove(), 950);
          }
        });
      });

      document.addEventListener('mouseleave', () => {
        dr.style.display = 'none';
        shown = false;
      });

      (function tick() {
        if (isDragonEnabled) {
          x += (tx - x) * 0.22;
          y += (ty - y) * 0.22;
          // Float with proper offset
          const offsetX = face === 1 ? -70 : -75;
          const offsetY = -70;
          dr.style.transform = `translate(${x + offsetX}px, ${y + offsetY}px)`;
        }
        requestAnimationFrame(tick);
      })();
    }
  }
});


