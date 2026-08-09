/* =========================================================
   BIRTHDAY SURPRISE WEBSITE
   PART 2C — JAVASCRIPT
========================================================= */


/* =========================================================
   1. ELEMENTS
========================================================= */

const pages = document.querySelectorAll(".page");

const openBtn = document.getElementById("openBtn");

const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

const giftBox = document.getElementById("giftBox");

const giftImage = document.getElementById("giftImage");

const giftMessage =
    document.getElementById("giftMessage");

const giftContinueBtn =
    document.getElementById("giftContinueBtn");

const photoNextBtn =
    document.getElementById("photoNextBtn");

const prevPhotoBtn =
    document.getElementById("prevPhotoBtn");

const nextPhotoBtn =
    document.getElementById("nextPhotoBtn");

const memoryPhoto =
    document.getElementById("memoryPhoto");

const photoNumber =
    document.getElementById("photoNumber");

const photoCaption =
    document.getElementById("photoCaption");

const photoProgress =
    document.querySelector(
        "#photoProgress span"
    );

const letterNextBtn =
    document.getElementById("letterNextBtn");

const blowBtn =
    document.getElementById("blowBtn");

const candleArea =
    document.getElementById("candleArea");

const wishText =
    document.getElementById("wishText");

const fireworks =
    document.getElementById("fireworks");


/* =========================================================
   2. PAGE SYSTEM
========================================================= */

let currentPage = 1;


/*
   Show Page
*/

function showPage(pageNumber) {

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const targetPage =
        document.getElementById(
            "page" + pageNumber
        );


    if (!targetPage) {

        console.warn(
            "Page not found:",
            pageNumber
        );

        return;

    }


    targetPage.classList.add("active");

    currentPage = pageNumber;


    /*
       Start photo slider when entering Page 3
    */

    if (pageNumber === 3) {

        startPhotoSlider();

    }


    /*
       Stop photo slider on other pages
    */

    else {

        stopPhotoSlider();

    }

}


/* =========================================================
   3. MUSIC
========================================================= */

let musicPlaying = false;


/*
   Play music
*/

async function playMusic() {

    if (!bgMusic) {
        return;
    }


    try {

        await bgMusic.play();

        musicPlaying = true;

        if (musicBtn) {

            musicBtn.textContent = "🔊";

            musicBtn.classList.add(
                "playing"
            );

        }

    }

    catch (error) {

        console.log(
            "Music waiting for user interaction."
        );

    }

}


/*
   Pause music
*/

function pauseMusic() {

    if (!bgMusic) {
        return;
    }


    bgMusic.pause();

    musicPlaying = false;


    if (musicBtn) {

        musicBtn.textContent = "🔇";

        musicBtn.classList.remove(
            "playing"
        );

    }

}


/*
   Music Button
*/

if (musicBtn) {

    musicBtn.addEventListener(
        "click",
        function() {

            if (musicPlaying) {

                pauseMusic();

            }

            else {

                playMusic();

            }

        }
    );

}


/* =========================================================
   4. PAGE 1 → PAGE 2
========================================================= */

if (openBtn) {

    openBtn.addEventListener(
        "click",
        function() {

            /*
               Start music after user click
            */

            playMusic();


            /*
               Button animation
            */

            openBtn.style.transform =
                "scale(0.94)";


            setTimeout(
                function() {

                    openBtn.style.transform =
                        "";

                    showPage(2);

                },
                180
            );

        }
    );

}


/* =========================================================
   5. GIFT SYSTEM
========================================================= */

let giftOpened = false;


/*
   Gift Click
*/

if (giftBox) {

    giftBox.addEventListener(
        "click",
        function() {

            if (giftOpened) {

                return;

            }


            giftOpened = true;


            /*
               Add opened class
            */

            giftBox.classList.add(
                "opened"
            );


            /*
               Gift animation
            */

            if (giftImage) {

                giftImage.style.transform =
                    "scale(1.18) rotate(-4deg)";

                giftImage.style.filter =
                    "drop-shadow(0 25px 35px rgba(80,20,70,0.35)) brightness(1.08)";

            }


            /*
               Change message
            */

            if (giftMessage) {

                giftMessage.textContent =
                    "🎁 Your surprise is ready! ❤️";

            }


            /*
               Show continue button
            */

            const giftPage =
                document.getElementById(
                    "page2"
                );


            if (giftPage) {

                giftPage.classList.add(
                    "gift-opened"
                );

            }


            /*
               Small sparkle effect
            */

            createGiftSparkles();


        }
    );

}


/*
   Gift Continue Button
*/

if (giftContinueBtn) {

    giftContinueBtn.addEventListener(
        "click",
        function() {

            showPage(3);

        }
    );

}


/* =========================================================
   6. GIFT SPARKLE EFFECT
========================================================= */

function createGiftSparkles() {

    if (!giftBox) {
        return;
    }


    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const sparkle =
            document.createElement(
                "span"
            );


        sparkle.textContent =
            Math.random() > 0.5
                ? "✨"
                : "💖";


        sparkle.style.position =
            "absolute";


        sparkle.style.left =
            "50%";


        sparkle.style.top =
            "50%";


        sparkle.style.zIndex =
            "20";


        sparkle.style.pointerEvents =
            "none";


        sparkle.style.fontSize =
            "18px";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            Math.random() *
            120 +
            70;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        sparkle.animate(

            [
                {
                    transform:
                        "translate(-50%,-50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.3)`,
                    opacity: 0
                }
            ],

            {
                duration: 1100,
                easing: "ease-out"
            }

        );


        giftBox.appendChild(
            sparkle
        );


        setTimeout(
            function() {

                sparkle.remove();

            },
            1200
        );

    }

}


/* =========================================================
   7. PHOTO SYSTEM
========================================================= */


/*
   IMPORTANT:
   File names must exactly match.
*/

const photos = [

    "images/birthday (1).jpg",

    "images/birthday (2).jpg",

    "images/birthday (3).jpg",

    "images/birthday (4).jpg",

    "images/birthday (5).jpg",

    "images/birthday (6).jpg",

    "images/birthday (7).jpg",

    "images/birthday (8).jpg",

    "images/birthday (9).jpg",

    "images/birthday (10).jpg",

    "images/birthday (11).jpg",

    "images/birthday (12).jpg",

    "images/birthday (13).jpg",

    "images/birthday (14).jpg"

];


/*
   Photo captions
*/

const captions = [

    "A beautiful memory ❤️",

    "A moment worth remembering ✨",

    "A beautiful smile 💕",

    "One special memory 🌸",

    "A day to remember ❤️",

    "Happiness looks beautiful ✨",

    "Another beautiful moment 💖",

    "A memory full of smiles 🌷",

    "Simply wonderful ❤️",

    "A special moment ✨",

    "Beautiful memories forever 💕",

    "Keep smiling always 🌸",

    "Another beautiful chapter ❤️",

    "The sweetest memory 💖"

];


let currentPhoto = 0;

let photoTimer = null;


/* =========================================================
   8. CHANGE PHOTO
========================================================= */

function changePhoto(index) {

    if (!memoryPhoto) {
        return;
    }


    /*
       Keep index inside range
    */

    if (index < 0) {

        index =
            photos.length - 1;

    }


    if (
        index >= photos.length
    ) {

        index = 0;

    }


    currentPhoto = index;


    /*
       Fade out
    */

    memoryPhoto.style.opacity = "0";

    memoryPhoto.style.transform =
        "scale(0.96)";


    setTimeout(
        function() {

            memoryPhoto.src =
                photos[currentPhoto];


            /*
               Number
            */

            if (photoNumber) {

                photoNumber.textContent =
                    `${currentPhoto + 1} / ${photos.length}`;

            }


            /*
               Caption
            */

            if (photoCaption) {

                photoCaption.textContent =
                    captions[currentPhoto];

            }


            /*
               Progress
            */

            if (photoProgress) {

                const progress =
                    (
                        (currentPhoto + 1)
                        /
                        photos.length
                    ) * 100;


                photoProgress.style.width =
                    progress + "%";

            }


            /*
               Fade in
            */

            memoryPhoto.style.opacity =
                "1";

            memoryPhoto.style.transform =
                "scale(1)";

        },
        250
    );

}


/* =========================================================
   9. NEXT PHOTO
========================================================= */

if (nextPhotoBtn) {

    nextPhotoBtn.addEventListener(
        "click",
        function() {

            changePhoto(
                currentPhoto + 1
            );

            restartPhotoTimer();

        }
    );

}


/* =========================================================
   10. PREVIOUS PHOTO
========================================================= */

if (prevPhotoBtn) {

    prevPhotoBtn.addEventListener(
        "click",
        function() {

            changePhoto(
                currentPhoto - 1
            );

            restartPhotoTimer();

        }
    );

}


/* =========================================================
   11. PHOTO → CONTINUE
========================================================= */

if (photoNextBtn) {

    photoNextBtn.addEventListener(
        "click",
        function() {

            stopPhotoSlider();

            showPage(4);

        }
    );

}


/* =========================================================
   12. PHOTO AUTO SLIDER
========================================================= */

function startPhotoSlider() {

    stopPhotoSlider();


    /*
       Show current photo
    */

    changePhoto(
        currentPhoto
    );


    /*
       Change every 4 seconds
    */

    photoTimer =
        setInterval(
            function() {

                changePhoto(
                    currentPhoto + 1
                );

            },
            4000
        );

}


/*
   Stop slider
*/

function stopPhotoSlider() {

    if (photoTimer) {

        clearInterval(
            photoTimer
        );

        photoTimer = null;

    }

}


/*
   Restart slider
*/

function restartPhotoTimer() {

    startPhotoSlider();

}


/* =========================================================
   13. PAGE 4 → PAGE 5
========================================================= */

if (letterNextBtn) {

    letterNextBtn.addEventListener(
        "click",
        function() {

            showPage(5);

        }
    );

}


/* =========================================================
   14. CANDLE SYSTEM
========================================================= */

let candleBlown = false;


/*
   Blow Candle
*/

if (blowBtn) {

    blowBtn.addEventListener(
        "click",
        function() {

            if (candleBlown) {

                return;

            }


            candleBlown = true;


            /*
               Add blown class
            */

            if (candleArea) {

                candleArea.classList.add(
                    "blown"
                );

            }


            /*
               Button state
            */

            blowBtn.classList.add(
                "blown"
            );


            blowBtn.textContent =
                "✨ Wish Made!";


            /*
               Wish message
            */

            if (wishText) {

                wishText.textContent =
                    "✨ Your wish has been sent to the stars! ❤️";

                wishText.style.transform =
                    "scale(1.05)";

            }


            /*
               Small delay
               before final page
            */

            setTimeout(
                function() {

                    createFireworks();

                },
                300
            );


            /*
               Final page
            */

            setTimeout(
                function() {

                    showPage(6);

                    createFireworks();

                },
                1800
            );

        }
    );

}


/* =========================================================
   15. FIREWORKS
========================================================= */

function createFireworks() {

    if (!fireworks) {
        return;
    }


    /*
       Create several explosions
    */

    for (
        let i = 0;
        i < 7;
        i++
    ) {

        setTimeout(
            function() {

                createFirework();

            },
            i * 350
        );

    }

}


/*
   Single Firework
*/

function createFirework() {

    if (!fireworks) {
        return;
    }


    const centerX =
        Math.random() * 80 + 10;


    const centerY =
        Math.random() * 55 + 10;


    const particles = 28;


    for (
        let i = 0;
        i < particles;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "firework";


        particle.style.left =
            centerX + "%";


        particle.style.top =
            centerY + "%";


        const angle =
            (
                Math.PI * 2
                /
                particles
            ) * i;


        const distance =
            Math.random() * 130 + 80;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        particle.style.setProperty(
            "--x",
            x + "px"
        );


        particle.style.setProperty(
            "--y",
            y + "px"
        );


        fireworks.appendChild(
            particle
        );


        setTimeout(
            function() {

                particle.remove();

            },
            1600
        );

    }

}


/* =========================================================
   16. PRELOAD PHOTOS
========================================================= */

function preloadPhotos() {

    photos.forEach(
        function(src) {

            const image =
                new Image();

            image.src = src;

        }
    );

}


/* =========================================================
   17. KEYBOARD CONTROL
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        /*
           Space = Music
        */

        if (
            event.code === "Space"
        ) {

            /*
               Don't interfere
               with buttons
            */

            if (
                event.target.tagName !==
                "BUTTON"
            ) {

                event.preventDefault();

                if (musicPlaying) {

                    pauseMusic();

                }

                else {

                    playMusic();

                }

            }

        }


        /*
           Right Arrow
        */

        if (
            event.code === "ArrowRight"
        ) {

            if (
                currentPage < 6
            ) {

                showPage(
                    currentPage + 1
                );

            }

        }


        /*
           Left Arrow
        */

        if (
            event.code === "ArrowLeft"
        ) {

            if (
                currentPage > 1
            ) {

                showPage(
                    currentPage - 1
                );

            }

        }

    }
);


/* =========================================================
   18. INITIALIZE
========================================================= */

window.addEventListener(
    "load",
    function() {

        /*
           Start Page 1
        */

        showPage(1);


        /*
           Initial photo
        */

        changePhoto(0);


        /*
           Preload
        */

        preloadPhotos();


        /*
           Music button
        */

        if (musicBtn) {

            musicBtn.textContent =
                "🔇";

        }


        console.log(
            "🎂 Birthday Surprise Loaded ❤️"
        );

    }
);
