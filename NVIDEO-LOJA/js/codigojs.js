document.addEventListener('DOMContentLoaded', () => {
    

    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            alert('Produto adicionado ao carrinho!');
        });
    });

    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            alert('Mensagem enviada com sucesso!');
            contactForm.reset(); 
        });
    }

});