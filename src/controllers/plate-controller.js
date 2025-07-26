// src/controllers/plate-controller.js
const { getVehicle } = require('../services/sinesp-service');

exports.get = async (req, res, next) => {
  const placa = req.params.placa.toUpperCase();

  // simples regex para placa BR Mercosul (ex: ABC1D23)
  const isValid = /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/.test(placa);
  if (!isValid) {
    return res
      .status(400)
      .json({ error: 'Formato de placa inválido. Use ABC1D23.' });
  }

  try {
    const dados = await getVehicle(placa);
    if (!dados || !dados.placa) {
      return res
        .status(404)
        .json({ error: 'Placa não encontrada ou sem dados disponíveis.' });
    }
    res.json(dados);
  } catch (err) {
    // dispara seu error‐middleware
    next(err);
  }
};
