const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Menú 
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Configuración ScrollReveal
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Ocultar elementos antes de revelar - menu


  ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
    beforeReveal: (el) => el.classList.remove("scroll-hidden"),
  });

  ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
    beforeReveal: (el) => el.classList.remove("scroll-hidden"),
  });

  ScrollReveal().reveal(".header_content .section_description", {
    ...scrollRevealOption,
    delay: 1000,
    beforeReveal: (el) => el.classList.remove("scroll-hidden"),
  });

  ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
    delay: 1500,
    beforeReveal: (el) => el.classList.remove("scroll-hidden"),
  });

  ScrollReveal().reveal(".header_stats", {
    ...scrollRevealOption,
    delay: 2000,
    beforeReveal: (el) => el.classList.remove("scroll-hidden"),
  });
  //Planes
  
ScrollReveal().reveal(".service__image img", {
  ...scrollRevealOption,
  origin: "right",
});

  ScrollReveal().reveal(".service_content .section_header", {
    ...scrollRevealOption,
    delay: 500,
  });


ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});

ScrollReveal().reveal(".service__btn", {
  ...scrollRevealOption,
  delay: 2500,
});

// Testimonios

const swiper = new Swiper(".swiper", {
  loop: true,
});