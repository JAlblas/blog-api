var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    username: {type: String, required: true, maxlength: 100},
    email: {type: String, required: true},
    password: {type: String},
    created: {type: Date, default: Date.now}
  }
);

// Virtual for author's URL
userSchema
.virtual('url')
.get(function () {
  return '/users/' + this._id;
});

//Export model
module.exports = mongoose.model('user', userSchema);

