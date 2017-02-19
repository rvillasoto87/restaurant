/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Pay = require('./pay.model');

exports.register = function(socket) {
  Pay.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Pay.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('pay:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('pay:remove', doc);
}