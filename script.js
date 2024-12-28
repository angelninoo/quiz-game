const questions = {
    // Category 1
    1: { question: "What is the capital of France?", answers: ["Berlin", "Kurdistan", "Paris", "Rome"], correct: 3 },
    2: { question: "Which planet is known as the Red Planet?", answers: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 2 },
    // Category 2
    6: { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correct: 2 },
    7: { question: "What is the largest ocean?", answers: ["Atlantic", "Indian", "Pacific", "Arctic"], correct: 3 },
    // Category 3
    11: { question: "Who wrote '1984'?", answers: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Mark Twain"], correct: 1 },
    12: { question: "What is the square root of 16?", answers: ["2", "3", "4", "5"], correct: 3 },
};

// Add a confirmation dialog to prevent accidental refreshes
window.addEventListener("beforeunload", function (event) {
    const confirmationMessage = "Are you sure you want to refresh or leave the page? Your progress will be lost.";
    event.returnValue = confirmationMessage;
    return confirmationMessage;
});

function showQuestion(sectionId) {
    const questionData = questions[sectionId];
    if (questionData) {
        document.getElementById("question-title").textContent = questionData.question;

        const answers = document.getElementById("answers");
        answers.innerHTML = ""; // Clear previous answers

        questionData.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.onclick = () => checkAnswer(index + 1, questionData.correct, button, questionData, sectionId);
            answers.appendChild(button);
        });

        document.getElementById("question-popup").style.display = "block";
    } else {
        console.error(`No question data found for section: ${sectionId}`);
    }
}

function disableSection(sectionId) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.style.backgroundColor = "#d3d3d3";
        sectionElement.style.pointerEvents = "none";
        sectionElement.style.opacity = 0.5;
        console.log(`Section ${sectionId} has been disabled.`);
    } else {
        console.error(`Section ${sectionId} not found.`);
    }
}

function checkAnswer(selected, correct, selectedButton, questionData, sectionId) {
    const buttons = document.querySelectorAll("#answers button");
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index + 1 === correct) {
            button.style.backgroundColor = "green";
            button.style.color = "white";
        }
        if (index + 1 === selected && selected !== correct) {
            button.style.backgroundColor = "red";
            button.style.color = "white";
        }
    });

    setTimeout(() => {
        alert(selected === correct ? "Correct!" : `Wrong! The correct answer is: ${questionData.answers[correct - 1]}`);
        document.getElementById("question-popup").style.display = "none";
        disableSection(sectionId); // Disable section after question is answered
    }, 500);
}
