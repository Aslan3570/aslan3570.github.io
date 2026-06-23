const overmijSection = document.getElementById('overmij');
const overmijTekst = document.getElementById('overmij-tekst');
const overmijFoto = document.getElementById('overmij-foto');
const overmijImg = document.getElementById('overmij-img');


overmijTekst.style.opacity = 0;
overmijFoto.style.opacity = 0;

overmijTekst.style.transform = 'translateX(-50px)';
overmijFoto.style.transform = 'translateX(50px)';
overmijImg.style.transform = 'scale(0.9)';

overmijTekst.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
overmijFoto.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
overmijImg.style.transition = 'transform 0.8s ease-out';

const overmijObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            overmijTekst.style.opacity = 1;
            overmijTekst.style.transform = 'translateX(0)';


            overmijFoto.style.opacity = 1;
            overmijFoto.style.transform = 'translateX(0)';

            setTimeout(() => {
                overmijImg.style.transform = 'scale(1)';
            }, 200);


            overmijObserver.unobserve(overmijSection);
        }
    });
}, { threshold: 0.2 });

overmijObserver.observe(overmijSection);