// =========================
// Loading
// =========================

window.onload = function () {

    setTimeout(function () {

        document.getElementById("loading").style.display = "none";
        document.getElementById("website").style.display = "block";

    }, 2000);

};

// =========================
// Music
// =========================

const music = document.getElementById("music");

document.addEventListener("click", function () {

    if (music) {
        music.play().catch(() => {});
    }

}, { once: true });


// =========================
// Hero
// =========================

function goGift() {

    document.getElementById("hero").style.display = "none";
    document.getElementById("giftSection").style.display = "flex";

}


// =========================
// Gift
// =========================

function openGift() {

    document.getElementById("giftBox").style.transform =
        "scale(1.1) rotate(8deg)";

    setTimeout(function () {

        document.getElementById("giftMessage").style.display = "block";

    }, 600);

}

function showCake() {

    document.getElementById("giftSection").style.display = "none";
    document.getElementById("cakeSection").style.display = "flex";

}


// =========================
// Cake
// =========================

function blowCandles() {

    document.getElementById("birthdayCake").src =
        "images/candle-off.png";

    document.getElementById("blowBtn").disabled = true;

    document.getElementById("blowBtn").innerHTML =
        "🎉 Wish Completed";

    setTimeout(function () {

        document.getElementById("wishText").style.display = "block";

    }, 1000);

}

function showGallery() {

    document.getElementById("cakeSection").style.display = "none";
    document.getElementById("gallerySection").style.display = "flex";

}


// =========================
// Gallery
// =========================

let photo = 1;
let slide;

function loadPhoto() {

    document.getElementById("galleryImage").src =
        "images/birthday (" + photo + ").jpg";

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


// =========================
// Message
// =========================

function showMessage() {

    stopSlide();

    document.getElementById("gallerySection").style.display = "none";
    document.getElementById("messageSection").style.display = "flex";

    typeWriter();

}

function typeWriter() {

    const target = document.getElementById("typingText");

    const text = target.innerText;

    target.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            target.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 35);

        }

    }

    typing();

}


// =========================
// Final
// =========================

function showFinal() {

    document.getElementById("messageSection").style.display = "none";
    document.getElementById("finalSection").style.display = "flex";

    confetti();
    hearts();

}


// =========================
// Hearts
// =========================

function hearts() {

    setInterval(function () {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-50px";
        heart.style.fontSize = "30px";
        heart.style.animation = "floatHeart 5s linear";

        document.body.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 5000);

    }, 500);

}


// =========================
// Confetti
// =========================

function confetti() {

    setInterval(function () {

        const c = document.createElement("div");

        c.innerHTML = "🎊";

        c.style.position = "fixed";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-30px";
        c.style.fontSize = "24px";
        c.style.animation = "fall 4s linear";

        document.body.appendChild(c);

        setTimeout(function () {

            c.remove();

        }, 4000);

    }, 250);

}


// =========================
// Sparkles
// =========================

setInterval(function () {

    const s = document.createElement("div");

    s.className = "spark";
    s.innerHTML = "✨";

    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.position = "fixed";

    document.body.appendChild(s);

    setTimeout(function () {

        s.remove();

    }, 2000);

}, 250);


// =========================
// Flowers
// =========================

setInterval(function () {

    const f = document.createElement("div");

    f.innerHTML = "🌸";

    f.style.position = "fixed";
    f.style.left = Math.random() * 100 + "vw";
    f.style.top = "-40px";
    f.style.fontSize = "22px";
    f.style.animation = "fall 6s linear";

    document.body.appendChild(f);

    setTimeout(function () {

        f.remove();

    }, 6000);

}, 600);

console.log("Birthday Website Loaded Successfully ❤️");
