var User = require('../models/user');

const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

exports.getUsers = function(req, res) {
    User.find()
    .sort([['name', 'ascending']])
    .exec(function (err, users) {
      if (err) { return next(err); }
      //Successful, so render
      res.status(200).json(users);
    });
};

exports.getUser = function(req, res, next) {
    User.findById(req.params.id)
    .exec(function (err, user) {
      if (err) { return next(err); }
      //Successful, so render
      res.json(user);
    });
};

exports.createUser = function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }

    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) {
            return next(err);
        }
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            created: Date()
        }).save(err => {
            if (err) { 
            return next(err);
            };
            res.redirect("/");
        });
    });
}