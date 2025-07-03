
function solicitarNombre() {
    const nombre = prompt("Introduce tu nombre:");

    if (nombre !== null) {
        // alert("Has introducido: " + nombre);
        saludar(nombre);
    } else {
        alert("No ingresaste ningún dato.");
    }
}


function saludar() {    
    let saludo = "Hola, ";
    alert(saludo + nombre + "!");
}