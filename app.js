const slides = document.querySelectorAll('.slide');

function slidesPlugin(activeSlideNumber = 0) {
    slides[activeSlideNumber].classList.add('active');

    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            clearActiveClasses();

            slide.classList.add('active');
        })
    })
}

function clearActiveClasses () {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}

slidesPlugin(1);