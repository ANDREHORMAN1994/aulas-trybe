const sum = (a, b) => {
  let sumNumber;
  if (typeof a === 'string' || typeof b === 'string') {
    throw new Error('parameters must be numbers');
  } else {
    sumNumber = a + b;
  }
  return sumNumber;
};

console.log(sum(4, 5));

const assert = require('assert');

assert.strictEqual(sum(4, 5), 9, 'Erro no somatório');

assert.strictEqual(sum(0, 0), 0, 'Erro no somatório');

// assert.notStrictEqual(sum(4, '5'), 9);

assert.throws(() => {sum(100, '10');}, /^Error: parameters must be numbers$/);
