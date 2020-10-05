const findTheNeedle = (array, string) => {
  let position = -1;
  for (let i =0; i < array.length; i+= 1) {
    if (string === array[i]) {
      position = i;
    }
  }
  return position;
}
console.log (findTheNeedle(['house', 'train', 'slide', 'needle', 'book'], 'needle'));

const assert = require('assert');
// escreva a função findTheNeedle aqui

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);