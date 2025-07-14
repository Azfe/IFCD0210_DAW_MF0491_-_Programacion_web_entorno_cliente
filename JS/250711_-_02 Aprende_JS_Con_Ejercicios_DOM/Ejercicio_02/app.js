// Selección de elementos del DOM
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const modal = document.getElementById('modal');
const btnClose = document.getElementById('btn-close');

// Función para generar posición aleatoria
function getRandomPosition() {
    const maxX = window.innerWidth - 100; // Resta el ancho del botón
    const maxY = window.innerHeight - 50; // Resta la altura del botón

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    return { x, y };
}

// Función para mover el botón 'No'
function moveNoButton() {
    const position = getRandomPosition();

    noButton.style.position = 'absolute';
    noButton.style.left = position.x + 'px'
    noButton.style.top = position.y + 'px';
    noButton.style.transition = 'all 0.3s ease';
}

// Función para mostrar el modal
function showModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Evitar scroll cuando el modal está abierto
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none'
    document.body.style.overflow = 'auto';
}

// Event listeners
noButton.addEventListener('click', moveNoButton);
noButton.addEventListener('mouseenter', moveNoButton);

yesButton.addEventListener('click', showModal);

btnClose.addEventListener('click', closeModal);

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Inicialización
document.addEventListener('DOMContentLoaded', function () {
    // Asegurar que el modal esté oculto al cargar la página
    modal.style.display = 'none';

    // Configurar el botón "No" para que se pueda mover
    noButton.style.cursor = 'pointer';
    yesButton.style.cursor = 'pointer';

    // Agregar algo de estilo dinámico al botón "Sí" para hacerlo más atractivo
    yesButton.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.2s ease';
    });

    yesButton.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});