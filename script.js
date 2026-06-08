(function () {
  "use strict";

  // ═══ TRANSLATIONS DICTIONARY ═══
  const translations = {
    en: {
      nameGroom: "Chetan",
      nameBride: "Nirbighna",
      gateSubtitle: "The Royal Wedding Of",
      lockText: "Tap to Enter",
      nowPlaying: "Dil Na Jaaneya",
      
      stop1Code: "THE INVITATION",
      stop1Title: "A Royal Celebration",
      inviteText: "With the blessings of the Almighty, we joyfully invite you to witness the beginning of our forever.",
      groomParent: "Son of<br>Mrs. & Mr. [Parents Name]",
      brideParent: "Daughter of<br>Mrs. & Mr. [Parents Name]",
      
      stop2Code: "THE DECREE",
      stop2Title: "Royal Farmaan",
      scrollTitle: "By Royal Appointment",
      scrollSummon: "You are summoned to witness the union of",
      scrollDate: "on the 6th of July, 2026.",
      scrollGuest: "Guest of Honour",
      sealHint: "Drag the seal downwards to open",
      countdownLabel: "MOMENTS UNTIL FOREVER",
      lblDays: "Days",
      lblHours: "Hrs",
      lblMins: "Min",
      lblSecs: "Sec",
      
      stop3Code: "ITINERARY",
      stop3Title: "Wedding Festivities",
      event1Date: "4th July, 2026",
      event1Title: "Lagan Sagai",
      event1Time: "5:00 P.M. Onwards",
      event1Venue: "Bhubaneswar Club Banquet Hall",
      event2Date: "5th July, 2026",
      event2Title: "Haldi, Mehendi & Sangeet",
      event2Time: "10:00 A.M. Onwards",
      event2Desc: "Haldi at Pool side, followed by Mehendi.<br>DJ Night/Sangeet from 7:00 P.M. onwards.",
      event3Date: "6th July, 2026",
      event3Title: "Nikasi & Wedding",
      event3Venue: "Tennis Lawn, Bhubaneswar Club",
      
      stop4Code: "PRE-WEDDING",
      stop4Title: "Glimpses of Us",
      videoText: "Play Pre-Wedding Video",
      
      stop5Code: "LOCATION",
      stop5Title: "The Grand Venue",
      venueName: "Bhubaneswar Club",
      venueAddress: "Bhubaneswar, Odisha",
      btnMap: "Open in Maps",
      btnCopy: "Copy Address",
      
      btnBlessing: "Shower Blessings ✨",
      footerDate: "6 July 2026"
    },
    hi: {
      nameGroom: "चेतन",
      nameBride: "निर्विघ्ना",
      gateSubtitle: "शाही विवाह",
      lockText: "प्रवेश के लिए टैप करें",
      nowPlaying: "दिल ना जानेया",
      
      stop1Code: "निमंत्रण",
      stop1Title: "एक शाही जश्न",
      inviteText: "ईश्वर के आशीर्वाद से, हम आपको हमारे हमेशा के सफर की शुरुआत का गवाह बनने के लिए सहर्ष आमंत्रित करते हैं।",
      groomParent: "सुपुत्र<br>श्रीमती एवं श्री [माता-पिता का नाम]",
      brideParent: "सुपुत्री<br>श्रीमती एवं श्री [माता-पिता का नाम]",
      
      stop2Code: "शाही फरमान",
      stop2Title: "शाही फरमान",
      scrollTitle: "शाही आमंत्रण",
      scrollSummon: "आपको इनके शुभ विवाह का साक्षी बनने हेतु आमंत्रित किया जाता है:",
      scrollDate: "दिनांक 6 जुलाई 2026 को।",
      scrollGuest: "मुख्य अतिथि",
      sealHint: "खोलने के लिए मुहर को नीचे खींचें",
      countdownLabel: "सदाबहार पलों का इंतज़ार",
      lblDays: "दिन",
      lblHours: "घंटे",
      lblMins: "मिनट",
      lblSecs: "सेकंड",
      
      stop3Code: "कार्यक्रम",
      stop3Title: "विवाह समारोह",
      event1Date: "4 जुलाई 2026",
      event1Title: "लगन सगाई",
      event1Time: "शाम 5:00 बजे से",
      event1Venue: "भुवनेश्वर क्लब बैंक्वेट हॉल",
      event2Date: "5 जुलाई 2026",
      event2Title: "हल्दी, मेहंदी एवं संगीत",
      event2Time: "सुबह 10:00 बजे से",
      event2Desc: "पूल साइड पर हल्दी, तत्पश्चात मेहंदी।<br>शाम 7:00 बजे से डीजे नाइट/संगीत।",
      event3Date: "6 जुलाई 2026",
      event3Title: "निकासी एवं विवाह",
      event3Venue: "टेनिस लॉन, भुवनेश्वर क्लब",
      
      stop4Code: "प्री-वेडिंग",
      stop4Title: "हमारी कुछ झलकियाँ",
      videoText: "प्री-वेडिंग वीडियो देखें",
      
      stop5Code: "स्थान",
      stop5Title: "भव्य आयोजन स्थल",
      venueName: "भुवनेश्वर क्लब",
      venueAddress: "भुवनेश्वर, ओडिशा",
      btnMap: "मैप्स में खोलें",
      btnCopy: "पता कॉपी करें",
      
      btnBlessing: "आशीर्वाद दें ✨",
      footerDate: "6 जुलाई 2026"
    }
  };

  const WEDDING_DATE = new Date("2026-07-06T11:00:00");

  const htmlTag = document.getElementById("htmlTag");
  const langModal = document.getElementById("langModal");
  const langBtns = document.querySelectorAll(".lang-btns button");

  const gate = document.getElementById("gate");
  const app = document.getElementById("app");
  const openBtn = document.getElementById("openInvitation");
  const audio = document.getElementById("weddingMusic");
  const musicBar = document.getElementById("musicBar");
  const musicToggle = document.getElementById("musicToggle");
  const blessingBtn = document.getElementById("blessingBtn");
  
  const waxSeal = document.getElementById("waxSeal");
  const waxEnvelope = document.getElementById("waxEnvelope");
  const farmaanScroll = document.getElementById("farmaanScroll");
  const sealHint = document.getElementById("sealHint");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const copyAddress = document.getElementById("copyAddress");
  
  const routeProgress = document.getElementById("routeProgress");
  const routeStops = Array.from(document.querySelectorAll(".route-stop"));

  let isPlaying = false;
  let scrollOpened = false;
  let gateOpened = false;

  // ═══ LANGUAGE SELECTION ═══
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      htmlTag.setAttribute("lang", selectedLang);
      applyTranslations(selectedLang);
      
      forcePlayAudio();
      
      langModal.classList.add("fade-out");
      setTimeout(() => {
        langModal.classList.add("hidden");
        gate.classList.remove("hidden");
      }, 800);
    });
  });

  function applyTranslations(lang) {
    const dict = translations[lang];
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.innerHTML = dict[key];
    });
  }

  // ═══ GOLDEN FIREFLIES ═══
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

    for (let i = 0; i < 60; i++) {
      puffs.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.5 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
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

  // ═══ SHOWER HEARTS & PETALS ═══
  function triggerHeartShower() {
    const items = ['💖', '✨', '🌹', '❤️', '🌸'];
    for(let i = 0; i < 40; i++) {
      const drop = document.createElement('div');
      drop.classList.add('shower-item');
      drop.innerText = items[Math.floor(Math.random() * items.length)];
      drop.style.left = Math.random() * 100 + 'vw';
      drop.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
      drop.style.animationDuration = (Math.random() * 3 + 2.5) + 's';
      drop.style.opacity = Math.random() * 0.5 + 0.5;
      
      document.body.appendChild(drop);
      setTimeout(() => drop.remove(), 6000);
    }
  }

  if (blessingBtn) {
    blessingBtn.addEventListener("click", () => {
      triggerHeartShower();
      if(navigator.vibrate) navigator.vibrate(30);
    });
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
    
    forcePlayAudio();
    triggerHeartShower();
    
    gate.classList.add("open");
    
    setTimeout(() => {
      gate.style.display = "none";
      app.hidden = false;
      initWaxSeal();
      initReveal();
      initRouteMap();
      initTiltCards();
    }, 1800);
  });

  // ═══ 3D PARALLAX TILT EFFECT ═══
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
        
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        
        if(glare) {
          glare.style.opacity = '1';
          glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.12), transparent 60%)`;
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
    let startY;

    function onStart(e) {
      if (scrollOpened) return;
      dragging = true;
      const p = getPoint(e);
      startY = p.y;
      waxSeal.style.transition = "none";
      waxSeal.classList.remove("heartbeat");
    }

    function onMove(e) {
      if (!dragging) return;
      e.preventDefault();
      const p = getPoint(e);
      const dy = p.y - startY;
      
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
      waxSeal.classList.add("heartbeat");
    }

    function getPoint(e) {
      return { y: e.touches ? e.touches[0].clientY : e.clientY };
    }

    function openScroll() {
      if (scrollOpened) return;
      scrollOpened = true;
      dragging = false;
      
      if(navigator.vibrate) navigator.vibrate(50); 
      triggerHeartShower(); 
      
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
      ids.forEach(id => { const el = document.getElementById(id); if(el) el.textContent = "00"; });
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

  // ═══ ROUTE MAP (FIXED SCROLL LISTENER) ═══
  function initRouteMap() {
    const stops = Array.from(document.querySelectorAll(".stop[id]"));
    if (stops.length === 0) return;

    window.addEventListener('scroll', () => {
      let current = 0;
      let minDiff = Infinity;
      const scrollY = window.scrollY + window.innerHeight / 2.5; 

      stops.forEach((stop, index) => {
         const top = stop.offsetTop;
         const diff = Math.abs(scrollY - top);
         if (diff < minDiff) {
             minDiff = diff;
             current = index;
         }
      });

      routeStops.forEach((s, idx) => {
         s.classList.toggle("active", idx === current);
      });

      const pct = (current / (stops.length - 1)) * 100;
      routeProgress.style.height = pct + "%";
    }, { passive: true });
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
      const isHi = htmlTag.getAttribute("lang") === "hi";
      const text = "Bhubaneswar Club, Bhubaneswar, Odisha";
      try {
        await navigator.clipboard.writeText(text);
        copyAddress.textContent = isHi ? "कॉपी हो गया!" : "Copied!";
        setTimeout(() => { 
          copyAddress.textContent = isHi ? "पता कॉपी करें" : "Copy Address"; 
        }, 2000);
      } catch {
        copyAddress.textContent = isHi ? "विफल" : "Failed";
      }
    });
  }

  initSteam();
})();