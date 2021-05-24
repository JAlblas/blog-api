var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json("No posts");
});

router.post('/', function(req, res, next) {
    res.json("Creating post");
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
