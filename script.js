/* ==========================================
   BIRTHDAY WEBSITE
   PART 1C - JAVASCRIPT
========================================== */

// Elements

const openBtn = document.getElementById("openBtn");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

// Music State

let isPlaying = false;

/* ==========================
   Play Music
========================== */

function playMusic() {

    bgMusic.play()
    .then(() => {

        isPlaying = true;
        musicBtn.innerHTML = "🔊";

    })
    .catch(err => {

        console.log("Music blocked:", err);

    });

}

/* ==========================
   Pause Music
========================== */

function pauseMusic() {

    bgMusic.pause();

    isPlaying = false;

    musicBtn.innerHTML = "🔇";

}

/* ==========================
   Music Button
========================== */

musicBtn.addEventListener("click", () => {

    if(isPlaying){

        pauseMusic();

    }else{

        playMusic();

    }

});

/* ==========================
   Open Surprise Button
========================== */

openBtn.addEventListener("click", () => {

    // Start Music
    if(!isPlaying){

        playMusic();

    }

    // Button Animation
    openBtn.style.transform = "scale(.95)";

    setTimeout(() => {

        openBtn.style.transform = "scale(1)";

        alert("🎉 Welcome! Page 2 Coming Soon... ❤️");

    },300);

});

/* ==========================
   Keyboard Shortcut
========================== */

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        e.preventDefault();

        if(isPlaying){

            pauseMusic();

        }else{

            playMusic();

        }

    }

});

/* ==========================
   Page Loaded
========================== */

window.addEventListener("load",()=>{

    musicBtn.innerHTML="🔇";

    console.log("Birthday Website Loaded Successfully ❤️");

});
