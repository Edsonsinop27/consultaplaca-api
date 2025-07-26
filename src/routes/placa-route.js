// src/routes/placa-route.js
const express       = require('express');
const { getPlaca }  = require('../controllers/placa-controller');

const router = express.Router();

// roda quando chamar GET /placa/:placa
router.get('/:placa', getPlaca);

module.exports = router;
