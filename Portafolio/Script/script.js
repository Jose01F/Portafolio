
function view_proejetsCif() {
    alert("Este proyecto aun no ha sido desplegado.");
    
}

const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu-right');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const typed = new Typed('#element', {
        strings: ['<i>Desarrollador Web.</i> ', 'Front End.', 'Bases de Datos.'],
        typeSpeed: 75,       // Velocidad de escritura (ms)
        startDelay: 100,     // Tiempo de espera inicial (ms)
        backSpeed: 55,       // Velocidad de borrado (ms)
        smartBackspace: true, // Borrado inteligente
        shuffle: false,      // Alterar el orden de los textos
        backDelay: 1500,     // Tiempo entre frase y frase (ms)
        loop: true,          // Repetir la animación
        loopCount: Infinity, // Cantidad de repeticiones (Infinito)
        showCursor: true,    // Mostrar cursor
        cursorChar: '|',     // Caracter del cursor
        contentType: 'html'
    });


