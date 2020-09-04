// QUESTÃO 07

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: "trybe" e "be"
// Valor esperado no retorno da função: true
// verificaFimPalavra("trybe", "be");
// Retorno esperado: true
// verificaFimPalavra("joaofernando", "fernan");
// Retorno esperado: false

function frase(word, ending) {
  let arrayWord = word.split("");
  let arrayEnding = ending.split("");
  let avaliation = true;

  for (let i = 0; i < arrayWord.length; i += 1) {
    if (arrayWord[arrayWord.length - arrayEnding.length + i] !== arrayEnding[i]) {
      avaliation = false;
    }
  }
  console.log(avaliation);
}

frase("trybe", "ybe");
