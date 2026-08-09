const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicText = document.getElementById("musicText");

let musicPlaying = false;


/* =========================
   OPEN SURPRISE
========================= */

openBtn.addEventListener("click", async () => {

    /* Start music after user interaction */
    try {
        await bgMusic.play();

        musicPlaying = true;
        musicText.textContent = "ଚାଲୁଛି";
        musicBtn.classList.add("playing");

    } catch (error) {
        console.log("Music could not start:", error);
    }


    /* Fade opening */

    opening.style.transition = "opacity 1s ease, transform 1s ease";

    opening.style.opacity = "0";
    opening.style.transform = "scale(1.02)";


    setTimeout(() => {

        opening.style.display = "none";

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 1000);

});


/* =========================
   MUSIC TOGGLE
========================= */

musicBtn.addEventListener("click", async () => {

    if (musicPlaying) {

        bgMusic.pause();

        musicPlaying = false;

        musicText.textContent = "ସଙ୍ଗୀତ";

    } else {

        try {

            await bgMusic.play();

            musicPlaying = true;

            musicText.textContent = "ଚାଲୁଛି";

        } catch (error) {

            console.log("Music could not start:", error);

        }

    }

});
