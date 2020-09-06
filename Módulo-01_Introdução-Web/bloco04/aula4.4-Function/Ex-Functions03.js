// QUESTÃO 03

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function menorValor (array) {
  let smallestValue = array[0];
  let smallestIndice = 0;

  for (let i in array) {
    if(smallestValue > array[i]) {
      smallestValue = array[i];
      smallestIndice = i;
    }
  }
  console.log(`O menor valor é ${smallestValue}`);
  console.log(`A posição do valor é ${smallestIndice}`);
}

menorValor ([2, 4, 6, 7, 10, 0, -3]);
