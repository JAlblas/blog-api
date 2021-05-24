var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    message: {type: String},
    timestamp: {type: Date, required: true, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    post: {type: Schema.Types.ObjectId, ref: 'post'}
  });

commentSchema
.virtual('url')
.get(function () {
  return '/comment/' + this._id;
});


//Export model
module.exports = mongoose.model('comment', commentSchema);

