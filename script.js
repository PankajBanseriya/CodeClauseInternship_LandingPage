const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".first .headline", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".first .subheadline", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".first .cta-button", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".features h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".features h2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".boxes .box1", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});
ScrollReveal().reveal(".boxes .box2", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1000,
});
ScrollReveal().reveal(".boxes .box3", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1500,
});
ScrollReveal().reveal(".boxes .box4", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
});
ScrollReveal().reveal(".testimonial h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".testimonial h2", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".innerdiv .div1", {
    ...scrollRevealOption,
    delay: 1500,
    origin: "left",
});
ScrollReveal().reveal(".innerdiv .div2", {
    ...scrollRevealOption,
    delay: 2000,
    origin: "top",
});
ScrollReveal().reveal(".innerdiv .div3", {
    ...scrollRevealOption,
    delay: 2500,
    origin: "right",
});
ScrollReveal().reveal(".innerdiv .div4", {
    ...scrollRevealOption,
    delay: 2000,
    origin: "left",
  });
  ScrollReveal().reveal(".innerdiv .div5", {
    ...scrollRevealOption,
    delay: 2500,
    origin: "bottom",
  });