const app = require('./src/app');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API de consulta de placa rodando na porta ${PORT}`);
});
