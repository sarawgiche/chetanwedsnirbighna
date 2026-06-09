"use strict";

const steps = [
  {
    title: "Tap the ticket",
    text: "Flip the wedding pass to reveal the couple and both family names."
  },
  {
    title: "Tap each plaque",
    text: "Light up both family plaques to complete the family coach."
  },
  {
    title: "Tap each station",
    text: "Each route stop reveals one celebration event."
  },
  {
    title: "Open the windows",
    text: "Tap the shutters to reveal the memory windows."
  },
  {
    title: "Pull the chain",
    text: "Reveal the final destination and shower blessings."
  }
];

const events = [
  {
    chip: "Station 01",
    title: "Lagan Sagai",
    time: "5:00 P.M. Onwards",
    place: "Bhubaneswar Club Banquet Hall",
    desc: "The journey begins with blessings, warm welcomes, and the first ceremonial stop."
  },
  {
    chip: "Station 02",
    title: "Haldi · Mehendi · Sangeet",
    time: "10:00 A.M. Onwards · DJ Night / Sangeet from 7:00 P.M.",
    place: "Pool Side & Celebration Area",
    desc: "A colorful day of laughter, haldi, mehendi, music, and dance."
  },
  {
    chip: "Station 03",
    title: "Nikasi & Wedding",
    time: "Wedding Day",
    place: "Tennis Lawn, Bhubaneswar Club",
    desc: "The grand arrival, the vows, and the moment this train reaches forever."
  }
];

const boardingGate = document.getElementById("boardingGate");
const gateCard = document.getElementById("gateCard");
const boardBtn = document.getElementById("boardBtn");
const app = document.getElementById("app");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const bgMusic = document.getElementById("bgMusic");
const coaches = Array.from(document.querySelectorAll(".coach"));
const stopDots = Array.from(document.querySelectorAll(".stop-dot"));
const nextButtons = Array.from(document.querySelectorAll(".next-btn"));
const prevButtons = Array.from(document.querySelectorAll(".prev-btn"));
const instructionTitle = document.getElementById("instructionTitle");
const instructionText = document.getElementById("instructionText");
const progressText = document.getElementById("progressText");
const progressEyebrow = document.getElementById("progressEyebrow");
const ticketFlip = document.getElementById("ticketFlip");
const familyPlaques = Array.from(document.querySelectorAll(".family-plaque"));
const routeStops = Array.from(document.querySelectorAll(".route-stop"));
const eventDisplay = document.getElementById("eventDisplay");
const memoryWindows = Array.from(document.querySelectorAll(".memory-window"));
const chainPull = document.getElementById("chainPull");
const arrivalCard = document.getElementById("arrivalCard");
const blessingsBtn = document.getElementById("blessingsBtn");
const restartBtn = document.getElementById("restartBtn");
const petalLayer = document.getElementById("petalLayer");

let currentStep = 0;
let musicPlaying = false;

function setStep(index) {
  currentStep = Math.max(0, Math.min(index, coaches.length - 1));

  coaches.forEach((coach, i) => {
    coach.classList.toggle("active", i === currentStep);
  });

  stopDots.forEach((dot, i) => {
    const active = i === currentStep;
    dot.classList.toggle("active", active);
    dot.setAttribute("aria-current", active ? "step" : "false");
  });

  if (instructionTitle) instructionTitle.textContent = steps[currentStep].title;
  if (instructionText) instructionText.textContent = steps[currentStep].text;
  if (progressText) {
    progressText.textContent = `Coach ${String(currentStep + 1).padStart(2, "0")} of ${String(coaches.length).padStart(2, "0")}`;
  }
  if (progressEyebrow) {
    progressEyebrow.textContent = `Coach ${String(currentStep + 1).padStart(2, "0")} · Wedding Journey`;
  }

  if (window.innerWidth < 900) {
    coaches[currentStep]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function tryPlayMusic() {
  if (!bgMusic) return;

  bgMusic.play().then(() => {
    musicPlaying = true;
    musicToggle?.classList.add("is-playing");
    musicToggle?.setAttribute("aria-pressed", "true");
    if (musicLabel) musicLabel.textContent = "Music On";
  }).catch(() => {
    musicPlaying = false;
    musicToggle?.classList.remove("is-playing");
    musicToggle?.setAttribute("aria-pressed", "false");
    if (musicLabel) musicLabel.textContent = "Tap for Music";
  });
}

function toggleMusic() {
  if (!bgMusic) return;

  if (musicPlaying) {
    bgMusic.pause();
    musicPlaying = false;
    musicToggle?.classList.remove("is-playing");
    musicToggle?.setAttribute("aria-pressed", "false");
    if (musicLabel) musicLabel.textContent = "Wedding Music";
  } else {
    bgMusic.play().then(() => {
      musicPlaying = true;
      musicToggle?.classList.add("is-playing");
      musicToggle?.setAttribute("aria-pressed", "true");
      if (musicLabel) musicLabel.textContent = "Music On";
    }).catch(() => {});
  }
}

function updateEvent(index) {
  const item = events[index];
  if (!item || !eventDisplay) return;

  eventDisplay.innerHTML = `
    <p class="event-chip">${item.chip}</p>
    <h3>${item.title}</h3>
    <p class="event-time">${item.time}</p>
    <p class="event-place">${item.place}</p>
    <p class="event-desc">${item.desc}</p>
  `;

  routeStops.forEach((stop, i) => {
    stop.classList.toggle("active", i === index);
  });
}

function createBlessingsBurst() {
  const items = ["✨", "💛", "🌸", "🕊️", "💫"];
  for (let i = 0; i < 34; i += 1) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.textContent = items[Math.floor(Math.random() * items.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.fontSize = `${Math.random() * 18 + 16}px`;
    piece.style.animationDuration = `${Math.random() * 2 + 3}s`;
    piece.style.opacity = `${Math.random() * 0.5 + 0.5}`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5200);
  }
}

function createPetals(count = 26) {
  const petals = ["🌸", "🌺", "✨"];
  for (let i = 0; i < count; i += 1) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.fontSize = `${Math.random() * 12 + 14}px`;
    petal.style.animationDuration = `${Math.random() * 3 + 4}s`;
    petal.style.opacity = `${Math.random() * 0.4 + 0.6}`;
    petalLayer?.appendChild(petal);
    setTimeout(() => petal.remove(), 7200);
  }
}

boardBtn?.addEventListener("click", () => {
  gateCard?.classList.add("door-opened");
  boardBtn.disabled = true;
  boardBtn.textContent = "Blessings Opening...";
  createPetals(30);

  setTimeout(() => {
    boardingGate?.classList.add("hidden");
    app?.classList.remove("hidden");
    setStep(0);
    tryPlayMusic();
  }, 1350);
});

musicToggle?.addEventListener("click", toggleMusic);

stopDots.forEach((dot, index) => {
  dot.addEventListener("click", () => setStep(index));
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => setStep(currentStep + 1));
});

prevButtons.forEach((button) => {
  button.addEventListener("click", () => setStep(currentStep - 1));
});

ticketFlip?.setAttribute("title", "Tap the wedding ticket to flip");
ticketFlip?.addEventListener("click", () => {
  ticketFlip.classList.toggle("flipped");
});

familyPlaques.forEach((plaque) => {
  plaque.addEventListener("click", () => {
    plaque.classList.toggle("active");
    const allActive = familyPlaques.every((item) => item.classList.contains("active"));
    if (allActive) {
      createBlessingsBurst();
    }
  });
});

routeStops.forEach((stop, index) => {
  stop.setAttribute("title", `Open station ${index + 1}`);
  stop.addEventListener("click", () => updateEvent(index));
});

memoryWindows.forEach((windowCard, index) => {
  windowCard.setAttribute("title", `Open memory ${index + 1}`);
  windowCard.addEventListener("click", () => {
    windowCard.classList.toggle("open");
  });
});

chainPull?.setAttribute("title", "Pull the chain to reveal the final arrival");
chainPull?.addEventListener("click", () => {
  chainPull.classList.add("pulled");
  arrivalCard?.classList.remove("hidden");
  createPetals(18);
  setTimeout(() => chainPull.classList.remove("pulled"), 500);
});

blessingsBtn?.addEventListener("click", () => {
  createBlessingsBurst();
  createPetals(20);
});

restartBtn?.addEventListener("click", () => {
  setStep(0);
  ticketFlip?.classList.remove("flipped");
  arrivalCard?.classList.add("hidden");
  familyPlaques.forEach((plaque) => plaque.classList.remove("active"));
  memoryWindows.forEach((windowCard) => windowCard.classList.remove("open"));
  updateEvent(0);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") setStep(currentStep + 1);
  if (event.key === "ArrowLeft") setStep(currentStep - 1);
});

setStep(0);
updateEvent(0);