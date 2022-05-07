const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    direction: 'horizontal',
    autoplay: 1500,
    preloadImages: true,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


// create hamburger menu responsive

const btn = document.getElementById('hamburger');
const nav = document.getElementById('menu');

// create event listner

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
})