const express = require('express');
const router = express.Router();
const bookDirectoryController = require('../controllers/book')


/**
 * Create and List book directory endpoint
 */
router
    .get('/', bookDirectoryController.list)
    .post('/', bookDirectoryController.create)
  

/**
 * Update and delete book directory endpoint
 */
router
    .put('/:id', bookDirectoryController.update)
    .delete('/:id', bookDirectoryController.delete);


module.exports = router;