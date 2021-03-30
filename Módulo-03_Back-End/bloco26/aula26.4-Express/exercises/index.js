const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs').promises;
const signUp = require('./signUp');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  const { authorization } = req.headers;
  if (authorization && authorization.length === 16) {
    return next();
  } else {
    return res.status(401).json({ message: 'Token inválido!' });
  }
})

app.use('/', signUp);

app.get('/ping', (req, res) => {
  res.json({
    message: 'Pong!',
  });
});

app.post('/hello', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) {
    res.status(200);
    res.json({
      message: `Hello, ${name}!`,
    });
  } else {
    res.status(401).json({
      message: 'Unauthorized',
    });
  }
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({
    message: `Seu nome é ${name} e você tem ${age} anos de idade`,
  });
});

const readSimpsons = async () => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(simpsons);
};

app.get(
  '/simpsons',
  rescue(async (req, res) => {
    const arraySimpsons = await readSimpsons();
    res.status(200).json(arraySimpsons.map((simpson) => simpson.name));
  }),
);

app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const arraySimpsons = await readSimpsons();
    if (arraySimpsons.some((simpson) => simpson.id === id)) {
      res.status(200).json(arraySimpsons.find((simpson) => simpson.id === id));
    } else {
      res.status(501).send([]);
    }
  }),
);

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;
    const arraySimpsons = await readSimpsons();
    if (arraySimpsons.every((simpson) => simpson.id != id)) {
      arraySimpsons.push({ id, name });
      res.status(200).json(arraySimpsons);
    } else {
      res.status(400).send('id já existe');
    }
  }),
);

app.use('*', (req, res) => {
  res.status(404).send('status 404 Not Found');
});

app.use((err, req, res, next) => {
  const message = `Algo deu Errado, Erro: ${err.message}`;
  res.status(500).send(message);
});

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});
