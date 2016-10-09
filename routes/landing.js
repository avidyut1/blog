var express = require('express');
var User = require('../models/user');
var router = express.Router();

router.get('/', function(req, res){
	res.render('index');
});

router.get('/login', function(req, res){
	res.render('login');
});

router.post('/login', function (req, res){
	res.json(req.body);
})

router.get('/signup', function(req, res){
	res.render('signup');
});

router.post('/signup', function (req, res){
	res.json(req.body);
})

module.exports = router;