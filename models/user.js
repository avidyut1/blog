var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
	name: String,
	password: String,
	email: String,
	posts : [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

var User = mongoose.model('User', userSchema);
module.exports = User;