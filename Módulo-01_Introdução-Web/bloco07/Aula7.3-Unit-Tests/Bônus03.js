const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (array) => {
  let newArray = [];
  let numberMiddle = 0;

  if (array.length % 2 !== 0) {
    numberMiddle = (array.length - 1) / 2;
    newArray.push(array[numberMiddle]);
    // SPLICE PODE REMOVER ELEMENTOS E ADICIONAR EM UM ARRAY;
    // array.splice( posição X, quantidade Y de remoção a partir de X, elemento a ser adicionado);
    array.splice(numberMiddle, 1);
  } else {
    numberMiddle = array.length / 2;
    // SLICE PODE RECORTAR ELEMENTOS E ADICIONAR EM UM NOVO ARRAY;
    // array.slice(recorte entre X, até Y);
    newArray = array.slice(numberMiddle - 1, numberMiddle + 1);
    array.splice(numberMiddle - 1, 2);
  }
  return newArray;
};
const example = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
console.log(removeMiddle(example));
console.log(example);

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
