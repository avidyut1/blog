var express = require('express');
var bodyParser = require('body-parser')
var routes = require('./routes/landing');
var server_config = require('./config/server');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/auth')
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', routes);

// serving public folder files

app.listen(server_config["development"]["port"], function (){
	console.log('Server listening on port '+server_config["development"]["port"]);
})