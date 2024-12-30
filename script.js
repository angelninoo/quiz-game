const questions = {
    // Anime
    1: { question: "ناوی ئەو قاوە خانەیە چی بوو کە لە  (Friends) کارەکتەرەکان زۆربەی کات لێی دا ئەنیشتن؟", answers: ["Central Perk", "Coffee Corner", "Java House", "Café Lounge"], correct: 1 },
    2: { question: "Which planet is closest to the sun?", answers: ["Earth", "Mars", "Mercury", "Venus"], correct: 3 },
    3: { question: "What is the boiling point of water in Celsius?", answers: ["0", "50", "100", "212"], correct: 3 },
    4: { question: "What is the currency of Japan?", answers: ["Dollar", "Euro", "Yen", "Won"], correct: 3 },
    5: { question: "What is the largest desert in the world?", answers: ["Sahara", "Gobi", "Kalahari", "Antarctica"], correct: 4 },

    // Series
    6: { question: "ناوی ئەو قاوە خانەیە چی بوو کە لە  (Friends) کارەکتەرەکان زۆربەی کات لێی دا ئەنیشتن؟", answers: ["Central Perk", "Coffee Corner", "Java House", "Café Lounge"], correct: 1 },
    7: { question: "لە زنجیرەی (The Office US) ناوی کۆمپانیای کاغەزی (Michael Scott)  چی بوو؟ ", answers: ["Dunder Mifflin", "Scranton Paper Co.", "Michael Scott Paper Company", "Sabre"], correct: 3 },
    8: { question: "لە (Game Of Throne) کێ پاشای دوای دیوارەکان بوو (King Beyond the Wall)؟", answers: ["Tormund Giantsbane", "Mance Rayder", "Jon Snow", "Craste"], correct: 2 },
    9: { question: "ناوی کۆتا هەلقەی (Breaking Bad) چی بوو؟", answers: ["Felina", "Ozymandias", "End Times", "Granite State"], correct: 1 },
    10: { question: "What is the chemical symbol for gold?", answers: ["Ag", "Au", "Pb", "Fe"], correct: 2 },

    // Movie
    11: { question: "Who wrote '1984'?", answers: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Mark Twain"], correct: 1 },
    12: { question: "What is the square root of 16?", answers: ["2", "3", "4", "5"], correct: 3 },
    13: { question: "Which organ pumps blood in the human body?", answers: ["Liver", "Heart", "Lungs", "Kidney"], correct: 2 },
    14: { question: "What is the largest mammal?", answers: ["Elephant", "Whale", "Giraffe", "Hippopotamus"], correct: 2 },
    15: { question: "What is the freezing point of water in Fahrenheit?", answers: ["32", "0", "100", "212"], correct: 1 },

    // Game
    16: { question: "Which element has the chemical symbol 'O'?", answers: ["Gold", "Oxygen", "Osmium", "Hydrogen"], correct: 2 },
    17: { question: "What is the capital of Germany?", answers: ["Berlin", "Munich", "Frankfurt", "Hamburg"], correct: 1 },
    18: { question: "Which country is famous for the Eiffel Tower?", answers: ["Italy", "Spain", "France", "USA"], correct: 3 },
    19: { question: "What is the hardest natural substance?", answers: ["Gold", "Iron", "Diamond", "Graphite"], correct: 3 },
    20: { question: "What is the name of Earth's only natural satellite?", answers: ["Moon", "Mars", "Venus", "Sun"], correct: 1 },

    // Science
    21: { question: "What is the tallest mountain in the world?", answers: ["K2", "Mount Everest", "Kilimanjaro", "Denali"], correct: 2 },
    22: { question: "What gas do plants use for photosynthesis?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 2 },
    23: { question: "What is the largest land animal?", answers: ["Giraffe", "Elephant", "Rhino", "Bear"], correct: 2 },
    24: { question: "Which bird is known for its colorful feathers?", answers: ["Crow", "Peacock", "Penguin", "Owl"], correct: 2 },
    25: { question: "How many legs does a spider have?", answers: ["6", "8", "10", "12"], correct: 2 },

    // General
    26: { question: "Which country is known as the Land of the Rising Sun?", answers: ["China", "Korea", "Japan", "Vietnam"], correct: 3 },
    27: { question: "What is the freezing point of water in Celsius?", answers: ["0", "32", "100", "-1"], correct: 1 },
    28: { question: "What is the national language of China?", answers: ["Mandarin", "Cantonese", "Korean", "Japanese"], correct: 1 },
    29: { question: "What is the main ingredient in bread?", answers: ["Flour", "Sugar", "Salt", "Water"], correct: 1 },
    30: { question: "How many colors are in a rainbow?", answers: ["5", "6", "7", "8"], correct: 3 },

    // Culture
    31: { question: "What is the primary language spoken in Brazil?", answers: ["Spanish", "Portuguese", "French", "English"], correct: 2 },
    32: { question: "Which planet is the largest in the solar system?", answers: ["Jupiter", "Saturn", "Earth", "Neptune"], correct: 1 },
    33: { question: "What is the capital of Canada?", answers: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correct: 3 },
    34: { question: "What is the process of water changing to vapor called?", answers: ["Condensation", "Evaporation", "Precipitation", "Boiling"], correct: 2 },
    35: { question: "What is the largest internal organ in the human body?", answers: ["Liver", "Heart", "Lungs", "Kidney"], correct: 1 },

    // Language
    36: { question: "Who painted the Mona Lisa?", answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], correct: 2 },
    37: { question: "What is the capital of Italy?", answers: ["Rome", "Venice", "Florence", "Milan"], correct: 1 },
    38: { question: "What is the currency of the United Kingdom?", answers: ["Dollar", "Euro", "Pound", "Yen"], correct: 3 },
    39: { question: "Which metal is used to make coins?", answers: ["Iron", "Copper", "Silver", "Gold"], correct: 2 },
    40: { question: "What is the study of stars called?", answers: ["Biology", "Astronomy", "Geology", "Physics"], correct: 2 },

    // Religions
    41: { question: "Which animal is known as the King of the Jungle?", answers: ["Tiger", "Elephant", "Lion", "Cheetah"], correct: 3 },
    42: { question: "What is the smallest prime number?", answers: ["1", "2", "3", "5"], correct: 2 },
    43: { question: "What is the capital of Spain?", answers: ["Madrid", "Barcelona", "Seville", "Granada"], correct: 1 },
    44: { question: "How many planets are in the solar system?", answers: ["7", "8", "9", "10"], correct: 2 },
    45: { question: "Which is the longest river in the world?", answers: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 2 },

    // History
    46: { question: "What is the speed of light?", answers: ["3 x 10^8 m/s", "1 x 10^6 m/s", "5 x 10^7 m/s", "7 x 10^5 m/s"], correct: 1 },
    47: { question: "Who discovered gravity?", answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correct: 2 },
    48: { question: "What is the primary source of energy for Earth?", answers: ["Wind", "Sun", "Coal", "Water"], correct: 2 },
    49: { question: "What is the capital of Russia?", answers: ["Moscow", "St. Petersburg", "Kazan", "Sochi"], correct: 1 },
    50: { question: "Which gas is most abundant in Earth's atmosphere?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 3 },
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
        const questionText = questionData.question;
        const questionElement = document.getElementById("question-title");
        questionElement.textContent = questionText;

        // Check if the question contains Arabic characters
        if (/[^\x00-\x7F]/.test(questionText)) {
            // Set the question container to RTL
            questionElement.setAttribute("dir", "rtl");

            // Set the answers container to RTL
            document.getElementById("answers").setAttribute("dir", "rtl");
        } else {
            // Set the question container to LTR (default for English)
            questionElement.setAttribute("dir", "ltr");

            // Set the answers container to LTR
            document.getElementById("answers").setAttribute("dir", "ltr");
        }

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
