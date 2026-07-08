// =========================
// Navbar Elements
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");
const overlay = document.querySelector(".menu-overlay");

// =========================
// Mobile Menu
// =========================

menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

    overlay.classList.toggle("show");

    if(menuToggle.classList.contains("active")){

        menuToggle.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }else{

        menuToggle.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});

overlay.addEventListener("click",()=>{

    navMenu.classList.remove("active");

    overlay.classList.remove("show");

    menuToggle.classList.remove("active");

    menuToggle.innerHTML='<i class="fa-solid fa-bars"></i>';

});

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        overlay.classList.remove("show");

        menuToggle.classList.remove("active");

        menuToggle.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});

// =========================
// Close Menu After Click
// =========================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

// =========================
// Sticky Navbar
// =========================

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 50);

});

// =========================
// Initialize Header
// =========================

function initHeader() {
    header.classList.toggle("sticky", window.scrollY > 50);
}

window.addEventListener("load", initHeader);
window.addEventListener("pageshow", initHeader);
document.addEventListener("visibilitychange", () => {
    if (!document.hidden) initHeader();
});

// =========================
// Active Menu On Scroll
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});