const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rolePagoSchema = new Schema({
    empleado: {
        type: Schema.Types.ObjectId,
        ref: 'Empleados',
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    horasTrabajadas: {
        type: Number,
        required: true
    },
    sueldoBase: {
        type: Number,
        required: true
    },
    bonificaciones: {
        type: Number,
        default: 0
    },
    deducciones: {
        type: Number,
        default: 0
    },
    totalPago: {
        type: Number,
        required: true
    }
});

const RolePago = mongoose.model('RolePago', rolePagoSchema);

module.exports = RolePago;
