const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    idUsuario: String,
    fullName: String,
    phone: String,
    mail: String
});

const usaurios = mongoose.model('usuarios', usuariosSchema);

module.exports = usaurios;
