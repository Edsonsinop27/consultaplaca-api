const Sinesp = require('sinesp-api');

async function buscarVeiculoPorPlaca(placa) {
  try {
    const result = await Sinesp.search(placa);
    return result; // pode ser undefined/null se não achar
  } catch (err) {
    console.error('Erro no sinesp-service:', err);
    return null;
  }
}

module.exports = { buscarVeiculoPorPlaca };
