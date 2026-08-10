```javascript
/* =========================================
   BIRTHDAY WEBSITE - SCRIPT.JS
   For Jhili ❤️
========================================= */


/* =========================================
   PAGE NAVIGATION
========================================= */

function nextPage(pageNumber) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage =
        document.getElementById("page" + pageNumber);

    if (selectedPage) {

        selectedPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts() {

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💓",
        "💞",
        "💘",
        "✨"
    ];

    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        heart.style.fontSize =
            (18 + Math.random() * 25) + "px";

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 8000);
    }
}


/* =========================================
   CONFETTI EFFECT
========================================= */

function createConfetti() {

    const confettiSymbols = [
        "🎉",
        "🎊",
        "✨",
        "💖",
        "❤️",
        "🌸",
        "⭐"
    ];

    for (let i = 0; i < 60; i++) {

        const confetti =
            document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.zIndex = "1000";

        confetti.style.pointerEvents = "none";

        confetti.innerHTML =
            confettiSymbols[
                Math.floor(
                    Math.random() *
                    confettiSymbols.length
                )
            ];

        document.body.appendChild(confetti);

        const duration =
            2000 + Math.random() * 3000;

        confetti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(${360 + Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],

            {
                duration: duration,
                easing: "linear"
            }

        );

        setTimeout(function() {
            confetti.remove();
        }, duration);
    }
}


/* =========================================
   FINAL SURPRISE
========================================= */

function finalSurprise() {

    createHearts();

    createConfetti();

    setTimeout(function() {

        alert(
            "🎂 Happy Birthday Jhili! ❤️\n\n" +
            "May your life always be filled " +
            "with happiness, love and beautiful memories. ✨"
        );

    }, 500);
}


/* =========================================
   BUTTON EFFECT
========================================= */

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(".btn");

        if (!button) return;

        button.style.transform =
            "scale(0.95)";

        setTimeout(function() {

            button.style.transform =
                "";

        }, 150);

    }
);


/* =========================================
   AUTO FLOATING HEARTS
   Small background effect
========================================= */

setInterval(function() {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerHTML =
        ["❤️", "💕", "✨"][
            Math.floor(Math.random() * 3)
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 15) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 9000);

}, 1800);


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const firstPage =
            document.getElementById("page1");

        if (firstPage) {
            firstPage.classList.add("active");
        }

    }
);
```
