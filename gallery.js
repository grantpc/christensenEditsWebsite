const sliderContainer = document.querySelector('.slider-container');
const sliderLeft = document.querySelector('.slider-left');
const sliderRight = document.querySelector('.slider-right');
const slides = document.querySelectorAll('.slide');
const upButton = document.querySelector('.up');
const downButton = document.querySelector('.down');
const slidesLength = sliderRight.querySelectorAll('div').length;

let activeSlideIdx = 0;

upButton.addEventListener('click', () => {
  changeSlide('up');
});
downButton.addEventListener('click', () => {
  changeSlide('down');
});

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIdx++;
    if (activeSlideIdx > slidesLength - 1) {
      activeSlideIdx = 0;
    }
    goToSlide(activeSlideIdx);
  } else if (direction === 'down') {
    activeSlideIdx--;
    if (activeSlideIdx < 0) {
      activeSlideIdx = slidesLength - 1;
    }
    goToSlide(activeSlideIdx);
  }
}

function goToSlide(slide) {
  slides.forEach((s, idx) => {
    s.style.transform = `translateY(${100 * (idx - slide)}%)`;
  });
}

// initialize slider
goToSlide(0);
