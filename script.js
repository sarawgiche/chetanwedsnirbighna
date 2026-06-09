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
const boardBtn = document.getElementById("boardBtn");
const app = document.getElementById("app");
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");

const coaches = Array.from(document.querySelectorAll(".coach"));
const stopDots = Array.from(document.querySelectorAll(".stop-dot"));
const nextButtons = Array.from(document.querySelectorAll(".next-btn"));
const prevButtons = Array.from(document.querySelectorAll(".prev-btn"));

const instructionTitle = document.getElementById("instructionTitle");
const instructionText = document.getElementById("instructionText");

const ticketFlip = document.getElementById("ticketFlip");

const familyPlaques = Array.from(document.querySelectorAll(".family-plaque"));

const routeStops = Array.from(document.querySelectorAll(".route-stop"));
const eventDisplay = document.getElementById("eventDisplay");

const memoryWindows = Array.from(document.querySelectorAll(".memory-window"));

const chainPull = document.getElementById("chainPull");
const arrivalCard = document.getElementById("arrivalCard");
const blessingsBtn = document.getElementById("blessingsBtn");
const restartBtn = document.getElementById("restartBtn");

let currentStep = 0;
let musicPlaying = false;

function setStep(index) {
  currentStep = Math.max(0, Math.min(index, coaches.length - 1));

  coaches.forEach((coach, i) => {
    coach.classList.toggle("active", i === currentStep);
  });

  stopDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentStep);
  });

  instructionTitle.textContent = steps[currentStep].title;
  instructionText.textContent = steps[currentStep].text;
}

function tryPlayMusic() {
  if (!bgMusic) return;

  bgMusic.play().then(() => {
    musicPlaying = true;
    musicToggle.classList.add("is-playing");
    musicToggle.setAttribute("aria-pressed", "true");
  }).catch(() => {
    musicPlaying = false;
    musicToggle.classList.remove("is-playing");
    musicToggle.setAttribute("aria-pressed", "false");
  });
}

function toggleMusic() {
  if (!bgMusic) return;

  if (musicPlaying) {
    bgMusic.pause();
    musicPlaying = false;
    musicToggle.classList.remove("is-playing");
    musicToggle.setAttribute("aria-pressed", "false");
  } else {
    bgMusic.play().then(() => {
      musicPlaying = true;
      musicToggle.classList.add("is-playing");
      musicToggle.setAttribute("aria-pressed", "true");
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

boardBtn?.addEventListener("click", () => {
  boardingGate.classList.add("hidden");
  app.classList.remove("hidden");
  setStep(0);
  tryPlayMusic();
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

ticketFlip?.addEventListener("click", () => {
  ticketFlip.classList.toggle("flipped");
});

familyPlaques.forEach((plaque) => {
  plaque.addEventListener("click", () => {
    plaque.classList.toggle("active");
  });
});

routeStops.forEach((stop, index) => {
  stop.addEventListener("click", () => updateEvent(index));
});

memoryWindows.forEach((windowCard) => {
  windowCard.addEventListener("click", () => {
    windowCard.classList.toggle("open");
  });
});

chainPull?.addEventListener("click", () => {
  chainPull.classList.add("pulled");
  arrivalCard?.classList.remove("hidden");
  setTimeout(() => chainPull.classList.remove("pulled"), 500);
});

blessingsBtn?.addEventListener("click", createBlessingsBurst);

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