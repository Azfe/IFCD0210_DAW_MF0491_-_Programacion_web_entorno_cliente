// Autor: Alejandro Zapata
// Fecha: 27/06/2025
// Descripción: Crea un programa que convierta la edad de un perro a años humanos

function convertirEdadPerro() {
    // Solicitar la edad del perro al usuario
    let edadPerro = parseFloat(prompt("Ingrese la edad de su perro en años:"));
    
    // Validar si el usuario ha cancelado o ingresado un valor no numérico
    if (edadPerro === null || isNaN(edadPerro)) {
        console.log("Operación cancelada o valor inválido. Programa terminado.");
        return;
    }

    // Calcular la edad humana equivalente
    let edadHumana = edadPerro * 7;

    // Mostrar el resultado
    console.log(`La edad de su perro en años humanos es: ${edadHumana} años.`);
}

// Invocar la función para convertir la edad del perro
convertirEdadPerro();