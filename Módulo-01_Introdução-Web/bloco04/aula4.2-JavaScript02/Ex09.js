//QUESTÃO 09
// Utilizando o array criado no exercício anterior
// imprima o resultado da divisão de cada um dos
// elementos por 2.

let array = [];

for (let i = 1; i <= 25; i += 1) {
  array.push(i);
}
console.log(array);

let array2 = [];
for (let i = 0; i < array.length; i += 1) {
  array2.push(array[i] * 2);
}
console.log(array2);

let array3 = [];

for (let i = 0; i < array.length; i += 1) {
  array3.push(array[i] / 2);
}
console.log(array3);
