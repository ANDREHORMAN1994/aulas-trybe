const wordLengths = (param1) => {
  const newArray = [];
  for (let i = 0; i < param1.length; i += 1) {
    newArray.push(param1[i].length);
  }
  return newArray;
};
console.log(wordLengths(['sun', 'potato', 'roundabout', 'pizza']));
console.log(typeof wordLengths);

const assert = require('assert');
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
