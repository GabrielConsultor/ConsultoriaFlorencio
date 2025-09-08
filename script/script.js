document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navbar.classList.toggle('show');
    });
  }

  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (navbar && menuToggle && navbar.classList.contains('show')) {
      if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
        navbar.classList.remove('show');
      }
    }
  });

  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const formData = new FormData(form);
      const body = new URLSearchParams(formData).toString();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      try {
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        const response = await fetch('/', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: body 
        });

        if (response.ok) {
          // Disparar eventos de conversão antes do redirecionamento
          if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
              'send_to': 'AW-17529493275/hWlTCL7OwpQbEJuu26ZB',
              'value': 3.0,
              'currency': 'BRL'
            });
            
            gtag('event', 'form_submission', {
              'form_name': 'contact'
            });
          }
          
          // Redirecionar para página de agradecimento - isso para a execução do código atual
          window.location.href = '/obrigado.html';
          return; // Importante: para a execução aqui
          
        } else {
          alert('Erro ao enviar mensagem. Tente novamente.');
        }
      } catch (error) {
        console.error('Erro de conexão:', error);
        alert('Erro de conexão. Tente novamente.');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }
});