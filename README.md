# Chetan & Nirbighna Wedding Invitation (Train Theme)

This project is a single-page, interactive wedding invitation website with a train-journey theme, bilingual support (English/Hindi), animations, and interactive mini experiences.

## 1) Live Preview / Deployment

### Live preview
- If GitHub Pages is enabled for this repository, open:  
  **https://sarawgiche.github.io/chetanwedsnirbighna/**

### Deploy with GitHub Pages (if not already live)
1. Open repository **Settings** → **Pages**.
2. Under **Build and deployment**, choose:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch), folder `/ (root)`
3. Save and wait for deployment to finish.
4. Re-open the Pages URL shown in Settings.

---

## 2) Local Testing Setup Guide

Because this site uses JavaScript and media assets, run it through a local server (not directly via `file://`).

### Option A: Python (recommended)
```bash
cd /tmp/workspace/sarawgiche/chetanwedsnirbighna
python3 -m http.server 8080
```
Then open: **http://localhost:8080**

### Option B: Node.js
```bash
cd /tmp/workspace/sarawgiche/chetanwedsnirbighna
npx serve .
```

---

## 3) Browser Compatibility Notes

Tested/targeted for modern browsers:
- Chrome (latest)
- Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari / Chrome on recent iOS & Android

Features that may vary by browser permissions:
- Autoplayed music (`song.mp3`) may require user interaction.
- Vibration feedback (`navigator.vibrate`) works only on supported mobile devices.
- Clipboard copy may require HTTPS or localhost permission.

---

## 4) Feature Walkthrough + Screenshot Guidance

Use these steps to verify key features and collect screenshots:

1. **Language Selection Modal**
   - Choose English or Hindi.
   - Screenshot: language modal state.

2. **Train Station Entry**
   - Click **Board the Train**.
   - Screenshot: station gate before entry + after transition.

3. **Ticket Section with Parent Information**
   - Verify:
     - Groom: **Chetan** (Satish Kumar Sarawgi & Manju Devi)
     - Bride: **Nirbighna** (Purna Chandra Shaw & Shipranjali Shaw)
   - Click **PUNCH TICKET TO CONTINUE**.
   - Screenshot: ticket card and punched state.

4. **Announcement + Countdown**
   - Click **TAP TO REVEAL DETAILS**.
   - Verify countdown is updating every second.
   - Screenshot: decree and countdown board.

5. **Station Stops (Itinerary)**
   - Confirm event cards and dates are visible.
   - Screenshot: itinerary block.

6. **Windows of Love Gallery**
   - Click an image to open lightbox and close it.
   - Screenshot: gallery grid + lightbox open.

7. **Unite the Rings Mini-Game**
   - Drag the ring to the right until success state appears.
   - Screenshot: game start and success states.

8. **Final Stop + Utilities**
   - Test **Open in Maps**, **Copy Address**, and **Shower Blessings**.
   - Screenshot: venue section and blessing animation moment.

---

## 5) Mobile Responsiveness Testing Tips

1. Open DevTools responsive mode (or use a real device).
2. Test common widths: **320px**, **375px**, **390px**, **414px**, **768px**.
3. Verify:
   - No text overlaps borders/cards.
   - Buttons remain tappable and readable.
   - Ring mini-game drag works on touch.
   - Lightbox opens/closes properly.
   - Route map behavior remains usable on smaller screens.
4. Rotate device (portrait/landscape) and re-check key sections.

---

## 6) Troubleshooting Common Issues

- **Page looks broken when opened directly from file explorer**
  - Use `python3 -m http.server 8080` and open `http://localhost:8080`.

- **Music doesn’t autoplay**
  - Expected on many browsers. Click language and/or music toggle to start playback.

- **Copy Address button shows failure**
  - Clipboard access may be blocked without permission. Use HTTPS/localhost and retry.

- **Images in gallery do not load**
  - Gallery uses external image URLs; check internet access and retry.

- **Animations lag on low-end devices**
  - Close extra tabs/apps and test on updated browser versions.

- **Hindi text rendering issues**
  - Ensure internet access is available for Google Fonts loading.
