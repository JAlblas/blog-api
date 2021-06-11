var express = require('express');
var router = express.Router();

var commentController = require('../controllers/commentController');

router.post('/', commentController.createComment);

router.get('/', postController.getPosts);
router.get('/:id', postController.getPost);

router.put('/:id', postController.updatePost);

router.delete('/:id', postController.deletePost);

module.exports = router;