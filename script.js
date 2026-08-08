@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;500;600;700&display=swap');


/* ==================================================
   RESET
================================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    min-height:100vh;
    font-family:'Poppins',sans-serif;
    color:#fff;
    background:
        radial-gradient(circle at top left,rgba(255,255,255,.25),transparent 30%),
        radial-gradient(circle at bottom right,rgba(255,255,255,.18),transparent 30%),
        linear-gradient(135deg,#ff4f91,#ff72b0,#ff9dcc);
    overflow-x:hidden;
}


/* ==================================================
   LOADING
================================================== */

#loading{
    position:fixed;
    inset:0;
    z-index:99999;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    background:
        radial-gradient(circle,#ff91c3,#ff4f91);

    text-align:center;
}

#loading h2{
    margin-top:25px;
    font-size:20px;
}

.loader{
    width:75px;
    height:75px;

    border:7px solid rgba(255,255,255,.35);
    border-top:7px solid #fff;

    border-radius:50%;

    animation:spin 1s linear infinite;
}

@keyframes spin{

    to{
        transform:rotate(360deg);
    }

}


/* ==================================================
   MAIN WEBSITE
================================================== */

#website{
    display:none;
    min-height:100vh;
}


/* ==================================================
   SECTIONS
================================================== */

section{
    min-height:100vh;

    display:none;

    justify-content:center;
    align-items:center;

    flex-direction:column;

    text-align:center;

    padding:50px 20px;

    position:relative;
}

#hero{
    display:flex;
}


/* ==================================================
   HERO
================================================== */

#hero h3{
    font-size:30px;
    font-weight:500;

    animation:fadeDown 1.2s ease;
}

#hero h1{
    font-family:'Great Vibes',cursive;

    font-size:90px;

    margin:15px 0;

    text-shadow:
        0 5px 20px rgba(0,0,0,.2);

    animation:heartBeat 2s infinite;
}

#hero p{
    max-width:750px;

    font-size:18px;
    line-height:2;

    margin:10px auto;
}


/* ==================================================
   TITLES
================================================== */

.title{
    font-family:'Great Vibes',cursive;

    font-size:55px;

    margin-bottom:20px;

    text-shadow:
        0 5px 20px rgba(0,0,0,.2);
}

.subtitle{
    font-size:18px;
    line-height:1.8;
}


/* ==================================================
   BUTTON
================================================== */

button{
    border:none;
    outline:none;

    padding:14px 30px;

    margin-top:25px;

    border-radius:50px;

    background:#fff;

    color:#ff2d75;

    font-family:'Poppins',sans-serif;

    font-size:17px;
    font-weight:600;

    cursor:pointer;

    box-shadow:
        0 8px 25px rgba(0,0,0,.18);

    transition:
        transform .3s ease,
        box-shadow .3s ease;
}

button:hover{
    transform:translateY(-4px) scale(1.04);

    box-shadow:
        0 12px 30px rgba(0,0,0,.25);
}

button:active{
    transform:scale(.96);
}

button:disabled{
    opacity:.7;
    cursor:not-allowed;
}


/* ==================================================
   GIFT
================================================== */

#giftSection p{
    max-width:650px;

    font-size:18px;
    line-height:2;
}

#giftBox{
    width:250px;
    max-width:75vw;

    margin:30px 0;

    cursor:pointer;

    filter:
        drop-shadow(0 15px 20px rgba(0,0,0,.25));

    transition:
        transform .5s ease;
}

#giftBox:hover{
    transform:
        scale(1.08)
        rotate(-3deg);
}

#giftMessage{
    display:none;

    animation:
        fadeUp .8s ease;
}


/* ==================================================
   CAKE
================================================== */

#cakeSection p{
    font-size:18px;
    line-height:1.8;
}

#birthdayCake{
    width:380px;

    max-width:85vw;

    max-height:55vh;

    object-fit:contain;

    margin:25px 0;

    filter:
        drop-shadow(0 15px 25px rgba(0,0,0,.25));

    transition:
        transform .5s ease;
}

#birthdayCake:hover{
    transform:scale(1.04);
}

#wishText{
    display:none;

    max-width:700px;

    animation:
        fadeUp 1s ease;
}

#wishText h2{
    font-size:30px;
    margin-bottom:15px;
}


/* ==================================================
   GALLERY
================================================== */

#gallerySection{
    padding-left:10px;
    padding-right:10px;
}

#gallerySection .subtitle{
    margin-bottom:20px;
}


/* Full Photo Area */

.full-photo-box{
    width:100%;

    display:flex;

    align-items:center;
    justify-content:center;

    gap:20px;

    position:relative;

    margin:20px 0;
}


/* Main Gallery Photo */

#galleryImage{
    display:block;

    width:auto;

    max-width:calc(100vw - 180px);

    max-height:70vh;

    object-fit:contain;

    border-radius:18px;

    border:4px solid rgba(255,255,255,.9);

    background:rgba(255,255,255,.08);

    box-shadow:
        0 15px 45px rgba(0,0,0,.35);

    cursor:zoom-in;

    transition:
        transform .4s ease,
        opacity .3s ease;
}

#galleryImage:hover{
    transform:scale(1.015);
}


/* Gallery Arrows */

.photo-arrow{
    flex-shrink:0;

    width:58px;
    height:58px;

    padding:0;
    margin:0;

    border-radius:50%;

    display:flex;

    align-items:center;
    justify-content:center;

    font-size:22px;

    z-index:5;
}


/* Counter */

#photoCounter{
    margin-top:5px;

    font-size:16px;

    font-weight:500;

    background:rgba(255,255,255,.15);

    padding:6px 18px;

    border-radius:30px;
}


/* Gallery Buttons */

.gallery-buttons{
    display:flex;

    justify-content:center;

    align-items:center;

    gap:12px;

    flex-wrap:wrap;
}

.gallery-buttons button{
    margin-top:15px;
}


/* ==================================================
   FULLSCREEN PHOTO VIEWER
================================================== */

#photoViewer{
    position:fixed;

    inset:0;

    z-index:100000;

    display:none;

    justify-content:center;
    align-items:center;

    background:
        rgba(0,0,0,.94);

    padding:30px;
}


/* Fullscreen Image */

#fullPhoto{
    display:block;

    max-width:94vw;
    max-height:92vh;

    width:auto;
    height:auto;

    object-fit:contain;

    border-radius:10px;

    box-shadow:
        0 10px 50px rgba(0,0,0,.7);
}


/* Close */

.close-photo{
    position:absolute;

    top:20px;
    right:25px;

    width:55px;
    height:55px;

    padding:0;
    margin:0;

    display:flex;
    justify-content:center;
    align-items:center;

    border-radius:50%;

    background:rgba(255,255,255,.15);

    color:#fff;

    font-size:28px;

    z-index:10;
}

.close-photo:hover{
    background:rgba(255,255,255,.3);
}


/* Viewer Arrows */

.viewer-arrow{
    position:absolute;

    top:50%;

    transform:translateY(-50%);

    width:60px;
    height:60px;

    padding:0;
    margin:0;

    display:flex;
    justify-content:center;
    align-items:center;

    border-radius:50%;

    background:rgba(255,255,255,.15);

    color:#fff;

    font-size:25px;

    z-index:10;
}

.viewer-arrow:hover{
    background:rgba(255,255,255,.3);
}

.viewer-left{
    left:25px;
}

.viewer-right{
    right:25px;
}


/* ==================================================
   MESSAGE
================================================== */

#messageSection{
    padding:30px 20px;
}

.message-card{
    width:min(850px,95%);

    padding:45px 35px;

    border-radius:30px;

    background:
        rgba(255,255,255,.13);

    border:
        1px solid rgba(255,255,255,.25);

    backdrop-filter:blur(15px);

    -webkit-backdrop-filter:blur(15px);

    box-shadow:
        0 20px 60px rgba(0,0,0,.2);
}

.typing{
    white-space:pre-line;

    font-size:18px;

    line-height:2;

    min-height:300px;
}

.wish-icons{
    margin-top:20px;

    font-size:30px;

    letter-spacing:8px;
}


/* ==================================================
   FINAL
================================================== */

#finalSection{
    overflow:hidden;
}

.final-title{
    font-family:'Great Vibes',cursive;

    font-size:80px;

    margin-bottom:20px;

    text-shadow:
        0 5px 25px rgba(0,0,0,.25);

    animation:
        heartBeat 1.8s infinite;
}

#finalSection h2{
    font-size:25px;

    margin-bottom:25px;
}

#finalSection p{
    font-size:18px;

    line-height:2;

    max-width:650px;
}

.celebration{
    font-size:55px;

    margin:30px 0;

    animation:
        bounce 1.5s infinite;
}


/* ==================================================
   FLOATING HEART
================================================== */

@keyframes floatHeart{

    0%{
        transform:
            translateY(0)
            scale(.8);

        opacity:1;
    }

    100%{
        transform:
            translateY(-120vh)
            scale(1.5);

        opacity:0;
    }

}


/* ==================================================
   CONFETTI / FALLING
================================================== */

@keyframes fall{

    0%{
        transform:
            translateY(-50px)
            rotate(0deg);

        opacity:1;
    }

    100%{
        transform:
            translateY(110vh)
            rotate(720deg);

        opacity:0;
    }

}


/* ==================================================
   SPARKLES
================================================== */

.spark{
    position:fixed;

    z-index:2;

    pointer-events:none;

    animation:
        sparkle 2s linear forwards;
}

@keyframes sparkle{

    0%{
        opacity:0;
        transform:scale(0);
    }

    50%{
        opacity:1;
        transform:scale(1.2);
    }

    100%{
        opacity:0;
        transform:scale(0);
    }

}


/* ==================================================
   GENERAL ANIMATIONS
================================================== */

@keyframes fadeDown{

    from{
        opacity:0;
        transform:translateY(-30px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }

}

@keyframes fadeUp{

    from{
        opacity:0;
        transform:translateY(30px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }

}

@keyframes heartBeat{

    0%,100%{
        transform:scale(1);
    }

    50%{
        transform:scale(1.04);
    }

}

@keyframes bounce{

    0%,100%{
        transform:translateY(0);
    }

    50%{
        transform:translateY(-15px);
    }

}


/* ==================================================
   MOBILE
================================================== */

@media(max-width:768px){

    section{
        padding:35px 15px;
    }


    #hero h3{
        font-size:23px;
    }


    #hero h1{
        font-size:60px;
    }


    #hero p{
        font-size:15px;
        line-height:1.8;
    }


    .title{
        font-size:42px;
    }


    #giftBox{
        width:200px;
    }


    #birthdayCake{
        width:300px;
        max-height:45vh;
    }


    /* Mobile Gallery */

    .full-photo-box{
        gap:8px;
    }


    #galleryImage{
        max-width:calc(100vw - 100px);
        max-height:65vh;

        border-width:3px;

        border-radius:12px;
    }


    .photo-arrow{
        width:42px;
        height:42px;

        font-size:17px;
    }


    .gallery-buttons{
        gap:5px;
    }


    .gallery-buttons button{
        padding:11px 18px;

        font-size:14px;
    }


    /* Fullscreen Mobile */

    #photoViewer{
        padding:10px;
    }


    #fullPhoto{
        max-width:98vw;
        max-height:90vh;

        border-radius:5px;
    }


    .close-photo{
        top:10px;
        right:10px;

        width:45px;
        height:45px;

        font-size:23px;
    }


    .viewer-arrow{
        width:45px;
        height:45px;

        font-size:18px;
    }


    .viewer-left{
        left:8px;
    }


    .viewer-right{
        right:8px;
    }


    .message-card{
        padding:30px 20px;
    }


    .typing{
        font-size:15px;
        line-height:1.8;
        min-height:350px;
    }


    .final-title{
        font-size:55px;
    }


    #finalSection h2{
        font-size:20px;
    }


    #finalSection p{
        font-size:15px;
    }


    .celebration{
        font-size:38px;
    }

}


/* ==================================================
   SMALL MOBILE
================================================== */

@media(max-width:420px){

    #hero h1{
        font-size:52px;
    }


    .title{
        font-size:36px;
    }


    #galleryImage{
        max-width:calc(100vw - 85px);
        max-height:60vh;
    }


    .photo-arrow{
        width:35px;
        height:35px;

        font-size:14px;
    }


    button{
        font-size:15px;
        padding:12px 22px;
    }

}
