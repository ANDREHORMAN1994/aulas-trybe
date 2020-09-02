// QUESTÃO 05

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

let geral = {

info: {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
},

info2: {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
},

};

// geral.info.recorrente = "Sim"

for (let i in geral.info) {
  if (geral.info[i] === geral.info.recorrente && geral.info.recorrente == "Sim" && geral.info2.recorrente == "Sim") {
    console.log ("Ambos são iguais")
  } else {
    console.log (`${geral.info[i]} e ${geral.info2[i]}`)
  }
}
