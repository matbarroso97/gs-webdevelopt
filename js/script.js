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


// Perguntas do Quiz
const quizData = [
  {
    question: "O que mais contribui para enchentes urbanas?",
    options: ["Desmatamento", "Chuva", "Calor", "Ventos fortes"],
    answer: "Desmatamento"
  },
  {
    question: "Qual equipamento usamos para medir o nível da água?",
    options: ["Sensor ultrassônico", "Barômetro", "Termômetro", "Anemômetro"],
    answer: "Sensor ultrassônico"
  },
  {
    question: "Qual linguagem usamos para processar dados?",
    options: ["Python", "HTML", "CSS", "Excel"],
    answer: "Python"
  },
  {
    question: "O que a API meteorológica fornece?",
    options: ["Previsão do tempo", "Notícias", "Jogos", "Redes sociais"],
    answer: "Previsão do tempo"
  },
  {
    question: "Quem é beneficiado pelo AquaSafe?",
    options: ["Comunidades em risco", "Bancos", "Times de futebol", "Shopping Centers"],
    answer: "Comunidades em risco"
  },
  {
    question: "O que fazemos quando o nível de água é crítico?",
    options: ["Emitimos alerta", "Ignoramos", "Comemoramos", "Aumentamos o nível"],
    answer: "Emitimos alerta"
  },
  {
    question: "Qual cor é usada para alertas críticos?",
    options: ["Verde", "Amarelo", "Vermelho", "Azul"],
    answer: "Vermelho"
  },
  {
    question: "O que a Edge Computing permite?",
    options: ["Processar dados localmente", "Armazenar arquivos", "Enviar e-mails", "Postar nas redes sociais"],
    answer: "Processar dados localmente"
  },
  {
    question: "Qual o objetivo principal da AquaSafe?",
    options: ["Prevenir enchentes", "Construir casas", "Criar redes sociais", "Organizar eventos"],
    answer: "Prevenir enchentes"
  },
  {
    question: "Qual componente do Arduino mede distância?",
    options: ["Sensor ultrassônico", "LED", "Resistor", "Capacitor"],
    answer: "Sensor ultrassônico"
  }
];

let currentQuestionIndex = 0;
let score = 0;

// Seletores
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizSection = document.getElementById('quiz-section');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextQuestionBtn = document.getElementById('next-question-btn');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const restartQuizBtn = document.getElementById('restart-quiz-btn');

// Começar Quiz
startQuizBtn.addEventListener('click', () => {
  quizSection.style.display = 'block';
  document.querySelector('main').style.display = 'none'; // Esconde o resto da página
  loadQuestion();
});

// Carregar pergunta
function loadQuestion() {
  const currentData = quizData[currentQuestionIndex];
  questionText.textContent = currentData.question;
  optionsContainer.innerHTML = "";

  currentData.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => selectAnswer(option));
    optionsContainer.appendChild(btn);
  });
}

// Selecionar resposta
function selectAnswer(selectedOption) {
  const correctAnswer = quizData[currentQuestionIndex].answer;

  // Remove seleção anterior
  const allOptions = document.querySelectorAll('#options-container button');
  allOptions.forEach(btn => btn.classList.remove('selected'));

  // Marca a resposta selecionada
  const selectedButton = [...allOptions].find(btn => btn.textContent === selectedOption);
  selectedButton.classList.add('selected');

  if (selectedOption === correctAnswer) {
    score++;
  }
  nextQuestionBtn.style.display = 'block';
}

// Próxima pergunta
nextQuestionBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    nextQuestionBtn.style.display = 'none';
  } else {
    showResult();
  }
});

// Mostrar resultado
function showResult() {
  questionText.style.display = 'none';
  optionsContainer.style.display = 'none';
  nextQuestionBtn.style.display = 'none';
  resultContainer.style.display = 'block';
  scoreText.textContent = `Você acertou ${score} de ${quizData.length} questões!`;
}

// Refazer quiz
restartQuizBtn.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  questionText.style.display = 'block';
  optionsContainer.style.display = 'flex';
  nextQuestionBtn.style.display = 'block';
  resultContainer.style.display = 'none';
  loadQuestion();
});

// Sair do quiz
const exitQuizBtn = document.getElementById('exit-quiz-btn');

exitQuizBtn.addEventListener('click', () => {
  quizSection.style.display = 'none';
  document.querySelector('main').style.display = 'block'; // Volta a mostrar o site
  currentQuestionIndex = 0; // Reseta o quiz se quiser
  score = 0;
  questionText.style.display = 'block';
  optionsContainer.style.display = 'flex';
  nextQuestionBtn.style.display = 'block';
  resultContainer.style.display = 'none';
});


// Menu Hambúrguer
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});