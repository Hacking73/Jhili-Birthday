/* ==========================
   Birthday Website Script
========================== */

// Page Navigation
function nextPage(pageNumber){

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    const next=document.getElementById("page"+pageNumber);

    if(next){
        next.classList.add("active");
    }

}

// ----------------------
// Auto Photo Slider
// ----------------------

const gallery=document.getElementById("gallery");

const photos=[
"images/birthday (9).jpg",
"images/birthday (10).jpg",
"images/birthday (11).jpg",
"images/birthday (12).jpg",
"images/birthday (13).jpg",
"images/birthday (14).jpg"
];

let index=0;

if(gallery){

setInterval(()=>{

index++;

if(index>=photos.length){

index=0;

}

gallery.src=photos[index];

},2500);

}

// ----------------------
// Typewriter Effect
// ----------------------

const typeTarget=document.querySelector(".typewriter");

if(typeTarget){

const text=typeTarget.innerText;

typeTarget.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

typeTarget.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();

}

// ----------------------
// Floating Hearts
// ----------------------

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-30px";
heart.style.fontSize=(20+Math.random()*25)+"px";
heart.style.animation="fly 6s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},800);

// ----------------------
// Confetti
// ----------------------

setInterval(()=>{

const c=document.createElement("div");

c.innerHTML="🎊";

c.style.position="fixed";
c.style.left=Math.random()*100+"vw";
c.style.top="-20px";
c.style.fontSize=(15+Math.random()*25)+"px";
c.style.animation="confetti 5s linear forwards";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},5000);

},600);

// ----------------------
// Auto Next Demo
// (Optional)
// ----------------------

/*

let current=1;

setInterval(()=>{

if(current<20){

current++;

nextPage(current);

}

},12000);

*/

// ----------------------
// Console
// ----------------------

console.log("Happy Birthday Website Loaded Successfully 🎉");
