const express = require('express');
const Authors = express.Router();
const collection = require('../models/tables/authors');
const { getAllAuthors } = collection;

const SUCESS = 200;
const NOT_FOUND = 404;

Authors.get('/', async (req, res, next) => {
  try {
    const data = await getAllAuthors();
    res.status(SUCESS).json(data);
  } catch (error) {
    console.error(error);
    next({
      status: NOT_FOUND,
      message: error.message,
    });
  }
});

module.exports = Authors;
