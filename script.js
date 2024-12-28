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

// Event listener to show a confirmation dialog when the user tries to refresh or leave the page
window.addEventListener("beforeunload", function(event) {
    // Customize the confirmation message
    const confirmationMessage = "Are you sure you want to refresh or leave the page? Your progress will be lost.";
    
    // Standard behavior for most browsers
    event.returnValue = confirmationMessage;
    
    // For older browsers that may not support the standard `returnValue` property
    return confirmationMessage;
});



function showQuestion(section) {
    const questionData = questions[section];
    if (questionData) {
        document.getElementById("question-title").textContent = questionData.question;
        const answers = document.getElementById("answers");
        answers.innerHTML = ""; // Clear previous answers
        questionData.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.onclick = () => checkAnswer(index + 1, questionData.correct, button, questionData, section);
            answers.appendChild(button);
        });
        document.getElementById("question-popup").style.display = "block";
    }
}

// Disable and grey out a section
function disableSection(sectionId) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.style.backgroundColor = "#d3d3d3"; // Grey out the section
        sectionElement.style.pointerEvents = "none"; // Disable further clicks
        sectionElement.style.opacity = 0.5; // Make it look visually disabled
        console.log(`Section ${sectionId} has been disabled.`);
    } else {
        console.error(`Section ${sectionId} not found.`);
    }
}

// Check the answer and call disableSection
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
        alert(selected === correct ? "Correct!" : "Wrong! The correct answer is: " + questionData.answers[correct - 1]);
        document.getElementById("question-popup").style.display = "none";
        
        // Call disableSection here
        disableSection(sectionId);
    }, 500);
}
sectionElement.style.opacity = 0.5; // Optional: Make it look visually disabled
}
