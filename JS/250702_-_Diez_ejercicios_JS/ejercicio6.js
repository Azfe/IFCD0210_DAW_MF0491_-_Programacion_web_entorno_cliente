function convertirTiempo() {
    // Obtener valores de los inputs
    const horas = parseInt(document.getElementById('horas').value) || 0;
    const minutos = parseInt(document.getElementById('minutos').value) || 0;

    // Validar que los valores sean válidos
    if (horas < 0 || minutos < 0 || minutos > 59) {
        mostrarResultado('Por favor, introduce valores válidos (minutos entre 0-59)', true); // true indica un error
        return;
    }

    // Convertir todo a minutos primero
    let totalMinutos = minutos + (horas * 60);

    // Convertir minutos a segundos
    let segundos = totalMinutos * 60;

    // Mostrar resultado
    let mensaje = `${horas} horas y ${minutos} minutos = ${segundos.toLocaleString()} segundos`;
    mostrarResultado(mensaje, false);
}

function mostrarResultado(mensaje, esError) {
    let resultado = document.getElementById('resultado');
    resultado.textContent = mensaje;
    resultado.style.display = 'block';

    if (esError) {
        resultado.classList.add('error');
    } else {
        resultado.classList.remove('error');
    }
}

// Permitir conversión con Enter
document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        convertirTiempo();
    }
});