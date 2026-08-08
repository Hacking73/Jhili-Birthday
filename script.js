/* =========================================================
   BIRTHDAY SURPRISE WEBSITE
   PART 1C — COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   1. ELEMENTS
========================================================= */

const pages = document.querySelectorAll(".page");

const openBtn = document.getElementById("openBtn");

const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

const giftBox = document.getElementById("giftBox");

const photoNextBtn =
    document.getElementById("photoNextBtn");

const letterNextBtn =
    document.getElementById("letterNextBtn");

const blowBtn =
    document.getElementById("blowBtn");

const memoryPhoto =
    document.getElementById("memoryPhoto");

const photoNumber =
    document.getElementById("photoNumber");

const photoCaption =
    document.getElementById("photoCaption");

const wishText =
    document.getElementById("wishText");

const fireworks =
    document.getElementById("fireworks");


/* =========================================================
   2. PAGE SYSTEM
========================================================= */

let currentPage = 1;


/*
    Show selected page
*/

function showPage(pageNumber) {

    pages.forEach((page) => {

        page.classList.remove("active");

    });


    const targetPage =
        document.getElementById(
            `page${pageNumber}`
        );


    if (!targetPage) {

        console.warn(
            `Page ${pageNumber} not found`
        );

        return;

    }


    targetPage.classList.add("active");

    currentPage = pageNumber;

}


/* =========================================================
   3. MUSIC SYSTEM
========================================================= */

let musicPlaying = false;


/*
    Play Birthday Music
*/

async function playMusic() {

    try {

        await bgMusic.play();

        musicPlaying = true;

        musicBtn.textContent = "🔊";

        musicBtn.classList.add("playing");

    }

    catch (error) {

        console.log(
            "Music could not start automatically.",
            error
        );

        musicPlaying = false;

        musicBtn.textContent = "🔇";

        musicBtn.classList.remove("playing");

    }

}


/*
    Pause Music
*/

function pauseMusic() {

    bgMusic.pause();

    musicPlaying = false;

    musicBtn.textContent = "🔇";

    musicBtn.classList.remove("playing");

}


/*
    Music Button
*/

musicBtn.addEventListener(
    "click",
    function () {

        if (musicPlaying) {

            pauseMusic();

        }

        else {

            playMusic();

        }

    }
);


/* =========================================================
   4. PAGE 1 → PAGE 2
========================================================= */

openBtn.addEventListener(
    "click",
    function () {

        /*
            Browser allows music after
            user interaction.
        */

        playMusic();


        /*
            Small button effect
        */

        openBtn.style.transform =
            "scale(0.94)";


        setTimeout(
            function () {

                openBtn.style.transform =
                    "";

                showPage(2);

            },
            180
        );

    }
);


/* =========================================================
   5. GIFT BOX
========================================================= */

if (giftBox) {

    giftBox.addEventListener(
        "click",
        function () {

            /*
                Prevent multiple clicks
            */

            if (
                giftBox.classList.contains(
                    "opened"
                )
            ) {

                return;

            }


            /*
                Open gift
            */

            giftBox.classList.add(
                "opened"
            );


            /*
                Move lid
            */

            const lid =
                giftBox.querySelector(
                    ".gift-lid"
                );


            if (lid) {

                lid.style.transform =
                    "translateY(-80px) rotate(-8deg)";

            }


            /*
                Wait for animation
                then show photo page
            */

            setTimeout(
                function () {

                    showPage(3);

                    startPhotoSlider();

                },
                1100
            );

        }
    );

}


/* =========================================================
   6. PHOTO SYSTEM
========================================================= */


/*
    14 Birthday Photos
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

    "Beautiful smile ❤️",

    "One special memory 🌸",

    "A day to remember 💕",

    "Happiness looks beautiful on you ✨",

    "Another beautiful moment ❤️",

    "A memory full of smiles 🌷",

    "Simply wonderful 💖",

    "A special moment ✨",

    "Beautiful memories forever ❤️",

    "Keep smiling always 🌸",

    "Another chapter of memories 💕",

    "The sweetest memory ❤️"

];


let currentPhoto = 0;

let photoTimer = null;


/*
    Change Photo
*/

function changePhoto(index) {

    if (!memoryPhoto) {

        return;

    }


    /*
        Fade out
    */

    memoryPhoto.style.opacity = "0";

    memoryPhoto.style.transform =
        "scale(0.96)";


    setTimeout(
        function () {

            memoryPhoto.src =
                photos[index];


            if (photoNumber) {

                photoNumber.textContent =
                    `${index + 1} / ${photos.length}`;

            }


            if (photoCaption) {

                photoCaption.textContent =
                    captions[index];

            }


            /*
                Fade in
            */

            memoryPhoto.style.opacity = "1";

            memoryPhoto.style.transform =
                "scale(1)";

        },
        350
    );

}


/*
    Start Automatic Slider
*/

function startPhotoSlider() {

    /*
        Clear previous timer
    */

    if (photoTimer) {

        clearInterval(photoTimer);

    }


    /*
        Start from first photo
    */

    currentPhoto = 0;

    changePhoto(currentPhoto);


    /*
        Change every 4 seconds
    */

    photoTimer = setInterval(
        function () {

            currentPhoto++;

            /*
                Loop back to first photo
            */

            if (
                currentPhoto >= photos.length
            ) {

                currentPhoto = 0;

            }


            changePhoto(currentPhoto);

        },
        4000
    );

}


/* =========================================================
   7. PHOTO → LETTER
========================================================= */

if (photoNextBtn) {

    photoNextBtn.addEventListener(
        "click",
        function () {

            /*
                Stop photo slider
            */

            if (photoTimer) {

                clearInterval(photoTimer);

                photoTimer = null;

            }


            showPage(4);

        }
    );

}


/* =========================================================
   8. LETTER → CAKE
========================================================= */

if (letterNextBtn) {

    letterNextBtn.addEventListener(
        "click",
        function () {

            showPage(5);

        }
    );

}


/* =========================================================
   9. CAKE / CANDLE
========================================================= */

let candleBlown = false;


if (blowBtn) {

    blowBtn.addEventListener(
        "click",
        function () {

            /*
                Prevent second click
            */

            if (candleBlown) {

                return;

            }


            candleBlown = true;


            /*
                Hide flame
            */

            const flame =
                document.querySelector(
                    ".flame"
                );


            if (flame) {

                flame.style.opacity = "0";

                flame.style.transform =
                    "translateX(-50%) scale(0)";

            }


            /*
                Change message
            */

            if (wishText) {

                wishText.textContent =
                    "✨ Your wish has been sent to the stars! ✨";

            }


            /*
                Button
            */

            blowBtn.textContent =
                "✨ Wish Made!";


            /*
                Fireworks
            */

            createFireworks();


            /*
                Go to final page
            */

            setTimeout(
                function () {

                    showPage(6);

                    createFireworks();

                },
                1800
            );

        }
    );

}


/* =========================================================
   10. FIREWORKS
========================================================= */

function createFireworks() {

    if (!fireworks) {

        return;

    }


    /*
        Create multiple fireworks
    */

    for (
        let i = 0;
        i < 8;
        i++
    ) {

        setTimeout(
            function () {

                createSingleFirework();

            },
            i * 300
        );

    }

}


/*
    Single Firework
*/

function createSingleFirework() {

    const centerX =
        Math.random() * 80 + 10;

    const centerY =
        Math.random() * 60 + 10;


    /*
        Create particles
    */

    for (
        let i = 0;
        i < 24;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "firework";


        particle.style.left =
            `${centerX}%`;


        particle.style.top =
            `${centerY}%`;


        /*
            Random direction
        */

        const angle =
            Math.random() * Math.PI * 2;


        const distance =
            Math.random() * 180 + 80;


        const x =
            Math.cos(angle) * distance;


        const y =
            Math.sin(angle) * distance;


        particle.style.setProperty(
            "--x",
            `${x}px`
        );


        particle.style.setProperty(
            "--y",
            `${y}px`
        );


        fireworks.appendChild(
            particle
        );


        /*
            Remove after animation
        */

        setTimeout(
            function () {

                particle.remove();

            },
            1600
        );

    }

}


/* =========================================================
   11. KEYBOARD CONTROL
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
            Space = Music
        */

        if (
            event.code === "Space"
        ) {

            event.preventDefault();

            if (musicPlaying) {

                pauseMusic();

            }

            else {

                playMusic();

            }

        }


        /*
            Arrow Right = Next Page
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
            Arrow Left = Previous Page
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
   12. PRELOAD PHOTOS
========================================================= */

function preloadPhotos() {

    photos.forEach(
        function (photo) {

            const image =
                new Image();

            image.src = photo;

        }
    );

}


/* =========================================================
   13. PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    function () {

        /*
            Start on Page 1
        */

        showPage(1);


        /*
            Preload all photos
        */

        preloadPhotos();


        /*
            Initial music state
        */

        musicBtn.textContent =
            "🔇";


        /*
            Console message
        */

        console.log(
            "🎂 Birthday Surprise Website Loaded Successfully ❤️"
        );

    }
);
