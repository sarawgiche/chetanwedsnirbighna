(function () {
  "use strict";

  // ═══ TRANSLATIONS DICTIONARY ═══
  const translations = {
    en: {
      nameGroom: "Chetan",
      nameBride: "Nirbighna",
      gateSubtitle: "Welcome to Love Express Station",
      lockText: "Board the Train",
      nowPlaying: "Wedding Music",
      
      stop1Code: "TICKET",
      stop1Title: "All Aboard!",
      punchText: "👊 PUNCH TICKET TO CONTINUE",
      
      stop2Code: "ANNOUNCEMENT",
      stop2Title: "Station Master's Decree",
      scrollTitle: "📢 ATTENTION PASSENGERS",
      scrollSummon: "You are cordially invited to witness the union of",
      scrollDate: "on the 6th of July, 2026.",
      scrollGuest: "🎫 VIP Passenger Pass",
      revealBtnText: "👇 TAP TO REVEAL DETAILS",
      countdownLabel: "DEPARTURE COUNTDOWN",
      lblDays: "Days",
      lblHours: "Hrs",
      lblMins: "Min",
      lblSecs: "Sec",
      
      stop3Code: "ITINERARY",
      stop3Title: "Station Stops",
      event1Date: "4th July, 2026",
      event1Title: "🎯 Lagan Sagai",
      event1Time: "5:00 P.M. Onwards",
      event1Venue: "Bhubaneswar Club Banquet Hall",
      event2Date: "5th July, 2026",
      event2Title: "💛 Haldi, Mehendi & Sangeet",
      event2Time: "10:00 A.M. Onwards",
      event2Desc: "Haldi at Pool side, followed by Mehendi.<br>DJ Night/Sangeet from 7:00 P.M. onwards.",
      event3Date: "6th July, 2026",
      event3Title: "💍 Nikasi & Wedding",
      event3Venue: "Tennis Lawn, Bhubaneswar Club",
      
      stop4Code: "GLIMPSES",
      stop4Title: "Windows of Love",
      videoText: "Play Pre-Wedding Video",

      gameCode: "INTERACTIVE",
      gameTitle: "Unite the Rings",
      gameHint: "💍 SLIDE THE RING TO UNITE TWO HEARTS 💍",
      gameSuccess: "Two hearts, intertwined forever.",
      
      stop5Code: "DESTINATION",
      stop5Title: "Final Stop",
      venueName: "Bhubaneswar Club",
      venueAddress: "Bhubaneswar, Odisha",
      btnMap: "📍 Open in Maps",
      btnCopy: "📋 Copy Address",
      
      btnBlessing: "🌹 Shower Blessings ✨",
      footerDate: "6 July 2026"
    },
    hi: {
      nameGroom: "चेतन",
      nameBride: "निर्विघ्ना",
      gateSubtitle: "लव एक्सप्रेस स्टेशन में स्वागत है",
      lockText: "ट्रेन पर चढ़ें",
      nowPlaying: "विवाह संगीत",
      
      stop1Code: "टिकट",
      stop1Title: "सवार हो जाइए!",
      punchText: "👊 TICKET को PUNCH करके आगे बढ़ें",
      
      stop2Code: "घोषणा",
      stop2Title: "स्टेशन मास्टर का फरमान",
      scrollTitle: "📢 सभी यात्रियों का ध्यान दें",
      scrollSummon: "आपको इनके शुभ विवाह का साक्षी बनने हेतु आमंत्रित किया जाता है",
      scrollDate: "दिनांक 6 जुलाई 2026 को।",
      scrollGuest: "🎫 VIP यात्री पास",
      revealBtnText: "👇 विवरण देखने के लिए TAP करें",
      countdownLabel: "प्रस्थान गणना",
      lblDays: "दिन",
      lblHours: "घंटे",
      lblMins: "मिनट",
      lblSecs: "सेकंड",
      
      stop3Code: "कार्यक्रम",
      stop3Title: "स्टेशन स्टॉप",
      event1Date: "4 जुलाई 2026",
      event1Title: "🎯 लगन सगाई",
      event1Time: "शाम 5:00 बजे से",
      event1Venue: "भुवनेश्वर क्लब बैंक्वेट हॉल",
      event2Date: "5 जुलाई 2026",
      event2Title: "💛 हल्दी, मेहंदी एवं संगीत",
      event2Time: "सुबह 10:00 बजे से",
      event2Desc: "पूल साइड पर हल्दी, तत्पश्चात मेहंदी।<br>शाम 7:00 बजे से डीजे नाइट/संगीत।",
      event3Date: "6 जुलाई 2026",
      event3Title: "💍 निकासी एवं विवाह",
      event3Venue: "टेनिस लॉन, भुवनेश्वर क्लब",
      
      stop4Code: "झलकियाँ",
      stop4Title: "प्रेम की खिड़कियाँ",
      videoText: "प्री-वेडिंग वीडियो देखें",

      gameCode: "इंटरएक्टिव",
      gameTitle: "अंगूठियों को मिलाएं",
      gameHint: "💍 दो दिलों को मिलाने के लिए अंगूठी को खिसकाएं 💍",
      gameSuccess: "दो दिल, हमेशा के लिए एक हो गए।",
      
      stop5Code: "गंतव्य",
      stop5Title: "अंतिम स्टॉप",
      venueName: "भुवनेश्वर क्लब",
      venueAddress: "भुवनेश्वर, ओडिशा",
      btnMap: "📍 मैप्स में खोलें",
      btnCopy: "📋 पता कॉपी करें",
      
      btnBlessing: "🌹 आशीर्वाद दें ✨",
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
  
  const punchBtn = document.getElementById("punchBtn");
  const revealBtn = document.getElementById("revealBtn");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const copyAddress = document.getElementById("copyAddress");
  
  const trackProgress = document.getElementById("routeProgress");
  const stationStops = Array.from(document.querySelectorAll(".station-stop"));

  let isPlaying = false;
  let ticketPunched = false;
  let detailsRevealed = false;
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

  // ═══ TRAIN STATION ENTRANCE ═══
  openBtn.addEventListener("click", () => {
    if(gateOpened) return;
    gateOpened = true;
    
    forcePlayAudio();
    triggerHeartShower();
    
    gate.classList.add("open");
    gate.style.opacity = "0";
    gate.style.transform = "scale(1.1)";
    
    setTimeout(() => {
      gate.style.display = "none";
      app.hidden = false;
      initPunchTicket();
      initRevealDetails();
      initRingGame();
      initReveal();
      initRouteMap();
      initTiltCards();
    }, 1800);
  });

  // ═══ 3D PARALLAX TILT EFFECT FOR CARDS ═══
  function initTiltCards() {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    
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

  // ═══ PUNCH TICKET ═══
  function initPunchTicket() {
    if (!punchBtn) return;
    
    punchBtn.addEventListener("click", () => {
      if (ticketPunched) return;
      ticketPunched = true;
      
      triggerHeartShower();
      if(navigator.vibrate) navigator.vibrate([50, 30, 50]);
      
      punchBtn.textContent = "✅ TICKET PUNCHED!";
      punchBtn.disabled = true;
      punchBtn.style.opacity = "0.6";
      
      setTimeout(() => {
        punchBtn.style.transition = "all 0.6s ease";
        punchBtn.style.transform = "scale(0.8)";
      }, 200);
    });
  }

  // ═══ REVEAL DECREE DETAILS ═══
  function initRevealDetails() {
    if (!revealBtn) return;
    
    revealBtn.addEventListener("click", () => {
      if (detailsRevealed) return;
      detailsRevealed = true;
      
      triggerHeartShower();
      if(navigator.vibrate) navigator.vibrate(50);
      
      revealBtn.style.pointerEvents = "none";
      revealBtn.style.opacity = "0.5";
      revealBtn.textContent = "✅ REVEALED!";
    });
  }

  // ═══ THE RING CEREMONY MINI GAME ═══
  function initRingGame() {
    const thumb = document.getElementById("ringThumb");
    const track = document.getElementById("ringTrack");
    const gamePlayArea = document.getElementById("gamePlayArea");
    const gameSuccessArea = document.getElementById("gameSuccessArea");
    
    if (!thumb || !track) return;

    let dragging = false;
    let startX, maxDrag;
    let unlocked = false;

    function onStart(e) {
      if (unlocked) return;
      dragging = true;
      startX = e.touches ? e.touches[0].clientX : e.clientX;
      maxDrag = track.offsetWidth - thumb.offsetWidth - 10;
      thumb.style.transition = "none";
      thumb.classList.remove("heartbeat");
    }

    function onMove(e) {
      if (!dragging) return;
      e.preventDefault();
      const currentX = e.touches ? e.touches[0].clientX : e.clientX;
      let dx = currentX - startX;
      
      if (dx < 0) dx = 0;
      if (dx > maxDrag) dx = maxDrag;
      
      thumb.style.transform = `translateX(${dx}px)`;

      if (dx >= maxDrag * 0.95) {
        unlockRing();
      }
    }

    function onEnd() {
      if (!dragging || unlocked) return;
      dragging = false;
      thumb.style.transition = "transform 0.4s ease";
      thumb.style.transform = "translateX(0)";
      thumb.classList.add("heartbeat");
    }

    function unlockRing() {
      unlocked = true;
      dragging = false;
      if(navigator.vibrate) navigator.vibrate(50);
      
      thumb.style.transform = `translateX(${maxDrag}px)`;
      
      triggerHeartShower();
      
      setTimeout(() => {
        gamePlayArea.style.display = "none";
        gameSuccessArea.classList.remove("hidden");
      }, 400);
    }

    thumb.addEventListener("mousedown", onStart);
    thumb.addEventListener("touchstart", onStart, { passive: false });
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
    const stops = Array.from(document.querySelectorAll(".station-stop-section[id]"));
    if (stops.length === 0 || window.matchMedia("(max-width: 1000px)").matches) return;

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

      stationStops.forEach((s, idx) => {
         s.classList.toggle("active", idx === current);
      });

      const pct = (current / (stops.length - 1)) * 100;
      trackProgress.style.height = pct + "%";
    }, { passive: true });
  }

  // ═══ GALLERY LIGHTBOX ═══
  document.querySelectorAll(".window-pane").forEach((item) => {
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
        copyAddress.textContent = isHi ? "कॉपी हो गया! ✅" : "Copied! ✅";
        setTimeout(() => { 
          copyAddress.textContent = isHi ? "📋 पता कॉपी करें" : "📋 Copy Address"; 
        }, 2000);
      } catch {
        copyAddress.textContent = isHi ? "विफल ❌" : "Failed ❌";
      }
    });
  }

  initSteam();
})();
