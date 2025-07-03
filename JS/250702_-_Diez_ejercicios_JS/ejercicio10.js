function miFuncion() {

    let numero = parseInt(prompt("Ingresa un número:"));

    let numPar = numero % 2;

    if (numPar === 0) {
        alert(numero + " es número par");
    } else {
        alert(numero + " es número impar");
    }
}