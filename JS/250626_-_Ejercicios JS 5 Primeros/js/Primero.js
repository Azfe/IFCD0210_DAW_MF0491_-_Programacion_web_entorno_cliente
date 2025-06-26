//Definimos la función

function sumarElementos(array) {
  let suma = 0; //Preparamos una variable que acumule la suma
  for (let i = 0; i < array.length; i++) {
    //Recorremos el array con un For
    suma += array[i];
  }
  return suma; //Retornamos el acumulado Total.
}

const numeros = [1, 2, 3, 4, 5]; //Creamos el array con 5 valores
const resultado = sumarElementos(numeros); // Resultados llama a la función y le pasa los valores del array numeros como parametros.

console.log(`El total de la suma es ${resultado}`); //Imprimimos resultado personalizado (plantilla Texto).

// Imprime. El total de la suma es 15
