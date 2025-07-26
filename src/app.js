// src/app.js
const express           = require('express');
const bodyParser        = require('body-parser');
const placaRoute        = require('./routes/placa-route');
const { notFoundError, internalServerError } = require('./middlewares/error-middleware');

const app = express();

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// rota raiz (health check)
app.get('/', (_req, res) => {
  res.send('🚗 API de consulta de placa funcionando!');
});

// monta as rotas de placa em /placa
// e dentro de placa-route.js você deve ter router.get('/:placa', ...)
app.use('/placa', placaRoute);

// middlewares de erro
app.use(notFoundError);
app.use(internalServerError);

module.exports = app;
