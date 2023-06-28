const mongoose = require("mongoose");
var connection = mongoose.connect("mongodb://127.0.0.1:27017/formativa");

mongoose.connection.on('open', (ref) => {
    console.log("conectado a mongodb");
});
module.exports = connection;
