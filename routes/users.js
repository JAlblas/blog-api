var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUser);

router.put('/:id', function(req, res, next) {
  // Update
  res.json(req.params.id);
});

router.delete('/:id', function(req, res, next) {
    // Delete
  res.json(req.params.id);
});

module.exports = router;