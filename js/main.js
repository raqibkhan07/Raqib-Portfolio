let projectSwiper;

const projectImages = {

employee: [

"images/projects/EmployeeTrakingSystem/Screenshot 2026-07-04 161847.png",

"images/projects/EmployeeTrakingSystem/Screenshot 2026-07-04 162002.png",

"images/projects/EmployeeTrakingSystem/Screenshot 2026-07-04 162047.png",

"images/projects/EmployeeTrakingSystem/Screenshot 2026-07-04 162155.png",

"images/projects/EmployeeTrakingSystem/Screenshot 2026-07-04 162246.png",

"images/projects/EmployeeTrakingSystem/Screenshot 2026-07-04 162429.png",

"images/projects/EmployeeTrakingSystem/Screenshot 2026-07-04 162507.png",

"images/projects/EmployeeTrakingSystem/Screenshot 2026-07-04 162555.png",

],

exam: [

"images/projects/SmartExamPortal/Screenshot 2026-07-04 161142.png",

"images/projects/SmartExamPortal/Screenshot 2026-07-04 161223.png",

"images/projects/SmartExamPortal/Screenshot 2026-07-04 161258.png",

"images/projects/SmartExamPortal/Screenshot 2026-07-04 161326.png",

"images/projects/SmartExamPortal/Screenshot 2026-07-04 161414.png",

"images/projects/SmartExamPortal/Screenshot 2026-07-04 161437.png",

],

ca: [

"images/projects/CAdask/Screenshot 2026-07-04 163350.png",

"images/projects/CAdask/Screenshot 2026-07-04 163427.png",

"images/projects/CAdask/Screenshot 2026-07-04 163558.png",

"images/projects/CAdask/Screenshot 2026-07-04 163731.png",

"images/projects/CAdask/Screenshot 2026-07-04 164209.png",

"images/projects/CAdask/Screenshot 2026-07-04 164316.png",

"images/projects/CAdask/Screenshot 2026-07-04 164359.png",

]

};

AOS.init({

    duration:1000,

    once:true

});

/*==========================================
        LOADER PRO MAX
==========================================*/
/*==========================================
        CINEMATIC LOADER
==========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const percent = document.getElementById("loaderPercent");
    const bar = document.getElementById("loaderBar");
    const status = document.getElementById("loaderStatus");

    const messages = [

        "Initializing Portfolio...",

        "Loading Hero Section...",

        "Loading About Section...",

        "Loading Skills...",

        "Loading Experience...",

        "Loading Projects...",

        "Loading Certificates...",

        "Loading Contact...",

        "Optimizing Performance...",

        "Launching Portfolio..."

    ];

    let progress = 0;

    let msg = 0;

    function animateLoader(){

        // Random Speed

        progress += Math.random()*8;

        if(progress>100){

            progress=100;

        }

        percent.innerHTML=Math.floor(progress)+"%";

        bar.style.width=progress+"%";

        // Change Status

        if(progress>(msg+1)*10 && msg<messages.length-1){

            msg++;

            status.style.opacity="0";

            setTimeout(()=>{

                status.innerHTML=messages[msg];

                status.style.opacity="1";

            },250);

        }

        if(progress<100){

            let speed;

            if(progress<40){

                speed=200;

            }

            else if(progress<80){

                speed=350;

            }

            else{

                speed=500;

            }

            setTimeout(animateLoader,speed);

        }

        else{

            status.innerHTML="Portfolio Ready 🚀";

            setTimeout(()=>{

               loader.classList.add("hide");

setTimeout(() => {

    loader.remove();

    window.dispatchEvent(new Event("resize"));
    window.dispatchEvent(new Event("scroll"));

}, 800);

},3500);

        }

    }

    animateLoader();

});

// =========================
// Scroll Progress Bar
// =========================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});

// =========================
// Back To Top Button
// =========================

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click",(e)=>{

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =========================
// AOS Animation
// =========================

AOS.init({

    duration:1000,

    once:true,

    offset:120,

    easing:"ease-in-out"

});

// =========================
// Cursor Glow
// =========================

const glow = document.getElementById("cursor-glow");

if (glow && window.innerWidth > 768) {

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}

// =========================
// Dynamic Project Modal
// =========================

const modal = document.getElementById("projectModal");

const openBtns = document.querySelectorAll(".open-modal");

const closeBtn = document.querySelector(".close-modal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalTech = document.querySelector(".modal-tech");

openBtns.forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

modal.classList.add("show");

const wrapper = document.getElementById("sliderWrapper");

wrapper.innerHTML = "";

projectImages[btn.dataset.gallery].forEach(img => {

    wrapper.innerHTML += `
        <div class="swiper-slide">
            <img src="${img}" alt="Project Screenshot">
        </div>
    `;

});

modalTitle.innerText = btn.dataset.title;

modalDescription.innerText = btn.dataset.description;

const tech = btn.dataset.tech.split(",");

modalTech.innerHTML="";

tech.forEach(item=>{

modalTech.innerHTML +=

`<span>${item.trim()}</span>`;

});

if(projectSwiper){

    projectSwiper.destroy(true,true);

}

projectSwiper = new Swiper(".projectSwiper",{

    loop:true,

    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }

});

});

});

closeBtn.onclick=()=>{

modal.classList.remove("show");

}

window.onclick=(e)=>{

if(e.target===modal){

modal.classList.remove("show");

}

}

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

if (dot && outline && window.innerWidth > 768) {

    window.addEventListener("mousemove",(e)=>{

        dot.style.left=e.clientX+"px";
        dot.style.top=e.clientY+"px";

        outline.animate({
            left:e.clientX+"px",
            top:e.clientY+"px"
        },{
            duration:250,
            fill:"forwards"
        });

    });

}


document.querySelectorAll("a,button,.btn").forEach(el=>{

    el.addEventListener("mouseenter",()=>{

        outline.style.width="70px";

        outline.style.height="70px";

        outline.style.borderColor="#fff";

    });

    el.addEventListener("mouseleave",()=>{

        outline.style.width="40px";

        outline.style.height="40px";

        outline.style.borderColor="rgba(124,58,237,.6)";

    });

});

/*==================================
        MAGNETIC EFFECT
==================================*/

if (window.innerWidth > 768) {

const magneticItems = document.querySelectorAll(
".btn,.project-card,.hero-social a"
);

magneticItems.forEach(item=>{

    item.addEventListener("mousemove",(e)=>{

        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;

        item.style.transform =
        `translate(${x*0.18}px,${y*0.18}px)`;

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="translate(0,0)";

    });

});

}

/*==================================
        3D TILT EFFECT
==================================*/

const tiltCards = document.querySelectorAll(
".project-card,.certificate-card,.featured-project"
);

tiltCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY =
        ((x / rect.width) - 0.5) * 18;

        const rotateX =
        ((y / rect.height) - 0.5) * -18;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=
        `
        perspective(1000px)
        rotateX(0)
        rotateY(0)
        scale(1)
        `;

    });

});

/*==================================
      HERO PARALLAX
==================================*/

const hero = document.querySelector(".hero");
const orbs = document.querySelectorAll(".orb");

if (hero) {
    hero.addEventListener("mousemove", (e) => {

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        orbs.forEach((orb, index) => {

            const speed = (index + 1) * 12;

            orb.style.transform =
                `translate(${x * speed}px, ${y * speed}px)`;

        });

    });
}