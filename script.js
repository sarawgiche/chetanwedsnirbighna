"use strict";

const steps = [
  {
    title: "Tap the ticket",
    text: "Flip the golden boarding pass to reveal the bride and groom."
  },
  {
    title: "Tap each plaque",
    text: "Light up both family plaques to complete the family compartment."
  },
  {
    title: "Tap each station",
    text: "Each station reveals one day of celebrations, timing, and venue."
  },
  {
    title: "Open the windows",
    text: "Tap each shutter to reveal a wedding moment inside the moving train."
  },
  {
    title: "Pull the chain",
    text: "Reveal the final destination platform and shower your blessings."
  }
];

const events = [
  {
    chip: "Station 01",
    title: "Lagan Sagai",
    date: "Saturday, 4 July 2026",
    time: "5:00 PM",
    place: "Venue: Bhubaneshwar Club, 1, Rajpath, Unit-6, Keshari Nagar, Bhubaneshwar - 751001, Odisha",
    schedule: [
      "Lagan Sagai — 5:00 PM"
    ],
    desc: "The journey begins with warm welcomes, blessings, and the first ceremonial stop."
  },
  {
    chip: "Station 02",
    title: "Haldi · Mehendi · DJ Night",
    date: "Sunday, 5 July 2026",
    time: "10:00 AM onwards",
    place: "Venue: Swimming Pool, Bhubaneshwar Club, 1, Rajpath, Unit-6, Keshari Nagar, Bhubaneshwar - 751001, Odisha",
    schedule: [
      "Haldi — 10:00 AM",
      "Mehendi — 1:00 PM",
      "DJ Night — 7:00 PM",
      "Dinner — 8:00 PM"
    ],
    desc: "A bright, colorful coach filled with haldi, mehendi, music, dance, and celebration."
  },
  {
    chip: "Station 03",
    title: "Chak Bhat · Ghurchari · Departure of Barat",
    date: "Monday, 6 July 2026",
    time: "Wedding Day Route",
    place: "Venue: Tennis Court, Bhubaneshwar Club, 1, Rajpath, Unit-6, Keshari Nagar, Bhubaneshwar - 751001, Odisha",
    schedule: [
      "Chak Bhat — 10:00 AM",
      "Ghurchari — 6:00 PM",
      "Departure of Barat — 7:00 PM"
    ],
    desc: "The grand wedding route reaches its most awaited stop before the final arrival."
  }
];

const boardingGate = document.getElementById("boardingGate");
const boardBtn = document.getElementById("boardBtn");
const app = document.getElementById("app");
const coaches = Array.from(document.querySelectorAll(".coach"));
const stopDots = Array.from(document.querySelectorAll(".stop-dot"));
const nextButtons = Array.from(document.querySelectorAll(".next-btn"));
const prevButtons = Array.from(document.querySelectorAll(".prev-btn"));
const instructionTitle = document.getElementById("instructionTitle");
const instructionText = document.getElementById("instructionText");
const progressChip = document.getElementById("progressChip");
const ticketFlip = document.getElementById("ticketFlip");
const familyPlaques = Array.from(document.querySelectorAll(".family-plaque"));
const routeStops = Array.from(document.querySelectorAll(".route-stop"));
const eventDisplay = document.getElementById("eventDisplay");
const memoryWindows = Array.from(document.querySelectorAll(".memory-window"));
const chainPull = document.getElementById("chainPull");
const arrivalCard = document.getElementById("arrivalCard");
const blessingsBtn = document.getElementById("blessingsBtn");
const restartBtn = document.getElementById("restartBtn");
const topBtn = document.getElementById("topBtn");

let currentStep = 0;

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
  progressChip.textContent = `Stop ${currentStep + 1} of ${steps.length}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateEvent(index) {
  const item = events[index];
  if (!item || !eventDisplay) return;

  eventDisplay.innerHTML = `
    <p class="event-chip">${item.chip}</p>
    <h3>${item.title}</h3>
    <p class="event-time">${item.date} · ${item.time}</p>
    <p class="event-place">${item.place}</p>
    <ul class="schedule-list">
      ${item.schedule.map((line) => `<li>${line}</li>`).join("")}
    </ul>
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
});

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
});

topBtn?.addEventListener("click", () => {
  setStep(0);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") setStep(currentStep + 1);
  if (event.key === "ArrowLeft") setStep(currentStep - 1);
});

setStep(0);
updateEvent(0);