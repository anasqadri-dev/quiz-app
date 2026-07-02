const questions = [
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Control Processing Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question:
      "Which data structure works on the Last In, First Out (LIFO) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: "Stack",
  },
  {
    question: "Which of the following is a programming language?",
    options: ["HTML", "CSS", "Python", "SQL"],
    answer: "Python",
  },
  {
    question: "What is the binary representation of the decimal number 5?",
    options: ["101", "110", "111", "100"],
    answer: "101",
  },
  {
    question:
      "Which sorting algorithm generally has the best average-case time complexity?",
    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Linear Search"],
    answer: "Merge Sort",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers-buttons");
const nextButton = document.getElementById("next-btn");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerHTML = option;
    button.classList.add("btn");
    if (option === currentQuestion.answer) {
      button.dataset.correct = true;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) {
    score++;
    selectedButton.classList.add("correct");
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (nextButton.innerHTML === "Restart Quiz") {
    startQuiz();
    return;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Restart Quiz";
  nextButton.style.display = "block";
}
startQuiz();
