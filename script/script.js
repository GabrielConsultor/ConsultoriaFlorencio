// MENU HAMBURGUER 
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

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

// FORMULÁRIO
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  document.getElementById('formMessage').style.display = 'block';
  
  this.style.display = 'none';
  
  this.submit();
});