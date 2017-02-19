'use strict';

var express = require('express');
var controller = require('./menu.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/semana', controller.semana);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.post('/upload/:id',controller.upload);
router.put('/cate/:id',controller.updateCate);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.put('/delete/:id', controller.delete);

module.exports = router;
