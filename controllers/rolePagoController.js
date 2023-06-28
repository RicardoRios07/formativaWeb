const RolePago = require("../models/rolDePagos");
const express = require("express");
const router = express.Router();

router.post('/crearRolePago', (req, res) => {
    const {
        empleado,
        fecha,
        horasTrabajadas,
        sueldoBase,
        bonificaciones,
        deducciones,
        totalPago
    } = req.body;

    const nuevoRolePago = new RolePago({
        empleado,
        fecha,
        horasTrabajadas,
        sueldoBase,
        bonificaciones,
        deducciones,
        totalPago
    });

    nuevoRolePago.save().then(() => {
        console.log("Rol de pago creado");
        res.status(200).json("Rol de pago creado exitosamente");
    }).catch((error) => {
        console.log(error);
        res.status(500).json("Ocurrió un error al crear el rol de pago");
    });
});

router.post('/editarRolePagoId', (req, res) => {
    const {
        _id,
        empleado,
        fecha,
        horasTrabajadas,
        sueldoBase,
        bonificaciones,
        deducciones,
        totalPago
    } = req.body;

    RolePago.updateOne({
        _id
    }, {
        $set: {
            empleado,
            fecha,
            horasTrabajadas,
            sueldoBase,
            bonificaciones,
            deducciones,
            totalPago
        }
    }).then(() => {
        console.log("Rol de pago actualizado por ID");
        res.status(200).json("Rol de pago actualizado exitosamente por ID");
    }).catch((error) => {
        console.log(error);
        res.status(500).json("Ocurrió un error al actualizar el rol de pago por ID");
    });
});

router.post('/eliminarRolePagoId', (req, res) => {
    const {_id} = req.body;

    RolePago.deleteOne({_id}).then(() => {
        console.log("Rol de pago eliminado por ID");
        res.status(200).json("Rol de pago eliminado exitosamente por ID");
    }).catch((error) => {
        console.log(error);
        res.status(500).json("Ocurrió un error al eliminar el rol de pago por ID");
    });
});

router.post('/listarRolesPagos', (req, res) => {
    RolePago.find().populate('empleado').then((rolesPagos) => {
        console.log("Listado de roles de pagos");
        res.status(200).json(rolesPagos);
    }).catch((error) => {
        console.log(error);
        res.status(500).json("Ocurrió un error al obtener el listado de roles de pagos");
    });
});

module.exports = router;
