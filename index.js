// index.js
const app  = require('./src/services/sinesp-service')
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API de consulta de placa rodando na porta ${port}`);
});
