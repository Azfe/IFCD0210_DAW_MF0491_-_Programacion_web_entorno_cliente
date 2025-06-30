// Autor: Alejandro Zapata
// Fecha: 27/06/2025
// Descripción: Escribe un programa que solicite al usuario dos números y luego muestre todos los números primos que hay entre esos dos números, incluyendo los extremos.

// Función para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) return false; // Los números menores o iguales a 1 no son primos

    // Verificar si el número es divisible por algún número entre 2 y su raíz cuadrada
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Si es divisible, no es primo
        }

        return true; // Si no es divisible por ningún número, es primo
    }
}

function calcularPrimos() {

    // Solicitar dos números al usuario
    let inicio = parseInt(prompt("Ingrese el número inicial del rango:"));
    let fin = parseInt(prompt("Ingrese el número final del rango:"));

    // Asegurarse de que num1 sea menor que num2
    inicio = Math.min(inicio, fin);
    fin = Math.max(inicio, fin);

    // Validar que los números sean enteros
    if (isNaN(inicio) || isNaN(fin) || !Number.isInteger(inicio) || !Number.isInteger(fin)) {
        alert("Por favor, ingrese números enteros válidos.");
        return;
    }

    // Mostrar los números primos dentro del rango
    console.log("Números primos entre " + inicio + " y " + fin + ":");

    // Array para almacenar los números primos    
    let primos = [];

    for (let i = inicio; i <= fin; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    
    // Mostrar los números primos encontrados
    if (primos.length > 0) {
        console.log(`Los números primos entre ${inicio} y ${fin} son: ${primos.join(", ")}.`);
    } else {
        console.log(`No se encontraron números primos entre ${inicio} y ${fin}.`);
    }
}

// Invocar la función
calcularPrimos();