// QUESTÃO 01

// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome("arara");
// Retorno esperado: true
// verificaPalindrome("desenvolvimento");
// Retorno esperado: false

function palindromo(param1) {
  let array = param1.split("");
  let array2 = [];
  let reverso;

  for (let i = array.length - 1; i >= 0; i -= 1) {
    array2.push(array[i]);
  }

  reverso = array2.join("");
  console.log (`Sua Palavra é essa = ${param1}`)
  console.log (`Sua palavra invertida é essa = ${reverso}`);

  if (param1 == reverso) {
    console.log("É um palíndromo");
  } else {
    console.log("Não é um palíndromo");
  }
}

palindromo("ARARA");
