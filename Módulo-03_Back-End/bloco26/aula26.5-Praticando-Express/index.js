/*
Atividade 4:
Rota: /user/:name
Objetivo: Deve validar se o usuário existe e, caso exista, deve retornar os comentários feitos por ele. Caso não exista, deve retornar um status de erro com uma mensagem user not found. .
*/

const express = require('express');
const data = require('./data');

const app = express();

app.get('/user/:name', (req, res) => {
  const { name } = req.params;
  const validateUser = data.some((person) => person.user === name);

  if (!validateUser) {
    return res.status(404).send('user not found.');
  }

  const person = data.find((person) => person.user === name);
  const comments = person.comments;
  const obj = {};

  comments.forEach((comment, index) => {
    obj[index] = comment;
  })
  
  return res.status(200).json(obj);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));
