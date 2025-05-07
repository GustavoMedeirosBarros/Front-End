const express = require('express');
const router = express.Router();
const calcController = require("../controllers/calculadoraController");

router.get('/', calcController.helloWorld);
router.get('/somar', calcController.somar);
router.get('/calcular', calcController.calcular);

module.exports = router;