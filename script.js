// Music Start
function startMusic() {
    const music = document.getElementById("music");

    if (music) {
        music.play().catch(() => {
            console.log("Music autoplay blocked.");
        });
    }

    createHearts();
}

// Gift Open
function openGift() {
    const gift = document.getElementById("giftMessage");

    gift.style.display = "block";
    gift.style.animation = "fadeIn 1s ease";
}

// Candle Blow
function blowCandle() {
    const candle = document.getElementById("candle");

    candle.src = "images/candle-off.png";

    createConfetti();

    setTimeout(() => {
        alert("🎉 Happy Birthday My Love ❤️\nMake a wish and enjoy your special day!");
    }, 500);
}

// Floating Hearts
function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);

    }, 500);
}

// Simple Confetti
function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";

        confetti.style.background =
            `hsl(${Math.random()*360},100%,50%)`;

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";

        confetti.style.zIndex = "9999";
        confetti.style.borderRadius = "50%";

        document.body.appendChild(confetti);

        const duration = 2000 + Math.random() * 3000;

        confetti.animate([
            {
                transform: "translateY(0)",
                opacity: 1
            },
            {
                transform: `translateY(${window.innerHeight}px)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: "linear"
        });

        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}

// Page Load Animation
window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "1.5s";
        document.body.style.opacity = "1";
    }, 200);

});
