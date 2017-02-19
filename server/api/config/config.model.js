'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ConfigSchema = new Schema({
  logo: String,
  titulo: String,
  comentario: String,
  carrito_titulo: String,
  location:String,
  opening:[{dias:String,horas:String}],
  email:String,
  phone:String
});

module.exports = mongoose.model('Config', ConfigSchema);
