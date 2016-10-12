var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var postSchema = mongoose.Schema({
	_creator : { type: Schema.Types.ObjectId, ref: 'User' },
	content: String,
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;