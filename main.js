const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryHead = document.querySelector(".primary-header");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", "false")
    : navToggle.setAttribute("aria-expanded", "true");
  primaryNav.toggleAttribute("data-visible");
  primaryNav.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: true,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false, // dots enabled 1280px and up
    },
  },
});
