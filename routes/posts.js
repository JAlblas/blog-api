var express = require('express');
var router = express.Router();

var postController = require('../controllers/postController');

/* GET home page. */
router.get('/', postController.getPosts);
router.post('/', postController.createPost);
router.get('/:id', postController.getPost);

router.put('/:id', function(req, res, next) {
// Update
res.json(req.params.id);
});

router.delete('/:id', function(req, res, next) {
    // Delete
res.json(req.params.id);
});
  
module.exports = router;
