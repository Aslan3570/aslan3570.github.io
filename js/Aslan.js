let scorenteller = 0;
let vraagIndex = 0;

let questions = [
    "Which flag is this?",
    "Which flag is this?",
    "Which flag is this?",
    "Which flag is this?",
    "Which flag is this?",
    "Which flag is this?",
    "Which flag is this?",
    "Which flag is this?",
    "Which flag is this?",
    "Which flag is this?",

];

let A = [
    "France",
    "Latvia",
    "Peru",
    "Spain",
    "Andorra",
    "Chile",
    "Paraguay",
    "Morocco",
    "Serbia",
    "Finland"

];


let B = [
    "Brasil",
    "China",
    "Poland",
    "Greece",
    "Colombia",
    "Argentina",
    "Sri Lanka",
    "Bangladesh",
    "Russia",
    "Norway"

];


let C = [
    "Italy",
    "Croatia",
    "Hungary",
    "Cyprus",
    "Netherlands",
    "North Macedonia",
    "Laos",
    "Belarus",
    "Costa Rica",
    "Turkiye"
];

let correctAnswers = [
    "Brasil",
    "Croatia",
    "Peru",
    "Cyprus",
    "Colombia",
    "Chile",
    "Laos",
    "Morocco",
    "Costa Rica",
    "Turkiye"







]

let images = [
    "https://flagpedia.net/data/flags/w2560/br.jpg",
    "https://flagpedia.net/data/flags/w2560/hr.jpg",
    "https://flagpedia.net/data/flags/w2560/pe.jpg",
    "https://flagpedia.net/data/flags/w2560/cy.jpg",
    "https://flagpedia.net/data/flags/w2560/co.jpg",
    "https://flagpedia.net/data/flags/w2560/cl.jpg",
    "https://flagpedia.net/data/flags/w2560/la.jpg",
    "https://flagpedia.net/data/flags/w2560/ma.jpg",
    "https://flagpedia.net/data/flags/w2560/cr.jpg",
    "https://flagpedia.net/data/flags/w2560/tr.jpg"
];

// TODO: getElementById vervangen met querySelector
// TODO: Zet je element in een variabele
// TODO: let op de code conventions

document.querySelector("#start-Btn").addEventListener("click", beginQuiz);

const aBtn = document.querySelector("#btn-A");
const bBtn = document.querySelector("#btn-B");
const cBtn = document.querySelector("#btn-C");
const imageEl = document.querySelector("#flag-img");


imageEl.style.display = "none";

function beginQuiz() {
    scorenteller = 0;
    vraagIndex = 0;
    document.querySelector(".flag-items").style.display = "block";
    displayQuestion();
}

function displayQuestion() {
    if (vraagIndex < questions.length) {
        document.querySelector("#begin").textContent = `${questions[vraagIndex]} (${vraagIndex + 1})`;
        document.querySelector("#btn-A").textContent = A[vraagIndex];
        document.querySelector("#btn-B").textContent = B[vraagIndex];
        document.querySelector("#btn-C").textContent = C[vraagIndex];


        document.querySelector("#flag-img").src = images[vraagIndex];
        document.querySelector("#flag-img").style.display = "block";
    } else {
        document.querySelector("#begin").textContent = `Klaar! Je score is: ${scorenteller}/${questions.length}`;
        document.querySelector("#flag-img").style.display = "none";
    }
}



function checkAnswer(selectedAnswer, index) {
    if (selectedAnswer === correctAnswers[index]) {
        scorenteller++;
        console.log("Score:", scorenteller);
    }
}

aBtn.addEventListener("click", () => {
    checkAnswer(A[vraagIndex], vraagIndex);
    vraagIndex++;
    displayQuestion();
});

bBtn.addEventListener("click", () => {
    checkAnswer(B[vraagIndex], vraagIndex);
    vraagIndex++;
    displayQuestion();
});

cBtn.addEventListener("click", () => {
    checkAnswer(C[vraagIndex], vraagIndex);
    vraagIndex++;
    displayQuestion();
});
