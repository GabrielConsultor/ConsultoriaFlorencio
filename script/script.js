document.getElementById('menu-toggle').addEventListener('click', function() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('show');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navbar').classList.remove('show');
  });
}); 

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuToggle.contains(e.target) && navbar.classList.contains('show')) {
    navbar.classList.remove('show');
  }
});

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  navbar.classList.toggle('show');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('show');
  });
});

document.getElementById('meu-formulario-visible').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  
  try {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    const response = await fetch('/', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      form.reset();
      
      const successMessage = document.createElement('div');
      successMessage.textContent = 'Mensagem enviada com sucesso!';
      successMessage.style.color = 'green';
      successMessage.style.marginTop = '15px';
      successMessage.style.padding = '10px';
      successMessage.style.borderRadius = '5px';
      successMessage.style.backgroundColor = '#f0fff0';

      submitBtn.parentNode.insertBefore(successMessage, submitBtn.nextSibling);

      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    } else {
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  } catch (error) {
    alert('Erro de conexão. Tente novamente.');
  } finally {
    if (submitBtn && originalText) {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }
});