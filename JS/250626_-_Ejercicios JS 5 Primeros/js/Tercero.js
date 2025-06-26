function filtrarPares(array) {
  const pares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i]);
    }
  }
  return pares;
}

const numeros = [1, 2, 3, 4, 5, 6];
const resultado = filtrarPares(numeros);
console.log(`Elresultado Pares ${resultado}`);

// Imprime [2, 4, 6]
