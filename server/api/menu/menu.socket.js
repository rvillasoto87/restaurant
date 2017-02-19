/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Menu = require('./menu.model');

exports.register = function(socket) {
  Menu.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Menu.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('menu:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('menu:remove', doc);
}