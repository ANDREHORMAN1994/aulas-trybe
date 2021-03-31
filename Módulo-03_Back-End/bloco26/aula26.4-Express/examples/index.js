const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const fs = require('fs').promises;

const app = express();

// MIDDLEWARE PARA CONVERTER O BODY PARA JSON
app.use(bodyParser.json());

// O USE UTILIZA O MIDDLEWARE PARA TODAS ROTAS ABAIXO DELE
app.use((req, _res, next) => {
  console.log('Método utilizado ' + req.method);
  console.log('Caminho utilizado ' + req.path);
  next();
});

const dateTime = (req, _res, next) => {
  req.requestTime = Date.now();
  const responseText = `Request feito às ${req.requestTime}`;
  console.log(responseText);
  next();
};

app.use(dateTime);

app.get('/', (_req, res) => {
  res.send('HELLO WORLD - INTRODUÇÃO EXPRESS');
});

app.post('/', (req, res) => {
  const name = req.body.name;
  res.send(`Meu nome é ${name}`);
});

const langs = ['HTML, CSS, JS'];

app.get('/langs', (_req, res) => {
  res.send(langs);
});

app.post('/langs', (req, res) => {
  const newLang = req.body.lang;
  langs.push(newLang);
  res.send(`Nova linguagem adicionada, ${newLang}`);
});

// MIDDLEWARE ÚNICO SENDO REPASSADO PARA ROTA ABAIXO
const showId = (req, _res, next) => {
  console.log('id : ' + req.params.id);
  next();
};

app.get('/user/:id', showId, (req, res) => {
  res.send('HELLO USER ' + req.params.id);
});

// ROTA USANDO O EXPRESS RESCUE E O FS
app.get(
  '/:file',
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.file}`, 'utf-8');
    res.send(file);
  }),
);

// MIDDLEWARE DE ERRO
app.use((err, _req, res, _next) => {
  res.status(500).json({
    error: `ERROR: ${err.message}`,
  });
});

// PORTA DO APP
app.listen(3000, () => {
  console.log('App rodando na porta: 3000');
});
