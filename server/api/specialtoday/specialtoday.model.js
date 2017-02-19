'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SpecialtodaySchema = new Schema({
  name: String,
  precio: Number
});

module.exports = mongoose.model('Specialtoday', SpecialtodaySchema);
