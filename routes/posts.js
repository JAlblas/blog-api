var express = require('express');
var router = express.Router();

var postController = require('../controllers/postController');

router.post('/', postController.createPost);

router.get('/', postController.getPosts);
router.get('/:id', postController.getPost);

router.put('/:id', postController.updatePost);

router.delete('/:id', postController.deletePost);
  
module.exports = router;
