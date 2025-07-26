// src/controllers/placa-controller.js
const { buscarVeiculoPorPlaca } = require('../services/sinesp-service');

exports.getPlaca = async (req, res, next) => {
  const placa = req.params.placa.toUpperCase();
  // validação de formato Mercosul
  if (!/^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/.test(placa)) {
    return res.status(400).json({ error: 'Formato inválido. Use ABC1D23.' });
  }
  try {
    const dados = await buscarVeiculoPorPlaca(placa);
    if (!dados || !dados.placa) {
      return res.status(404).json({ error: 'Placa não encontrada.' });
    }
    res.json(dados);
  } catch (err) {
    next(err);
  }
};
