//menu responsivo
const nav = document.getElementById('nav');
const btn = document.getElementById('btn-mobile');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    if (nav.classList == 'active') {
        document.getElementById('btn-mobile').src = "img/icons/x.png"
    } else {
        document.getElementById('btn-mobile').src = "img/icons/menu.png"
    }
});

//carousel
const swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});