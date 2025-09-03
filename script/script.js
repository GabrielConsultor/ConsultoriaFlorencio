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
document.getElementById('meu-formulario-visible').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  
  try {
    // Mostrar indicador de carregamento (opcional)
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
      // Limpa os campos do formulário
      form.reset();
      
      // Mostra mensagem de sucesso
      const successMessage = document.createElement('div');
      successMessage.textContent = 'Mensagem enviada com sucesso!';
      successMessage.style.color = 'green';
      successMessage.style.marginTop = '15px';
      successMessage.style.padding = '10px';
      successMessage.style.borderRadius = '5px';
      successMessage.style.backgroundColor = '#f0fff0';
      
      // Insere a mensagem após o botão de submit
      submitBtn.parentNode.insertBefore(successMessage, submitBtn.nextSibling);
      
      // Remove a mensagem após alguns segundos
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    } else {
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  } catch (error) {
    alert('Erro de conexão. Tente novamente.');
  } finally {
    // Restaurar botão (se você adicionou o indicador de carregamento)
    if (submitBtn && originalText) {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }
});