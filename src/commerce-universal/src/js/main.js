// js document

function myFunction() {
  var x = document.getElementById("nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// nav stiky
window.addEventListener('scroll',function() {
    let header = document.querySelector('#header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-acitve',windowPosition);
})

