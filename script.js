const header = document.querySelector('header');

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",window.scrollY > 0);
});


let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal({
    distance:'25px',
    duration:2500,
    reset:true
})
sr.reveal('.home-text' , {delay:160,origin:'left'})
sr.reveal('.about,.services,.portfolio,.contact' , {delay:180,origin:'left'})

