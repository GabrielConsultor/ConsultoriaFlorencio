// obrigado.js
document.addEventListener('DOMContentLoaded', function() {
    // Disparar a conversão do Google Ads quando a página carregar
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-17529493275/hWlTCL7OwpQbEJuu26ZB',
            'value': 3.0,
            'currency': 'BRL'
        });
        
        console.log('Conversão do Google Ads registrada com sucesso!');
    } else {
        console.log('Google Ads tag não encontrada.');
    }

    // Animação de entrada dos elementos
    const animateElements = function() {
        const elements = document.querySelectorAll('.thank-you-content > *');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    };

    // Configurar estado inicial para animação
    const contentElements = document.querySelectorAll('.thank-you-content > *');
    contentElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Iniciar animação após um pequeno delay
    setTimeout(animateElements, 300);
});