// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Floating train animation: every 20 seconds, create a temporary train element that moves across the screen
    function spawnTrainIcon() {
        const train = document.createElement('div');
        train.textContent = '🚂';
        train.className = 'floating-train';
        document.body.appendChild(train);

        // Remove the train after it finishes its animation (15s)
        setTimeout(() => train.remove(), 15000);
    }
    setInterval(spawnTrainIcon, 20000); // every 20s

    // Countdown / Departure board (example: simple timer)
    // Assuming the wedding date is July 6, 2026 10:00 AM
    const countDownDate = new Date("July 6, 2026 10:00:00").getTime();
    const countdownElem = document.getElementById("countdown"); 
    if (countdownElem) {
        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            if (distance < 0) {
                clearInterval(x);
                countdownElem.textContent = "00 Days 00 Hours 00 Minutes 00 Seconds";
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                countdownElem.textContent = 
                    `${String(days).padStart(2,'0')} Days ${String(hours).padStart(2,'0')} Hours ` +
                    `${String(minutes).padStart(2,'0')} Minutes ${String(seconds).padStart(2,'0')} Seconds`;
            }
        }, 1000);
    }

    // Make the royal seal draggable with touch support
    const seal = document.getElementById('royal-seal');
    if (seal) {
        // Add drag listeners for desktop
        seal.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', ''); // required for Firefox
        });
        // Touch fallback for mobile
        let offsetX, offsetY;
        seal.addEventListener('touchstart', function(e) {
            const touch = e.targetTouches[0];
            const rect = seal.getBoundingClientRect();
            offsetX = touch.clientX - rect.left;
            offsetY = touch.clientY - rect.top;
            e.preventDefault();
        });
        seal.addEventListener('touchmove', function(e) {
            const touch = e.targetTouches[0];
            seal.style.left = (touch.clientX - offsetX) + 'px';
            seal.style.top = (touch.clientY - offsetY) + 'px';
            e.preventDefault();
        });
    }

    // Hide the audio track label if any (we are not showing it anywhere).
    // Instead, set an aria-label for screen readers.
    const audioElem = document.getElementById('bgMusic');
    if (audioElem) {
        audioElem.setAttribute('aria-label', 'Wedding background music');
    }
});
