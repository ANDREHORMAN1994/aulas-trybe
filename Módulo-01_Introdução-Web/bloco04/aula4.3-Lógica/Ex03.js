// QUESTION 03

// Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n;
let symbol = "*";
let newSymbol = "";
let space = " ";

function question03(n) {
  let n2 = n;
  for (let i = 0; i < n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (j < n2) {
        newSymbol += space;
      } else {
        newSymbol += symbol;
      }
    }
    console.log (newSymbol);
    newSymbol = "";
    n2 -= 1;
  }
}
question03(5);
