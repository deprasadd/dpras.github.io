const slideContainer = document.getElementById('slides-container');
const slideWidth = slideContainer.clientWidth;
let currentSlide = 0;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideContainer.children.length;
  slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
