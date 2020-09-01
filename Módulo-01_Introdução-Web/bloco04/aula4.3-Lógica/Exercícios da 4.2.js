// QUESTÃO 01

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com uma função console.log();

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log (numbers[i]);
// }

//QUESTÇAO 02

// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

// let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let plusNumbers = 0;

// for (let i = 0; i < numbers2.length; i += 1) {
//   plusNumbers += numbers2[i];
// }
// console.log (`A soma é ${plusNumbers}`);

//QUESTÃO 03

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let plusNumbers3 = 0;
// let quantify = 0;

// for (let i = 0; i < numbers3.length; i += 1) {
//   plusNumbers3 += numbers3[i];
// }

// quantify = numbers3.length;
// let media = plusNumbers3 / quantify;

// console.log(`A soma é ${plusNumbers3}`);
// console.log (`São ${quantify} unidades`)
// console.log (`Minha média é ${media}`)

// QUESTÃO 04

// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima uma mensagem: "valor menor ou igual a 20";

// let numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let plusNumbers4 = 0;
// let quantify = 0;

// for (let i = 0; i < numbers4.length; i += 1) {
//   plusNumbers4 += numbers4[i];
// }

// quantify = numbers4.length;
// let media = plusNumbers4 / quantify;

// console.log(`A soma é ${plusNumbers4}`);
// console.log(`São ${quantify} unidades`);
// console.log(`Minha média é ${media}`);

// if (media > 20) {
//   console.log("Valor maior que 20");
// } else {
//   console.log("Valor menor ou igual a 20");
// }

// QUESTÃO 05

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let numbers5 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let highestValue = numbers5[0];

// for (let i = 0; i < numbers5.length; i += 1) {
//   if ( numbers5[i] > highestValue ) {
//     highestValue = numbers5[i];
//   }
// }
// console.log (`O valor mais alto é ${highestValue}`);

// QUESTÃO 06

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers6 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let countImpar = 0;

// for ( let i = 0; i < numbers6.length; i += 1 ) {
//   if (numbers6[i] % 2 !== 0) {
//     countImpar += 1;
//   } else if ( countImpar == 0) {
//     console.log ("nenhum valor ímpar encontrado")
//   }
// }
// console.log(`Quantidade de números ímpares é ${countImpar}`);

// QUESTÃO 07

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let numbers7 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let smallestValue = numbers7[0];

// for ( let i = 0; i < numbers7.length; i += 1 ) {
//   if (numbers7[i] < smallestValue) {
//     smallestValue = numbers7[i];
//   }
// }
// console.log (`O menor valor é ${smallestValue}`);

// QUESTÃO 8

// Utilizando for, crie uma matriz que vá de 1 até 25 e imprima o resultado;

// let numbers8 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let newNumbers = [];

// for ( let i = 1; i < 26; i += 1 ) {
//   newNumbers.push(i);
// }
// console.log (newNumbers);

//  QUESTÃO 09

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

// let newNumbers = [];

// for ( let i = 1; i < 26; i += 1 ) {
//   newNumbers.push(i / 2);
// }
// console.log (newNumbers);

// BONUS 01

// Ordene o array numbersem ordem crescente e imprima seus valores;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for ( let i =1; i < numbers.length; i +=1 ) {
//   for ( let y = 0; y < i; y += 1) {
//     if ( numbers[i] < numbers[y] ) {
//       let value = numbers[i];
//       numbers[i] = numbers[y];
//       numbers[y] = value;
//     }
//   }
// }

// console.log (numbers);

// BONUS 02

// Ordene o array numbersem ordem decrescente e imprima seus valores;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 1; i < numbers.length; i += 1) {
//   for (let y = 0; y < numbers.length; y += 1 ) {
//     if (numbers[i] > numbers[y]) {
//       let value = numbers[i];
//       numbers[i] = numbers[y];
//       numbers[y] = value;
//     }
//   }
// }
// console.log(numbers);

// BONUS 03

// Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deve ser igual ao valor correspondente no array numbersmultiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deve ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deve ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deve ser feita por 2. Faça isso utilizando o formétodo push. O resultado deve ser o array abaixo:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newArray = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i + 1]) {
    newArray.push(numbers[i] * numbers[i + 1]);
  } else {
    newArray.push(numbers[i] * 2);
  }
}

console.log(newArray);
