function animateOnScroll(element, callback) {
    if (!element) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback();
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(element);
}




const overmijSection = document.getElementById('overmij');
const overmijTekst = document.getElementById('overmij-tekst');
const overmijFoto = document.getElementById('overmij-foto');
const overmijImg = document.getElementById('overmij-img');

if (overmijSection && overmijTekst && overmijFoto && overmijImg) {

    overmijTekst.style.opacity = 0;
    overmijFoto.style.opacity = 0;

    overmijTekst.style.transform = 'translateX(-50px)';
    overmijFoto.style.transform = 'translateX(50px)';
    overmijImg.style.transform = 'scale(0.9)';

    overmijTekst.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    overmijFoto.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    overmijImg.style.transition = 'transform 0.8s ease-out';

    animateOnScroll(overmijSection, () => {
        overmijTekst.style.opacity = 1;
        overmijTekst.style.transform = 'translateX(0)';

        overmijFoto.style.opacity = 1;
        overmijFoto.style.transform = 'translateX(0)';

        setTimeout(() => {
            overmijImg.style.transform = 'scale(1)';
        }, 200);
    });
}

function animateOnScroll(element, callback) {
    if (!element) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback();
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(element);
}



const headerBox = document.getElementById('projecten-header-box');

if (headerBox) {
    headerBox.style.opacity = 0;
    headerBox.style.transform = 'translateY(40px)';
    headerBox.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

    animateOnScroll(headerBox, () => {
        headerBox.style.opacity = 1;
        headerBox.style.transform = 'translateY(0)';
    });
}



const projects = document.querySelectorAll('.project');

if (projects.length > 0) {
    projects.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(40px) scale(0.95)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        card.dataset.delay = index * 150;
    });

    projects.forEach(card => {
        animateOnScroll(card, () => {
            const delay = Number(card.dataset.delay);
            setTimeout(() => {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0) scale(1)';
            }, delay);
        });
    })
};

const icon = document.getElementById('turkse-icon');
const maan = document.getElementById('maan');
const ster = document.getElementById('ster');

if (icon && maan && ster) {


    icon.style.opacity = 0;
    icon.style.transition = "opacity 1s ease-out";

    maan.style.strokeDasharray = 300;
    maan.style.strokeDashoffset = 300;
    maan.style.transition = "stroke-dashoffset 2s ease-out";

    ster.style.strokeDasharray = 300;
    ster.style.strokeDashoffset = 300;
    ster.style.transition = "stroke-dashoffset 2s ease-out 0.5s";


    setTimeout(() => {
        icon.style.opacity = 1;
        maan.style.strokeDashoffset = 0;
        ster.style.strokeDashoffset = 0;
    }, 200);


    setTimeout(() => {
        icon.style.transition = "transform 2s ease-in-out";
        icon.style.transform = "scale(1.15) rotate(10deg)";
    }, 2500);

    setTimeout(() => {
        icon.style.transform = "scale(1)";
    }, 4500);
}