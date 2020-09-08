// QUESTÃO 04

// 4- Depois, faça uma pirâmide com n asteriscos de base:
// Copiar
// n = 5

//   *
//  ***
// *****

let n;
let symbol = "*";
let space = " ";
let message = "";

function question04(n) {
  let middle;
  let left;
  let right;

  if (n % 2 == 0) {
    console.log("Seu número é par");
    middle = n / 2;
    left = middle;
    right = middle;
  } else {
    console.log("Seu número é impar");
    middle = (n + 1) / 2;
    left = middle;
    right = middle;
  }
  for (let i = 0; i <= middle; i +=1) {
    for (let j = 1; j <= n; j += 1) {
      if (j > left && j < right) {
        message += symbol;
      } else {
        message += space;
      }
    }
    console.log (message);
    message = "";
    left -= 1;
    right += 1;
  }
}
question04(5)
