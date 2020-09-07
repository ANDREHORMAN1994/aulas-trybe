//QUESTÃO 03
//Faça um programa que retorne o maior de três números. 
//Defina no começo do programa três variáveis com os valores 
//que serão comparados.

let a = 100;
let b = 50;
let c = 30;

if (a>b && a>c) {
  console.log (`${a} é maior que ${b} e ${c}`);
} else if (b>a && b>c) {
  console.log (`${b} é maior que ${a} e ${c}`);
} else {
  console.log (`${c} é maior que ${a} e ${b}`);
}
