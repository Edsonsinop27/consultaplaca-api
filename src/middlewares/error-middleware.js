function notFoundError(req, res) {
  res.status(404).json({ error: 'Rota não encontrada.' });
}

// 500 Internal Server Error
function internalServerError(err, req, res, next) {
  console.error('Internal error:', err.stack || err);
  res.status(500).json({
    error: 'Erro interno ao processar a requisição.'
  });
}

module.exports = { notFoundError, internalServerError };
