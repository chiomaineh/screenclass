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

// document.addEventListener("DOMContentLoaded", () => {
//   const partnerCards = document.querySelectorAll(".partner-card");
//   let currentIndex = 2;

//   function updateDisplay() {
//     partnerCards.forEach((card, index) => {
//       card.classList.add("blur-sm", "opacity-50", "scale-90");
//       card.classList.remove("blur-none", "opacity-90", "scale-110");

//       if (index === currentIndex) {
//         card.classList.remove("blur-sm", "opacity-50", "scale-90");
//         card.classList.add("blur-none", "opacity-90", "scale-110");
//       }
//     });

//     currentIndex = (currentIndex + 1) % partnerCards.length;
//   }

//   updateDisplay();

//   setInterval(updateDisplay, 2000);
// });


const header = document.querySelector("header");
const logo = document.getElementById("headerLogo");
const menuBar = document.getElementById("menu-bar");
const mobileNav = document.getElementById("mobile-nav");
const signUp = document.getElementById("sign-up");

const whiteLogo = "./src/images/screenclass-logo-white.png";
const coloredLogo = "./public/landing/screenclass-logo.png";
const whiteMenu = "./src/images/hamburger menu (1).png";
const coloredMenu = "./src/images/menu.png";
const closeIcon = "./src/images/icons8-close-50.png";

// main function
function handleHeaderScroll() {
  if (window.scrollY > 0) {
    header.classList.add("bg-white", "shadow-md", "fixed", "top-0");
    header.classList.remove("bg-transparent");

    logo.src = coloredLogo;
    logo.style.height = "40px";
    logo.style.width = "150px";

    Object.assign(menuBar.style, {
      height: '30px',
      width: '30px',
      marginTop: '8px'
    });

    signUp.classList.add("text-black");
    signUp.classList.remove("text-white");
  } else {
    header.classList.add("bg-transparent");
    header.classList.remove("bg-white", "shyadow-md", "fixed", "top-0");

    logo.src = whiteLogo;
    logo.style.height = "50px";
    logo.style.width = "200px";

    Object.assign(menuBar.style, {
      height: '50px',
      width: '50px'
    });

    signUp.classList.remove("text-black");
    signUp.classList.add("text-white");
  }

  // if mobile nav is open, always show close icon
  if (menuBar.classList.contains("open")) {
    menuBar.src = closeIcon;
    mobileNav.classList.remove("hidden");
    mobileNav.classList.add("flex");
  } else {
    menuBar.src = (window.scrollY > 0) ? coloredMenu : whiteMenu;

    mobileNav.classList.remove('flex');
    mobileNav.classList.add('hidden');
  }
}

// on scroll
window.addEventListener("scroll", handleHeaderScroll);

// on hamburger click
menuBar.addEventListener('click', () => {
  menuBar.classList.toggle("open");
  mobileNav.classList.toggle("hidden");

  if (menuBar.classList.contains("open")) {
    menuBar.src = closeIcon;
    // set small size when showing close icon
    Object.assign(menuBar.style, {
      height: '30px',
      width: '30px',
      marginTop: '8px'
      
    });
  } else {
    menuBar.src = (window.scrollY > 0) ? coloredMenu : whiteMenu;
    // reset size depending on scroll
    if (window.scrollY > 0) {
      Object.assign(menuBar.style, {
        height: '30px',
        width: '30px',
        marginTop: '8px'
       
      });
    } else {
      Object.assign(menuBar.style, {
        height: '50px',
        width: '50px',
        marginTop: '0'
      });
    }
  }
});

// run once on load
handleHeaderScroll();


