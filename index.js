// index.js

// importa a instância do Express já configurada em src/app.js
const app = require('./src/app');

// define a porta (útil para PaaS como Render)
const port = process.env.PORT || 3000;

// inicia o servidor
app.listen(port, () => {
  console.log(`API de consulta de placa rodando na porta ${port}`);
});
