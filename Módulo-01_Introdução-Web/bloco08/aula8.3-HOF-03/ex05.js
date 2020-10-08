const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  let count = 0;
  names.reduce((acc, cur) => {
    for (i in cur) {
    cur[i] === 'a' || cur[i] === 'A' ? count += 1 : count
    }
  }, '');
  return count;
}
console.log(containsA());

assert.deepEqual(containsA(), 20);
