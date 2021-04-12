const express = require('express');
const { AuthorsCRUD, BooksCRUD } = require('./routers');
const app = express();

app.use(express.json());

const PORT = 3000;
const SUCESS = 200;

app.get('/', (_req, res) => {
  return res.status(SUCESS).send({
    message: 'HELLO WORLD',
  });
});

app.use('/authors', AuthorsCRUD);

app.use('/books', BooksCRUD);

app.use((err, _req, res, _next) => {
  const { status, message } = err;
  return res.status(status).json({
    message,
  });
});

app.listen(PORT, () => console.log('App rodando na Porta %d', PORT));
