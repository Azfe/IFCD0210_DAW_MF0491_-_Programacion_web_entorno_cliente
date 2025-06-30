// Autor: Alejandro Zapata
// Fecha: 27/06/2025
// Descripción: Crea un programa que calcule el IMC de una persona a partir de su peso y altura.

function calcularImc() {
    // Solicitar los datos de peso y altura al usuario
    const peso = parseFloat(prompt("Ingrese su peso: (kg)"));
    const altura = parseFloat(prompt("Ingrese su altura: (m)"));

    // Calcular IMC
    let imc = peso / (altura * altura);

    let imcFormat = imc.toFixed(2); // Formatear el resultado a dos decimales

    // Mostrar el resultado
    console.log(`Tu IMC es : ${imcFormat}.`);

    if(imcFormat < 18.5) {
        console.log("Estás por debajo del peso ideal.");
    }else if(imcFormat >= 18.5 && imcFormat < 24.9) {
        console.log("Tienes un peso normal.");
    } else if(imcFormat >= 25 && imcFormat < 29.9) {
        console.log("Tienes sobrepeso.");
    } else {
        console.log("Tienes obesidad.");
    }
}

// Invocar la función
calcularImc();