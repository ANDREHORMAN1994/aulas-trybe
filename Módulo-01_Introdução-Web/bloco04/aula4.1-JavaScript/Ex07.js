//QUESTÃO 07
// Escreva um programa que converte uma nota dada em porcentagem 
// (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro 
// e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 49;

if (nota < 0 || nota > 100) {
  console.log ("ERRO, Sua Nota não foi computada")
} else if (nota >= 90) {
  console.log (`Tirou A, Sua nota ${nota} é >= a 90%`)
} else if (nota >= 80) {
  console.log (`Tirou B, Sua nota ${nota} é >= a 80%`)
} else if (nota >= 70) {
  console.log (`Tirou C, Sua nota ${nota} é >= a 70%`)
} else if (nota >= 60) {
  console.log (`Tirou D, Sua nota ${nota} é >= a 60%`)
} else if (nota >= 50) {
  console.log (`Tirou E, Sua nota ${nota} é >= a 50%`)
} else {
  console.log (`Tirou F, Sua nota ${nota} é < a 50%`)
}