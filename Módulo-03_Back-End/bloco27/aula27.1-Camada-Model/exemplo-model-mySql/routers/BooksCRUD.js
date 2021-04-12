const express = require('express');
const { books } = require('../models/tables');
const { getAllBooks, getBookById, createNewBook } = books;

const BooksCRUD = express.Router();

const SUCESS = 200;
const CREATE = 201;
const NOT_FOUND = 404;
const INVALID_FIELD = 400;

BooksCRUD.get('/', async (_req, res, next) => {
  try {
    const data = await getAllBooks();
    return res.status(SUCESS).json(data);
  } catch (error) {
    console.error(error);
    next({
      status: NOT_FOUND,
      message: error.message,
    });
  }
});

BooksCRUD.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getBookById(id);
    if (!data) throw new Error('Not found');
    return res.status(SUCESS).json(data);
  } catch (error) {
    console.error(error);
    next({
      status: NOT_FOUND,
      message: error.message,
    });
  }
});

BooksCRUD.post('/', async (req, res, next) => {
  try {
    const { title, author_id } = req.body;
    const data = await createNewBook(title, author_id);
    if (!data) throw new Error('Dados Inválidos');
    return res.status(CREATE).json({ message: 'Livro criado com sucesso!' });
  } catch (error) {
    console.error(error);
    next({
      status: INVALID_FIELD,
      message: error.message,
    });
  }
});

module.exports = BooksCRUD;
