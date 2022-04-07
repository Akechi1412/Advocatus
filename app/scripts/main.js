"use strict";
// Navigation toggle
const headerOverlay = document.querySelector(".header-overlay");
const headerNav = document.querySelector(".header-nav");
const headerToggle = document.querySelector(".header-toggle");
const headerClose = document.querySelector(".header-close");
const headerNavLinks = document.querySelectorAll(".header-nav-link");

const navToggleHandler = () => {
  headerNav.classList.toggle("is-active");
  headerOverlay.classList.toggle("is-active");
};

if (headerToggle) {
  headerToggle.addEventListener("click", navToggleHandler);
}

if (headerClose) {
  headerClose.addEventListener("click", navToggleHandler);
}

if (headerOverlay) {
  headerOverlay.addEventListener("click", navToggleHandler);
}

if (headerNavLinks) {
  headerNavLinks.forEach((headerNavLink) => {
    headerNavLink.addEventListener("click", navToggleHandler);
  });
}

// Client slick slider
$(".client-list").slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        speed: 200,
      },
    },
  ],
});

// Frequently asked questions
const faqItems = document.querySelectorAll(".faq-left-item");
const faqBtns = document.querySelectorAll(".faq-left-btn");
const faqIcons = document.querySelectorAll(".faq-left-icon");
const faqExtends = document.querySelectorAll(".faq-left-extend");
const faqAnswerDisplay = document.querySelector(".faq-right-text");

const resetNotActive = () => {
  faqAnswerDisplay.textContent = "";
  faqIcons.forEach((faqIcon) => {
    faqIcon.classList.remove("fa-minus");
    faqIcon.classList.add("fa-plus");
  });
  faqExtends.forEach((faqExtend) => {
    faqExtend.style.height = 0 + "px";
  });
};

const activeHandler = (item) => {
  const answer = item.querySelector(".faq-left-answer");
  const icon = item.querySelector(".faq-left-icon");
  const extend = item.querySelector(".faq-left-extend");
  faqAnswerDisplay.textContent = answer.textContent;
  icon.classList.remove("fa-plus");
  icon.classList.add("fa-minus");
  extend.style.height = extend.scrollHeight + "px";
};

if (faqBtns) {
  faqBtns.forEach((faqBtn) => {
    faqBtn.addEventListener("click", (e) => {
      const item = e.target.closest(".faq-left-btn").parentNode;
      let isActive = item.classList.contains("is-active");
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("is-active");
      });
      item.classList.toggle("is-active", !isActive);
      resetNotActive();
      faqItems.forEach((item) => {
        if (item.classList.contains("is-active")) {
          activeHandler(item);
        }
      });
    });
  });
}

// Show back to top button when scroll
const topTopBtn = document.getElementById("to-top");

const toggleToTop = () => {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    topTopBtn.classList.add("is-active");
  } else {
    topTopBtn.classList.remove("is-active");
  }
};

const toTopHandler = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

if (topTopBtn) {
  window.addEventListener("scroll", toggleToTop);
  topTopBtn.addEventListener("click", toTopHandler);
}

// Preloader
const preloader = document.getElementById("preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}
// Nav links active state on scroll
const headerNavLinksActive = () => {
  const position = window.scrollY + 200;
  headerNavLinks.forEach((headerNavLink) => {
    if (!headerNavLink.hash) return;
    const section = document.querySelector(headerNavLink.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      headerNavLink.classList.add("is-active");
    } else {
      headerNavLink.classList.remove("is-active");
    }
  });
};
window.addEventListener("scroll", headerNavLinksActive);

// Animation on scroll
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});
