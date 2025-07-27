// index.js
const express = require('express');
const bodyParser = require('body-parser');

// aponte para onde de fato está seu serviço
const { buscarVeiculoPorPlaca } = require('./src/services/sinesp-service');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// rota raiz
app.get('/', (_req, res) => {
  res.send('🚗 API de consulta de placa funcionando!');
});

// rota de placa
app.get('/placa/:placa', async (req, res) => {
  const placa = req.params.placa.toUpperCase().replace(/[-\s]/g, '');
  try {
    const dados = await buscarVeiculoPorPlaca(placa);
    if (!dados || !dados.placa) {
      return res
        .status(404)
        .json({ error: 'Placa não encontrada. Verifique se digitou corretamente.' });
    }
    res.json(dados);
  } catch (err) {
    console.error('Erro ao buscar placa:', err);
    res.status(500).json({ error: 'Erro interno ao consultar placa' });
  }
});

// apenas UMA vez:
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API de consulta de placa rodando na porta ${port}`);
});
