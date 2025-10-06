document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.presentations-swiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Initialize slide counter
    const counter = document.querySelector('.swiper-counter');
    const totalSlides = swiper.slides.length;
    counter.textContent = `${swiper.realIndex + 1}/${totalSlides}`;

    // Update counter on slide change
    swiper.on('slideChange', function () {
        counter.textContent = `${swiper.realIndex + 1}/${totalSlides}`;
    });
});