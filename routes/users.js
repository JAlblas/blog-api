var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.post('/', userController.createUser);

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);
module.exports = router;