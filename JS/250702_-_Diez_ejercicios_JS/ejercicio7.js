let unidad = parseInt(prompt("Introduce un número del 1 al 99:"));

const decenas = Math.floor(unidad / 10);
const unidades = unidad % 10;

alert("Decenas: " + decenas + ", Unidades: " + unidades);