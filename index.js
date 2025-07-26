const express = require('express');
const bodyParser = require('body-parser');
const { buscarVeiculoPorPlaca } = require('./src/consultar'); // ajuste conforme seu módulo
const app = express();

app.use(bodyParser.json());
app.use(express.static('public')); // se tiver front

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
    console.error('Erro ao buscar placa:', err);
    res
      .status(500)
      .json({ error: 'Não foi possível consultar a placa agora. Tente novamente em alguns minutos.' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
