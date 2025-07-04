// Ejercicio 1: Conversor de Temperaturas
// Este script permite convertir temperaturas entre Celsius y Fahrenheit

// Función para convertir de Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Función para convertir de Fahrenheit a Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Función principal para realizar la conversión
function convertTemperature() {
    const conversionType = document.getElementById('conversionType').value;
    const temperatureInput = document.getElementById('temperature').value;
    const resultDiv = document.getElementById('result');

    // Validar que se haya ingresado una temperatura
    if (temperatureInput === '' || isNaN(temperatureInput)) {
        resultDiv.textContent = 'Por favor, ingresa una temperatura válida.';
        resultDiv.className = 'result error';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let result;
    let resultText;

    // Realizar la conversión según el tipo seleccionado
    if (conversionType === '1') {
        // Celsius a Fahrenheit
        result = celsiusToFahrenheit(temperature);
        resultText = `${temperature} grados Celsius equivalen a ${result.toFixed(1)} grados Fahrenheit.`;
    } else {
        // Fahrenheit a Celsius
        result = fahrenheitToCelsius(temperature);
        resultText = `${temperature} grados Fahrenheit equivalen a ${result.toFixed(1)} grados Celsius.`;
    }

    // Mostrar el resultado
    resultDiv.textContent = resultText;
    resultDiv.className = 'result success';
}

// Función para limpiar los campos
function clearFields() {
    document.getElementById('temperature').value = '';
    document.getElementById('result').textContent = 'Selecciona el tipo de conversión e ingresa una temperatura';
    document.getElementById('result').className = 'result';
}

// Permitir conversión al presionar Enter
document.getElementById('temperature').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        convertTemperature();
    }
});

// Validar entrada en tiempo real
document.getElementById('temperature').addEventListener('input', function () {
    const value = this.value;
    if (value !== '' && !isNaN(value)) {
        document.getElementById('result').textContent = 'Presiona "Convertir" para ver el resultado';
        document.getElementById('result').className = 'result';
    }
});