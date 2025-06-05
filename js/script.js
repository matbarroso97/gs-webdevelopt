// Slideshow
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.getElementById('next').addEventListener('click', () => {
  changeSlide(1);
});

document.getElementById('prev').addEventListener('click', () => {
  changeSlide(-1);
});

function changeSlide(direction) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Slide automático a cada 5 segundos
setInterval(() => {
  changeSlide(1);
}, 5000);
