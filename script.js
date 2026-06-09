"use strict";

const steps = [
  {
    title: "Start with the invitation card",
    text: "Tap the invitation card to reveal the bride and groom details."
  },
  {
    title: "Tap both family panels",
    text: "When both family panels glow, the section feels complete."
  },
  {
    title: "Choose an event",
    text: "Tap any celebration event to view its time and venue details."
  },
  {
    title: "Open the memories",
    text: "Tap any memory panel to reveal the image behind it."
  },
  {
    title: "Reveal the blessing",
    text: "Open the final message and shower blessings for the couple."
  }
];

const events = [
  {
    chip: "Event 01",
    title: "Lagan Sagai",
    time: "5:00 P.M. Onwards",
    place: "Bhubaneswar Club Banquet Hall",
    desc: "The celebration begins with blessings, welcome, and the first formal gathering."
  },
  {
    chip: "Event 02",
    title: "Haldi · Mehendi · Sangeet",
    time: "10:00 A.M. Onwards · DJ Night / Sangeet from 7:00 P.M.",
    place: "Pool Side & Celebration Area",
    desc: "A lively day of color, rituals, music, dance, and family joy."
  },
  {
    chip: "Event 03",
    title: "Nikasi & Wedding",
    time: "Wedding Day",
    place: "Tennis Lawn, Bhubaneswar Club",
    desc: "The grand arrival, sacred vows, and the beginning of forever."
  }
];

const introScreen = document.getElementById("introScreen");
const introGanesha = document.getElementById("introGanesha");
const enterBtn = document.getElementById("enterBtn");
const heroShell = document.getElementById("heroShell");
const mainContent = document.getElementById("mainContent");
const revealNodes = Array.from(document.querySelectorAll(".reveal"));
const stopDots = Array.from(document.querySelectorAll(".stop-dot"));
const sections = Array.from(document.querySelectorAll(".section-card"));
const nextButtons = Array.from(document.querySelectorAll(".next-btn"));
const prevButtons = Array.from(document.querySelectorAll(".prev-btn"));
const inviteCard = document.getElementById("inviteCard");
const familyCards = Array.from(document.querySelectorAll(".family-card"));
const eventStops = Array.from(document.querySelectorAll(".event-stop"));
const eventPanel = document.getElementById("eventPanel");
const memoryCards = Array.from(document.querySelectorAll(".memory-card"));
const blessingTrigger = document.getElementById("blessingTrigger");
const blessingCard = document.getElementById("blessingCard");
const blessingsBtn = document.getElementById("blessingsBtn");
const restartBtn = document.getElementById("restartBtn");
const petals = document.getElementById("petals");
const instructionTitle = document.getElementById("instructionTitle");
const instructionText = document.getElementById("instructionText");
const progressText = document.getElementById("progressText");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const bgMusic = document.getElementById("bgMusic");
const bell = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_4f2f6e8fe2.mp3?filename=temple-bell-110117.mp3");

bell.preload = "auto";

let currentStep = 0;
let musicPlaying = false;

function setStep(index) {
  currentStep = Math.max(0, Math.min(index, sections.length - 1));
  sections.forEach((section, i) => section.classList.toggle("active", i === currentStep));
  stopDots.forEach((dot, i) => {
    const active = i === currentStep;
    dot.classList.toggle("active", active);
    dot.setAttribute("aria-current", active ? "step" : "false");
  });
  instructionTitle.textContent = steps[currentStep].title;
  instructionText.textContent = steps[currentStep].text;
  progressText.textContent = `Section ${String(currentStep + 1).padStart(2, "0")} of ${String(sections.length).padStart(2, "0")}`;
  if (window.innerWidth < 1040) sections[currentStep]?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateEvent(index) {
  const item = events[index];
  if (!item || !eventPanel) return;
  eventPanel.innerHTML = `<p class="event-chip">${item.chip}</p><h3>${item.title}</h3><p class="event-time">${item.time}</p><p class="event-place">${item.place}</p><p class="event-desc">${item.desc}</p>`;
  eventStops.forEach((stop, i) => stop.classList.toggle("active", i === index));
}

function createPetals(count = 24) {
  const pieces = ["🌸", "✨", "💛"];
  for (let i = 0; i < count; i += 1) {
    const item = document.createElement("div");
    item.className = "petal";
    item.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    item.style.left = `${Math.random() * 100}vw`;
    item.style.fontSize = `${Math.random() * 10 + 14}px`;
    item.style.animationDuration = `${Math.random() * 3 + 4}s`;
    item.style.opacity = `${Math.random() * 0.4 + 0.6}`;
    petals?.appendChild(item);
    setTimeout(() => item.remove(), 7200);
  }
}

function createBlessingsBurst() {
  const pieces = ["✨", "💛", "🌸", "🕊️", "💫"];
  for (let i = 0; i < 30; i += 1) {
    const item = document.createElement("div");
    item.className = "confetti";
    item.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    item.style.left = `${Math.random() * 100}vw`;
    item.style.fontSize = `${Math.random() * 16 + 16}px`;
    item.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.body.appendChild(item);
    setTimeout(() => item.remove(), 5200);
  }
}

function playBell() {
  bell.currentTime = 0;
  bell.play().catch(() => {});
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
    tryPlayMusic();
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.16 });

revealNodes.forEach((node) => observer.observe(node));

enterBtn?.addEventListener("click", () => {
  introGanesha?.classList.add("show");
  playBell();
  createPetals(10);
  setTimeout(() => {
    introScreen?.classList.add("hidden");
    heroShell?.classList.remove("hidden");
    mainContent?.classList.remove("hidden");
    createPetals(14);
    tryPlayMusic();
  }, 1400);
});

stopDots.forEach((dot, index) => dot.addEventListener("click", () => setStep(index)));
nextButtons.forEach((button) => button.addEventListener("click", () => setStep(currentStep + 1)));
prevButtons.forEach((button) => button.addEventListener("click", () => setStep(currentStep - 1)));

inviteCard?.addEventListener("click", () => inviteCard.classList.toggle("flipped"));

familyCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
    if (familyCards.every((item) => item.classList.contains("active"))) {
      createBlessingsBurst();
    }
  });
});

eventStops.forEach((stop, index) => {
  stop.addEventListener("click", () => updateEvent(index));
});

memoryCards.forEach((card) => {
  card.addEventListener("click", () => card.classList.toggle("open"));
});

blessingTrigger?.addEventListener("click", () => {
  blessingCard?.classList.remove("hidden");
  createPetals(18);
});

blessingsBtn?.addEventListener("click", () => {
  createBlessingsBurst();
  createPetals(18);
});

restartBtn?.addEventListener("click", () => {
  setStep(0);
  inviteCard?.classList.remove("flipped");
  blessingCard?.classList.add("hidden");
  familyCards.forEach((card) => card.classList.remove("active"));
  memoryCards.forEach((card) => card.classList.remove("open"));
  updateEvent(0);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

musicToggle?.addEventListener("click", toggleMusic);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") setStep(currentStep + 1);
  if (event.key === "ArrowLeft") setStep(currentStep - 1);
});

setStep(0);
updateEvent(0);