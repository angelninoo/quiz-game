const questions = {
    // Anime
    1: { question: "لە (Fairy Tail) ناوی ئەو کارەکتەرە سەرەکیە چیە کە (Celestial Spirit Mage) ە؟", answers: ["Natsu Dragneel", "Erza Scarlet", "Lucy Heartfilia", "Gray Fullbuster"], correct: 3 },
    2: { question: "لە (Death Note) ئەو خواردنەی (L) زۆری حەز لێیە چیە؟", answers: ["Ice Cream", "Cake", "Strawberries", "Chocolate"], correct: 2 },
    3: { question: "لە (Tokyo Ghoul) ناوی ئەو قاوەخانەیە چیە کە غولەکان بەڕێوەی ئەبەن؟", answers: ["Anteiku", "Kaneki's Café", "Aogiri Tree", "Black Goat"], correct: 1 },
    4: { question: "لە (Neon Genesis Evangelion)  ناوی فەرمی یونتەکەی (Shinji’s Eva) چیە؟", answers: ["Unit-00", "Unit-01", "Unit-02", "Unit-03"], correct: 2 },
    5: { question: "لە (Steins;Gate) ناوی تەواوی (Lab Member 004) چیە؟", answers: ["Kurisu Makise", "Suzuha Amane", "Moeka Kiryu", "Luka Urushibara"], correct: 1 },

    // Series
    6: { question: "ناوی ئەو قاوە خانەیە چی بوو کە لە  (Friends) کارەکتەرەکان زۆربەی کات لێی دا ئەنیشتن؟", answers: ["Central Perk", "Coffee Corner", "Java House", "Café Lounge"], correct: 1 },
    7: { question: "لە زنجیرەی (The Office US) ناوی کۆمپانیای کاغەزی (Michael Scott)  چی بوو؟ ", answers: ["Dunder Mifflin", "Scranton Paper Co.", "Michael Scott Paper Company", "Sabre"], correct: 3 },
    8: { question: "لە (Game Of Throne) کێ پاشای دوای دیوارەکان بوو (King Beyond the Wall)؟", answers: ["Tormund Giantsbane", "Mance Rayder", "Jon Snow", "Craste"], correct: 2 },
    9: { question: "ناوی کۆتا هەلقەی (Breaking Bad) چی بوو؟", answers: ["Felina", "Ozymandias", "End Times", "Granite State"], correct: 1 },
    10: { question: "لە درامای (Arcane) ناوی کچەکەی(Marcus)  چیە؟", answers: ["Rina", "Ren", "Reyna", "Elle"], correct: 2 },

    // Movie
    11: { question: "لە فلیمی سیمبا (The Lion King) ناوی باوکی سیمبا چیە؟", answers: ["Scar", "Mufasa", "Rafiki", "Timon"], correct: 2 },
    12: { question: "لە (Harry Poter) ناوی ئەو ئیلفە-قەزەمە چیە کە خزمەتی خێزانی مالفۆی ئەکات؟", answers: ["Kreacher", "Winky", "Dobby", "Hokey"], correct: 3 },
    13: { question: "لە فلیمی مصری (الفیل الازرق) ناوی هاوسەری دکتۆر یەحیا چیە؟", answers: ["لبنی", "فاتن", "نجلاء", "بسمة"], correct: 1 },
    14: { question: "لە فلیمی (The Godfather) بەشی ٢ ناوی ئەو کارەکتەرە چیە کە خیانەت لە (Micheal Corleon) ئەکات لە دانیشتنی ئەنجومەنی پیران؟", answers: ["Carlo Rizzi", "Fredo Corleone", "Tom Hagen", "Frank Pentangeli"], correct: 4 },
    15: { question: "لە فلیمی (الارهاب و الکەباب) ناوی ئەو باڵەخانە حکومیە چیە کە بارنتەکانی تیایا گیراوە؟", answers: ["مجمع التحرير", "دار القضاء العالي", "وزارة الداخلية", "مجلس الشعب"], correct: 1 },

    // Game
    16: { question: "لە (Super Mario Bros) ناوی ئەوشازادەیە چیە کە ماریۆ ئەیەویت ڕزگاری بکات؟", answers: ["Daisy", "Rosalina", "Peach", "Zelda"], correct: 3 },
    17: { question: "لە (Minecraft) پێویستت بە چ ماتریەلێک هەیە بۆ دروست کردنی (Nether Portal)؟", answers: ["Obsidian", "Bedrock", "Bedrock", "Quartz"], correct: 1 },
    18: { question: "لە یاری (Dark Souls) ناوی یەکەم (Boss) چیە کە شەری لەگەڵ ئەکەیت؟", answers: ["Asylum Demon", "Gargoyles", "Capra Demon", "Artorias"], correct: 1 },
    19: { question: "لە (Witcher 3:Wild Hunt) ناوی ئەسپەکەی جیرالت چیە؟", answers: ["Silver", "Carrot", "Blaze", "Roach"], correct: 4 },
    20: { question: "لە یاری (Elden Ring) کێ سەرکردەی (The Knights of the Roundtable Hold)ە؟", answers: ["Radagon", "Godfrey", "Marika", "Morgott"], correct: 2 },

    // Science
    21: { question: "هێمای کیمیای ئاو چیە؟", answers: ["O2", "CO2", "H2O", "N2"], correct: 3 },
    22: { question: "چ توخمێک ژمارەی گەردیلەکانی ١ ە؟", answers: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"], correct: 2 },
    23: { question: "باوترین غاز لە کەشی زەویدا چیە؟", answers: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], correct: 2 },
    24: { question: "چ توخمێک بەزۆری لە توێکڵی زەویدا هەیە؟", answers: ["Oxygen", "Silicon", "Iron", "Aluminum"], correct: 1 },
    25: { question: "تاقیکردنەوەی بیرکردنەوە بەناوبانگەکەی شرۆدینگەر، کە پشیلەیەکی تێدایە، بۆ سەلماندنی چی کراوە؟", answers: ["The theory of relativity", "Quantum superposition", "The uncertainty principle", "The double-slit experiment"], correct: 2 },

    // General
    26: { question: "کام لەم ئاژەڵانە بە توانای گۆڕینی ڕەنگ ناسراوە؟", answers: ["Lion", "Chameleon", "Elephant", "Giraffe"], correct: 2 },
    27: { question: "شانۆنامەی ڕۆمیۆ و جولیەت لە نوسینی کێیە؟", answers: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], correct: 1 },
    28: { question: "گەورەترین وڵات لە ڕووی ڕووبەری زەویەوە کوێیە؟", answers: ["China", "United States", "Canada", "Russia"], correct: 4 },
    29: { question: "کام وڵات زۆرترین زمانی فەرمی هەیە؟", answers: ["Switzerland", "India", "South Africa", "Canada"], correct: 3 },
    30: { question: "لە ئەفسانەی یۆنانیدا کێ یەکەم ژن بوو کە خوداوەندەکان دروستیان کرد؟", answers: ["Hera", "Pandora", "Athena", "Demeter"], correct: 2 },

    // Culture
    31: { question: "ئەو خواردنەوە عەرەبییە تەقلیدییە چییە کە زۆرجار لە مانگی ڕەمەزاندا پێشکەش دەکرێت؟", answers: ["قاوە ", "چا ", "شیری خەست", "قمر دین"], correct: 4 },
    32: { question: "کام نووسەری ناوداری کورد بە ڕۆمانی مەم و زین ناسراوە کە بە یەکێک لە بەرهەمە گرنگەکانی ئەدەبی کوردی دادەنرێت؟", answers: ["Sherko Bekas", "Hafez", "Ahmed Arif", "Ahmad Khani"], correct: 4 },
    33: { question: "کام نووسەری عەرەبی بە کتێبی پێغەمبەر ناسراوە کە لە سەرانسەری جیهاندا بۆ چەندین زمان وەرگێڕدراوە؟", answers: ["نجيب محفوظ", "خليل جبران", "محمود درويش", "علاء الأسواني"], correct: 2 },
    34: { question: "کام ئایکۆن و شاعیر و فەیلەسوفی کورد بە پەیوەندی قووڵی بە ناسنامەی کوردەوە ناسراوە و ڕۆڵێکی بەرچاوی لە ناسیۆنالیزمی کوردیدا هەبووە؟", answers: ["عبدالله أوجلان", "شێركو بێكس", "فەدیل حوسەین", "کاوەی ئاسنگەر"], correct: 2 },
    35: { question: "کام شاعیری بەناوبانگی عەرەبی بە یەکێک لە کاریگەرترین شاعیرەکانی جیهانی عەرەبیزم دادەنرێت، کە نووسەری موعەلەقات بوو؟", answers: ["رومي", "امرؤ القيس", "المتنبي", "عنترة بن شداد"], correct: 2 },

    // Language
    36: { question: "زمانی فەرمی بەڕازیل چییە؟", answers: ["Spanish", "Portuguese", "French", "Italian"], correct: 2 },
    37: { question: "بە پلەی یەکەم لە ویلایەتی تامیل نادو لە هیندستان بە کام زمان قسە دەکرێت؟", answers: ["Hindi", "Bengali", "Tamil", "Telugu"], correct: 3 },
    38: { question: "وشەی تورکی (Çalışmak) مانای چییە؟", answers: ["To sleep", "To work", "To eat", "To write"], correct: 2 },
    39: { question: "زمانی فەرمی شاری ڤاتیکان چییە؟", answers: ["Italian", "Latin", "Spanish", "French"], correct: 2 },
    40: { question: "دەگمەنترین زمانی فەرمی کە کۆمەڵگەیەکی بچووک لە ئەمریکای باشوور قسەی پێدەکات و زۆربەیان لە ناوچەی پاراگوایدا قسەی پێدەکەن چییە؟", answers: ["Guaraní", "Quechua", "Aymara", "Mapudungun"], correct: 1 },

    // Religions
    41: { question: "کام مانگ لە ساڵنامەی ئیسلامیدا بە ڕۆژووگرتن لە کاتی ڕۆژدا ناسراوە؟", answers: ["Shawwal", "Ramadan", "Dhul-Hijjah", "Muharram"], correct: 2 },
    42: { question: "کام فریشتە قورئانی گەیاندە دەست پێغەمبەر محمد؟", answers: ["Jibril", "Mikail", "Israfil", "Azrael"], correct: 1 },
    43: { question: "کام هاوەڵی پێغەمبەر محمد بە کۆکردنەوەی قورئان بۆ یەک کتێب ناسراوە؟", answers: ["Umar ibn al-Khattab", "Abu Bakr", "Uthman ibn Affan", "Ali ibn Abi Talib"], correct: 3 },
    44: { question: "کام زانای ئیسلامی بە کۆکردنەوەی بەناوبانگترین کۆمەڵەی فەرموودەکان شانازیی پێدەکرێت؟", answers: ["Imam Malik", "Imam Abu Hanifa", " Imam Ahmad ibn Hanbal", "Imam Bukhari"], correct: 4 },
    45: { question: "لە ئیسلامدا کام شەڕ بە یەکەم ململانێی سەربازی گەورەی نێوان موسڵمانانی مەدینە و قوڕەیشی مەککە دادەنرێت؟", answers: ["شەڕی بەدر", "شەڕی ئوحود", "شەڕی خەیبەر", "شەڕی خەندەق"], correct: 1 },

    // History
    46: { question: "یەکەم سەرۆکی ئەمریکا کێ بوو؟", answers: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "J F Kennedy"], correct: 1 },
    47: { question: "کام شارستانیەتی کۆن بە پەرەپێدانی یەکەم سیستەمی نووسین ناسراوە کە میخییە؟", answers: ["Egyptians", "Sumerians", "Persians", "Greeks"], correct: 2 },
    48: { question: "کەشتی تایتانیک لە کام ساڵدا نوقم بوو؟", answers: ["1905", "1920", "1898", "1912"], correct: 4 },
    49: { question: "دوایین ئیمپراتۆری ئیمپراتۆریەتی ڕۆمانی لە ڕۆژئاوا کێ بوو؟", answers: ["Julius Caesar", "Romulus Augustulus", "Constantine I", "Nero"], correct: 2 },
    50: { question: "یەکەم وڵات کام وڵات مافی دەنگدانی بە ژنان بەخشی؟", answers: ["United States", "New Zealand", "United Kingdom", "Australia"], correct: 2 },
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
        alert(selected === correct ? "ئەی دەست خۆش باشە" : `ئافەرم دەرنەچویت`);
        document.getElementById("question-popup").style.display = "none";
        disableSection(sectionId); // Disable section after question is answered
    }, 500);
}
