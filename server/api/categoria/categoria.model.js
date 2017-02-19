'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



var CategoriaSchema = new Schema({
  ident:[String]
});

module.exports = mongoose.model('Categoria', CategoriaSchema);
