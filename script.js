/* =========================================================
   PREMIUM BIRTHDAY WEBSITE
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const loading = document.getElementById("loading");
const website = document.getElementById("website");

const hero = document.getElementById("hero");
const giftSection = document.getElementById("giftSection");
const cakeSection = document.getElementById("cakeSection");
const gallerySection = document.getElementById("gallerySection");
const messageSection = document.getElementById("messageSection");
const finalSection = document.getElementById("finalSection");

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

const birthdayCake = document.getElementById("birthdayCake");
const blowBtn = document.getElementById("blowBtn");
const wishText = document.getElementById("wishText");

const galleryImage = document.getElementById("galleryImage");
const photoCounter = document.getElementById("photoCounter");

const photoViewer = document.getElementById("photoViewer");
const fullPhoto = document.getElementById("fullPhoto");

const messageTyping = document.getElementById("typingText");

const music = document.getElementById("music");


/* =========================================================
   LOADING
   ========================================================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        if (loading) {
            loading.style.display = "none";
        }

        if (website) {
            website.style.display = "block";
        }

    }, 2500);

});


/* =========================================================
   MUSIC
   ========================================================= */

let musicStarted = false;

function startMusic() {

    if (!music || musicStarted) {
        return;
    }

    musicStarted = true;

    music.volume = 0.55;

    music.play().catch(function () {
        musicStarted = false;
    });

}


/* Browser autoplay restriction bypass */

document.addEventListener(
    "click",
    function () {
        startMusic();
    },
    { once: true }
);


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function hideAllSections() {

    const sections = [
        hero,
        giftSection,
        cakeSection,
        gallerySection,
        messageSection,
        finalSection
    ];

    sections.forEach(function (section) {

        if (section) {
            section.style.display = "none";
        }

    });

}


function showSection(section) {

    hideAllSections();

    if (section) {

        section.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =========================================================
   HERO → GIFT
   ========================================================= */

function goGift() {

    startMusic();

    showSection(giftSection);

}


/* =========================================================
   GIFT
   ========================================================= */

let giftOpened = false;

function openGift() {

    if (giftOpened) {
        return;
    }

    giftOpened = true;

    if (giftBox) {

        giftBox.style.transform =
            "scale(1.12) rotate(6deg)";

    }

    setTimeout(function () {

        if (giftMessage) {
            giftMessage.style.display = "block";
        }

        if (giftBox) {

            giftBox.style.transform =
                "scale(1) rotate(0deg)";

        }

    }, 700);

}


/* =========================================================
   GIFT → CAKE
   ========================================================= */

function showCake() {

    showSection(cakeSection);

    if (birthdayCake) {

        birthdayCake.src =
            "images/candle-on.png";

    }

    if (blowBtn) {

        blowBtn.disabled = false;

        blowBtn.innerHTML =
            "🕯️ Blow Candles";

    }

    if (wishText) {
        wishText.style.display = "none";
    }

}


/* =========================================================
   BLOW CANDLES
   ========================================================= */

let candlesBlown = false;

function blowCandles() {

    if (candlesBlown) {
        return;
    }

    candlesBlown = true;

    if (birthdayCake) {

        birthdayCake.src =
            "images/candle-off.png";

    }

    if (blowBtn) {

        blowBtn.disabled = true;

        blowBtn.innerHTML =
            "🎉 Wish Completed";

    }


    /* Small delay before wish message */

    setTimeout(function () {

        if (wishText) {

            wishText.style.display =
                "block";

            wishText.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    }, 1000);

}


/* =========================================================
   CAKE → GALLERY
   ========================================================= */

function showGallery() {

    showSection(gallerySection);

    photo = 1;

    loadPhoto();

}


/* =========================================================
   GALLERY
   ========================================================= */

let photo = 1;

const totalPhotos = 14;

let slide = null;


function getPhotoPath(number) {

    return "images/birthday (" +
        number +
        ").jpg";

}


/* =========================================================
   LOAD PHOTO
   ========================================================= */

function loadPhoto() {

    if (!galleryImage) {
        return;
    }

    galleryImage.style.opacity = "0";


    setTimeout(function () {

        galleryImage.src =
            getPhotoPath(photo);

        galleryImage.onload =
            function () {

                galleryImage.style.opacity =
                    "1";

            };

    }, 150);


    if (photoCounter) {

        photoCounter.innerHTML =
            "Photo " +
            photo +
            " / " +
            totalPhotos;

    }

}


/* =========================================================
   NEXT PHOTO
   ========================================================= */

function nextPhoto() {

    photo++;

    if (photo > totalPhotos) {
        photo = 1;
    }

    loadPhoto();

}


/* =========================================================
   PREVIOUS PHOTO
   ========================================================= */

function previousPhoto() {

    photo--;

    if (photo < 1) {
        photo = totalPhotos;
    }

    loadPhoto();

}


/* =========================================================
   AUTO SLIDESHOW
   ========================================================= */

function autoSlide() {

    stopSlide();

    slide = setInterval(
        nextPhoto,
        2500
    );

}


/* =========================================================
   STOP SLIDESHOW
   ========================================================= */

function stopSlide() {

    if (slide !== null) {

        clearInterval(slide);

        slide = null;

    }

}


/* =========================================================
   FULL SCREEN PHOTO
   ========================================================= */

function openFullPhoto() {

    if (!photoViewer || !fullPhoto) {
        return;
    }

    stopSlide();

    fullPhoto.src =
        getPhotoPath(photo);

    photoViewer.style.display =
        "flex";

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE FULL SCREEN PHOTO
   ========================================================= */

function closeFullPhoto() {

    if (!photoViewer) {
        return;
    }

    photoViewer.style.display =
        "none";

    document.body.style.overflow =
        "";

}


/* =========================================================
   FULL SCREEN KEYBOARD CONTROL
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            photoViewer &&
            photoViewer.style.display === "flex"
        ) {

            if (event.key === "Escape") {

                closeFullPhoto();

            }

            if (event.key === "ArrowRight") {

                nextPhoto();

                if (fullPhoto) {
                    fullPhoto.src =
                        getPhotoPath(photo);
                }

            }

            if (event.key === "ArrowLeft") {

                previousPhoto();

                if (fullPhoto) {
                    fullPhoto.src =
                        getPhotoPath(photo);
                }

            }

        }

    }
);


/* =========================================================
   UPDATE FULL PHOTO AFTER NEXT/PREVIOUS
   ========================================================= */

const originalNextPhoto = nextPhoto;
const originalPreviousPhoto = previousPhoto;


/* =========================================================
   MESSAGE SECTION
   ========================================================= */

function showMessage() {

    stopSlide();

    showSection(messageSection);

    typeWriter();

}


/* =========================================================
   TYPEWRITER
   ========================================================= */

let typingStarted = false;


function typeWriter() {

    if (!messageTyping) {
        return;
    }

    if (typingStarted) {
        return;
    }

    typingStarted = true;

    const text =
        messageTyping.innerText.trim();

    messageTyping.innerHTML = "";

    let index = 0;


    function writeText() {

        if (index < text.length) {

            messageTyping.innerHTML +=
                text.charAt(index);

            index++;

            setTimeout(
                writeText,
                35
            );

        }

    }

    writeText();

}


/* =========================================================
   MESSAGE → FINAL
   ========================================================= */

function showFinal() {

    stopSlide();

    showSection(finalSection);

    startConfetti();

    startHearts();

}


/* =========================================================
   FLOATING HEARTS
   ========================================================= */

let heartsStarted = false;

function startHearts() {

    if (heartsStarted) {
        return;
    }

    heartsStarted = true;

    setInterval(function () {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            "-50px";

        heart.style.fontSize =
            (20 + Math.random() * 25) + "px";

        heart.style.zIndex =
            "9999";

        heart.style.pointerEvents =
            "none";

        heart.style.animation =
            "floatHeart 5s linear forwards";

        document.body.appendChild(
            heart
        );


        setTimeout(function () {

            heart.remove();

        }, 5000);

    }, 600);

}


/* =========================================================
   CONFETTI
   ========================================================= */

let confettiStarted = false;

function startConfetti() {

    if (confettiStarted) {
        return;
    }

    confettiStarted = true;

    setInterval(function () {

        const confetti =
            document.createElement("div");

        confetti.innerHTML = "🎊";

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-30px";

        confetti.style.fontSize =
            (18 + Math.random() * 20) + "px";

        confetti.style.zIndex =
            "9998";

        confetti.style.pointerEvents =
            "none";

        confetti.style.animation =
            "fall 4s linear forwards";

        document.body.appendChild(
            confetti
        );


        setTimeout(function () {

            confetti.remove();

        }, 4000);

    }, 300);

}


/* =========================================================
   SPARKLES
   ========================================================= */

setInterval(function () {

    const sparkle =
        document.createElement("div");

    sparkle.className =
        "spark";

    sparkle.innerHTML =
        "✨";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.fontSize =
        (15 + Math.random() * 20) + "px";

    document.body.appendChild(
        sparkle
    );


    setTimeout(function () {

        sparkle.remove();

    }, 2000);

}, 400);


/* =========================================================
   FALLING FLOWERS
   ========================================================= */

setInterval(function () {

    const flower =
        document.createElement("div");

    flower.innerHTML =
        "🌸";

    flower.style.position =
        "fixed";

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.top =
        "-30px";

    flower.style.fontSize =
        (18 + Math.random() * 18) + "px";

    flower.style.zIndex =
        "9997";

    flower.style.pointerEvents =
        "none";

    flower.style.animation =
        "fall 6s linear forwards";

    document.body.appendChild(
        flower
    );


    setTimeout(function () {

        flower.remove();

    }, 6000);

}, 900);


/* =========================================================
   PRELOAD ALL BIRTHDAY PHOTOS
   ========================================================= */

function preloadPhotos() {

    for (
        let i = 1;
        i <= totalPhotos;
        i++
    ) {

        const img =
            new Image();

        img.src =
            getPhotoPath(i);

    }

}


/* =========================================================
   START
   ========================================================= */

preloadPhotos();

console.log(
    "🎂 Birthday Website Loaded Successfully ❤️"
);
