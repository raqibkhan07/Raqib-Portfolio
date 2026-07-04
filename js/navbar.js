// =========================
// Navbar Elements
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");

// =========================
// Mobile Menu
// =========================

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

    if(menuToggle.classList.contains("active")){
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }else{
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

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