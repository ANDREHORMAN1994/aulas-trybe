// EXAMPLE 01
const assert1 = require('assert');

assert1.strictEqual(50, 50); // OK
assert1.notStrictEqual(50, 70, "Erro 50 !== 70"); // AssertionError: 50 == 70

// EXAMPLE 02
const assert2 = require('assert');
const { throws } = require('assert');

function division(x, y) {
  return x / y;
}

const expected2 = division(9, 3);

assert2.strictEqual(expected2, 3, 'Mensagem customizada do erro');

// EXAMPLE 03
const assert3 = require('assert');

function add(a, b) {
  return a + b;
}

const expected3 = add(1, 2);

assert3(expected3 === 3, 'one plus two is three');
assert3.ok(expected3 === 3, 'one plus two is three');
assert3.strictEqual(expected3, 3, 'one plus two is three');
assert3.notStrictEqual(expected3, 4, 'one plus two is three (NOT Four!)');

// EXAMPLE 04
const assert4 = require('assert');

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert4.deepStrictEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert4.deepStrictEqual(person1, person2, 'these two objects are the same');

const person3 = { name: 'john', age: 19 };

assert4.notDeepStrictEqual(person1, person3, 'these two objects are different');

// EXAMPLE 5
const assert5 = require('assert');

function division5(x, y) {
  if (y === 0) {
    throw new Error ('y must not be 0, try other value');
  } else {
    return x / y;
  }
}

assert5.throws(() => { division5(10, 0); }, /^Error: parameter y must not be 0$/); // OK
