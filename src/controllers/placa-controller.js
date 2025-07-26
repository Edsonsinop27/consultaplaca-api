const { buscarVeiculoPorPlaca } = require('../services/sinesp-service');

exports.getPlaca = async (req, res, next) => {
  const placa = req.params.placa.toUpperCase();

  // validação simples de formato Mercosul (ex: ABC1D23)
  const validPattern = /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/;
  if (!validPattern.test(placa)) {
    return res
      .status(400)
      .json({ error: 'Formato de placa inválido. Use ABC1D23.' });
  }

  try {
    const dados = await buscarVeiculoPorPlaca(placa);

    if (!dados || !dados.placa) {
      return res
        .status(404)
        .json({ error: 'Placa não encontrada ou sem dados disponíveis.' });
    }

    return res.json(dados);
  } catch (err) {
    // encaminha para o error‑middleware
    return next(err);
  }
};
