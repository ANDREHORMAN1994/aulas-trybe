// QUESTÃO BONUS 01

// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:

function bonus01(param1) {
  let romanos = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let number = "";
  let array = param1.split("");

  for (let i in array) {
    let list1 = array[i];
    let arrayList1 = [];
    for (let j in romanos) {
      if (list1 == romanos[j]) {
        arrayList1.push(list1);
      }
    }
  }
  arrayList1.join("");
  console.log(arrayList1);
}

bonus01(10);

