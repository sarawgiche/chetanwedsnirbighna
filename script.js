(function () {
  "use strict";

  // ═══ TRANSLATIONS DICTIONARY ═══
  const translations = {
    en: {
      nameGroom: "Chetan",
      nameBride: "Nirbighna",
      gateSubtitle: "The Royal Wedding Of",
      lockText: "Tap to Unlock",
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
      event1Title: "Wedding Ceremony",
      event1Desc: "Sacred vows & blessings",
      event2Title: "Mehendi & Sangeet",
      event2Desc: "Music, colour & celebration",
      event3Title: "Grand Reception",
      event3Desc: "Dinner & dancing under the stars",
      stop4Code: "OUR STORY",
      stop4Title: "How It Began",
      story1Title: "First Glance",
      story1Desc: "Two strangers on parallel tracks — until one moment changed the map forever.",
      story2Title: "Shared Journey",
      story2Desc: "Laughter, trust, and countless miles traveled side by side.",
      story3Title: "The Proposal",
      story3Desc: "A question asked as the sun painted the sky gold — she said yes.",
      story4Title: "Final Destination",
      story4Desc: "6 July 2026 — where two hearts arrive as one.",
      stop5Code: "LOCATION",
      stop5Title: "The Grand Venue",
      venueName: "Bhubaneswar Club",
      venueAddress: "Bhubaneswar, Odisha",
      btnMap: "Open in Maps",
      btnCopy: "Copy Address",
      stop6Code: "GALLERY",
      stop6Title: "Captured Memories",
      btnBlessing: "Shower Blessings ✨",
      footerDate: "6 July 2026"
    },
    hi: {
      nameGroom: "चेतन",
      nameBride: "निर्विघ्ना",
      gateSubtitle: "शाही विवाह",
      lockText: "खोलने के लिए टैप करें",
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
      event1Title: "विवाह संस्कार",
      event1Desc: "पवित्र वचन एवं आशीर्वाद",
      event2Title: "मेहंदी एवं संगीत",
      event2Desc: "संगीत, रंग और जश्न",
      event3Title: "भव्य रिसेप्शन",
      event3Desc: "तारों की छाँव में रात्रिभोज एवं नृत्य",
      stop4Code: "हमारी कहानी",
      stop4Title: "कैसे हुई शुरुआत",
      story1Title: "पहली नज़र",
      story1Desc: "समानांतर पटरियों पर दो अजनबी — जब तक एक पल ने हमेशा के लिए नक्शा नहीं बदल दिया।",
      story2Title: "साझा सफर",
      story2Desc: "हँसी, विश्वास और साथ चले अनगिनत मील।",
      story3Title: "प्रस्ताव",
      story3Desc: "सुनहरे आसमान के नीचे पूछा गया एक सवाल — और उसने हाँ कह दिया।",
      story4Title: "अंतिम मंजिल",
      story4Desc: "6 जुलाई 2026 — जहाँ दो दिल एक होकर पहुँचते हैं।",
      stop5Code: "स्थान",
      stop5Title: "भव्य आयोजन स्थल",
      venueName: "भुवनेश्वर क्लब",
      venueAddress: "भुवनेश्वर, ओडिशा",
      btnMap: "मैप्स में खोलें",
      btnCopy: "पता कॉपी करें",
      stop6Code: "गैलरी",
      stop6Title: "यादों के झरोखे",
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
  const routeStops = document.querySelectorAll(".route-stop");

  let isPlaying = false;
  let scrollOpened = false;
  let gateOpened = false;

  // ═══ LANGUAGE SELECTION & TRANSLATION ═══
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      
      // Update DOM
      htmlTag.setAttribute("lang", selectedLang);
      applyTranslations(selectedLang);
      
      // We start audio immediately because user just clicked a button (bypasses browser autoplay block!)
      forcePlayAudio();
      
      // Hide Modal, Show Gate
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
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
  }

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
        
        const rotateX = ((y - centerY) / centerY) * -6;
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

  // Initialize Canvas
  initSteam();
})();