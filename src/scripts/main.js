const leftButton = document.querySelector('.team__button--left');
const rightButton = document.querySelector('.team__button--right');
const carouselSlides = document.querySelectorAll('.carousel__item');
const carouselDots = document.querySelectorAll('.team__dot');
const carouselDotsContainer = document.querySelector('.team__dots');

let currentCarouselElement = 0;
let slideWidth;

const moveCarousel = (currentCarouselElement, slideWidth, carouselSlides) => {
    carouselSlides.forEach(carouselSlide => {
        carouselSlide.style.transform = `translateX(-${currentCarouselElement *
            slideWidth}px)`;
    });
};

const updateDots = (currentCarouselElement, carouselDots) => {
    const activeDot = document.querySelector('.team__dot--active');
    activeDot.classList.remove('team__dot--active');
    carouselDots[currentCarouselElement].classList.add('team__dot--active');
};

leftButton.addEventListener('click', () => {
    if (!(currentCarouselElement > 0)) {
        return;
    }
    currentCarouselElement--;
    slideWidth = carouselSlides[0].offsetWidth;
    moveCarousel(currentCarouselElement, slideWidth, carouselSlides);
    updateDots(currentCarouselElement, carouselDots);
});

rightButton.addEventListener('click', () => {
    if (!(currentCarouselElement < 5)) {
        return;
    }
    currentCarouselElement++;
    slideWidth = carouselSlides[0].offsetWidth;
    moveCarousel(currentCarouselElement, slideWidth, carouselSlides);
    updateDots(currentCarouselElement, carouselDots);
});

carouselDotsContainer.addEventListener('click', e => {
    if (e.target.tagName !== 'LI') {
        return;
    }
    console.log(carouselDots);
    const currentDot = Array.from(carouselDots).findIndex(
        carouselDot => carouselDot === e.target
    );
    currentCarouselElement = currentDot;
    slideWidth = carouselSlides[0].offsetWidth;
    moveCarousel(currentCarouselElement, slideWidth, carouselSlides);
    updateDots(currentCarouselElement, carouselDots);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
