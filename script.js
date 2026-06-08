(function () {
  "use strict";

  const WEDDING_DATE = new Date("2026-07-06T11:00:00");

  const gate = document.getElementById("gate");
  const app = document.getElementById("app");
  const openBtn = document.getElementById("openInvitation");
  const audio = document.getElementById("weddingMusic");
  const musicBar = document.getElementById("musicBar");
  const musicToggle = document.getElementById("musicToggle");
  
  // Farmaan Elements
  const waxSeal = document.getElementById("waxSeal");
  const waxEnvelope = document.getElementById("waxEnvelope");
  const farmaanScroll = document.getElementById("farmaanScroll");
  const sealHint = document.getElementById("sealHint");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const copyAddress = document.getElementById("copyAddress");
  const routeProgress = document.getElementById("routeProgress");
  const routeStops = document.querySelectorAll(".route-stop");

  let isPlaying = false;
  let scrollOpened = false;
  let gateOpened = false;

  // ═══ GOLDEN FIREFLIES (DUST) PARTICLES ═══
  function initSteam() {
    const canvas = document.getElementById("steam");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h;
    const puffs = [];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 50; i++) {
      puffs.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        drift: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      puffs.forEach((p) => {
        p.y -= p.speed;
        p.x += Math.sin(p.y * 0.05) * 0.5 + p.drift; 
        
        if (p.y < -p.r) {
          p.y = h + 20;
          p.x = Math.random() * w;
        }

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2);
        grad.addColorStop(0, `rgba(249, 215, 126, ${p.opacity})`);
        grad.addColorStop(0.4, `rgba(212, 175, 55, ${p.opacity * 0.5})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();
  }

  // ═══ AUDIO LOGIC ═══
  async function forcePlayAudio() {
    if (isPlaying) return;
    try {
      await audio.play();
      isPlaying = true;
      musicBar.classList.add("playing");
      musicToggle.querySelector(".icon-play-sm").classList.add("hidden");
      musicToggle.querySelector(".icon-pause-sm").classList.remove("hidden");
    } catch (err) {
      console.log("Autoplay prevented.");
    }
  }

  function pauseMusic() {
    audio.pause();
    isPlaying = false;
    musicBar.classList.remove("playing");
    musicToggle.querySelector(".icon-play-sm").classList.remove("hidden");
    musicToggle.querySelector(".icon-pause-sm").classList.add("hidden");
  }
  
  musicToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isPlaying) pauseMusic();
    else forcePlayAudio();
  });

  // ═══ INTERACTIVE 3D PALACE DOORS ═══
  openBtn.addEventListener("click", () => {
    if(gateOpened) return;
    gateOpened = true;
    
    forcePlayAudio(); // Start music instantly on lock tap
    
    // Add open class to swing doors in 3D
    gate.classList.add("open");
    
    // Wait for door animation to finish, then hide gate and show app
    setTimeout(() => {
      gate.style.display = "none";
      app.hidden = false;
      initWaxSeal();
      initReveal();
      initRouteMap();
      initTiltCards();
    }, 1800);
  });

  // ═══ 3D PARALLAX TILT EFFECT FOR CARDS ═══
  function initTiltCards() {
    const cards = document.querySelectorAll('.tilt-card');
    
    cards.forEach(card => {
      const glare = card.querySelector('.card-glare');
      
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -6; // Max 6 deg tilt
        const rotateY = ((x - centerX) / centerX) * 6;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        
        if(glare) {
          glare.style.opacity = '1';
          glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 60%)`;
        }
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        if(glare) glare.style.opacity = '0';
      });
    });
  }

  // ═══ WAX SEAL (FARMAAN SCROLL) DRAG ═══
  function initWaxSeal() {
    if (!waxSeal || !waxEnvelope) return;

    let dragging = false;
    let startY, currentY, handleY;

    function onStart(e) {
      if (scrollOpened) return;
      dragging = true;
      const p = getPoint(e);
      const rect = waxSeal.getBoundingClientRect();
      startY = p.y;
      handleY = rect.top;
      waxSeal.style.transition = "none";
    }

    function onMove(e) {
      if (!dragging) return;
      e.preventDefault();
      const p = getPoint(e);
      const dy = p.y - startY;
      
      // Allow dragging downwards to break the seal
      if (dy > 0 && dy < 150) {
        waxSeal.style.transform = `translateY(${dy}px)`;
      }

      if (dy > 80) {
        openScroll();
      }
    }

    function onEnd() {
      if (!dragging || scrollOpened) return;
      dragging = false;
      waxSeal.style.transition = "transform 0.4s ease";
      waxSeal.style.transform = "translateY(0)";
    }

    function getPoint(e) {
      return { y: e.touches ? e.touches[0].clientY : e.clientY };
    }

    function openScroll() {
      if (scrollOpened) return;
      scrollOpened = true;
      dragging = false;
      
      if(navigator.vibrate) navigator.vibrate(50); // Haptic feedback on break
      
      sealHint.style.opacity = "0";
      waxEnvelope.classList.add("broken");
      
      setTimeout(() => {
        farmaanScroll.classList.add("open");
      }, 400);
    }

    waxSeal.addEventListener("mousedown", onStart);
    waxSeal.addEventListener("touchstart", onStart, { passive: false });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchend", onEnd);
  }

  // ═══ COUNTDOWN ═══
  function updateCountdown() {
    const diff = WEDDING_DATE - new Date();
    const ids = ["days", "hours", "minutes", "seconds"];
    if (diff <= 0) {
      ids.forEach(id => document.getElementById(id).textContent = "00");
      return;
    }
    const vals = [
      Math.floor(diff / 86400000),
      Math.floor((diff / 3600000) % 24),
      Math.floor((diff / 60000) % 60),
      Math.floor((diff / 1000) % 60),
    ];
    ids.forEach((id, i) => {
      const el = document.getElementById(id);
      if(el) el.textContent = String(vals[i]).padStart(2, "0");
    });
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ═══ SCROLL REVEAL ═══
  function initReveal() {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
  }

  // ═══ ROUTE MAP ═══
  function initRouteMap() {
    const stops = document.querySelectorAll(".stop[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const num = parseInt(e.target.id.replace("stop-", ""), 10);
          routeStops.forEach((s) => {
            const sn = parseInt(s.dataset.stop, 10);
            s.classList.toggle("active", sn === num);
          });
          const pct = ((num - 1) / (stops.length - 1)) * 100;
          routeProgress.style.height = pct + "%";
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
    );
    stops.forEach((s) => obs.observe(s));
  }

  // ═══ GALLERY LIGHTBOX ═══
  document.querySelectorAll(".polaroid").forEach((item) => {
    item.addEventListener("click", () => {
      lightboxImg.src = item.dataset.full;
      lightbox.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.add("hidden");
    document.body.style.overflow = "";
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });

  // ═══ COPY ADDRESS ═══
  if (copyAddress) {
    copyAddress.addEventListener("click", async () => {
      const text = "Bhubaneswar Club, Bhubaneswar, Odisha";
      try {
        await navigator.clipboard.writeText(text);
        copyAddress.textContent = "Copied!";
        setTimeout(() => { copyAddress.textContent = "Copy Address"; }, 2000);
      } catch {
        copyAddress.textContent = "Failed";
      }
    });
  }

  // Initialize Canvas
  initSteam();
})();