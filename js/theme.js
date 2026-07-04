// =========================
// Theme Toggle
// =========================

const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

if(themeBtn){

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "light"){

        body.classList.add("light-theme");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    themeBtn.addEventListener("click",()=>{

        body.classList.toggle("light-theme");

        if(body.classList.contains("light-theme")){

            localStorage.setItem("theme","light");

            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        }else{

            localStorage.setItem("theme","dark");

            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

        }

    });

}