// Javascript document

function openNav() {
    document.getElementById("nav").style.width = "280px";
}

function closeNav() {
    document.getElementById("nav").style.width = "0";
}

window.addEventListener('scroll',function() {
    let header = document.querySelector('#header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-acitve',windowPosition);

})
window.addEventListener('scroll',function() {
    let header = document.querySelector('.close');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('close-top',windowPosition);

})
window.addEventListener('scroll',function() {
    let header = document.querySelector('.menu-alt');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('menu-alt-resize',windowPosition);

})