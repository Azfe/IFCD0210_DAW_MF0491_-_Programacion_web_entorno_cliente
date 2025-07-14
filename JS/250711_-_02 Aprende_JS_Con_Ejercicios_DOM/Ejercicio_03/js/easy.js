// Generación del número aleatorio entre 0 y 100
const targetNumber = Math.floor(Math.random() * 101);
console.log(targetNumber);

// Elementos del DOM
const dataInput = document.getElementById('data');
const validateButton = document.getElementById('validate');
const warningElement = document.getElementById('warning');
const ptsLabel = document.getElementById('pts-label');
const modal = document.getElementById('modal');
const ptsModal = document.getElementById('pts');
const btnClose = document.getElementById('btn-close');

// Variables del juego
let attempts = 0;
let points = 100;
let gameOver = false;

// Función para actualizar los puntos
function updatePoints() {
    ptsLabel.textContent = points;
}

// Función para mostrar mensaje de advertencia
function showWarning(message, type = 'info') {
    warningElement.textContent = message;

    // Remover clases anteriores
    warningElement.classList.remove('success', 'error', 'hint');

    // Agregar clase según el tipo
    if (type === 'success') {
        warningElement.classList.add('success');
    } else if (type === 'error') {
        warningElement.classList.add('error');
    } else if (type === 'hint') {
        warningElement.classList.add('hint');
    }
}

// Función para validar el número ingresado
function validateNumber() {
    if (gameOver) return;

    const userInput = parseInt(dataInput.value);

    // Validar que sea un número válido
    if (isNaN(userInput)) {
        showWarning('Por favor, ingresa un número válido', 'error');
        return;
    }

    // Validar que esté en el rango correcto
    if (userInput < 0 || userInput > 100) {
        showWarning('El número debe estar entre 0 y 100', 'error');
        return;
    }

    attempts++;

    // Verificar si es el número correcto
    if (userInput === targetNumber) {
        // ¡Ganaste!
        gameOver = true;
        showWarning('¡Correcto! Has ganado 🎉', 'success');
        showWinModal();

        // Deshabilitar input y botón
        dataInput.disabled = true;
        validateButton.disabled = true;

    } else {
        // Reducir puntos por intento fallido
        points = Math.max(0, points - 10);
        updatePoints();

        // Dar pista al usuario
        if (userInput < targetNumber) {
            showWarning(`Muy bajo. Intenta con un número mayor. Intentos: ${attempts}`, 'hint');
        } else {
            showWarning(`Muy alto. Intenta con un número menor. Intentos: ${attempts}`, 'hint');
        }

        // Verificar si se acabaron los puntos
        if (points <= 0) {
            gameOver = true;
            showWarning(`Se acabaron los puntos. El número era ${targetNumber}`, 'error');
            dataInput.disabled = true;
            validateButton.disabled = true;
        }
    }

    // Limpiar el input
    dataInput.value = '';

}

// Función para mostrar el modal de victoria
function showWinModal() {
    ptsModal.textContent = `Puntos obtenidos: ${points}`;
    modal.style.display = 'flex';
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listeners
validateButton.addEventListener('click', validateNumber);

// Permitir validar con Enter
dataInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        validateNumber();
    }
});