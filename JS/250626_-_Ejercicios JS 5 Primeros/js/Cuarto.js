function buscarElemento(array, elemento) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}

const frutas = ["manzana", "banana", "naranja"];
const resultado1 = buscarElemento(frutas, "banana");
const resultado2 = buscarElemento(frutas, "uva");
console.log(resultado1); // Imprime true
console.log(resultado2); // Imprime false
