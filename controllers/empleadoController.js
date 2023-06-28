const {response} = require("express");
const Empleado = require("../models/empleado");
const express = require("express");
const router = express.Router();

router.post('/crearEmpleado', (req, response) => {
    var body = req.body;
    console.log(body);
    const empleado = new Empleado({
        Nombres: body.Nombres,
        Apellidos: body.Apellidos,
        Cedula: body.cedula,
        Email: body.email,
        Edad: body.Edad,
        Telefono: body.Telefono,
        Cargo: body.Cargo,
        Area: body.Area,
        Salario: body.Salario
    });

    empleado.save().then(function () {
        console.log("Datos Guardados exitosamente");
        response.status(200).json("Datos Guardados");
    }).catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrió un error al guardar los datos");
    });
});

router.post('/editarEmpleadoId', (req, response) => {
    var body = req.body;
    Empleado.updateOne({
        _id: body._id
    }, {
        $set: {
            Nombres: body.Nombres,
            Apellidos: body.Apellidos,
            Cedula: body.cedula,
            Email: body.email,
            Edad: body.Edad,
            Telefono: body.Telefono,
            Cargo: body.Cargo,
            Area: body.Area,
            Salario: body.Salario
        }
    }).then(function () {
        console.log("Se actualizó el empleado por Id");
        response.status(200).json("Se actualizó el empleado por Id");
    }).catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrió un error al guardar los datos");
    });
});

router.post('/editarEmpleadoNombre', (req, response) => {
    var body = req.body;
    Empleado.updateOne({
        Nombres: body.Nombres
    }, {
        $set: {
            Nombres: body.Nombres,
            Apellidos: body.Apellidos,
            Cedula: body.cedula,
            Email: body.email,
            Edad: body.Edad,
            Telefono: body.Telefono,
            Cargo: body.Cargo,
            Area: body.Area,
            Salario: body.Salario
        }
    }).then(function () {
        console.log("Se actualizó el empleado por nombre");
        response.status(200).json("Se actualizó el empleado por nombre");
    }).catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrió un error al guardar los datos");
    });
});

router.post('/eliminarEmpleadoNombre', (req, response) => {
    var body = req.body;
    Empleado.deleteOne({Nombres: body.Nombres}).then(function () {
        console.log("Empleado eliminado por nombre");
        response.status(200).json("Empleado eliminado por nombre");
    }).catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrió un error al eliminar el empleado");
    });
});

router.post('/eliminarEmpleadoId', (req, response) => {
    var body = req.body;
    Empleado.deleteOne({_id: body._id}).then(function () {
        console.log("Empleado eliminado por Id");
        response.status(200).json("Empleado eliminado por Id");
    }).catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrió un error al eliminar el empleado");
    });
});

router.post('/listarEmpleados', (req, response) => {
    Empleado.find().then(function (empleados) {
        console.log("Listado de empleados");
        response.status(200).json(empleados);
    }).catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrió un error al obtener el listado de empleados");
    });
});

module.exports = router;
