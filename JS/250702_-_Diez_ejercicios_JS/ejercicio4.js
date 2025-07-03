let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));
let num3 = parseInt(prompt("Introduce el tercer número:"));

let media = (num1 + num2 + num3) / 3;

let mediaRedondeada = media.toFixed(2);

console.log("La media de los números es: " + mediaRedondeada);