// src/middlewares/error-middleware.js
function notFoundError(req, res) {
  res.status(404).json({ error: 'Rota não encontrada.' });
}

function internalServerError(err, req, res, next) {
  console.error('Erro interno:', err.stack || err);
  res.status(500).json({ error: 'Erro interno ao processar requisição.' });
}

module.exports = { notFoundError, internalServerError };
