var express = require('express');
var router = express.Router();

var commentController = require('../controllers/commentController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json("No comments");
});

router.post('/', function(req, res, next) {
    res.json("Creating comment");
  });

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