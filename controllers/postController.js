var Post = require('../models/post');

const { body, validationResult } = require('express-validator');

exports.getPosts = function(req, res) {
    Post.find()
    .sort([['timestamp', 'ascending']])
    .exec(function (err, posts) {
      if (err) { return next(err); }
      //Successful, so render
      res.json(posts);
    });
};

exports.getPost = function(req, res, next) {
    Post.findById(req.params.id)
    .exec(function (err, post) {
      if (err) { return next(err); }
      //Successful, so render
      res.json(post);
    });
};

exports.createPost = function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const post = new Post({
        title: req.body.title,
        message: req.body.message,
        timestamp: Date(),
        user: "60940a5f66d1dd495173fbe6",
        draft: true
    }).save(err => {
        if (err) { 
            return next(err);
        };
        res.redirect("/");
    });
}

exports.deletePost = async function(req, res, next) {
    Post.findByIdAndDelete(req.params.id, function(err, post) {
        if (err) {
            return res.status(404).json({ err: `post with id ${req.params.id} not found`});
        } else {
            if (post) {
                res.status(200).json({ msg: `post ${req.params.id} deleted sucessfuly` });
            } else {
                res.status(404).json({ err: `post with id ${req.params.id} not found`});
            }
             
        }
    })
}

exports.updatePost = function(req, res, next) {
    const { title, message } = req.body;
    Post.findByIdAndUpdate(req.params.id, {
        title,
        message,
    }, 
    {
        useFindAndModify: true
    }, function(err, post) {
        if (err) {
            res.status(404).json({error: err});
        } else {
            res.status(200).json({ msg: "updated sucessfuly" });
        }
    });
}