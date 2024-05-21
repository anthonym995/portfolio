// scrolling active
var navbar = document.querySelector(".navbar");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

// Set Nav link active
const links = document.querySelectorAll(".nav-link");

if (links.length) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      // to remove the active class which is previously added
      links.forEach((link) => {
        link.classList.remove("active");
        link.removeAttribute("aria-current", "page");
      });

      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    });
  });
}

// Set Nav link active  while scroll
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navmenu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navmenu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

// Set Animation using scroll reveal
const sr = ScrollReveal({
  distance: "100px",
  duration: 1000,
  reset: true,
});

// banner
sr.reveal(".freebtn", {
  origin: "bottom",
  distance: "80px",
});

sr.reveal(".trialbtn", {
  origin: "bottom",
  distance: "80px",
  delay: "200",
});

// about section
sr.reveal(".about-lebely", {
  origin: "right",
  distance: "80px",
});

sr.reveal(
  ".client-text, .client-text2, .label-text, .free-trial-text, .price-img, .arrow-img",
  {
    origin: "right",
    distance: "80px",
  }
);
sr.reveal(".read, .register-text, .info-img", {
  origin: "bottom",
  distance: "80px",
});

// client
sr.reveal(".sq1, .sq3", {
  origin: "left",
});
sr.reveal(".sq2, .sq4", {
  origin: "right",
});
