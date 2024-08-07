const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const mixer = mixitup(".project__grid");

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

// service container
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

// blog container
ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

document.addEventListener("DOMContentLoaded", function () {
  const skillBars = document.querySelectorAll(".skill-bar-fill");

  // Create an intersection observer to observe when elements are in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const skillLevel = bar.getAttribute("data-skill-level");
          bar.style.width = skillLevel + "%";
          // Optionally, you can stop observing after the animation is done
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.5 }
  ); // Adjust the threshold to control when the animation starts

  // Observe each skill bar element
  skillBars.forEach((bar) => {
    observer.observe(bar);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const skillBars = document.querySelectorAll(".skill-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target.querySelector(".skill-bar-fill");
          const skillLevel = bar.getAttribute("data-skill-level");

          bar.style.width = skillLevel + "%";
          bar.classList.add("breathe");

          // Add the slide-in animation class to the skill bar
          entry.target.classList.add("slide-in");

          // Optionally, stop observing after animation is done
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => {
    observer.observe(bar);
  });
});

const phrases = [
  "I'm a Fullstack Developer",
  "I'm a Frontend Developer",
  "I'm a Backend Developer",
  "I'm a Web Developer",
  "I'm a App Developer",
  "I'm a Web Designer... ",
];
const output = document.getElementById("outputs");

function typeText() {
  let phraseIndex = 0;
  let charIndex = 0;

  function typePhrase() {
    const currentPhrase = phrases[phraseIndex];
    if (charIndex < currentPhrase.length) {
      output.textContent += currentPhrase.charAt(charIndex);
      charIndex++;
      setTimeout(typePhrase, 100);
    } else {
      setTimeout(erasePhrase, 1000);
    }
  }

  function erasePhrase() {
    if (output.textContent.length > 0) {
      output.textContent = output.textContent.slice(0, -1);
      setTimeout(erasePhrase, 50);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      charIndex = 0;
      setTimeout(typePhrase, 500);
    }
  }

  typePhrase();
}

typeText();
