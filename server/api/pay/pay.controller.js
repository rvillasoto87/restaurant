'use strict';

var _ = require('lodash');
var Pay = require('./pay.model');

// Get list of pays
exports.index = function(req, res) {
  Pay.find(function (err, pays) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(pays);
  });
};

// Get a single pay
exports.show = function(req, res) {
  Pay.findById(req.params.id, function (err, pay) {
    if(err) { return handleError(res, err); }
    if(!pay) { return res.status(404).send('Not Found'); }
    return res.json(pay);
  });
};

// Creates a new pay in the DB.
exports.create = function(req, res) {
  Pay.create(req.body, function(err, pay) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(pay);
  });
};

// Updates an existing pay in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Pay.findById(req.params.id, function (err, pay) {
    if (err) { return handleError(res, err); }
    if(!pay) { return res.status(404).send('Not Found'); }
    var updated = _.merge(pay, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(pay);
    });
  });
};

// Deletes a pay from the DB.
exports.destroy = function(req, res) {
  Pay.findById(req.params.id, function (err, pay) {
    if(err) { return handleError(res, err); }
    if(!pay) { return res.status(404).send('Not Found'); }
    pay.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}