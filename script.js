const quizData = [
  {
    question: '2 + 3 = ?',
    a: '5',
    b: '7',
    c: '8',
    d: '10',
    correct: 'a',
  },
  {
    question: '2 x 3 = ?',
    a: '5',
    b: '6',
    c: '8',
    d: '10',
    correct: 'b',
  },
  {
    question: '2 / 2  = ?',
    a: '5',
    b: '7',
    c: '1',
    d: '11',
    correct: 'c',
  },
  {
    question: '2 % 3 = ?',
    a: '3',
    b: '7',
    c: '8',
    d: '2',
    correct: 'd',
  },
];

const page = document.getElementById('page');
const quizEl = document.getElementById('quiz');
const ans_a = document.getElementById('a_text');
const ans_b = document.getElementById('b_text');
const ans_c = document.getElementById('c_text');
const ans_d = document.getElementById('d_text');
const submitEl = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');

var current = 0;
var score = 0;

loadQuiz();

function loadQuiz() {
  currentQuiz = quizData[current];

  quizEl.innerText = currentQuiz.question;
  ans_a.innerText = currentQuiz.a;
  ans_b.innerText = currentQuiz.b;
  ans_c.innerText = currentQuiz.c;
  ans_d.innerText = currentQuiz.d;
}

function getSelect() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselected() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitEl.addEventListener('click', () => {
  let answer = getSelect();

  if (answer) {
    if (answer === quizData[current].correct) {
      score++;
    }
    current++;
    if (current < quizData.length) {
      loadQuiz();
      deselected();
    } else {
      page.innerHTML = `
      <h2>You already completed quiz!</h2>
      <h3>Your score: ${score}/${quizData.length}</h3>`;
    }
  }
});
