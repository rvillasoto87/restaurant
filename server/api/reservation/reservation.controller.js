'use strict';

var _ = require('lodash');
var Reservation = require('./reservation.model');
var options = {
  weekday: "long", year: "numeric", month: "short",
  day: "numeric", hour: "2-digit", minute: "2-digit"
};
// Get list of reservations
exports.index = function(req, res) {
  //var day = new Date();
  Reservation.find(function (err, reservations) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(reservations);
  });
};

// Get a single reservation
exports.show = function(req, res) {
  Reservation.findById(req.params.id, function (err, reservation) {
    if(err) { return handleError(res, err); }
    if(!reservation) { return res.status(404).send('Not Found'); }
    return res.json(reservation);
  });
};

// Creates a new reservation in the DB.
exports.create = function(req, res) {
  /*var dayresrv = new Date();
  dayresrv.setDate(req.body.date.getDate());
  dayresrv.setHours(req.body.date.gatHours());*/
  console.log(req.body.date);
  Reservation.create(req.body, function(err, reservation) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(reservation);
  });
};

// Updates an existing reservation in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Reservation.findById(req.params.id, function (err, reservation) {
    if (err) { return handleError(res, err); }
    if(!reservation) { return res.status(404).send('Not Found'); }
    var updated = _.merge(reservation, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(reservation);
    });
  });
};

// Deletes a reservation from the DB.
exports.destroy = function(req, res) {
  Reservation.findById(req.params.id, function (err, reservation) {
    if(err) { return handleError(res, err); }
    if(!reservation) { return res.status(404).send('Not Found'); }
    reservation.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
