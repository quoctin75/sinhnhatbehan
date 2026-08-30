/* ==========================================================================
   CUTE & BEAUTIFUL BIRTHDAY WEBSITE SCRIPT
   Interactive Candle Blowing, Polaroid Lightbox, Sound Synth, Sky Lanterns
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- PHOTO MEMORIES DATA (All 20 images) ---
  const photos = [
    { src: 'images/1788079916500_2056367569213401147_4643335349267074498_6f3b9870594489d0b770076e15cee44e.jpg', caption: 'Nụ cười Bảo Hân rạng rỡ ✨', emoji: '💖' },
    { src: 'images/1788079916539_2056367569213401147_4643335349267074498_c727c9d89d34aebb6a1df50fd55cc543.jpg', caption: 'Góc nghiêng thần thánh 🌸', emoji: '👑' },
    { src: 'images/1788079916556_2056367569213401147_4643335349267074498_50f7befd7834fca689d0b158e2b1dbe0.jpg', caption: 'Công chúa Bảo Hân ngọt ngào 🥰', emoji: '🎀' },
    { src: 'images/1788079916575_2056367569213401147_4643335349267074498_9b7fc8da96d6ab4a7cbd72a921797b73.jpg', caption: 'Khoảnh khắc tuyệt đẹp tuổi 17 📸', emoji: '🌟' },
    { src: 'images/1788079916597_2056367569213401147_4643335349267074498_577cb3044735e8eec6a8ee6c72136483.jpg', caption: 'Dễ thương hết nấc 💕', emoji: '🍬' },
    { src: 'images/1788079916614_2056367569213401147_4643335349267074498_511eb1e8cc72dc01620af6467bf4140a.jpg', caption: 'Nhan sắc thăng hoa tuổi 17 🔥', emoji: '✨' },
    { src: 'images/1788079916630_2056367569213401147_4643335349267074498_b40ef31ffb1ab608afa51bc85b37e55b.jpg', caption: 'Thần thái sang xịn mịn 🎉', emoji: '💎' },
    { src: 'images/1788079916645_2056367569213401147_4643335349267074498_4abfedcdf95187cc6a623930c714a257.jpg', caption: 'Lung linh ngây ngút 🌷', emoji: '💌' },
    { src: 'images/1788079916662_2056367569213401147_4643335349267074498_fcac7c4a862d3329d2981c1a6d898e96.jpg', caption: 'Ánh mắt tỏa nắng ☀️', emoji: '🌻' },
    { src: 'images/1788079916679_2056367569213401147_4643335349267074498_79859855889901837cd6e32f138f0109.jpg', caption: 'Thơ mộng ngây thơ 🌿', emoji: '🕊️' },
    { src: 'images/1788079916696_2056367569213401147_4643335349267074498_c740000b1a4bf891acbb5693094892e1.jpg', caption: 'Yêu kiều đằm thắm 🌺', emoji: '🎀' },
    { src: 'images/1788079916713_2056367569213401147_4643335349267074498_d9cb5951d57151412c8b45e8d74b4141.jpg', caption: 'Forever 17 Sweet & Pretty 🎂', emoji: '🥳' },
    { src: 'images/1788094834280_2056367569213401147_4643335349267074498_5b4e3755a41d02b9f52ff705ed91e6bb.jpg', caption: 'Nét đẹp hồn nhiên ✨', emoji: '🌸' },
    { src: 'images/1788094834317_2056367569213401147_4643335349267074498_5272eed28d5d4876f6d5982e63abb9b9.jpg', caption: 'Thiên thần tuổi 17 👼', emoji: '💫' },
    { src: 'images/1788094834339_2056367569213401147_4643335349267074498_9f559018bc4d17d2c5cfee371239b956.jpg', caption: 'Rạng ngời & ngây thơ 🌷', emoji: '🦋' },
    { src: 'images/1788094834356_2056367569213401147_4643335349267074498_78b0189a000ad0940c7693918e3228ff.jpg', caption: 'Xinh đẹp hết phần thiên hạ 👀💖', emoji: '✨' },
    { src: 'images/1788094834372_2056367569213401147_4643335349267074498_4466e125cee7549743382159a7009a12.jpg', caption: 'Bảo Hân Quá Xinh! 👑', emoji: '🔥' },
    { src: 'images/1788094834389_2056367569213401147_4643335349267074498_3247a85ed3e92705807100c1177ec994.jpg', caption: 'Cực kỳ đáng yêu 🧸', emoji: '🎀' },
    { src: 'images/1788097293496_2056367569213401147_4643335349267074498_15d215f0a888d16537496695fdaeef5c.jpg', caption: 'Thanh xuân rực rỡ tuổi 17 💖', emoji: '🥳' },
    { src: 'images/1788095391986_2056367569213401147_4643335349267074498_e5e02c01ae365bffc4c2ac3d93d99e10.jpg', caption: 'Nụ cười tỏa sáng diệu kỳ 🌟', emoji: '💖' }
  ];

  // --- LIVE AGE & STATS CALCULATOR (Birthdate: 31/08/2009) ---
  const birthDate = new Date(2009, 7, 31, 0, 0, 0); // 31 Aug 2009

  function updateAgeStats() {
    const now = new Date();
    const diffMs = now - birthDate;

    // Years calculation
    let years = now.getFullYear() - birthDate.getFullYear();
    const monthDiff = now.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
      years--;
    }

    // Exact Days lived
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    // Live Clock Breakdown
    const secondsLived = Math.floor(diffMs / 1000);
    const daysRem = Math.floor(secondsLived / (3600 * 24));
    const hoursRem = Math.floor((secondsLived % (3600 * 24)) / 3600);
    const minsRem = Math.floor((secondsLived % 3600) / 60);
    const secsRem = Math.floor(secondsLived % 60);

    // Update HTML elements
    const yearsElem = document.getElementById('stat-years');
    const daysElem = document.getElementById('stat-days');
    const clockDays = document.getElementById('clock-days');
    const clockHours = document.getElementById('clock-hours');
    const clockMins = document.getElementById('clock-mins');
    const clockSecs = document.getElementById('clock-secs');

    if (yearsElem) yearsElem.textContent = years > 0 ? years : 17;
    if (daysElem) daysElem.textContent = totalDays.toLocaleString('vi-VN');

    if (clockDays) clockDays.textContent = daysRem.toLocaleString('vi-VN');
    if (clockHours) clockHours.textContent = String(hoursRem).padStart(2, '0');
    if (clockMins) clockMins.textContent = String(minsRem).padStart(2, '0');
    if (clockSecs) clockSecs.textContent = String(secsRem).padStart(2, '0');
  }

  updateAgeStats();
  setInterval(updateAgeStats, 1000);

  // --- BACKGROUND MUSIC PLAYER (audio/Audio.wav) ---
  // Lazy-init: Audio object is created only when user triggers playback
  // so the browser never auto-downloads the file on page load.
  let bgMusic = null;
  let isPlayingMusic = false;

  function getBgMusic() {
    if (!bgMusic) {
      bgMusic = new Audio('audio/Audio.wav');
      bgMusic.loop = true;
    }
    return bgMusic;
  }

  function playMusic() {
    const music = getBgMusic();
    music.play().then(() => {
      isPlayingMusic = true;
      const musicBtn = document.getElementById('music-toggle-btn');
      if (musicBtn) {
        musicBtn.innerHTML = '🎵';
        musicBtn.style.animation = 'pulse-glow 1.5s infinite';
      }
    }).catch(err => {
      console.log('Audio play info:', err);
    });
  }

  function pauseMusic() {
    if (bgMusic) bgMusic.pause();
    isPlayingMusic = false;
    const musicBtn = document.getElementById('music-toggle-btn');
    if (musicBtn) {
      musicBtn.innerHTML = '🔇';
      musicBtn.style.animation = 'none';
    }
  }

  function toggleMusic() {
    if (isPlayingMusic) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  // Chime SFX via Web Audio API
  let audioCtx = null;
  function playChimeSFX() {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        setTimeout(() => {
          try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(0, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.4);
          } catch (e) { }
        }, i * 100);
      });
    } catch (e) { }
  }

  // --- BACKGROUND PARTICLES CANVAS ---
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 50;
      this.size = Math.random() * 14 + 8;
      this.speedY = Math.random() * 1.8 + 0.6;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.9;
      this.opacity = Math.random() * 0.75 + 0.25;
      const emojis = ['💖', '🌸', '✨', '⭐', '🎀', '💫'];
      this.symbol = emojis[Math.floor(Math.random() * emojis.length)];
      this.color = ['#ff758c', '#ff7eb3', '#ffeaa7', '#ffffff', '#ff4757', '#fdcb6e'][Math.floor(Math.random() * 6)];
      this.type = Math.random() > 0.35 ? 'emoji' : 'glowing-orb';
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      if (this.y < -30) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      if (this.type === 'emoji') {
        ctx.font = `${this.size}px sans-serif`;
        ctx.fillText(this.symbol, this.x, this.y);
      } else {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 3.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // --- CONFETTI CANNON ---
  function triggerConfetti() {
    const count = 100;
    const colors = ['#ff758c', '#ff7eb3', '#ffeaa7', '#fdcb6e', '#ff4757', '#ffffff'];
    for (let i = 0; i < count; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-20px';
      confetti.style.width = Math.random() * 10 + 6 + 'px';
      confetti.style.height = Math.random() * 15 + 8 + 'px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      confetti.style.zIndex = '99999';
      confetti.style.pointerEvents = 'none';
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      confetti.style.transition = `transform ${Math.random() * 3 + 2}s cubic-bezier(0.25, 0.46, 0.45, 0.94), top ${Math.random() * 3 + 2}s ease-out, left ${Math.random() * 3 + 2}s ease-out, opacity 2s ease-out`;

      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.style.top = window.innerHeight + 50 + 'px';
        confetti.style.left = parseFloat(confetti.style.left) + (Math.random() * 200 - 100) + 'px';
        confetti.style.transform = `rotate(${Math.random() * 720}deg) scale(0.5)`;
        confetti.style.opacity = '0';
      }, 50);

      setTimeout(() => {
        confetti.remove();
      }, 4000);
    }
  }

  // --- ENVELOPE GATE LOGIC ---
  const envelopeGate = document.getElementById('envelope-gate');
  const envelope = document.getElementById('envelope');
  const envelopeWrapper = document.getElementById('envelope-wrapper');
  const openBtn = document.getElementById('btn-open-envelope');

  function triggerOpenEnvelope() {
    if (envelope.classList.contains('open')) return;
    envelope.classList.add('open');
    playChimeSFX();
    triggerConfetti();

    setTimeout(() => {
      envelopeGate.classList.add('hidden');
      if (!isPlayingMusic) {
        toggleMusic();
      }
      startTypewriter();
    }, 1800);
  }

  openBtn.addEventListener('click', triggerOpenEnvelope);
  if (envelopeWrapper) {
    envelopeWrapper.addEventListener('click', triggerOpenEnvelope);
  }

  // --- INTERACTIVE CAKE & CANDLE BLOW ---
  const flames = document.querySelectorAll('.flame');
  const smokes = document.querySelectorAll('.smoke');
  const cakeContainer = document.getElementById('cake-container');
  let candlesBlown = false;

  function blowCandles() {
    if (candlesBlown) return;
    candlesBlown = true;

    flames.forEach(flame => flame.classList.add('blown-out'));
    smokes.forEach(smoke => smoke.classList.add('active'));

    playChimeSFX();
    triggerConfetti();

    const hint = document.getElementById('cake-hint-text');
    if (hint) {
      hint.innerHTML = '🎉 Điều ước tuổi 17 của Bảo Hân đã gửi tới các vì sao! Tuổi mới thật bùng nổ nhé! ✨';
    }
  }

  cakeContainer.addEventListener('click', blowCandles);

  // --- RENDER POLAROID GALLERY (OPTIMIZED FOR MOBILE SPEED) ---
  const polaroidGrid = document.getElementById('polaroid-grid');

  photos.forEach((photo, index) => {
    const card = document.createElement('div');
    card.className = 'polaroid-card';
    card.setAttribute('data-index', index);

    // Eager load first 4 photos for immediate display, lazy load the rest
    const loadingAttr = index < 4 ? 'eager' : 'lazy';
    const fetchPriorityAttr = index < 4 ? 'fetchpriority="high"' : '';

    card.innerHTML = `
      <div class="polaroid-img-wrapper">
        <img src="${photo.src}" alt="${photo.caption}" loading="${loadingAttr}" ${fetchPriorityAttr} decoding="async" onload="this.classList.add('loaded')">
      </div>
      <div class="polaroid-caption">${photo.caption}</div>
      <div class="polaroid-badge">${photo.emoji}</div>
    `;

    // Check if image is already cached/loaded
    const imgElem = card.querySelector('img');
    if (imgElem.complete) {
      imgElem.classList.add('loaded');
    }

    card.addEventListener('click', () => openLightbox(index));
    polaroidGrid.appendChild(card);
  });

  // --- GALLERY VIEW FIT TOGGLE ---
  const btnContain = document.getElementById('btn-fit-contain');
  const btnCover = document.getElementById('btn-fit-cover');

  if (btnContain && btnCover && polaroidGrid) {
    btnContain.addEventListener('click', () => {
      polaroidGrid.classList.add('fit-contain');
      polaroidGrid.classList.remove('fit-cover');
      btnContain.classList.add('active');
      btnCover.classList.remove('active');
    });

    btnCover.addEventListener('click', () => {
      polaroidGrid.classList.remove('fit-contain');
      polaroidGrid.classList.add('fit-cover');
      btnCover.classList.add('active');
      btnContain.classList.remove('active');
    });
  }

  // --- LIGHTBOX MODAL ---
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  let currentPhotoIndex = 0;

  function openLightbox(index) {
    currentPhotoIndex = index;
    updateLightbox();
    lightboxModal.classList.add('active');
  }

  function updateLightbox() {
    const photo = photos[currentPhotoIndex];
    lightboxImg.src = photo.src;
    lightboxCaption.textContent = `${photo.caption} ${photo.emoji}`;
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentPhotoIndex + 1} / ${photos.length}`;
    }

    // Preload next and previous images for instant navigation
    const nextIndex = (currentPhotoIndex + 1) % photos.length;
    const prevIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    const imgNext = new Image();
    imgNext.src = photos[nextIndex].src;
    const imgPrev = new Image();
    imgPrev.src = photos[prevIndex].src;
  }

  lightboxClose.addEventListener('click', () => lightboxModal.classList.remove('active'));
  lightboxPrev.addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updateLightbox();
  });
  lightboxNext.addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updateLightbox();
  });

  // Close on outside click or ESC / Arrow keys navigation
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) lightboxModal.classList.remove('active');
  });
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') lightboxModal.classList.remove('active');
    if (e.key === 'ArrowLeft') {
      currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
      updateLightbox();
    }
    if (e.key === 'ArrowRight') {
      currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
      updateLightbox();
    }
  });

  // --- TYPEWRITER LETTER ---
  const letterContent = `Gửi Lê Võ Bảo Hân - Chị xinh đẹp của em tròn 17 tuổi! 🌸 (31/08/2009 - 31/08/2026)

Thế là chị Bảo Hân đã chính thức bước sang tuổi 17 – độ tuổi rực rỡ và đẹp nhất của thanh xuân! 💖. Cho em xin phép gọi chị là Hân nhé :33. Chúc Hân tuổi mới luôn giữ mãi nụ cười rạng rỡ tỏa nắng, nhan sắc ngày càng thăng hoa, học tập rực rỡ thành công và luôn đong đầy hạnh phúc bên gia đình, bạn bè.

Mong rằng mọi ước mơ và dự định của Bảo Hân ở tuổi 17 đều sẽ trở thành hiện thực diệu kỳ! Hãy luôn tự tin, yêu đời và tỏa sáng theo cách riêng của mình nhé! ✨👑💕`;

  let typewriterStarted = false;
  function startTypewriter() {
    if (typewriterStarted) return;
    typewriterStarted = true;

    const letterElem = document.getElementById('letter-text');
    letterElem.textContent = '';
    let i = 0;

    function type() {
      if (i < letterContent.length) {
        letterElem.textContent += letterContent.charAt(i);
        i++;
        setTimeout(type, 35);
      }
    }
    type();
  }

  // --- FLIP WISH CARDS ---
  const wishCards = document.querySelectorAll('.flip-card');
  wishCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      playChimeSFX();
    });
  });

  // --- SKY LANTERN CREATOR ---
  const btnLantern = document.getElementById('btn-send-lantern');
  const lanternInput = document.getElementById('lantern-input');
  const skyContainer = document.getElementById('sky-lanterns-container');

  btnLantern.addEventListener('click', () => {
    const text = lanternInput.value.trim();
    if (!text) return;

    const lantern = document.createElement('div');
    lantern.className = 'floating-lantern';
    lantern.style.left = Math.random() * 80 + 10 + 'vw';
    lantern.innerHTML = `<span>🏮</span><span>${text}</span>`;

    skyContainer.appendChild(lantern);
    playChimeSFX();
    lanternInput.value = '';

    setTimeout(() => lantern.remove(), 15000);
  });

  // Controls listeners
  document.getElementById('music-toggle-btn').addEventListener('click', toggleMusic);
  document.getElementById('confetti-btn').addEventListener('click', () => {
    triggerConfetti();
    playChimeSFX();
  });

});
