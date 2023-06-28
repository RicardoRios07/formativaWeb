const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./config/conexion');
const ruta = require('./routers/router');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// ruteo
app.use('/', ruta);
app.get('/hola', (request, response) => {
    var datos = request.query;
    response.json({
        message: "Hola: " + datos.nombre
    });
});
app.listen(3000, () => {
    console.log("Servidor iniciado");
});
