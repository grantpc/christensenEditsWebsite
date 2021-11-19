// testimonial slider
const slider = () => {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider-btn--left');
  const btnRight = document.querySelector('.slider-btn--right');

  let currentSlide = 0;
  const numSlides = slides.length;

  function goToSlide(slide) {
    slides.forEach((s, idx) => {
      s.style.transform = `translateX(${100 * (idx - slide)}%)`;
    });
  }

  function nextSlide() {
    // check for max number of slides; set current slide to 0 if we're at the end, otherwise increase it by 1
    if (currentSlide === numSlides - 1) currentSlide = 0;
    else currentSlide++;

    // move slides
    goToSlide(currentSlide);
  }

  function prevSlide() {
    if (currentSlide === 0) currentSlide = numSlides - 1;
    else currentSlide--;

    goToSlide(currentSlide);
  }

  // initialize slider
  goToSlide(0);

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', e => {
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });
};
slider();
