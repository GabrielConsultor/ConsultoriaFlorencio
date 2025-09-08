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
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      try {
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        // Enviar o formulário diretamente sem Fetch API
        // O Netlify Forms processará automaticamente o envio
        // já que temos os atributos data-netlify e data-netlify-honeypot
        
        // Simular um atraso para mostrar o feedback
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Disparar eventos de conversão
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
        
        // Redirecionar para página de agradecimento
        window.location.href = '/obrigado.html';
        
      } catch (error) {
        console.error('Erro no processamento:', error);
        alert('Ocorreu um erro inesperado. Por favor, tente novamente.');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }
});