const questions = {
    1: {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 3
    },
    2: {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 2
    },
    // Add more questions here
};

function showQuestion(section) {
    const questionData = questions[section];
    if (questionData) {
        document.getElementById("question-title").textContent = questionData.question;
        const answers = document.getElementById("answers");
        answers.innerHTML = "";
        questionData.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.onclick = () => checkAnswer(index + 1, questionData.correct);
            answers.appendChild(button);
        });
        document.getElementById("question-popup").style.display = "block";
    }
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("Correct!");
    } else {
        alert("Wrong answer. Try again.");
    }
    document.getElementById("question-popup").style.display = "none";
}
