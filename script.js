/* =========================================================
   BIRTHDAY WEBSITE SCRIPT
   PART 1
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

const photoSection =
    document.getElementById("photoSection");

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


/* =========================================================
   GIFT ELEMENTS
========================================================= */

const giftBox =
    document.getElementById("giftBox");

const giftMessage =
    document.getElementById("giftMessage");

const giftHint =
    document.getElementById("giftHint");


/* =========================================================
   CAKE ELEMENTS
========================================================= */

const birthdayCake =
    document.getElementById("birthdayCake");

const cutCakeBtn =
    document.getElementById("cutCakeBtn");

const cakeMessage =
    document.getElementById("cakeMessage");


/* =========================================================
   MUSIC
========================================================= */

const music =
    document.getElementById("music");

let musicStarted = false;


/* =========================================================
   ALL SECTIONS
========================================================= */

const allSections = [
    hero,
    giftSection,
    photoSection,
    cakeSection,
    candleSection,
    gallerySection,
    messageSection,
    finalSection
];


/* =========================================================
   HIDE ALL SECTIONS
========================================================= */

function hideAllSections() {

    allSections.forEach(function(section) {

        if (section) {
            section.style.display = "none";
        }

    });

}


/* =========================================================
   SHOW SECTION
========================================================= */

function showSection(section) {

    hideAllSections();

    if (!section) {
        return;
    }

    section.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   LOADING SCREEN
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        hideAllSections();

        if (loading) {
            loading.style.display = "flex";
        }

        if (website) {
            website.style.display = "none";
        }

        setTimeout(function() {

            if (loading) {
                loading.style.display = "none";
            }

            if (website) {
                website.style.display = "block";
            }

            showSection(hero);

        }, 2200);

    }
);


/* =========================================================
   START MUSIC
========================================================= */

function startMusic() {

    if (!music || musicStarted) {
        return;
    }

    music.volume = 0.45;

    music.play()
        .then(function() {

            musicStarted = true;

        })
        .catch(function() {

            /*
                Browser may block autoplay.
                Music will start after another click.
            */

        });

}


/* =========================================================
   OPENING → GIFT
========================================================= */

function goGift() {

    startMusic();

    showSection(giftSection);

}


/* =========================================================
   OPEN GIFT
========================================================= */

let giftOpened = false;


function openGift() {

    startMusic();

    if (giftOpened) {
        return;
    }

    giftOpened = true;


    if (giftBox) {

        giftBox.classList.add(
            "gift-open"
        );

        giftBox.style.transform =
            "scale(1.08) rotate(4deg)";

    }


    if (giftHint) {

        giftHint.style.display =
            "none";

    }


    setTimeout(function() {

        if (giftMessage) {

            giftMessage.style.display =
                "block";

        }

        if (giftBox) {

            giftBox.style.transform =
                "scale(1)";

        }

    }, 700);

}


/* =========================================================
   GIFT → PHOTO
========================================================= */

function showPhoto() {

    showSection(photoSection);

}


/* =========================================================
   PHOTO → CAKE
========================================================= */

function showCake() {

    showSection(cakeSection);


    /*
        Reset cake every time
        section is opened.
    */

    if (birthdayCake) {

        birthdayCake.src =
            "images/candle-on.png";

        birthdayCake.classList.remove(
            "cake-cut-animation"
        );

    }


    if (cutCakeBtn) {

        cutCakeBtn.disabled =
            false;

        cutCakeBtn.style.display =
            "inline-block";

        cutCakeBtn.innerHTML =
            "Cut the Cake";

    }


    if (cakeMessage) {

        cakeMessage.style.display =
            "none";

    }

}


/* =========================================================
   CUT CAKE
========================================================= */

let cakeAlreadyCut = false;


function cutCake() {

    if (cakeAlreadyCut) {
        return;
    }

    cakeAlreadyCut = true;


    if (birthdayCake) {

        birthdayCake.classList.add(
            "cake-cut-animation"
        );

    }


    if (cutCakeBtn) {

        cutCakeBtn.disabled =
            true;

        cutCakeBtn.innerHTML =
            "Cake Cut";

    }


    setTimeout(function() {

        if (cakeMessage) {

            cakeMessage.style.display =
                "block";

        }

    }, 700);

}


/* =========================================================
   CAKE → CANDLES
========================================================= */

function showCandles() {

    showSection(candleSection);

}


/* =========================================================
   EXPORT FUNCTIONS FOR HTML ONCLICK
========================================================= */

window.goGift =
    goGift;

window.openGift =
    openGift;

window.showPhoto =
    showPhoto;

window.showCake =
    showCake;

window.cutCake =
    cutCake;

window.showCandles =
    showCandles;

window.startMusic =
    startMusic;
/* =========================================================
   CANDLES
========================================================= */

const candleCake =
    document.getElementById("candleCake");

const blowBtn =
    document.getElementById("blowBtn");

const wishText =
    document.getElementById("wishText");


/* =========================================================
   BLOW CANDLES
========================================================= */

let candlesBlown = false;


function blowCandles() {

    if (candlesBlown) {
        return;
    }

    candlesBlown = true;


    /*
        Candle ON → Candle OFF

        Important:
        candle-off.png re smoke thiba darkar nahi.
    */

    if (candleCake) {

        candleCake.classList.add(
            "candle-blown"
        );

        setTimeout(function() {

            candleCake.src =
                "images/candle-off.png";

        }, 300);

    }


    if (blowBtn) {

        blowBtn.disabled =
            true;

        blowBtn.innerHTML =
            "Wish Completed";

    }


    setTimeout(function() {

        if (wishText) {

            wishText.style.display =
                "block";

        }

    }, 900);

}


/* =========================================================
   GALLERY
========================================================= */

let photo = 1;

const totalPhotos = 14;

let slide = null;


/* =========================================================
   PHOTO PATH
========================================================= */

function getPhotoPath(number) {

    return (
        "images/birthday (" +
        number +
        ").png"
    );

}


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
   LOAD PHOTO
========================================================= */

function loadPhoto() {

    if (!galleryImage) {
        return;
    }


    galleryImage.style.opacity =
        "0";


    const imagePath =
        getPhotoPath(photo);


    galleryImage.onload =
        function() {

            galleryImage.style.opacity =
                "1";

        };


    galleryImage.onerror =
        function() {

            console.log(
                "Photo not found:",
                imagePath
            );

            galleryImage.style.opacity =
                "1";

        };


    galleryImage.src =
        imagePath;


    if (photoCounter) {

        photoCounter.innerHTML =
            "Photo " +
            photo +
            " / " +
            totalPhotos;

    }

}


/* =========================================================
   CANDLE → GALLERY
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


    /*
        If full-screen viewer is open,
        update that photo too.
    */

    if (
        photoViewer &&
        photoViewer.style.display === "flex"
    ) {

        fullPhoto.src =
            getPhotoPath(photo);

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

        fullPhoto.src =
            getPhotoPath(photo);

    }

}


/* =========================================================
   PLAY SLIDESHOW
========================================================= */

function autoSlide() {

    stopSlide();


    slide = setInterval(
        function() {

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
   OPEN FULL PHOTO
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
   KEYBOARD PHOTO CONTROL
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

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


    const originalText =
        typingText.innerText.trim();


    typingText.innerHTML =
        "";


    let index = 0;


    function writeCharacter() {

        if (
            index <
            originalText.length
        ) {

            typingText.innerHTML +=
                originalText.charAt(index);

            index++;


            setTimeout(
                writeCharacter,
                35
            );

        }

    }


    writeCharacter();

}


/* =========================================================
   FINAL
========================================================= */

function showFinal() {

    stopSlide();

    showSection(finalSection);

    startHearts();

    startConfetti();

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


    setInterval(
        function() {

            const heart =
                document.createElement("div");


            heart.className =
                "float-heart";


            heart.innerHTML =
                "♥";


            heart.style.left =
                Math.random() * 100 +
                "vw";


            heart.style.fontSize =
                (
                    16 +
                    Math.random() * 16
                ) +
                "px";


            document.body.appendChild(
                heart
            );


            setTimeout(
                function() {

                    heart.remove();

                },
                5000
            );

        },
        700
    );

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


    setInterval(
        function() {

            const item =
                document.createElement("div");


            item.className =
                "confetti";


            item.innerHTML =
                "•";


            item.style.left =
                Math.random() * 100 +
                "vw";


            item.style.fontSize =
                (
                    15 +
                    Math.random() * 12
                ) +
                "px";


            document.body.appendChild(
                item
            );


            setTimeout(
                function() {

                    item.remove();

                },
                4000
            );

        },
        400
    );

}


/* =========================================================
   PRELOAD ALL MEMORY PHOTOS
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

    location.reload();

}


/* =========================================================
   EXPORT FUNCTIONS
========================================================= */

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
   COMPLETE
========================================================= */

console.log(
    "Birthday Website Loaded Successfully"
);
