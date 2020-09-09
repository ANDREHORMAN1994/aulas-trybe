// QUESTÃO 01

// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

let n;
let symbol = "*";
let array = [];

// function question01(n) {
//   // PRIMEIRO FOR = LINHA
//   for (let i = 1; i <= n; i += 1) {
//     array.push(symbol);
//   }
//   let joinArray = array.join("");
//   // PRIMEIRO FOR = COLUNA
//   for (let i = 1; i <= n; i += 1) {
//     console.log(joinArray);
//   }
// }
// question01(5);

let newSymbol = "";

function question01(n) {
  for (let i = 1; i <= n; i += 1) {
    // CONCATENANDO STRINGS
    newSymbol += symbol;
  }
  for (let i = 1; i <= n; i += 1) {
    console.log(newSymbol);
  }
}
question01(5);
