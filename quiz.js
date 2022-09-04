const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputMessage = document.querySelector("#output");

const correctAnswers = [
  "right angled",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

submitBtn.addEventListener('click', calculateScore);

function calculateScore() {
  const formResults = new FormData(quizForm);
  let score = 0, index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputMessage.innerText = `The score is ${score}`;
}