const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariomotosSchema = new Schema({
    idMoto: String,
    idUsuario: String,
    bateriaOne: String,
    bateriaTwo: String
});

const usauriomotos = mongoose.model('usuario_moto', usuariomotosSchema);

module.exports = usauriomotos;