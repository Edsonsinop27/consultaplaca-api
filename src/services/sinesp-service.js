// src/services/sinesp-service.js
const Sinesp = require('sinesp-api');

async function getVehicle(placa) {
  try {
    // o search lança se algo der errado na rede ou parse
    const result = await Sinesp.search(placa);
    return result;  // será `undefined` ou `null` se não achar nada
  } catch (err) {
    console.error('sinesp-service error:', err);
    return null;
  }
}

module.exports = { getVehicle };
