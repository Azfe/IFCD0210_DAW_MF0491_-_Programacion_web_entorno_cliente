function miFuncion() {
    const precio = parseFloat(prompt("Introduce el precio del producto:"));
    const iva = 16;
    let precioFinal = precio + (precio * iva / 100);

    precioFinal = precioFinal.toFixed(2); // Redondear a dos decimales

    console.log("El precio final es: " + precioFinal + "€");
    alert("El precio final es: " + precioFinal + "€");
}