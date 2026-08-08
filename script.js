/* =========================================================
   BIRTHDAY WEBSITE - FINAL CORRECTED SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

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

    const typingText = document.getElementById("typingText");

    const music = document.getElementById("music");


    /* =====================================================
       IMPORTANT:
       FIRST HIDE ALL SECTIONS
    ===================================================== */

    function hideAllSections() {

        if (hero) hero.style.display = "none";
        if (giftSection) giftSection.style.display = "none";
        if (cakeSection) cakeSection.style.display = "none";
        if (gallerySection) gallerySection.style.display = "none";
        if (messageSection) messageSection.style.display = "none";
        if (finalSection) finalSection.style.display = "none";

    }


    /* =====================================================
       FIRST PAGE = HERO ONLY
    ===================================================== */

    hideAllSections();

    if (hero) {
        hero.style.display = "flex";
    }


    /* =====================================================
       LOADING SCREEN
    ===================================================== */

    if (website) {
        website.style.display = "none";
    }

    if (loading) {
        loading.style.display = "flex";
    }


    setTimeout(function () {

        if (loading) {
            loading.style.display = "none";
        }

        if (website) {
            website.style.display = "block";
        }

        hideAllSections();

        if (hero) {
            hero.style.display = "flex";
        }

    }, 2500);



    /* =====================================================
       MUSIC
    ===================================================== */

    let musicStarted = false;

    function startMusic() {

        if (!music || musicStarted) {
            return;
        }

        musicStarted = true;

        music.volume = 0.5;

        music.play().catch(function () {
            musicStarted = false;
        });

    }


    document.addEventListener("click", function () {
        startMusic();
    }, { once: true });



    /* =====================================================
       SHOW SECTION
    ===================================================== */

    function showOnly(section) {

        hideAllSections();

        if (section) {

            section.style.display = "flex";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    }



    /* =====================================================
       HERO → GIFT
    ===================================================== */

    window.goGift = function () {

        startMusic();

        showOnly(giftSection);

    };



    /* =====================================================
       OPEN GIFT
    ===================================================== */

    let giftOpened = false;

    window.openGift = function () {

        if (giftOpened) {
            return;
        }

        giftOpened = true;

        if (giftBox) {

            giftBox.style.transform =
                "scale(1.1) rotate(6deg)";

        }

        setTimeout(function () {

            if (giftMessage) {

                giftMessage.style.display =
                    "block";

            }

            if (giftBox) {

                giftBox.style.transform =
                    "scale(1) rotate(0deg)";

            }

        }, 700);

    };



    /* =====================================================
       GIFT → CAKE
    ===================================================== */

    window.showCake = function () {

        showOnly(cakeSection);

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

            wishText.style.display =
                "none";

        }

    };



    /* =====================================================
       BLOW CANDLE
    ===================================================== */

    let candleBlown = false;

    window.blowCandles = function () {

        if (candleBlown) {
            return;
        }

        candleBlown = true;

        if (birthdayCake) {

            birthdayCake.src =
                "images/candle-off.png";

        }

        if (blowBtn) {

            blowBtn.disabled = true;

            blowBtn.innerHTML =
                "🎉 Wish Completed";

        }

        setTimeout(function () {

            if (wishText) {

                wishText.style.display =
                    "block";

            }

        }, 1000);

    };



    /* =====================================================
       GALLERY
    ===================================================== */

    let photo = 1;

    const totalPhotos = 14;

    let slide = null;


    function photoPath(number) {

        return "images/birthday (" +
            number +
            ").jpg";

    }


    function loadPhoto() {

        if (!galleryImage) {
            return;
        }

        galleryImage.style.opacity = "0";

        galleryImage.src =
            photoPath(photo);

        galleryImage.onload = function () {

            galleryImage.style.opacity = "1";

        };


        if (photoCounter) {

            photoCounter.innerHTML =
                "Photo " +
                photo +
                " / " +
                totalPhotos;

        }

    }



    /* =====================================================
       CAKE → GALLERY
    ===================================================== */

    window.showGallery = function () {

        stopSlide();

        showOnly(gallerySection);

        photo = 1;

        loadPhoto();

    };



    /* =====================================================
       NEXT
    ===================================================== */

    window.nextPhoto = function () {

        photo++;

        if (photo > totalPhotos) {
            photo = 1;
        }

        loadPhoto();

        if (
            photoViewer &&
            photoViewer.style.display === "flex"
        ) {

            fullPhoto.src =
                photoPath(photo);

        }

    };



    /* =====================================================
       PREVIOUS
    ===================================================== */

    window.previousPhoto = function () {

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
                photoPath(photo);

        }

    };



    /* =====================================================
       SLIDESHOW
    ===================================================== */

    window.autoSlide = function () {

        stopSlide();

        slide = setInterval(function () {

            window.nextPhoto();

        }, 2500);

    };


    window.stopSlide = function () {

        if (slide !== null) {

            clearInterval(slide);

            slide = null;

        }

    };



    /* =====================================================
       FULL SCREEN PHOTO
    ===================================================== */

    window.openFullPhoto = function () {

        if (!photoViewer || !fullPhoto) {
            return;
        }

        stopSlide();

        fullPhoto.src =
            photoPath(photo);

        photoViewer.style.display =
            "flex";

        document.body.style.overflow =
            "hidden";

    };



    /* =====================================================
       CLOSE FULL SCREEN
    ===================================================== */

    window.closeFullPhoto = function () {

        if (!photoViewer) {
            return;
        }

        photoViewer.style.display =
            "none";

        document.body.style.overflow =
            "";

    };



    /* =====================================================
       KEYBOARD PHOTO CONTROL
    ===================================================== */

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

                window.closeFullPhoto();

            }


            if (event.key === "ArrowRight") {

                window.nextPhoto();

            }


            if (event.key === "ArrowLeft") {

                window.previousPhoto();

            }

        }
    );



    /* =====================================================
       MESSAGE
    ===================================================== */

    window.showMessage = function () {

        stopSlide();

        showOnly(messageSection);

        typeWriter();

    };


    let typingDone = false;


    function typeWriter() {

        if (!typingText) {
            return;
        }

        if (typingDone) {
            return;
        }

        typingDone = true;

        const text =
            typingText.innerText.trim();

        typingText.innerHTML = "";

        let i = 0;


        function write() {

            if (i < text.length) {

                typingText.innerHTML +=
                    text.charAt(i);

                i++;

                setTimeout(
                    write,
                    35
                );

            }

        }

        write();

    }



    /* =====================================================
       FINAL
    ===================================================== */

    window.showFinal = function () {

        stopSlide();

        showOnly(finalSection);

        startHearts();

        startConfetti();

    };



    /* =====================================================
       HEARTS
    ===================================================== */

    let heartsRunning = false;

    function startHearts() {

        if (heartsRunning) {
            return;
        }

        heartsRunning = true;

        setInterval(function () {

            const heart =
                document.createElement("div");

            heart.innerHTML = "❤️";

            heart.style.position = "fixed";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.bottom =
                "-50px";

            heart.style.fontSize =
                (20 + Math.random() * 25) + "px";

            heart.style.zIndex = "9999";

            heart.style.pointerEvents =
                "none";

            heart.style.animation =
                "floatHeart 5s linear forwards";

            document.body.appendChild(heart);


            setTimeout(function () {

                heart.remove();

            }, 5000);

        }, 600);

    }



    /* =====================================================
       CONFETTI
    ===================================================== */

    let confettiRunning = false;

    function startConfetti() {

        if (confettiRunning) {
            return;
        }

        confettiRunning = true;

        setInterval(function () {

            const item =
                document.createElement("div");

            item.innerHTML = "🎊";

            item.style.position = "fixed";

            item.style.left =
                Math.random() * 100 + "vw";

            item.style.top = "-30px";

            item.style.fontSize =
                (18 + Math.random() * 20) + "px";

            item.style.zIndex = "9998";

            item.style.pointerEvents =
                "none";

            item.style.animation =
                "fall 4s linear forwards";

            document.body.appendChild(item);


            setTimeout(function () {

                item.remove();

            }, 4000);

        }, 300);

    }



    /* =====================================================
       SPARKLES
    ===================================================== */

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

        sparkle.style.pointerEvents =
            "none";

        document.body.appendChild(
            sparkle
        );


        setTimeout(function () {

            sparkle.remove();

        }, 2000);

    }, 500);



    /* =====================================================
       FLOWERS
    ===================================================== */

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

    }, 1000);



    /* =====================================================
       PRELOAD PHOTOS
    ===================================================== */

    for (
        let i = 1;
        i <= totalPhotos;
        i++
    ) {

        const img =
            new Image();

        img.src =
            photoPath(i);

    }


    console.log(
        "🎂 Birthday Website Ready ❤️"
    );

});
