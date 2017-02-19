'use strict';

var _ = require('lodash');
var Menu = require('./menu.model');
var convert = require('./Convert');
var path = require('path');
var join = path.join;
var fs = require('fs');
var formidable = require('formidable');
var element = 0;

// Get list of menus
exports.index = function(req, res) {
  Menu.find(function (err, menus) {
    if(err) { return handleError(res, err); }
    var menu = new Menu();
    var fecha = new Date();
    menus.forEach(function(item, i){
      convert.convertDiaSemana(item.dia,function(no){
        if(no === fecha.getDay()){
          menu.dia=item.dia;
          menu.categorias = item.categorias;
          menu.orden = item.orden;
        }
      });
    });
    return res.status(200).json(menu);
  });
};

exports.upload = function(req,res){
  var filePath = path.resolve(__dirname, 'upload/');
  //req.files.file.path += "-" + req.files.files.name;
  var vpath = join(filePath,req.files.file.name);
  console.log("LLego el file al "+filePath+" "+req.files.file.name);
  fs.rename(req.files.file.path, vpath, function () {
    res.end();
  });
};


// Get list of menu of the week.
exports.semana = function(req, res) {
  Menu.find()
    .sort('orden')
    .exec(function (err, menus) {
    if(err) { console.log("Error"); return handleError(res, err); }
      return res.status(200).json(menus);
  });
};


// Get a single menu
exports.show = function(req, res) {
  Menu.findById(req.params.id, function (err, menu) {
    if(err) { return handleError(res, err); }
    if(!menu) { return res.status(404).send('Not Found'); }
    return res.json(menu);
  });
};

// Creates a new menu in the DB.
exports.create = function(req, res) {
  Menu.create(req.body, function(err, menu) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(menu);
  });
};

// Updates an existing menu in the DB.
exports.update = function(req, res) {
  Menu.findById(req.params.id, function (err, menu) {
    if (err) { return handleError(res, err);}
    if(!menu) { return res.status(404).send('Not Found'); }
    element = req.body.categorias.length;
    menu.categorias.push(req.body.categorias[element-1]);
    menu.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(menu);
    });
  });
};



/*var updated = _.merge(auditor, req.body);
updated.save(function (err) {
  if (err) { return handleError(res, err); }
  return res.json(200, auditor);
});*/

//Update of the cate
exports.updateCate = function(req,res){
  console.log("Actualizando la categoría "+req.params.id+" pos:"+req.body.cate.pos);
  Menu.findById(req.params.id,function(err,menu){
      if (err) {console.log(err); return handleError(res, err);}
      if(!menu) { return res.status(404).send('Not Found'); }
      menu.categorias.forEach(function(item,i){
        if(req.body.cate.pos === i){
          item.ident = req.body.cate.ident;
          item.menu = req.body.cate.menu;
        }
      });

      menu.save(function (err) {
        if (err) { return handleError(res, err); }
        return res.status(200).json(menu);
      });
  });
};

// Deletes a menu from the DB.
exports.destroy = function(req, res) {
  Menu.findById(req.params.id, function (err, menu) {
    if(err) { return handleError(res, err); }
    if(!menu) { return res.status(404).send('Not Found'); }
    menu.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};
var elimino = function(id,menu,callback){
  Menu.update({_id:id},{categorias:menu.categorias},{multi:false},function(err, rows_updated) {
    if (err) throw err;console.log('Updated.');
  });
  callback();
};
// Deletes a category from the menu selected DB.
exports.delete = function(req, res) {
  console.log("Llego objeto para eliminar "+req.body.pos);
  Menu.findById(req.params.id, function (err, menu) {
    if(err) { return handleError(res, err); }
    if(!menu) { return res.status(404).send('Not Found'); }
    menu.categorias.splice(req.body.pos, 1);
    elimino(req.params.id,menu,function(){
      menu.categorias.forEach(function(item,i){
        item.pos = i;
        elimino(req.params.id,menu,function(){return;});
      });
      return res.status(200).json(menu);
    });
  });
};

function handleError(res, err) {
  console.log("Tremendo Palo");
  return res.status(500).send(err);
}
