const invitationData = {
  hashtag: "#KeshmatKiRekha",
  groom: "Keshav",
  bride: "Rekha",
  weddingDate: "Add Wedding Date",
  venue: "Add Venue Name",
  address: "Add Venue Address",
  groomParents: "Add groom family details",
  brideParents: "Add bride family details",
  mapUrl: "https://maps.google.com",
  events: [
    {
      chip: "Event 01",
      tab: "Mehendi",
      title: "Mehendi Ceremony",
      time: "Add time here",
      place: "Add venue here",
      desc: "Add ceremony details here."
    },
    {
      chip: "Event 02",
      tab: "Sangeet",
      title: "Sangeet Night",
      time: "Add time here",
      place: "Add venue here",
      desc: "Add celebration details here."
    },
    {
      chip: "Event 03",
      tab: "Wedding",
      title: "Wedding Ceremony",
      time: "Add time here",
      place: "Add venue here",
      desc: "Add wedding details here."
    }
  ]
};

const coverScreen = document.getElementById("coverScreen");
const inviteScreen = document.getElementById("inviteScreen");
const openInvitationBtn = document.getElementById("openInvitationBtn");

const heroHashtag = document.getElementById("heroHashtag");
const groomName = document.getElementById("groomName");
const brideName = document.getElementById("brideName");
const weddingDate = document.getElementById("weddingDate");
const weddingVenue = document.getElementById("weddingVenue");
const weddingAddress = document.getElementById("weddingAddress");
const familyGroom = document.getElementById("familyGroom");
const familyBride = document.getElementById("familyBride");
const groomParents = document.getElementById("groomParents");
const brideParents = document.getElementById("brideParents");
const footerCouple = document.getElementById("footerCouple");
const mapLink = document.getElementById("mapLink");

const eventTabs = document.getElementById("eventTabs");
const eventPanel = document.getElementById("eventPanel");
const blessingBtn = document.getElementById("blessingBtn");

function fillInvitation() {
  heroHashtag.textContent = invitationData.hashtag;
  groomName.textContent = invitationData.groom;
  brideName.textContent = invitationData.bride;
  weddingDate.textContent = invitationData.weddingDate;
  weddingVenue.textContent = invitationData.venue;
  weddingAddress.textContent = invitationData.address;
  familyGroom.textContent = invitationData.groom;
  familyBride.textContent = invitationData.bride;
  groomParents.textContent = invitationData.groomParents;
  brideParents.textContent = invitationData.brideParents;
  footerCouple.textContent = `${invitationData.groom} & ${invitationData.bride}`;
  mapLink.href = invitationData.mapUrl;

  renderTabs();
  renderEvent(0);
}

function renderTabs() {
  eventTabs.innerHTML = "";

  invitationData.events.forEach((event, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "event-tab";
    btn.textContent = event.tab;
    btn.addEventListener("click", () => renderEvent(index));
    eventTabs.appendChild(btn);
  });
}

function renderEvent(index) {
  const event = invitationData.events[index];
  const tabButtons = [...document.querySelectorAll(".event-tab")];

  tabButtons.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });

  eventPanel.innerHTML = `
    <p class="event-chip">${event.chip}</p>
    <h3>${event.title}</h3>
    <p class="event-time">${event.time}</p>
    <p class="event-place">${event.place}</p>
    <p class="event-desc">${event.desc}</p>
  `;
}

function openInvitation() {
  coverScreen.classList.add("hidden");
  inviteScreen.classList.remove("hidden");
}

function showerBlessings() {
  const items = ["✨", "💛", "🌸", "🕊️", "💫"];

  for (let i = 0; i < 28; i += 1) {
    const piece = document.createElement("div");
    piece.className = "blessing-piece";
    piece.textContent = items[Math.floor(Math.random() * items.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.fontSize = `${14 + Math.random() * 20}px`;
    piece.style.animationDuration = `${3 + Math.random() * 2}s`;
    piece.style.opacity = `${0.6 + Math.random() * 0.4}`;
    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 5200);
  }
}

openInvitationBtn.addEventListener("click", openInvitation);
blessingBtn.addEventListener("click", showerBlessings);

fillInvitation();