var express = require('express');
var User = require('../models/user');
var Post = require('../models/post');
var router = express.Router();

router.get('/', checklogin, function(req, res){
	Post.find(function (err, docs){
		console.log(docs)
		res.render('dashboard', {user: req.session.user, posts: docs});
	});
});

router.post('/', checklogin, function (req, res){
	var post = new Post({content: req.body.content, _creator: req.session.user._id});
	post.save(function (err){
		if (err) {
			console.log(err);
		}
		Post.find(function (err, docs){
			res.render('dashboard', {user: req.session.user, posts: docs});
		})
	})
})

function checklogin(req, res, next) {
	if(!req.session.user) {
		res.redirect('/login');
		return;
	}
	next();
}
module.exports = router;