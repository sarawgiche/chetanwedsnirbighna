(function () {
  "use strict";

  // ═══ TRANSLATIONS & DATA ═══
  const translations = {
    en: {
      nameGroom: "Chetan",
      nameBride: "Nirbighna",
      gateSubtitle: "All Aboard The",
      lockText: "Punch Ticket To Enter",
      nowPlaying: "Wedding Bells", // Removed Dil Na Jaaneya
      
      dashTitle: "Select Your Destination",
      dashInstr: "Tap a ticket below to explore",
      btnTicket: "Boarding Pass",
      btnCountdown: "Departure Time",
      btnRoute: "Route Map",
      btnGallery: "Memories",
      btnRings: "The Rings",
      btnVenue: "Final Station",
      
      stop1Title: "The Royal Invitation",
      inviteText: "With the blessings of the Almighty, we joyfully invite you to board the Wedding Express and witness the beginning of our forever.",
      groomParent: "Son of<br>Mrs. Manju Devi & Mr. Satish Kumar Sarawgi",
      brideParent: "Daughter of<br>Mrs. Shipranjali Shaw & Mr. Purna Chandra Shaw",
      
      scrollSummon: "You are summoned to witness the union on",
      scrollDate: "6th of July, 2026",
      sealHint: "Drag the seal downwards to reveal date",
      
      countdownLabel: "Moments Until Departure",
      lblDays: "Days", lblHours: "Hrs", lblMins: "Min", lblSecs: "Sec",
      
      stop3Title: "Journey Itinerary",
      event1Date: "4th July, 2026", event1Title: "Lagan Sagai", event1Time: "5:00 P.M. Onwards", event1Venue: "Bhubaneswar Club Banquet Hall",
      event2Date: "5th July, 2026", event2Title: "Haldi, Mehendi & Sangeet", event2Time: "10:00 A.M. Onwards", event2Desc: "Haldi at Pool side, followed by Mehendi.<br>DJ Night/Sangeet from 7:00 P.M.",
      event3Date: "6th July, 2026", event3Title: "Nikasi & Wedding", event3Venue: "Tennis Lawn, Bhubaneswar Club",
      
      stop4Title: "Glimpses of Us",
      gameTitle: "A Symbol of Forever",
      gameHint: "Slide the ring exactly to the end",
      gameSuccess: "Two hearts, intertwined forever.",
      
      stop5Title: "The Grand Venue",
      venueName: "Bhubaneswar Club", venueAddress: "Bhubaneswar, Odisha",
      btnMap: "Open in Maps", btnCopy: "Copy Address", btnBlessing: "Shower Blessings ✨"
    },
    hi: {
      nameGroom: "चेतन",
      nameBride: "निर्विघ्ना",
      gateSubtitle: "शाही रेलगाड़ी में",
      lockText: "प्रवेश हेतु टिकट पंच करें",
      nowPlaying: "शादी की शहनाई",
      
      dashTitle: "अपना गंतव्य चुनें",
      dashInstr: "देखने के लिए नीचे दिए टिकट पर टैप करें",
      btnTicket: "बोर्डिंग पास",
      btnCountdown: "प्रस्थान का समय",
      btnRoute: "यात्रा मार्ग",
      btnGallery: "यादें",
      btnRings: "अँगूठी की रस्म",
      btnVenue: "अंतिम स्टेशन",
      
      stop1Title: "शाही निमंत्रण",
      inviteText: "ईश्वर के आशीर्वाद से, हम आपको हमारे हमेशा के सफर की शुरुआत का गवाह बनने के लिए सहर्ष आमंत्रित करते हैं।",
      groomParent: "सुपुत्र<br>श्रीमती मंजू देवी एवं श्री सतीश कुमार सरावगी",
      brideParent: "सुपुत्री<br>श्रीमती शिप्रांजलि शॉ एवं श्री पूर्ण चंद्र शॉ",
      
      scrollSummon: "आपको इस शुभ विवाह का साक्षी बनने हेतु आमंत्रित किया जाता है:",
      scrollDate: "दिनांक 6 जुलाई 2026",
      sealHint: "दिनांक देखने के लिए मुहर को नीचे खींचें",
      
      countdownLabel: "प्रस्थान की प्रतीक्षा",
      lblDays: "दिन", lblHours: "घंटे", lblMins: "मिनट", lblSecs: "सेकंड",
      
      stop3Title: "यात्रा कार्यक्रम",
      event1Date: "4 जुलाई 2026", event1Title: "लगन सगाई", event1Time: "शाम 5:00 बजे से", event1Venue: "भुवनेश्वर क्लब बैंक्वेट हॉल",
      event2Date: "5 जुलाई 2026", event2Title: "हल्दी, मेहंदी एवं संगीत", event2Time: "सुबह 10:00 बजे से", event2Desc: "पूल साइड पर हल्दी, तत्पश्चात मेहंदी।<br>शाम 7:00 बजे से डीजे नाइट/संगीत।",
      event3Date: "6 जुलाई 2026", event3Title: "निकासी एवं विवाह", event3Venue: "टेनिस लॉन, भुवनेश्वर क्लब",
      
      stop4Title: "हमारी कुछ झलकियाँ",
      gameTitle: "हमेशा का प्रतीक",
      gameHint: "अंगूठी को खिसकाएं",
      gameSuccess: "दो दिल, हमेशा के लिए एक हो गए।",
      
      stop5Title: "भव्य आयोजन स्थल",
      venueName: "भुवनेश्वर क्लब", venueAddress: "भुवनेश्वर, ओडिशा",
      btnMap: "मैप्स में खोलें", btnCopy: "पता कॉपी करें", btnBlessing: "आशीर्वाद दें ✨"
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

  let isPlaying = false;
  let scrollOpened = false;

  // ═══ LANGUAGE SELECTION ═══
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      htmlTag.setAttribute("lang", selectedLang);
      
      // Apply texts
      const dict = translations[selectedLang];
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) el.innerHTML = dict[key];
      });

      forcePlayAudio();
      langModal.classList.add("fade-out");
      setTimeout(() => {
        langModal.classList.add("hidden");
        gate.classList.remove("hidden");
      }, 800);
    });
  });

  // ═══ DASHBOARD MODALS INTERACTIVITY ═══
  const dashBtns = document.querySelectorAll(".dash-btn[data-modal]");
  const closeBtns = document.querySelectorAll(".close-modal");

  dashBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-modal");
      document.getElementById(targetId).classList.remove("hidden");
      if(navigator.vibrate) navigator.vibrate(20);
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.target.closest(".train-modal").classList.add("hidden");
    });
  });

  // ═══ OPEN CARRIAGE DOORS ═══
  openBtn.addEventListener("click", () => {
    forcePlayAudio();
    triggerHeartShower();
    gate.classList.add("open");
    if(navigator.vibrate) navigator.vibrate([30, 50, 30]);
    
    setTimeout(() => {
      gate.style.display = "none";
      app.hidden = false;
      initWaxSeal();
      initRingGame();
    }, 1200);
  });

  // ═══ WAX SEAL (Inside Boarding Pass Modal) ═══
  function initWaxSeal() {
    const waxSeal = document.getElementById("waxSeal");
    const waxEnvelope = document.getElementById("waxEnvelope");
    const farmaanScroll = document.getElementById("farmaanScroll");
    const sealHint = document.getElementById("sealHint");
    if (!waxSeal) return;

    let dragging = false; let startY;

    function onStart(e) {
      if (scrollOpened) return;
      dragging = true;
      startY = e.touches ? e.touches[0].clientY : e.clientY;
      waxSeal.style.transition = "none";
    }

    function onMove(e) {
      if (!dragging) return;
      const currentY = e.touches ? e.touches[0].clientY : e.clientY;
      const dy = currentY - startY;
      if (dy > 0 && dy < 100) waxSeal.style.transform = `translateY(${dy}px)`;
      if (dy > 60) openScroll();
    }

    function onEnd() {
      if (!dragging || scrollOpened) return;
      dragging = false;
      waxSeal.style.transition = "transform 0.4s ease";
      waxSeal.style.transform = "translateY(0)";
    }

    function openScroll() {
      scrollOpened = true; dragging = false;
      if(navigator.vibrate) navigator.vibrate(50);
      sealHint.style.opacity = "0";
      waxEnvelope.classList.add("broken");
      setTimeout(() => farmaanScroll.classList.add("open"), 300);
    }

    waxSeal.addEventListener("mousedown", onStart);
    waxSeal.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchend", onEnd);
  }

  // ═══ MINI GAME (Inside Rings Modal) ═══
  function initRingGame() {
    const thumb = document.getElementById("ringThumb");
    const track = document.getElementById("ringTrack");
    const gamePlayArea = document.getElementById("gamePlayArea");
    const gameSuccessArea = document.getElementById("gameSuccessArea");
    if (!thumb) return;

    let dragging = false; let startX, maxDrag; let unlocked = false;

    function onStart(e) {
      if (unlocked) return;
      dragging = true;
      startX = e.touches ? e.touches[0].clientX : e.clientX;
      maxDrag = track.offsetWidth - thumb.offsetWidth - 10;
      thumb.style.transition = "none";
    }

    function onMove(e) {
      if (!dragging) return;
      const currentX = e.touches ? e.touches[0].clientX : e.clientX;
      let dx = currentX - startX;
      if (dx < 0) dx = 0; if (dx > maxDrag) dx = maxDrag;
      thumb.style.transform = `translateX(${dx}px)`;
      if (dx >= maxDrag * 0.95) unlockRing();
    }

    function onEnd() {
      if (!dragging || unlocked) return;
      dragging = false;
      thumb.style.transition = "transform 0.4s ease";
      thumb.style.transform = "translateX(0)";
    }

    function unlockRing() {
      unlocked = true; dragging = false;
      if(navigator.vibrate) navigator.vibrate(50);
      thumb.style.transform = `translateX(${maxDrag}px)`;
      triggerHeartShower();
      setTimeout(() => {
        gamePlayArea.style.display = "none";
        gameSuccessArea.classList.remove("hidden");
      }, 400);
    }

    thumb.addEventListener("mousedown", onStart);
    thumb.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchend", onEnd);
  }

  // ═══ TRAIN STEAM & HEARTS ═══
  function initSteam() {
    const canvas = document.getElementById("steam");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h; const puffs = [];
    function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
    resize(); window.addEventListener("resize", resize);
    for (let i = 0; i < 40; i++) {
      puffs.push({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 2 + 1, speed: Math.random() * 0.5 + 0.2, opacity: Math.random() * 0.5 + 0.1 });
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      puffs.forEach((p) => {
        p.y -= p.speed; p.x += Math.sin(p.y * 0.05) * 0.5; 
        if (p.y < -p.r) { p.y = h + 20; p.x = Math.random() * w; }
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2);
        grad.addColorStop(0, `rgba(249, 215, 126, ${p.opacity})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 2, 0, Math.PI * 2); ctx.fillStyle = grad; ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();
  }

  function triggerHeartShower() {
    const items = ['💖', '✨', '🚂', '❤️', '🎟️'];
    for(let i = 0; i < 30; i++) {
      const drop = document.createElement('div');
      drop.classList.add('shower-item');
      drop.innerText = items[Math.floor(Math.random() * items.length)];
      drop.style.left = Math.random() * 100 + 'vw';
      drop.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
      drop.style.animationDuration = (Math.random() * 3 + 2) + 's';
      document.body.appendChild(drop);
      setTimeout(() => drop.remove(), 5000);
    }
  }

  if (blessingBtn) {
    blessingBtn.addEventListener("click", () => {
      triggerHeartShower();
      if(navigator.vibrate) navigator.vibrate(30);
    });
  }

  // ═══ AUDIO CONTROL ═══
  async function forcePlayAudio() {
    if (isPlaying) return;
    try {
      await audio.play();
      isPlaying = true;
      musicBar.classList.add("playing");
      musicToggle.querySelector(".icon-play-sm").classList.add("hidden");
      musicToggle.querySelector(".icon-pause-sm").classList.remove("hidden");
    } catch (err) { console.log("Autoplay prevented."); }
  }

  function pauseMusic() {
    audio.pause();
    isPlaying = false;
    musicBar.classList.remove("playing");
    musicToggle.querySelector(".icon-play-sm").classList.remove("hidden");
    musicToggle.querySelector(".icon-pause-sm").classList.add("hidden");
  }
  
  musicToggle.addEventListener("click", () => { if (isPlaying) pauseMusic(); else forcePlayAudio(); });

  // ═══ DEPARTURE COUNTDOWN ═══
  function updateCountdown() {
    const diff = WEDDING_DATE - new Date();
    const ids = ["days", "hours", "minutes", "seconds"];
    if (diff <= 0) { ids.forEach(id => { const el = document.getElementById(id); if(el) el.textContent = "00"; }); return; }
    const vals = [ Math.floor(diff / 86400000), Math.floor((diff / 3600000) % 24), Math.floor((diff / 60000) % 60), Math.floor((diff / 1000) % 60) ];
    ids.forEach((id, i) => { const el = document.getElementById(id); if(el) el.textContent = String(vals[i]).padStart(2, "0"); });
  }
  updateCountdown(); setInterval(updateCountdown, 1000);

  // ═══ COPY ADDRESS ═══
  const copyAddress = document.getElementById("copyAddress");
  if (copyAddress) {
    copyAddress.addEventListener("click", async () => {
      const isHi = htmlTag.getAttribute("lang") === "hi";
      try {
        await navigator.clipboard.writeText("Bhubaneswar Club, Bhubaneswar, Odisha");
        copyAddress.textContent = isHi ? "कॉपी हो गया!" : "Copied!";
        setTimeout(() => { copyAddress.textContent = isHi ? "पता कॉपी करें" : "Copy Address"; }, 2000);
      } catch { copyAddress.textContent = isHi ? "विफल" : "Failed"; }
    });
  }

  initSteam();
})();