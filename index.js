const express = require('express');

const logger = require('pino')();

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send(`<h1>Executando na porta ${port}</h1>`);
});

app.listen(port, () => logger.info('O pai ta on!'));
