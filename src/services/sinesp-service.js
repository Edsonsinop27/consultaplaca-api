// src/services/sinesp-service.js
const Sinesp = require('sinesp-api');

async function buscarVeiculoPorPlaca(placa) {
  try {
    return await Sinesp.search(placa);
  } catch (err) {
    console.error('Erro sinesp-service:', err);
    return null;
  }
}

module.exports = { buscarVeiculoPorPlaca };
