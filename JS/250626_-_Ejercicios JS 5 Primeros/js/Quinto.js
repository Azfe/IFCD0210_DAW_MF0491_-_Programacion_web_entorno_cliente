function eliminarDuplicados(array) {
    const unicos = [];
    for (let i = 0; i < array.length; i++) {
      if (unicos.indexOf(array[i]) === -1) {
        unicos.push(array[i]);
      }
    }
    return unicos;
  }
  
  const numeros = [1, 2, 2, 3, 4, 4, 5];
  const resultado = eliminarDuplicados(numeros);
  console.log(`Resultado final ${resultado}`); 
  
  // Imprime [1, 2, 3, 4, 5]
