'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PaySchema = new Schema({
  pay: {},
  menu: {}
});

module.exports = mongoose.model('Pay', PaySchema);
