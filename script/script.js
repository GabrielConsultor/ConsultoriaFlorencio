// Menu Hamburguer
document.getElementById('menu-toggle').addEventListener('click', function() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('show');
});

// Fechar o menu ao clicar em um link (opcional)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navbar').classList.remove('show');
  });
}); 
// Fechar menu ao clicar fora dele
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuToggle.contains(e.target) && navbar.classList.contains('show')) {
    navbar.classList.remove('show');
  }
});

// Alternar menu
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  navbar.classList.toggle('show');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('show');
  });
});

// FORMULÁRIO - NETLIFY FORMS
document.getElementById('contactForm').addEventListener('submit', function(e) {
  
  // Mostra a mensagem de sucesso
const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede o redirecionamento padrão

    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formData
    })
    .then(() => {
      // Mostra a mensagem
      message.style.display = "block";

      // Limpa os campos do formulário
      form.reset();
      
      setTimeout(() => {
        message.style.display = "none";
      }, 3000);
    })
    .catch(() => {
      alert("❌ Ocorreu um erro. Tente novamente.");
    });
  });
});