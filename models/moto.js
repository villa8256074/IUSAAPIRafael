const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const motosSchema = new Schema({
  idMoto:  String,
  modelo: String,
  codigoMotor: String,
  color: String
});

const motos = mongoose.model('motos', motosSchema);

module.exports = motos;