'use strict';

var _ = require('lodash');
var Config = require('./config.model');
var path = require('path');
var fs = require('fs');
var join = path.join;

// Get list of configs
exports.index = function(req, res) {
  Config.find(function (err, configs) {
    if(err) { return handleError(res, err); }
    var conf = new Config();
    configs.forEach(function(item,i){
        conf = item;
    });
    return res.status(200).json(conf);
  });
};

// Get a single config
exports.show = function(req, res) {
  Config.findById(req.params.id, function (err, config) {
    if(err) { return handleError(res, err); }
    if(!config) { return res.status(404).send('Not Found'); }
    return res.json(config);
  });
};

// Creates a new config in the DB.
exports.create = function(req, res) {
  Config.create(req.body, function(err, config) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(config);
  });
};

// Upload.
exports.upload = function(req, res) {
  console.log("Llegue a console upload en server....."+req.body.name);

};

// Updates an existing config in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Config.findById(req.params.id, function (err, config) {
    if (err) { return handleError(res, err); }
    if(!config) { return res.status(404).send('Not Found'); }
    config.opening.forEach(function(item,i){
      item.dias = req.body.opening[i].dias;
      item.horas = req.body.opening[i].horas;
    });
    config.logo = req.body.logo;
    config.titulo = req.body.titulo;
    config.comentario = req.body.comentario;
    config.carrito_titulo = req.body.carrito_titulo;
    config.location = req.body.location;
    config.email = req.body.email;
    config.phone = req.body.phone;
    config.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(config);
    });
  });
};

// Deletes a config from the DB.
exports.destroy = function(req, res) {
  Config.findById(req.params.id, function (err, config) {
    if(err) { return handleError(res, err); }
    if(!config) { return res.status(404).send('Not Found'); }
    config.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
