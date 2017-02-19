/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Categoria = require('./categoria.model');

exports.register = function(socket) {
  Categoria.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Categoria.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('categoria:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('categoria:remove', doc);
}