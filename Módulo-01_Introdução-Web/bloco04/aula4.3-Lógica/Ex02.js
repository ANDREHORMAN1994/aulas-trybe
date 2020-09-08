// QUESTÃO 02

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let n;
let symbol = "*";
let newSymbol = "";

function question02(n) {
  for (let i = 0; i < n; i += 1) {
    newSymbol += symbol;
    console.log(newSymbol);
  }
}
question02(5);
