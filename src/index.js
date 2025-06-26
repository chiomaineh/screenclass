const classesBtn = document.getElementById("classesBtn");
const classesMenu = document.getElementById("classesMenu");

classesBtn.addEventListener("click", () => {
  classesMenu.classList.toggle("hidden");
});

const menuBtn = document.getElementById("menuBtn");
const menuOptions = document.getElementById("menuOptions");

menuBtn.addEventListener("click", () => {
  menuOptions.classList.toggle("hidden");
});

const loginBtn = document.getElementById("loginBtn");
const loginOptions = document.getElementById("loginOptions");

loginBtn.addEventListener("click", () => {
  loginOptions.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  const partnerCards = document.querySelectorAll(".partner-card");
  let currentIndex = 2;

  function updateDisplay() {
    partnerCards.forEach((card, index) => {
      card.classList.add("blur-sm", "opacity-50", "scale-90");
      card.classList.remove("blur-none", "opacity-90", "scale-110");

      if (index === currentIndex) {
        card.classList.remove("blur-sm", "opacity-50", "scale-90");
        card.classList.add("blur-none", "opacity-90", "scale-110");
      }
    });

    currentIndex = (currentIndex + 1) % partnerCards.length;
  }

  updateDisplay();

  setInterval(updateDisplay, 2000);
});

const header = document.querySelector("header");
const logo = document.getElementById("headerLogo");
const menuBar = document.getElementById("menu-bar");

const whiteLogo = "./src/images/screenclass-logo-white.png";
const coloredLogo = "./public/landing/screenclass-logo.png";
const whiteMenu = "./src/images/hamburger menu (1).png";
const coloredMenu = "./src/images/menu.png";

const signUp = document.getElementById("sign-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("bg-white", "shadow-md", "fixed", "top-0");
    header.classList.remove("bg-transparent");

    logo.src = coloredLogo;
    menuBar.src = coloredMenu;
    signUp.classList.add("text-black");
    signUp.classList.remove("text-white");
  } else {
    header.classList.add("bg-transparent");
    header.classList.remove("bg-white", "shadow-md", "fixed", "top-0");

    logo.src = whiteLogo;
    menuBar.src = whiteMenu;
    signUp.classList.remove("text-black");
    signUp.classList.add("text-white");
  }
});
