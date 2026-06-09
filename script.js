"use strict";

const WEDDING_DATE = new Date("2026-07-06T11:00:00");

const instructions = [
  { title: "Tap the royal card", text: "Open the invitation card to reveal the wedding date." },
  { title: "Slide the golden seal", text: "Drag the seal fully to the right to reveal the date panel." },
  { title: "Light all four diyas", text: "Tap every diya once to unlock the live countdown." },
  { title: "Tap an event", text: "Select any celebration card to view its time and venue." },
  { title: "Reveal the venue", text: "Tap the destination plaque, then use the venue card and blessings button." }
];

const events = [
  { title: "Lagan Sagai", time: "5:00 P.M. Onwards", venue: "Bhubaneswar Club Banquet Hall" },
  { title: "Haldi · Mehendi · Sangeet", time: "10:00 A.M. Onwards · DJ Night / Sangeet from 7:00 P.M.", venue: "Pool Side, Bhubaneswar Club" },
  { title: "Nikasi & Wedding", time: "Wedding Celebration", venue: "Tennis Lawn, Bhubaneswar Club" }
];

const coverScreen = document.getElementById("coverScreen");
const openInviteBtn = document.getElementById("openInviteBtn");
const app = document.getElementById("app");
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");

const progressPills = Array.from(document.querySelectorAll(".progress-pill"));
const stages = Array.from(document.querySelectorAll(".stage"));
const nextBtns = Array.from(document.querySelectorAll(".next-btn"));
const prevBtns = Array.from(document.querySelectorAll(".prev-btn"));
const instructionTitle = document.getElementById("instructionTitle");
const instructionText = document.getElementById("instructionText");

const inviteCard = document.getElementById("inviteCard");
const sealTrack = document.getElementById("sealTrack");
const sealProgress = document.getElementById("sealProgress");
const sealThumb = document.getElementById("sealThumb");
const datePanel = document.getElementById("datePanel");
const diyaBtns = Array.from(document.querySelectorAll(".diya-btn"));
const countdownWrap = document.getElementById("countdownWrap");
const eventTiles = Array.from(document.querySelectorAll(".event-tile"));
const eventDetail = document.getElementById("eventDetail");
const venuePlaque = document.getElementById("venuePlaque");
const venueCard = document.getElementById("venueCard");
const blessingsBtn = document.getElementById("blessingsBtn");
const restartBtn = document.getElementById("restartBtn");

let currentStep = 0;
let musicPlaying = false;
let dragging = false;
let startX = 0;
let currentX = 0;
let maxX = 0;

function setStep(index) {
  currentStep = Math.max(0, Math.min(index, stages.length - 1));
  stages.forEach((stage, i) => stage.classList.toggle("active", i === currentStep));
  progressPills.forEach((pill, i) => pill.classList.toggle("active", i === currentStep));
  instructionTitle.textContent = instructions[currentStep].title;
  instructionText.textContent = instructions[currentStep].text;
}

function playMusic() {
  if (!bgMusic) return;
  bgMusic.play().then(() => {
    musicPlaying = true;
    musicToggle.classList.add("playing");
    musicToggle.setAttribute("aria-pressed", "true");
  }).catch(() => {
    musicPlaying = false;
  });
}

function toggleMusic() {
  if (!bgMusic) return;
  if (musicPlaying) {
    bgMusic.pause();
    musicPlaying = false;
    musicToggle.classList.remove("playing");
    musicToggle.setAttribute("aria-pressed", "false");
  } else {
    playMusic();
  }
}

function updateCountdown() {
  const diff = WEDDING_DATE - new Date();
  const ids = ["days", "hours", "minutes", "seconds"];
  if (diff <= 0) {
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "00";
    });
    return;
  }
  const values = [
    Math.floor(diff / 86400000),
    Math.floor(diff / 3600000) % 24,
    Math.floor(diff / 60000) % 60,
    Math.floor(diff / 1000) % 60
  ];
  ids.forEach((id, idx) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(values[idx]).padStart(2, "0");
  });
}

function renderEvent(index) {
  const item = events[index];
  if (!item) return;
  eventTiles.forEach((tile, i) => tile.classList.toggle("active", i === index));
  eventDetail.innerHTML = `
    <p class="tiny-label">Event details</p>
    <h4>${item.title}</h4>
    <p><strong>Time:</strong> ${item.time}</p>
    <p><strong>Venue:</strong> ${item.venue}</p>
  `;
}

function unlockDatePanel() {
  dragging = false;
  currentX = maxX;
  sealThumb.style.transform = `translateX(${maxX}px)`;
  sealProgress.style.width = `${maxX + 56}px`;
  datePanel.classList.remove("hidden");
}

function startDrag(clientX) {
  dragging = true;
  maxX = sealTrack.offsetWidth - sealThumb.offsetWidth - 20;
  startX = clientX - currentX;
}

function moveDrag(clientX) {
  if (!dragging) return;
  currentX = clientX - startX;
  if (currentX < 0) currentX = 0;
  if (currentX > maxX) currentX = maxX;
  sealThumb.style.transform = `translateX(${currentX}px)`;
  sealProgress.style.width = `${currentX + 56}px`;
  if (currentX >= maxX * 0.95) unlockDatePanel();
}

function endDrag() {
  if (!dragging) return;
  dragging = false;
  if (currentX < maxX * 0.95) {
    currentX = 0;
    sealThumb.style.transform = "translateX(0)";
    sealProgress.style.width = "0";
  }
}

function showerBlessings() {
  const items = ["✨", "🌸", "💛", "🪔"];
  for (let i = 0; i < 28; i += 1) {
    const node = document.createElement("div");
    node.className = "blessing-drop";
    node.textContent = items[Math.floor(Math.random() * items.length)];
    node.style.left = `${Math.random() * 100}vw`;
    node.style.fontSize = `${Math.random() * 18 + 16}px`;
    node.style.opacity = `${Math.random() * 0.5 + 0.5}`;
    node.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.body.appendChild(node);
    setTimeout(() => node.remove(), 5200);
  }
}

openInviteBtn?.addEventListener("click", () => {
  coverScreen.classList.add("hidden");
  app.classList.remove("hidden");
  setStep(0);
  playMusic();
});

musicToggle?.addEventListener("click", toggleMusic);
progressPills.forEach((pill, i) => pill.addEventListener("click", () => setStep(i)));
nextBtns.forEach((btn) => btn.addEventListener("click", () => setStep(currentStep + 1)));
prevBtns.forEach((btn) => btn.addEventListener("click", () => setStep(currentStep - 1)));
inviteCard?.addEventListener("click", () => inviteCard.classList.toggle("open"));

sealThumb?.addEventListener("mousedown", (e) => startDrag(e.clientX));
sealThumb?.addEventListener("touchstart", (e) => startDrag(e.touches[0].clientX), { passive: true });
window.addEventListener("mousemove", (e) => moveDrag(e.clientX));
window.addEventListener("touchmove", (e) => moveDrag(e.touches[0].clientX), { passive: true });
window.addEventListener("mouseup", endDrag);
window.addEventListener("touchend", endDrag);

diyaBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("lit");
    if (diyaBtns.every((node) => node.classList.contains("lit"))) {
      countdownWrap.classList.remove("hidden");
    }
  });
});

eventTiles.forEach((tile, i) => tile.addEventListener("click", () => renderEvent(i)));
venuePlaque?.addEventListener("click", () => venueCard.classList.remove("hidden"));
blessingsBtn?.addEventListener("click", showerBlessings);

restartBtn?.addEventListener("click", () => {
  setStep(0);
  inviteCard.classList.remove("open");
  datePanel.classList.add("hidden");
  venueCard.classList.add("hidden");
  countdownWrap.classList.add("hidden");
  diyaBtns.forEach((btn) => btn.classList.remove("lit"));
  currentX = 0;
  sealThumb.style.transform = "translateX(0)";
  sealProgress.style.width = "0";
  renderEvent(0);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") setStep(currentStep + 1);
  if (e.key === "ArrowLeft") setStep(currentStep - 1);
});

renderEvent(0);
setStep(0);
updateCountdown();
setInterval(updateCountdown, 1000);