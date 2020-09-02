// QUESTÃO 05

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function repetido(array) {
  let numberRepeat = array[0];
  let countNumbersEqual = 0;
  let countRepetitionsAll = 0;

  for (let i = 0; i < array.length; i += 1) {
    let list1 = array[i];

    for (let j = 1; j <= array.length; j += 1) {
      let list2 = array[j];
      // COMPARAÇÃO DOS DOIS FOR;
      // Vale lembrar que o Segundo FOR faz o LOOP inteiro para cada número da list1;
      if (list1 == list2) {
        countRepetitionsAll += 1;
      }
      // Após todo o LOOP do Segundo FOR terminar é que ele volta para o Primeiro FOR!!;
    }
    // VERIFICANDO SE  O NÚMERO QUE REPETIU X VZS É MAIOR DO QUE O NÚMEOR ANTERIOR
    if (countRepetitionsAll > countNumbersEqual) {
      countNumbersEqual = countRepetitionsAll;
      numberRepeat = array[i];
      // countNumbersEqual ele armazena quantas vzs o número anterior repetiu;
      // caso a proxima repetição não seja maior, o numberRepeat não vai alterar o valor;
      // permanecendo sempre aquele com mais repetições no segundo FOR
    }
    countRepetitionsAll = 0;
  }
  console.log(numberRepeat);
}

repetido([5, 4, 5, 2, 3, 2, 5, 5, 5, 8, 2, 3, 3, 5]);
