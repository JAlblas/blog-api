var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    title: {type: String, required: true, maxlength: 100},
    message: {type: String},
    timestamp: {type: Date, required: true, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    draft: {type: Boolean, required: true}
  });

PostSchema
.virtual('url')
.get(function () {
  return '/post/' + this._id;
});


//Export model
module.exports = mongoose.model('post', postSchema);

