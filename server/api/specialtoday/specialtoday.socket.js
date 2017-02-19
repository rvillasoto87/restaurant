/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Specialtoday = require('./specialtoday.model');

exports.register = function(socket) {
  Specialtoday.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Specialtoday.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('specialtoday:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('specialtoday:remove', doc);
}