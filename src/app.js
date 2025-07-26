const express = require('express');
const bodyParser = require('body-parser');
const placaRoute = require('./routes/placa-route');
const { notFoundError, internalServerError } = require('./middlewares/error-middleware');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// rota raiz
app.get('/', (_req, res) => {
  res.send('🚗 API de consulta de placa funcionando!');
});

// rotas de placa
app.use('/', placaRoute);

// tratamento de 404
app.use(notFoundError);

// tratamento de erros internos
app.use(internalServerError);

module.exports = app;
