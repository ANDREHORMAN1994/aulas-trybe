const express = require('express');
const Authors = require('./routers/authors');

const app = express();
const PORT = 3000;
const SUCESS = 200;

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(SUCESS).json({
    message: 'HELLO WORLD',
  });
});

app.use('/authors', Authors);

app.use((err, _req, res, _next) => {
  const { status, message } = err;
  res.status(status).json({
    message,
  });
});

app.listen(PORT, () => console.log('App rodando na porta %d', SUCESS));
