const questions = [
  {
    question: "世界で一番人口が多い国はどこでしょう？",
    choices: ["アメリカ", "インド", "中国", "インドネシア"],
    answerIndex: 1
  },
  {
    question: "1年は何週間あるでしょう？（最も近いもの）",
    choices: ["48週間", "50週間", "52週間", "54週間"],
    answerIndex: 2
  },
  {
    question: "人間の体で一番大きい臓器はどこでしょう？",
    choices: ["肝臓", "皮膚", "肺", "脳"],
    answerIndex: 1
  },
  {
    question: "「ことわざ」の意味として正しいものはどれでしょう？",
    choices: [
      "外国から伝わった言葉",
      "昔から言い伝えられてきた教訓を含む言葉",
      "若者言葉の一種",
      "方言の一種"
    ],
    answerIndex: 1
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const progressEl = document.getElementById("progress");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const scoreEl = document.getElementById("score");
const retryBtn = document.getElementById("retry-btn");

function renderQuestion() {
  const current = questions[currentIndex];

  progressEl.textContent = `第${currentIndex + 1}問 / 全${questions.length}問`;
  questionEl.textContent = current.question;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  nextBtn.hidden = true;

  choicesEl.innerHTML = "";
  current.choices.forEach((choiceText, index) => {
    const btn = document.createElement("button");
    btn.textContent = choiceText;
    btn.className = "choice-btn";
    btn.addEventListener("click", () => selectAnswer(index));
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  const current = questions[currentIndex];
  const isCorrect = selectedIndex === current.answerIndex;
  const choiceButtons = choicesEl.querySelectorAll(".choice-btn");

  choiceButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === current.answerIndex) {
      btn.classList.add("correct");
    } else if (index === selectedIndex) {
      btn.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    feedbackEl.textContent = "正解！";
    feedbackEl.classList.add("correct");
  } else {
    feedbackEl.textContent = "不正解...";
    feedbackEl.classList.add("incorrect");
  }

  nextBtn.hidden = false;
}

function showResult() {
  quizScreen.hidden = true;
  resultScreen.hidden = false;
  scoreEl.textContent = `${questions.length}問中${score}問正解でした！`;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  quizScreen.hidden = false;
  resultScreen.hidden = true;
  renderQuestion();
}

nextBtn.addEventListener("click", nextQuestion);
retryBtn.addEventListener("click", restartQuiz);

renderQuestion();
