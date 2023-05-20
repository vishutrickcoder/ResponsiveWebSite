let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navList");


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const scroll = ScrollReveal({
    distance:"60px",
    duration:2600,
    delay:500,
    reset : true
});

scroll.reveal(".hero-text", {delay:200 , origin:'top'});
scroll.reveal(".hero-img", {delay:200 , origin:'top'});
scroll.reveal(".icons", {delay:200 , origin:'left'});
scroll.reveal(".scroll-down", {delay:200 , origin:'right'});