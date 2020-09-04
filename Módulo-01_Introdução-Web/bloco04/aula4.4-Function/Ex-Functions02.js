// QUESTÃO 02

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function maiorValor(array) {
  let highestValue = array[0];
  let highestIndice = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (highestValue < array[i]) {
      highestValue = array[i];
      highestIndice = i;
    }
  }
  console.log(`O maior valor é ${highestValue}`)
  console.log(`A posição do valor é ${highestIndice}`)
}

maiorValor([2, 3, 6, 7, 100, 15])
