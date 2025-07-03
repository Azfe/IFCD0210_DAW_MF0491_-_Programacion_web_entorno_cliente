let numLitros = parseFloat(prompt("Introduce el número de litros:"));
let numKm = parseFloat(prompt("Introduce el número de kilómetros:"));

let media = numLitros / numKm;

let mediaRedondeada = media.toFixed(2);

console.log("La media de consumo es: " + mediaRedondeada + " litros por kilómetro.");