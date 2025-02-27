// Animação de exibição das seções
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden");
    const options = { threshold: 0.2 };
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Função para alternar o modo escuro
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Alterar ícone do botão
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// Exibir um pop-up ao enviar o formulário
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio real do formulário
    alert("Mensagem Enviada!"); // Exibe o pop-up
    this.reset(); // Limpa os campos do formulário após enviar
});






document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Função para mostrar os elementos ao rolar
    function handleScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.8) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible"); // Faz sumir ao rolar para baixo
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Garante que os elementos já apareçam se estiverem visíveis no carregamento
});






