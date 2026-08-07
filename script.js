function goGift(){

document.getElementById("hero").style.display="none";

document.getElementById("giftSection").style.display="block";

}

function openGift(){

document.getElementById("giftBox").style.transform="scale(1.1) rotate(8deg)";

setTimeout(()=>{

document.getElementById("giftMessage").style.display="block";

},500);

}

function showCake(){

document.getElementById("giftSection").style.display="none";

document.getElementById("cakeSection").style.display="block";

}

function blowCandles(){

const cake=document.getElementById("birthdayCake");

cake.src="images/candle-off.png";

document.getElementById("blowBtn").disabled=true;

setTimeout(()=>{

document.getElementById("wishText").style.display="block";

},1000);

}
/* ===========================
   PHOTO GALLERY
=========================== */

let currentPhoto = 1;
let slide = null;

function showGallery(){

    document.getElementById("cakeSection").style.display="none";
    document.getElementById("gallerySection").style.display="block";

}

function loadPhoto(){

    document.getElementById("galleryImage").src =
    "images/birthday (" + currentPhoto + ").jpg";

}

function nextPhoto(){

    currentPhoto++;

    if(currentPhoto>14){

        currentPhoto=1;

    }

    loadPhoto();

}

function previousPhoto(){

    currentPhoto--;

    if(currentPhoto<1){

        currentPhoto=14;

    }

    loadPhoto();

}

function autoSlide(){

    stopSlide();

    slide=setInterval(nextPhoto,2500);

}

function stopSlide(){

    clearInterval(slide);

}
/* ==========================
MESSAGE SECTION
========================== */

function showMessage(){

stopSlide();

document.getElementById("gallerySection").style.display="none";

document.getElementById("messageSection").style.display="block";

typeMessage();

}

function showFinal(){

document.getElementById("messageSection").style.display="none";

document.getElementById("finalSection").style.display="block";

startConfetti();

}

function typeMessage(){

const text=document.getElementById("typingText");

const msg=text.innerText;

text.innerHTML="";

let i=0;

function typing(){

if(i<msg.length){

text.innerHTML+=msg.charAt(i);

i++;

setTimeout(typing,35);

}

}

typing();

}

function startConfetti(){

setInterval(()=>{

const c=document.createElement("div");

c.innerHTML="🎊";

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=(20+Math.random()*20)+"px";

c.style.animation="fall 4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},4000);

},250);

}
