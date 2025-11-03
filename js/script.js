// ===== ANIMAÇÃO DE SCROLL =====
// Detecta quando uma seção entra na tela e adiciona a classe "show"
const sections = document.querySelectorAll('.fade-section');

function fadeInOnScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('show');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// ===== ANIMAÇÃO DE DIGITAÇÃO =====
const text = "Arthur Alves | Análise e Desenvolvimento de Software";
const typingElement = document.getElementById("typing");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 0);
    }
}

window.addEventListener('load', typeEffect);
