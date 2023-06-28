const express = require('express');
const router = express.Router();
const empleado = require('../controllers/empleadoController');
const rolPago = require('../controllers/rolePagoController')

router.use("/empleados", empleado);
router.use("/rolPago", rolPago);

module.exports = router;
