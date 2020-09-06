//QUESTÃO 07
// Utilizando for, descubra qual o menor valor
// contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];
let maiorNumero = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] <= menorNumero) {
    menorNumero = numbers[i];
  }
}
console.log(`O menor número do Array é ${menorNumero}`);

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] >= maiorNumero) {
    maiorNumero = numbers[i];
  }
}

console.log(`Maior número do Array é ${maiorNumero}`);
