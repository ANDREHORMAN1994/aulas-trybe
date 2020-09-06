// QUESTÃO 04

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function maiorNome (array) {
  let highestName = array[0];

  for(let i in array){
    if (highestName.length < array.length) {
      highestName = array[i]
    }
  }
  console.log (`O maior nome é ${highestName}`)
}

maiorNome (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
