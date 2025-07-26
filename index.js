// index.js
const express = require('express');
const { buscaPorPlaca } = require('sinesp-api');

const app = express();
app.use(express.json());

// Raiz só pra testar que está vivo
app.get('/', (_req, res) => {
  res.send('🚗 API de consulta de placa funcionando!');
});

// Sua rota de consulta de placa
app.get('/placa/:placa', async (req, res) => {
  const placa = req.params.placa.toUpperCase();
  try {
    const dados = await buscaPorPlaca(placa);
    if (!dados) {
      return res.status(404).json({ error: 'Placa não encontrada' });
    }
    res.json(dados);
  } catch (err) {
    console.error('Erro ao buscar placa:', err);
    res.status(500).json({ error: 'Erro interno' });
  }
});

// Usa a porta que o Render fornece em process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

