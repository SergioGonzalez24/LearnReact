const express = require('express');
const router = express.Router();
const personasController = require('../controllers/personas');

// Definir las rutas
router.get('/altaPersona', personasController.getAltaPersona);

module.exports = router;