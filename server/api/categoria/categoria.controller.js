'use strict';

var _ = require('lodash');
var Categoria = require('./categoria.model');

// Get list of categorias
exports.index = function(req, res) {
  Categoria.find(function (err, categorias) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(categorias);
  });
};

// Get a single categoria
exports.show = function(req, res) {
  Categoria.findById(req.params.id, function (err, categoria) {
    if(err) { return handleError(res, err); }
    if(!categoria) { return res.status(404).send('Not Found'); }
    return res.json(categoria);
  });
};

// Creates a new categoria in the DB.
exports.create = function(req, res) {
  Categoria.create(req.body, function(err, categoria) {
    if(err) { return handleError(res, err); }
    console.log(categoria._id);
    return res.status(200).json(categoria);
  });
};

// Updates an existing categoria in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Categoria.findById(req.params.id, function (err, categoria) {
    if (err) { return handleError(res, err); }
    if(!categoria) { return res.status(404).send('Not Found'); }
    var updated = _.merge(categoria, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(categoria);
    });
  });
};

// Deletes a categoria from the DB.
exports.destroy = function(req, res) {
  Categoria.findById(req.params.id, function (err, categoria) {
    if(err) { return handleError(res, err); }
    if(!categoria) { return res.status(404).send('Not Found'); }
    categoria.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
