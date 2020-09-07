//QUESTÃO 04
//Faça um programa que, dado um valor definido numa variável, 
//retorne "positive" se esse valor for positivo, "negative" 
//se for negativo e "zero" caso contrário.

const a = "Meu nome é André";
let b = "Meu nome é Goku";
let c = "Meu nome é Naruto";

if (a) {
  console.log ("positive, " + a)
} else if (b !== a && c!==a) {
  console.log ("negative, " + "Esse não é seu nome")
} else {
  console.log ("zero")
}