const express = require('express');
const crypto = require('crypto');

const signUp = express.Router();

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

const validateData = (body) =>
  body.email && body.password && body.firstName && body.phone;

signUp.post('/', async (req, res) => {
  if (!validateData(req.body))
    return res.status(400).json({ message: 'missing data' });
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = signUp;
