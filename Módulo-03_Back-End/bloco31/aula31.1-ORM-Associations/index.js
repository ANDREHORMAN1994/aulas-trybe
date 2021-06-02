const express = require('express');
const APP = express();
const PORT = process.env.PORT || 3001;

APP.use(express.json());

APP.listen(PORT, () => console.log('rodando na porta ' + PORT));
