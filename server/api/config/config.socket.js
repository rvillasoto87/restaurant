/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Config = require('./config.model');

exports.register = function(socket) {
  Config.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Config.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('config:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('config:remove', doc);
}
