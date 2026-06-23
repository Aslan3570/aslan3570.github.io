console.log("INTRO JS LAADT!");

const welcomeText = document.getElementById("welcomeText");

const languages = [
    "Welkom", // Nederlands
    "Welcome", // Engels
    "Bienvenido", // Spaans
    "Bienvenue", // Frans
    "Willkommen", // Duits
    "Hoşgeldiniz", // Turks
    "Добро пожаловать", // Russisch
    "欢迎", // Chinees (vereenvoudigd)
    "歡迎", // Chinees (traditioneel)
    "ようこそ", // Japans
    "환영합니다", // Koreaans
    "Benvenuto", // Italiaans
    "Bem-vindo", // Portugees
    "स्वागत है", // Hindi
    "Witaj", // Pools
    "Välkommen", // Zweeds
    "Καλώς ήρθατε", // Grieks
    "ברוך הבא", // Hebreeuws
    "أهلاً وسهلاً" // Arabisch
];

let index = 0;
let clicked = false;

welcomeText.addEventListener("click", () => {
    if (!clicked) {
        clicked = true;
        cycleLanguages();
    }
});

function cycleLanguages() {
    let interval = setInterval(() => {

        welcomeText.style.opacity = 0;

        setTimeout(() => {
            index++;
            welcomeText.textContent = languages[index];
            welcomeText.style.opacity = 1;


            if (index === languages.length - 1) {
                clearInterval(interval);

                setTimeout(() => {
                    window.location.href = "home.html";
                }, 500);
            }

        }, 250);

    }, 1000);
}