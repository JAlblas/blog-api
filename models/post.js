var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const postSchema = new Schema(
{
    title: {type: String, required: true, maxlength: 100},
    message: {type: String},
    timestamp: {type: Date, required: true, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    draft: {type: Boolean, required: true}
});

postSchema
.virtual('url')
.get(function () {
  return '/posts/' + this._id;
});


//Export model
module.exports = mongoose.model('post', postSchema);

