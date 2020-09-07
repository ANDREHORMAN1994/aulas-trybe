//QUESTÃO 06
//Escreva um programa que receba o nome de uma 
//peça de xadrez e retorne os movimentos que ela faz.

//Letras Maiúsculas e Minúsculas

let xadrez = "cavalo"

// if (xadrez.toLowerCase()) {
//   console.log ("Anda uma casa")
// } else {
//   console.log ("Essa é outra peça")
// }

switch (xadrez.toLowerCase()) {
case "peão":
  console.log ("Anda uma casa");
  break;
default:
  console.log ("Essa é outra peça");
break;
}

// O SWITCH É UTILIZADO DE FORMA ISOLADA,
//AVALIA O VALOR DE UMA VARIÁVEL ESPECÍFICA.