document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('bg-transparent');
        navbar.style.backgroundColor = 'rgba(4, 18, 36, 0.95)';
        navbar.style.transition = 'background-color 0.3s ease';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

const btnVerificar = document.querySelector('.encapsulamiento-section .btn-cyan');
if (btnVerificar) {
    btnVerificar.addEventListener('click', () => {
        alert('¡Instrucción verificada!  El proceso de encapsulamiento TCP/IP funciona correctamente.');
        btnVerificar.textContent = '¡Verificado ✓!';
        btnVerificar.style.backgroundColor = '#00ff88';
        btnVerificar.style.color = '#000';
    });
}