/* =========================================================
   BIRTHDAY WEBSITE
   COMPLETE SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const loading =
        document.getElementById("loading");

    const website =
        document.getElementById("website");

    const hero =
        document.getElementById("hero");

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


    const mainPhoto =
        document.getElementById("mainPhoto");

    const birthdayCake =
        document.getElementById("birthdayCake");

    const candleCake =
        document.getElementById("candleCake");

    const cutCakeBtn =
        document.getElementById("cutCakeBtn");

    const cakeMessage =
        document.getElementById("cakeMessage");

    const blowBtn =
        document.getElementById("blowBtn");

    const wishText =
        document.getElementById("wishText");


    const galleryImage =
        document.getElementById("galleryImage");

    const photoCounter =
        document.getElementById("photoCounter");


    const photoViewer =
        document.getElementById("photoViewer");

    const fullPhoto =
        document.getElementById("fullPhoto");


    const typingText =
        document.getElementById("typingText");


    const music =
        document.getElementById("music");


    /* =====================================================
       ALL SECTIONS
    ===================================================== */

    const sections = [
        hero,
        photoSection,
        cakeSection,
        candleSection,
        gallerySection,
        messageSection,
        finalSection
    ];


    function hideAllSections() {

        sections.forEach(function (section) {

            if (section) {

                section.style.display =
                    "none";

            }

        });

    }


    function showSection(section) {

        hideAllSections();

        if (section) {

            section.style.display =
                "flex";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    }


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    if (website) {
        website.style.display = "none";
    }

    hideAllSections();


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

        showSection(hero);

    }, 2500);



    /* =====================================================
       MUSIC
    ===================================================== */

    let musicStarted = false;


    function startMusic() {

        if (!music || musicStarted) {
            return;
        }

        music.volume = 0.5;

        music.play()
            .then(function () {

                musicStarted = true;

            })
            .catch(function () {

                musicStarted = false;

            });

    }


    document.addEventListener(
        "click",
        function () {

            startMusic();

        },
        { once: true }
    );



    /* =====================================================
       1. OPENING → PHOTO
    ===================================================== */

    window.goPhoto = function () {

        startMusic();

        showSection(photoSection);

    };



    /* =====================================================
       2. PHOTO → CAKE
    ===================================================== */

    window.showCake = function () {

        showSection(cakeSection);


        if (birthdayCake) {

            birthdayCake.src =
                "images/candle-on.png";

        }


        if (cakeMessage) {

            cakeMessage.style.display =
                "none";

        }


        if (cutCakeBtn) {

            cutCakeBtn.style.display =
                "inline-block";

        }

    };



    /* =====================================================
       3. CUT CAKE
    ===================================================== */

    let cakeCut = false;


    window.cutCake = function () {

        if (cakeCut) {
            return;
        }

        cakeCut = true;


        if (cutCakeBtn) {

            cutCakeBtn.innerHTML =
                "Cake Cut";

            cutCakeBtn.disabled =
                true;

        }


        if (birthdayCake) {

            birthdayCake.style.transform =
                "scale(1.05)";

            setTimeout(function () {

                birthdayCake.style.transform =
                    "scale(1)";

            }, 400);

        }


        setTimeout(function () {

            if (cakeMessage) {

                cakeMessage.style.display =
                    "block";

            }

        }, 700);

    };



    /* =====================================================
       4. CAKE → CANDLE
    ===================================================== */

    window.goCandles = function () {

        showSection(candleSection);


        if (candleCake) {

            candleCake.src =
                "images/candle-on.png";

        }


        if (blowBtn) {

            blowBtn.disabled =
                false;

            blowBtn.innerHTML =
                "Blow Candles";

        }


        if (wishText) {

            wishText.style.display =
                "none";

        }

    };



    /* =====================================================
       5. BLOW CANDLES
    ===================================================== */

    let candlesBlown = false;


    window.blowCandles = function () {

        if (candlesBlown) {
            return;
        }

        candlesBlown = true;


        if (candleCake) {

            candleCake.src =
                "images/candle-off.png";

        }


        if (blowBtn) {

            blowBtn.disabled =
                true;

            blowBtn.innerHTML =
                "Wish Completed";

        }


        setTimeout(function () {

            if (wishText) {

                wishText.style.display =
                    "block";

            }

        }, 900);

    };



    /* =====================================================
       6. GALLERY
    ===================================================== */

    let photo = 1;

    const totalPhotos = 14;

    let slide = null;


    function getPhotoPath(number) {

        return (
            "images/birthday (" +
            number +
            ").png"
        );

    }


    function loadPhoto() {

        if (!galleryImage) {
            return;
        }


        galleryImage.style.opacity =
            "0";


        const newImage =
            getPhotoPath(photo);


        galleryImage.onload =
            function () {

                galleryImage.style.opacity =
                    "1";

            };


        galleryImage.src =
            newImage;


        if (photoCounter) {

            photoCounter.innerHTML =
                "Photo " +
                photo +
                " / " +
                totalPhotos;

        }

    }



    /* =====================================================
       CANDLE → GALLERY
    ===================================================== */

    window.showGallery = function () {

        stopSlide();

        showSection(gallerySection);

        photo = 1;

        loadPhoto();

    };



    /* =====================================================
       NEXT PHOTO
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
                getPhotoPath(photo);

        }

    };



    /* =====================================================
       PREVIOUS PHOTO
    ===================================================== */

    window.previousPhoto = function () {

        photo--;

        if (photo < 1) {

            photo =
                totalPhotos;

        }

        loadPhoto();


        if (
            photoViewer &&
            photoViewer.style.display === "flex"
        ) {

            fullPhoto.src =
                getPhotoPath(photo);

        }

    };



    /* =====================================================
       SLIDESHOW
    ===================================================== */

    window.autoSlide = function () {

        stopSlide();


        slide = setInterval(
            function () {

                window.nextPhoto();

            },
            2500
        );

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

        if (!photoViewer ||
            !fullPhoto) {

            return;

        }


        stopSlide();


        fullPhoto.src =
            getPhotoPath(photo);


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
       KEYBOARD
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
       7. GALLERY → MESSAGE
    ===================================================== */

    window.showMessage = function () {

        stopSlide();

        showSection(messageSection);

        typeWriter();

    };


    let typingStarted = false;


    function typeWriter() {

        if (!typingText) {
            return;
        }


        if (typingStarted) {
            return;
        }


        typingStarted = true;


        const text =
            typingText.innerText.trim();


        typingText.innerHTML =
            "";


        let index = 0;


        function writeCharacter() {

            if (index < text.length) {

                typingText.innerHTML +=
                    text.charAt(index);

                index++;


                setTimeout(
                    writeCharacter,
                    35
                );

            }

        }


        writeCharacter();

    }



    /* =====================================================
       8. MESSAGE → FINAL
    ===================================================== */

    window.showFinal = function () {

        stopSlide();

        showSection(finalSection);

        startHearts();

        startConfetti();

    };



    /* =====================================================
       FLOATING HEARTS
    ===================================================== */

    let heartsStarted = false;


    function startHearts() {

        if (heartsStarted) {
            return;
        }

        heartsStarted = true;


        setInterval(
            function () {

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
                        18 +
                        Math.random() * 20
                    ) +
                    "px";


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
            700
        );

    }



    /* =====================================================
       CONFETTI
    ===================================================== */

    let confettiStarted = false;


    function startConfetti() {

        if (confettiStarted) {
            return;
        }

        confettiStarted = true;


        setInterval(
            function () {

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
                        18 +
                        Math.random() * 15
                    ) +
                    "px";


                document.body.appendChild(
                    item
                );


                setTimeout(
                    function () {

                        item.remove();

                    },
                    4000
                );

            },
            350
        );

    }



    /* =====================================================
       PRELOAD PHOTOS
    ===================================================== */

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



    /* =====================================================
       RESTART
    ===================================================== */

    window.restartWebsite = function () {

        stopSlide();

        location.reload();

    };


    console.log(
        "Birthday Website Loaded Successfully"
    );

});
