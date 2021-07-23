var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    email: {type: String, required: true},
    password: {type: String},
    created: {type: Date, default: Date.now}
  }
);

userSchema.pre(
  'save',
  async function(next) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
    user.password = hash;
    next();
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

