const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empleadoSchema = new Schema({
    Nombres: String,
    Apellidos: String,
    Cedula: String,
    Email: String,
    Edad: Number,
    Telefono: String,
    Cargo: String,
    Area: String,
    Salario: String
}, {timestamps: true});

const Empleado = mongoose.model('Empleados', empleadoSchema);

module.exports = Empleado;
