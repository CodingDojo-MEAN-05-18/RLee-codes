const { itemController } = require('../controllers');  //this is the method to use if controllers are barrelled **preferred**
//const itemController = require('../controllers/item.controller'); //this is the method to use if not barrelling

const router = require('express').Router();

// items/:item_id   <--this is accomplish with barrelled routes

module.exports = router
    .get('/', itemController.index)
    .post('/', itemController.create)
    .get('/:item_id', itemController.show)
    .put('/:item_id', itemController.update)
    .delete('/:item_id', itemController.destroy);