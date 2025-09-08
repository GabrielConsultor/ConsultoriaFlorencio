document.addEventListener('DOMContentLoaded', function() {
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

    const animateElements = function() {
        const elements = document.querySelectorAll('.thank-you-content > *');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    };

    const contentElements = document.querySelectorAll('.thank-you-content > *');
    contentElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    setTimeout(animateElements, 300);
});