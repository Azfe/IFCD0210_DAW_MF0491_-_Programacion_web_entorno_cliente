let persona = parseInt(prompt("Ingresa número comensales:"));

let patata = persona * 200;

patata = patata / 1000;

let huevo = patata * 5;
let cebolla = patata * 300;

alert(
    "Personas: " + persona + "\n" +
    "Patatas: " + patata.toFixed(2) + " kg\n"
    + "Huevos: " + huevo.toFixed(2) + "\n" +
    "Cebolla: " + cebolla.toFixed(2) + " gramos."
);