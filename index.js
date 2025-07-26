const app = require('./src/app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API de consulta de placa rodando na porta ${port}`);
});

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
    console.error('Erro ao buscar placa:', err.stack || err);
    res
      .status(500)
      .json({
        error: 'Erro interno ao consultar placa',
        message: err.message,
        stack: err.stack  // retire este campo depois que resolver tudo
      });
  }
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
