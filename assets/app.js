const form = document.querySelector(".quiz-form ");
const corretAnswers = ["B", "A", "A", "B"];
const finalResult = document.querySelector(".result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  const corretAnswer = (item, index) => {
    if (item === corretAnswers[index]) {
      score += 25;
      return;
    }
    score += 0;
  };

  userAnswers.forEach(corretAnswer);

  finalResult.classList.remove("d-none");
  let counter = 0;
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }
    finalResult.querySelector("span").textContent = `${counter}%`;
    counter++;
  }, 10);

  scrollTo(0, 0);
});
