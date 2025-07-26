// index.js

const express = require('express');
const bodyParser = require('body-parser');
const { buscarVeiculoPorPlaca } = require('./src/consultar'); // ajuste conforme o caminho real
const path = require('path');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // se tiver assets estáticos

// Rotas
app.get('/', (_req, res) => {
  res.send('🚗 API de consulta de placa funcionando!');
});

app.get('/placa/:placa', async (req, res) => {
  const placa = req.params.placa.toUpperCase();
  try {
    const dados = await buscarVeiculoPorPlaca(placa);
    if (!dados || !dados.placa) {
      return res
        .status(404)
        .json({ error: 'Placa não encontrada. Verifique se digitou corretamente.' });
    }
    res.json(dados);
  } catch (err) {
    console.error('Erro ao buscar placa:', err.stack || err);
    res
      .status(500)
      .json({
        error: 'Erro interno ao consultar placa',
        message: err.message
        // stack: err.stack // remova em produção
      });
  }
});

// Inicializa o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API de consulta de placa rodando na porta ${port}`);
});
