const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
        }
    });
}, { threshold: 0.2 });

projects.forEach(project => observer.observe(project));







// const title = document.getElementById("title");
// const turkey = document.getElementById("turkey");
// const moon = document.getElementById("moon");
// const star = document.getElementById("star");
// const splash = document.getElementById("splash");

// // Zet animatie waardes via JS (geen CSS nodig)
// moon.style.strokeDasharray = 900;
// moon.style.strokeDashoffset = 900;

// star.style.strokeDasharray = 900;
// star.style.strokeDashoffset = 900;

// title.addEventListener("click", () => {
//     title.style.display = "none";
//     turkey.style.display = "block";

//     // Maan animatie
//     let moonOffset = 900;
//     const moonInterval = setInterval(() => {
//         moonOffset -= 5;
//         moon.style.strokeDashoffset = moonOffset;
//         if (moonOffset <= 0) clearInterval(moonInterval);
//     }, 10);

//     // Ster animatie (start later)
//     setTimeout(() => {
//         let starOffset = 900;
//         const starInterval = setInterval(() => {
//             starOffset -= 5;
//             star.style.strokeDashoffset = starOffset;
//             if (starOffset <= 0) clearInterval(starInterval);
//         }, 10);
//     }, 3000);

//     // Fade-out (Bootstrap manier)
//     setTimeout(() => {
//         splash.classList.add("d-none");
//     }, 6000);
// });






// <!-- <div id="splash">

//         <div id="splash" class="vh-100 d-flex flex-column justify-content-center align-items-center">
//             <h1 id="title" class="mb-4" style="font-family: 'Great Vibes', cursive; font-size: 4rem;">
//                 Aslan Oral
//             </h1>

//             <svg id="turkey" width="260" height="260" viewBox="0 0 260 260" style="display:none;">
//             <path id="moon"
//                   d="M130 130 m -70 0 a 70 70 0 1 0 140 0 a 50 50 0 1 1 -100 0"
//                   stroke="white" stroke-width="3" fill="none" />

//             <path id="star"
//                   d="M185 130 L195 150 L175 140 L205 140 L185 150 Z"
//                   stroke="white" stroke-width="3" fill="none" />
//         </svg>
//         </div> -->