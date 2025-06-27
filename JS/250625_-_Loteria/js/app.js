// Autor: Alejandro Zapata
// Fecha: 26/06/2025
// Descripción: Este programa simula un sorteo de lotería generando 6 números

function resultadoLoteria() {
    // Declaración de variables
    const numerosGanadores = [];
    let numero;
    let opcion;

    console.log("====================================");
    console.log("¡Bienvenido al sorteo de la Lotería!");

    do {
        console.log("Seleccione una opción:");
        console.log("1. Generar números ganadores");
        console.log("2. Salir");
        // Solicita al usuario que ingrese una opción
        opcion = parseInt(prompt("Ingrese su opción (1 o 2):"));

        switch (opcion) {
            case 1:
                console.log("====================================");
                console.log("Generando números ganadores...");

                while (numerosGanadores.length < 6) {
                    // Genera un número aleatorio entre 1 y 49
                    numero = Math.floor(Math.random() * 49) + 1;

                    // Verifica si el número ya ha sido sorteado
                    if (!numerosGanadores.includes(numero)) {
                        numerosGanadores.push(numero); // Agrega el número a la lista de números ganadores
                    }
                }

                console.log("Números ganadores:"); // Mensaje para indicar que se mostrarán los números ganadores
                for (i = 0; i < numerosGanadores.length; i++) {
                    console.log(numerosGanadores[i]); // Imprime los números ganadores en la consola
                }

                numerosGanadores.length = 0; // Reinicia la lista de números ganadores para el próximo sorteo

                console.log("====================================");
                console.log("¡Gracias por participar!");
                break;
            case 2:
                console.log("====================================");
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("====================================");
                console.log("Opción no válida. Por favor, seleccione una opción válida.");
                break;
        }

    } while (opcion !== 2);
}

// Invocar la función para iniciar el sorteo
resultadoLoteria();