const questions = {
    // Category 1
    1: {
        question: "What is the capital of France?",
        answers: ["Berlin", "Kurdistan", "Paris", "Rome"],
        correct: 3
    },
    2: {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 2
    },
    // Add more questions for Category 1

    // Category 2
    6: {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 2
    },
    7: {
        question: "What is the largest ocean?",
        answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correct: 3
    },
    // Add more questions for Category 2

    // Category 3
    11: {
        question: "Who wrote '1984'?",
        answers: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Mark Twain"],
        correct: 1
    },
    12: {
        question: "What is the square root of 16?",
        answers: ["2", "3", "4", "5"],
        correct: 3
    },
    // Add more questions for Category 3
};


function showQuestion(section) {
    const questionData = questions[section];
    if (questionData) {
        document.getElementById("question-title").textContent = questionData.question;
        const answers = document.getElementById("answers");
        answers.innerHTML = ""; // Clear previous answers
        questionData.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.onclick = () => checkAnswer(index + 1, questionData.correct, button, questionData);
            answers.appendChild(button);
        });
        document.getElementById("question-popup").style.display = "block";
    }
}

function checkAnswer(selected, correct, selectedButton, questionData) {
    // Iterate over all buttons to disable them after an answer is selected
    const buttons = document.querySelectorAll("#answers button");
    buttons.forEach((button, index) => {
        // Disable buttons after an answer is selected
        button.disabled = true;
        
        // If the answer is correct, make the button green
        if (index + 1 === correct) {
            button.style.backgroundColor = "green";
        }
        // If the answer is wrong, make the button red
        if (index + 1 === selected) {
            button.style.backgroundColor = "red";
        }
    });

    // Show the correct answer and feedback
    setTimeout(() => {
        alert(selected === correct ? "Correct!" : "Wrong answer. The correct answer is: " + questionData.answers[correct - 1]);
        document.getElementById("question-popup").style.display = "none"; // Close the popup after a delay
    }, 500); // Delay for showing feedback
}

