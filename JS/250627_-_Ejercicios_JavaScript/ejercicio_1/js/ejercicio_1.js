// Autor: Alejandro Zapata
// Fecha: 27/06/2025
// Descripción: Programa que calcule el coste total de un viaje, incluyendo los gastos de alojamiento, alimentación y entretenimiento.

function calcularCosteViaje() {

    // Solicitud de datos al usuario    
    let costeAlojamiento = parseFloat(prompt("Ingrese el coste del alojamiento por noche:"));
    if (costeAlojamiento === null || isNaN(costeAlojamiento)) {
        console.log("Operación cancelada o valor inválido. Programa terminado.");
        return; // Esto terminará la ejecución del script
    }

    let costeAlimentacion = parseFloat(prompt("Ingrese el coste diario de alimentación:"));
    if (costeAlimentacion === null || isNaN(costeAlimentacion)) {
        console.log("Operación cancelada o valor inválido. Programa terminado.");
        return;
    }
    let costeEntretenimiento = parseFloat(prompt("Ingrese el coste total de entretenimiento:"));
    if (costeEntretenimiento === null || isNaN(costeEntretenimiento)) {
        console.log("Operación cancelada o valor inválido. Programa terminado.");
        return;
    }

    // Cálculo del coste total del viaje    
    let costeTotalViaje = costeAlojamiento + costeAlimentacion + costeEntretenimiento;

    // Mostrar el resultado
    const costeTotalFormat = costeTotalViaje.toFixed(2); // Formatea el resultado a dos decimales
    alert(`El coste total del viaje es: ${costeTotalFormat} €`);
    console.log(`El coste total del viaje es: ${costeTotalFormat} €`);
}

calcularCosteViaje(); // Llama a la función para ejecutar el cálculo del coste del viaje