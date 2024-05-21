// Javascript document

function openNav() {
  document.getElementById("nav").style.width = "280px";
}

function closeNav() {
  document.getElementById("nav").style.width = "0";
}

document.addEventListener(
  "click",
  function (event) {
    // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
    if (event.target.matches(".close") || !event.target.closest(".header")) {
      closeNav();
    }
  },
  false
);

window.addEventListener("scroll", function () {
  let header = document.querySelector("#header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-acitve", windowPosition);
});

window.addEventListener("scroll", function () {
  let header = document.querySelector(".close");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("close-top", windowPosition);
});

window.addEventListener("scroll", function () {
  let header = document.querySelector(".menu-alt");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("menu-alt-resize", windowPosition);
});

window.addEventListener("scroll", function () {
  let header = document.querySelector(".logo-name");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("color-white", windowPosition);
});

// scroll reveal

const sr = ScrollReveal({
  distance: "80px",
  duration: 800,
  reset: true,
});

// Home
sr.reveal(".ban_img", { origin: "top" });
sr.reveal(".ban_title", { delay: 100 });
sr.reveal(".ban_text", { delay: 100 });
sr.reveal(".btn_con", { delay: 200 });

// sections
sr.reveal(".sub-heading", { origin: "top" });
sr.reveal(
  ".about_img, .sk1, .exp_img, .l1, .contact-input, .message-area, .contact2",
  {
    origin: "left",
  }
);
sr.reveal(".about_text, .sk2, .exp_text, .l2, .con_sub, .con_text", { origin: "right" });


// Set Nav link active  while scroll
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 130;
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









// zoom effect for image
// var banImg = document.getElementById("zoom");

// banImg.addEventListener("mouseover", function(){
//     banImg.style.width = "165px";
//     banImg.style.transition = "all .2s ease-in";
// })

// banImg.addEventListener('mouseout',function() {
//     banImg.style.width = "160px";
//     banImg.style.transition = "all .2s ease-out";
// })

// typing effect
// const words = ["Hi I'm Anthony"];

// let count = 0;
// let index = 0;
// let currentText = "";
// let letter = "";

// (function type(){
//     if(count === words.length){
//         count = 0;
//     }
//     currentText = words[count];
//     letter = currentText.slice(0,++index);

//     document.querySelector('.typing').textContent = letter;

//     if(letter.length === currentText.length){
//         count++;
//         index = 0;
//     }
//     setTimeout(type,500);
// })();
