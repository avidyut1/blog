var express = require('express');
var bodyParser = require('body-parser')
var routeLanding = require('./routes/landing');
var routeDashboard = require('./routes/dashboard');
var server_config = require('./config/server');
var mongoose = require('mongoose');
var session = require('express-session')
var csrf = require('csurf');
mongoose.Promise = global.Promise;

var app = express();

app.locals.pretty = true;

mongoose.connect('mongodb://localhost/auth')
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: 'adfkjlsdfkjlksjf',
	resave: false,
	saveUninitialized: true
}))
app.use(csrf());
app.use(function(req, res, next) {
  res.locals._csrf = req.csrfToken();
  next();
});
// app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', routeLanding);
app.use('/dashboard', routeDashboard);

// serving public folder files

app.listen(server_config["development"]["port"], function (){
	console.log('Server listening on port '+server_config["development"]["port"]);
})