var express = require('express');
var router = express.Router();

var commentController = require('../controllers/commentController');

router.post('/', commentController.createComment);

router.get('/', commentController.getComments);
router.get('/:id', commentController.getComment);

//router.put('/:id', commentController.updateComment);

//router.delete('/:id', commentController.deleteComment);

module.exports = router;