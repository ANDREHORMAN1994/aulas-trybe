// QUESTÃO 03

// Faça um for/in que mostre todas as chaves do objeto.
// Valor esperado no console:

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = "Sim"

for (let i in info) {
  console.log (i)
}