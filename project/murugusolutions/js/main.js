// javascript document

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}

window.addEventListener('scroll',function() {
    let header = document.querySelector('#header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-acitve',windowPosition);
})