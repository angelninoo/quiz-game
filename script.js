document.addEventListener("DOMContentLoaded", () => {
  const mainScreen = document.getElementById("main-screen");
  const subsectionScreen = document.getElementById("subsection-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const questionText = document.getElementById("question-text");

  const screens = [mainScreen, subsectionScreen, quizScreen];

  const questions = {
    "1-1": {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Rome"],
      correct: 1,
    },
    "1-2": {
      question: "What is 2 + 2?",
      answers: ["3", "4", "5", "6"],
      correct: 2,
    },
    // Add more questions here
  };

  function showScreen(screen) {
    screens.forEach((s) => s.classList.remove("active"));
    screen.classList.add("active");
  }

  document.querySelectorAll(".section-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      showScreen(subsectionScreen);
    });
  });

  document.querySelectorAll(".subsection-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const subsection = btn.getAttribute("data-subsection");
      const questionKey = `1-${subsection}`;
      const question = questions[questionKey];

      if (question) {
        questionText.textContent = question.question;
        const answerButtons = document.querySelectorAll(".answer-btn");
        question.answers.forEach((answer, index) => {
          answerButtons[index].textContent = answer;
          answerButtons[index].onclick = () => {
            if (index + 1 === question.correct) {
              alert("Correct!");
            } else {
              alert("Wrong answer.");
            }
            showScreen(mainScreen);
          };
        });
        showScreen(quizScreen);
      }
    });
  });
});
