function encontrarMayor(array) {
  let mayor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  return mayor;
}

const numeros = [10, 5, 20, 8, 15];
const resultado = encontrarMayor(numeros);
console.log(`Este es el valor > ${resultado}`);

// Imprime Este es el valor > 20
