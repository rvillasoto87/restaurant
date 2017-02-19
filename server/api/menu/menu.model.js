'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var menu = new Schema({
  ident:String,
  menu:[{name:String,descripcion:String,precio:Number,foto:String,special:Boolean}],
  pos:Number
});

var MenuSchema = new Schema({
  dia: String,
  categorias: [menu],
  orden:Number
});

module.exports = mongoose.model('Menu', MenuSchema);
