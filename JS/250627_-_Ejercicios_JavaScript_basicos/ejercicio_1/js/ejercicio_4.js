// Autor: Alejandro Zapata
// Fecha: 27/06/2025
// Descripción: Crea un programa que calcule el precio final de un producto después de aplicarle un descuento.

function calcularPrecioConDescuento() {

    const precioOriginal = parseFloat(prompt("Ingrese el precio original del producto: (€)"));
    const descuento = parseFloat(prompt("Ingrese el porcentaje de descuento: (%)"));

    // Calcular el precio final
    const precioFinal = precioOriginal - (precioOriginal * (descuento / 100));

    // Formatear el resultado a dos decimales
    const precioFinalFormat = precioFinal.toFixed(2);

    // Mostrar el resultado
    console.log(`El precio final del producto después de aplicar un descuento del ${descuento}% es: ${precioFinalFormat}€.`);

}

// Invocar la función
calcularPrecioConDescuento();