const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
const editController = require('../controllers/edit');

// Route for Adding Records
router.get('/', indexController.getIndex);

// Route for Adding Records
router.post('/addTask', indexController.postIndex);

// Route for Adding Records
router.delete('/deleteTask/:id', indexController.deleteIndex);

// Route for Updating Records
router.get('/editTask/:id', editController.getEdit);
router.put('/editTask/:id', editController.putEdit);

// Exports router
module.exports = router;
