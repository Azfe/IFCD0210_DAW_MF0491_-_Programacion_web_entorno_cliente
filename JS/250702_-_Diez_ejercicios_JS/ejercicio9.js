let varUno = parseInt(prompt("Ingresa la variable uno:"));
let varDos = parseInt(prompt("Ingresa la variable dos:"));

let cambiar = varUno;

varUno = varDos;
varDos = cambiar;

alert(
    "Variable uno: " + varUno + "\n" +
    "Variable dos: " + varDos
);