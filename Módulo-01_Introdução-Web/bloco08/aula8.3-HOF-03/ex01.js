const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

// Dada uma matriz de matrizes, transforme em uma única matriz.

function flatten() {
  return arrays.reduce((accumulator, currentValue) => {
    currentValue.map((items) => accumulator.push(items));
    return accumulator;
  }, []);
}
console.log(flatten());

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
