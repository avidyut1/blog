var express = require('express');
var User = require('../models/user');
var router = express.Router();
var bcrypt = require('bcryptjs')

router.get('/', function(req, res){
	res.render('index');
});

router.get('/login', function(req, res){
	res.render('login');
});

router.post('/login', function (req, res){
	User.findOne({'email': req.body.email}, function (err, user){
		if(!user){
			res.render('login');
		}
		else{
			if (bcrypt.compareSync(req.body.password, user.password)) {
				res.redirect('dashboard');
			}
		}
	})
})

router.get('/signup', function(req, res){
	res.render('signup')
});

router.post('/signup', function (req, res){
	var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
	var user = new User({
		name: req.body.username,
		password: hash,
		email: req.body.email
	});
	user.save(function (err){
		if(err) {
			console.log(err)
			res.redirect('/signup')
		}
		else {
			res.redirect('/login');
		}
	});
})

module.exports = router;