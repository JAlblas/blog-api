var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.get('/', userController.user_list);
router.post('register', userController.registerUser);


router.get('/:id', function(req, res, next) {
  res.json(req.params.id);
});

router.put('/:id', function(req, res, next) {
  // Update
  res.json(req.params.id);
});

router.delete('/:id', function(req, res, next) {
    // Delete
  res.json(req.params.id);
});

module.exports = router;