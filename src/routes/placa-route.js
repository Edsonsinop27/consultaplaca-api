// src/routes/placa-route.js
const express      = require('express');
const { getPlaca } = require('../controllers/placa-controller');

const router = express.Router();

// GET /placa/:placa
router.get('/placa/:placa', getPlaca);

module.exports = router;
