/* =========================================================
   BIRTHDAY WEBSITE
   SCRIPT.JS — PART 1
   Clean • Stable • Minimal
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const loading =
    document.getElementById("loading");

const website =
    document.getElementById("website");

const hero =
    document.getElementById("hero");

const giftSection =
    document.getElementById("giftSection");

const cakeSection =
    document.getElementById("cakeSection");

const candleSection =
    document.getElementById("candleSection");

const gallerySection =
    document.getElementById("gallerySection");

const messageSection =
    document.getElementById("messageSection");

const finalSection =
    document.getElementById("finalSection");

const music =
    document.getElementById("music");


/* =========================================================
   INITIAL STATE
========================================================= */

const allSections = [
    hero,
    giftSection,
    cakeSection,
    candleSection,
    gallerySection,
    messageSection,
    finalSection
];


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    function () {

        setTimeout(
            function () {

                if (loading) {
                    loading.style.display = "none";
                }

                if (website) {
                    website.style.display = "block";
                }

                showSection(hero);

            },
            1600
        );

    }
);


/* =========================================================
   SHOW SECTION
========================================================= */

function showSection(section) {

    if (!section) {
        return;
    }


    allSections.forEach(
        function (item) {

            if (!item) {
                return;
            }

            item.classList.remove("active");

            item.style.display = "none";

        }
    );


    section.style.display = "flex";


    /* Force browser to restart animation */

    void section.offsetWidth;


    section.classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   MUSIC
========================================================= */

let musicStarted = false;


function startMusic() {

    if (!music || musicStarted) {
        return;
    }


    const playPromise =
        music.play();


    if (playPromise !== undefined) {

        playPromise
            .then(
                function () {

                    musicStarted = true;

                }
            )
            .catch(
                function () {

                    /*
                       Browser may block autoplay.
                       Music will start after
                       another user interaction.
                    */

                }
            );

    }

}


/* Start music after first user interaction */

document.addEventListener(
    "click",
    function () {

        startMusic();

    },
    {
        once: true
    }
);


/* =========================================================
   INTRO → GIFT
========================================================= */

function goGift() {

    startMusic();

    showSection(giftSection);

}


/* =========================================================
   GIFT
========================================================= */

const giftBox =
    document.getElementById("giftBox");

const giftMessage =
    document.getElementById("giftMessage");

const giftHint =
    document.getElementById("giftHint");

let giftOpened = false;


/* =========================================================
   OPEN GIFT
========================================================= */

function openGift() {

    if (giftOpened) {
        return;
    }

    giftOpened = true;


    if (giftBox) {

        giftBox.classList.add(
            "gift-open"
        );

    }


    if (giftHint) {

        giftHint.style.opacity = "0";

    }


    setTimeout(
        function () {

            if (giftMessage) {

                giftMessage.style.display =
                    "block";

            }

        },
        550
    );

}


/* =========================================================
   GIFT CLICK
========================================================= */

if (giftBox) {

    giftBox.addEventListener(
        "click",
        function () {

            openGift();

        }
    );

}


/* =========================================================
   GIFT → CAKE
========================================================= */

function showCake() {

    showSection(cakeSection);

}


/* =========================================================
   CAKE ELEMENTS
========================================================= */

const birthdayCake =
    document.getElementById("birthdayCake");

const cutCakeBtn =
    document.getElementById("cutCakeBtn");

const cakeMessage =
    document.getElementById("cakeMessage");

let cakeCut = false;


/* =========================================================
   CUT CAKE
========================================================= */

function cutCake() {

    if (cakeCut) {
        return;
    }

    cakeCut = true;


    if (birthdayCake) {

        birthdayCake.classList.add(
            "cake-cut-animation"
        );

    }


    if (cutCakeBtn) {

        cutCakeBtn.disabled = true;

        cutCakeBtn.innerHTML =
            "Cake Cut";

    }


    setTimeout(
        function () {

            if (cakeMessage) {

                cakeMessage.style.display =
                    "block";

            }

        },
        700
    );

}


/* =========================================================
   CAKE → CANDLES
========================================================= */

function showCandles() {

    showSection(candleSection);

}


/* =========================================================
   CANDLE ELEMENTS
========================================================= */

const candleCake =
    document.getElementById("candleCake");

const blowBtn =
    document.getElementById("blowBtn");

const wishText =
    document.getElementById("wishText");

let candlesBlown = false;


/* =========================================================
   BLOW CANDLES
========================================================= */

function blowCandles() {

    if (candlesBlown) {
        return;
    }

    candlesBlown = true;


    if (blowBtn) {

        blowBtn.disabled = true;

        blowBtn.innerHTML =
            "Wish Complete";

    }


    /*
       Change candle-on.png
       to candle-off.png.
    */

    if (candleCake) {

        candleCake.style.opacity = "0";

        setTimeout(
            function () {

                candleCake.src =
                    "images/candle-off.png";

                candleCake.style.opacity = "1";

            },
            300
        );

    }


    setTimeout(
        function () {

            if (wishText) {

                wishText.style.display =
                    "block";

            }

        },
        850
    );

}


/* =========================================================
   BASIC ERROR CHECK
========================================================= */

console.log(
    "Birthday Website: Part 1 loaded successfully."
);
/* =========================================================
   GALLERY
========================================================= */

let photo = 1;

const totalPhotos = 14;

let slide = null;


/* =========================================================
   GALLERY ELEMENTS
========================================================= */

const galleryImage =
    document.getElementById("galleryImage");

const photoCounter =
    document.getElementById("photoCounter");

const photoViewer =
    document.getElementById("photoViewer");

const fullPhoto =
    document.getElementById("fullPhoto");


/* =========================================================
   PHOTO PATH
========================================================= */

function getPhotoPath(number) {

    return "images/birthday (" +
        number +
        ").png";

}


/* =========================================================
   LOAD PHOTO
========================================================= */

function loadPhoto() {

    if (!galleryImage) {
        return;
    }


    galleryImage.style.opacity = "0";


    const newPath =
        getPhotoPath(photo);


    const testImage =
        new Image();


    testImage.onload =
        function () {

            galleryImage.src =
                newPath;

            galleryImage.style.opacity =
                "1";

        };


    testImage.onerror =
        function () {

            galleryImage.style.opacity =
                "1";

            console.error(
                "Photo not found:",
                newPath
            );

        };


    testImage.src =
        newPath;


    if (photoCounter) {

        photoCounter.textContent =
            String(photo).padStart(2, "0") +
            " / " +
            String(totalPhotos).padStart(2, "0");

    }

}


/* =========================================================
   SHOW GALLERY
========================================================= */

function showGallery() {

    stopSlide();

    photo = 1;

    showSection(gallerySection);

    loadPhoto();

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


    if (
        photoViewer &&
        photoViewer.style.display === "flex"
    ) {

        if (fullPhoto) {

            fullPhoto.src =
                getPhotoPath(photo);

        }

    }

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


    if (
        photoViewer &&
        photoViewer.style.display === "flex"
    ) {

        if (fullPhoto) {

            fullPhoto.src =
                getPhotoPath(photo);

        }

    }

}


/* =========================================================
   SLIDESHOW
========================================================= */

function autoSlide() {

    stopSlide();


    slide = setInterval(
        function () {

            nextPhoto();

        },
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
   FULL PHOTO
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
   CLOSE FULL PHOTO
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
   CLICK PHOTO → FULL VIEW
========================================================= */

if (galleryImage) {

    galleryImage.addEventListener(
        "click",
        function () {

            openFullPhoto();

        }
    );

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !photoViewer ||
            photoViewer.style.display !== "flex"
        ) {
            return;
        }


        if (event.key === "Escape") {

            closeFullPhoto();

        }


        if (event.key === "ArrowRight") {

            nextPhoto();

        }


        if (event.key === "ArrowLeft") {

            previousPhoto();

        }

    }
);


/* =========================================================
   MESSAGE
========================================================= */

const typingText =
    document.getElementById("typingText");

let typingStarted = false;


/* =========================================================
   GALLERY → MESSAGE
========================================================= */

function showMessage() {

    stopSlide();

    showSection(messageSection);

    typeWriter();

}


/* =========================================================
   TYPEWRITER
========================================================= */

function typeWriter() {

    if (!typingText) {
        return;
    }


    if (typingStarted) {
        return;
    }


    typingStarted = true;


    const text =
        typingText.textContent.trim();


    typingText.textContent =
        "";


    let index = 0;


    function write() {

        if (index >= text.length) {
            return;
        }


        typingText.textContent +=
            text.charAt(index);


        index++;


        setTimeout(
            write,
            30
        );

    }


    write();

}


/* =========================================================
   FINAL
========================================================= */

let finalStarted = false;


/* =========================================================
   MESSAGE → FINAL
========================================================= */

function showFinal() {

    stopSlide();

    showSection(finalSection);

    if (!finalStarted) {

        finalStarted = true;

        startHearts();

        startConfetti();

    }

}


/* =========================================================
   FLOATING HEARTS
========================================================= */

let heartsStarted = false;

let heartsTimer = null;


function startHearts() {

    if (heartsStarted) {
        return;
    }


    heartsStarted = true;


    heartsTimer =
        setInterval(
            function () {

                const heart =
                    document.createElement("div");


                heart.className =
                    "float-heart";


                heart.textContent =
                    "♥";


                heart.style.position =
                    "fixed";


                heart.style.left =
                    Math.random() * 100 +
                    "vw";


                heart.style.bottom =
                    "-30px";


                heart.style.fontSize =
                    (
                        14 +
                        Math.random() * 14
                    ) +
                    "px";


                heart.style.color =
                    "rgba(235, 145, 180, 0.55)";


                heart.style.pointerEvents =
                    "none";


                heart.style.zIndex =
                    "999";


                heart.style.animation =
                    "floatHeart 5s linear forwards";


                document.body.appendChild(
                    heart
                );


                setTimeout(
                    function () {

                        heart.remove();

                    },
                    5000
                );

            },
            850
        );

}


/* =========================================================
   CONFETTI
========================================================= */

let confettiStarted = false;

let confettiTimer = null;


function startConfetti() {

    if (confettiStarted) {
        return;
    }


    confettiStarted = true;


    confettiTimer =
        setInterval(
            function () {

                const piece =
                    document.createElement("div");


                piece.className =
                    "confetti";


                piece.textContent =
                    "•";


                piece.style.position =
                    "fixed";


                piece.style.left =
                    Math.random() * 100 +
                    "vw";


                piece.style.top =
                    "-20px";


                piece.style.fontSize =
                    (
                        12 +
                        Math.random() * 10
                    ) +
                    "px";


                piece.style.color =
                    "rgba(239, 177, 202, 0.7)";


                piece.style.pointerEvents =
                    "none";


                piece.style.zIndex =
                    "999";


                piece.style.animation =
                    "fall 4s linear forwards";


                document.body.appendChild(
                    piece
                );


                setTimeout(
                    function () {

                        piece.remove();

                    },
                    4000
                );

            },
            450
        );

}


/* =========================================================
   PRELOAD ALL PHOTOS
========================================================= */

for (
    let i = 1;
    i <= totalPhotos;
    i++
) {

    const image =
        new Image();

    image.src =
        getPhotoPath(i);

}


/* =========================================================
   RESTART
========================================================= */

function restartWebsite() {

    stopSlide();


    if (heartsTimer !== null) {

        clearInterval(heartsTimer);

        heartsTimer = null;

    }


    if (confettiTimer !== null) {

        clearInterval(confettiTimer);

        confettiTimer = null;

    }


    location.reload();

}


/* =========================================================
   MAKE FUNCTIONS AVAILABLE TO HTML
========================================================= */

window.goGift =
    goGift;

window.openGift =
    openGift;

window.showCake =
    showCake;

window.cutCake =
    cutCake;

window.showCandles =
    showCandles;

window.blowCandles =
    blowCandles;

window.showGallery =
    showGallery;

window.nextPhoto =
    nextPhoto;

window.previousPhoto =
    previousPhoto;

window.autoSlide =
    autoSlide;

window.stopSlide =
    stopSlide;

window.openFullPhoto =
    openFullPhoto;

window.closeFullPhoto =
    closeFullPhoto;

window.showMessage =
    showMessage;

window.showFinal =
    showFinal;

window.restartWebsite =
    restartWebsite;


/* =========================================================
   FINAL CHECK
========================================================= */

console.log(
    "Birthday Website Loaded Successfully."
);

console.log(
    "Flow: Intro → Gift → Cake → Candles → Memories → Message → Final"
);
