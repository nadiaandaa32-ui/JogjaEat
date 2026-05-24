document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true }); 
    }

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Matur Nuwun (Terima Kasih)! Pesan Anda telah kami terima.');
            form.reset();
        });
    }

    const observerOptions = { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                
                target.style.opacity = '1';
                target.style.transform = 'translateY(0)';
                
                observer.unobserve(target); 
            }
        });
    }, observerOptions);

    
    document.querySelectorAll('.card-custom, .testi-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)'; 
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});