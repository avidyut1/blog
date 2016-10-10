var express = require('express');
var User = require('../models/user');
var router = express.Router();

router.get('/', checklogin, function(req, res){
	res.render('dashboard', {user: req.session.user});
});

function checklogin(req, res, next) {
	if(!req.session.user) {
		res.redirect('/login');
		return;
	}
	next();
}
module.exports = router;