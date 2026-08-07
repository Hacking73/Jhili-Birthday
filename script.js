/* ===================================
   Premium Birthday Website Script
=================================== */

// Loading Screen
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

        document.getElementById("website").style.display = "block";

    }, 2500);

});

// ----------------------
// Music
// ----------------------

const music = document.getElementById("music");

document.addEventListener("click", () => {

    music.play();

}, { once: true });

// ----------------------
// Gift
// ----------------------

function goGift() {

    hero.style.display = "none";

    giftSection.style.display = "flex";

}

function openGift() {

    giftBox.style.transform = "scale(1.1) rotate(8deg)";

    setTimeout(() => {

        giftMessage.style.display = "block";

    }, 600);

}

function showCake() {

    giftSection.style.display = "none";

    cakeSection.style.display = "flex";

}

// ----------------------
// Cake
// ----------------------

function blowCandles() {

    birthdayCake.src = "images/candle-off.png";

    blowBtn.disabled = true;

    blowBtn.innerHTML = "🎉 Wish Completed";

    setTimeout(() => {

        wishText.style.display = "block";

    }, 1200);

}

// ----------------------
// Gallery
// ----------------------

let photo = 1;

let slide = null;

function showGallery() {

    cakeSection.style.display = "none";

    gallerySection.style.display = "flex";

}

function loadPhoto() {

    galleryImage.src = "images/birthday (" + photo + ").jpg";

}

function nextPhoto() {

    photo++;

    if (photo > 14) photo = 1;

    loadPhoto();

}

function previousPhoto() {

    photo--;

    if (photo < 1) photo = 14;

    loadPhoto();

}

function autoSlide() {

    stopSlide();

    slide = setInterval(nextPhoto, 2500);

}

function stopSlide() {

    clearInterval(slide);

}

// ----------------------
// Message
// ----------------------

function showMessage() {

    stopSlide();

    gallerySection.style.display = "none";

    messageSection.style.display = "flex";

    typeWriter();

}

function typeWriter() {

    const target = document.getElementById("typingText");

    const txt = target.innerText;

    target.innerHTML = "";

    let i = 0;

    function write() {

        if (i < txt.length) {

            target.innerHTML += txt.charAt(i);

            i++;

            setTimeout(write, 35);

        }

    }

    write();

}

// ----------------------
// Final
// ----------------------

function showFinal() {

    messageSection.style.display = "none";

    finalSection.style.display = "flex";

    confetti();

    hearts();

}

// ----------------------
// Floating Hearts
// ----------------------

function hearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.bottom = "-50px";

        heart.style.fontSize = (20 + Math.random() * 20) + "px";

        heart.style.animation = "floatHeart 5s linear forwards";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 5000);

    }, 500);

}

// ----------------------
// Confetti
// ----------------------

function confetti() {

    setInterval(() => {

        const c = document.createElement("div");

        c.innerHTML = "🎊";

        c.style.position = "fixed";

        c.style.left = Math.random() * 100 + "vw";

        c.style.top = "-20px";

        c.style.fontSize = "24px";

        c.style.animation = "fall 4s linear";

        document.body.appendChild(c);

        setTimeout(() => {

            c.remove();

        }, 4000);

    }, 250);

}

console.log("Birthday Website Loaded Successfully ❤️");
/* ==========================
Sparkles
========================== */

setInterval(()=>{

const s=document.createElement("div");

s.className="spark";

s.innerHTML="✨";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.fontSize=(15+Math.random()*20)+"px";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},2000);

},250);

/* ==========================
Flowers
========================== */

setInterval(()=>{

const f=document.createElement("div");

f.innerHTML="🌸";

f.style.position="fixed";

f.style.left=Math.random()*100+"vw";

f.style.top="-30px";

f.style.fontSize=(18+Math.random()*18)+"px";

f.style.animation="fall 6s linear";

document.body.appendChild(f);

setTimeout(()=>{

f.remove();

},6000);

},600);
/* ==========================
Sparkles
========================== */

setInterval(()=>{

const s=document.createElement("div");

s.className="spark";

s.innerHTML="✨";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.fontSize=(15+Math.random()*20)+"px";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},2000);

},250);

/* ==========================
Flowers
========================== */

setInterval(()=>{

const f=document.createElement("div");

f.innerHTML="🌸";

f.style.position="fixed";

f.style.left=Math.random()*100+"vw";

f.style.top="-30px";

f.style.fontSize=(18+Math.random()*18)+"px";

f.style.animation="fall 6s linear";

document.body.appendChild(f);

setTimeout(()=>{

f.remove();

},6000);

},600);
