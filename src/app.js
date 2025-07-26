// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { notFoundError, internalServerError } = require('./middlewares/error-middleware');

const app = express();

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Se você tiver uma pasta 'public' para servir front‑end
app.use(express.static(path.join(__dirname, '../public')));

// Rota raiz para checagem de saúde
app.get('/', (_req, res) => {
  res.send('🚗 API de consulta de placa funcionando!');
});

// Rotas de placa
const plateRoute = require('./routes/plate-route');
app.use('/api/plates', plateRoute);

// Middlewares de erro
app.use(notFoundError);
app.use(internalServerError);

module.exports = app;
