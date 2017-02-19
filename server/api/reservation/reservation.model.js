'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReservationSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone:String,
  peopleamount:Number,
  sugerencia:String,
  date: String
});

module.exports = mongoose.model('Reservation', ReservationSchema);
