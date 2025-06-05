// Slideshow
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.getElementById('next').addEventListener('click', () => {
  changeSlide(1);
});

document.getElementById('prev').addEventListener('click', () => {
  changeSlide(-1);
});

const changeSlide = (direction) => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Slide automático a cada 5 segundos
setInterval(() => {
  changeSlide(1);
}, 5000);

// Validação de Formulário
const form = document.getElementById('cadastroForm');

form.addEventListener('submit', (event) => {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const cep = document.getElementById('cep').value.trim();

  if (!nome || !email || !cidade || !cep) {
    event.preventDefault(); // Impede o envio
    return alert('Por favor, preencha todos os campos obrigatórios.');
  }

  
});

