const slides = document.getElementsByClassName('carousel__item');

let slidePosition = 0;
const totalSlides = slides.length - 1;

const nextButton = document.getElementById('carousel__button-next');
const prevButton = document.getElementById('carousel__button-prev');

const hideAllSlides = () => {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }
};

const nextSlide = () => {
  hideAllSlides();

  // Check if slide position is our of bound
  if (slidePosition === totalSlides) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add('carousel__item--visible');
};

const prevSlide = () => {
  hideAllSlides();

  // Check if slide position is our of bound
  if (slidePosition === 0) {
    slidePosition = totalSlides;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add('carousel__item--visible');
};

nextButton.addEventListener('click', nextSlide);

prevButton.addEventListener('click', prevSlide);
