const express = require('express');
const { authors } = require('../models/tables');
const { getAllAuthors } = authors;
const AuthorsCRUD = express.Router();

const SUCESS = 200;
const NOT_FOUND = 404;

AuthorsCRUD.get('/', async (_req, res, next) => {
  try {
    const data = await getAllAuthors();
    return res.status(SUCESS).json(data);
  } catch (error) {
    console.log(error);
    next({
      status: NOT_FOUND,
      message: error.message,
    })
  }
})

module.exports = AuthorsCRUD;
