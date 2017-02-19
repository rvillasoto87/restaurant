'use strict';

var _ = require('lodash');
var Specialtoday = require('./specialtoday.model');
var Menu = require('../menu/menu.model');
var convert = require('../menu/Convert');

// Get list of specialtodays
exports.index = function(req, res) {
  Menu.find(function (err, menus) {
    if(err) { return handleError(res, err); }
    var special = new Specialtoday();
    var arrayspecial = [];
    var fecha = new Date();
    menus.forEach(function(item, i){
      convert.convertDiaSemana(item.dia,function(no){
        if(no === fecha.getDay()){
          item.categorias.forEach(function(itm,e){
              itm.menu.forEach(function(it,r){
                 if(it.special){
                   var special = new Specialtoday();
                   special.name = it.name;
                   special.precio = it.precio;
                   arrayspecial.push(special);
                 }
              });
          });
        }
      });
    });
    return res.status(200).json(arrayspecial);
  });
};

// Get a single specialtoday
exports.show = function(req, res) {
  Specialtoday.findById(req.params.id, function (err, specialtoday) {
    if(err) { return handleError(res, err); }
    if(!specialtoday) { return res.status(404).send('Not Found'); }
    return res.json(specialtoday);
  });
};

// Creates a new specialtoday in the DB.
exports.create = function(req, res) {
  Specialtoday.create(req.body, function(err, specialtoday) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(specialtoday);
  });
};

// Updates an existing specialtoday in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Specialtoday.findById(req.params.id, function (err, specialtoday) {
    if (err) { return handleError(res, err); }
    if(!specialtoday) { return res.status(404).send('Not Found'); }
    var updated = _.merge(specialtoday, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(specialtoday);
    });
  });
};

// Deletes a specialtoday from the DB.
exports.destroy = function(req, res) {
  Specialtoday.findById(req.params.id, function (err, specialtoday) {
    if(err) { return handleError(res, err); }
    if(!specialtoday) { return res.status(404).send('Not Found'); }
    specialtoday.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
