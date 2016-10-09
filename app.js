var express = require('express');
var routes = require('./routes/landing');
var server_config = require('./config/server');

var app = express();

app.set('view engine', 'pug');
app.use('/', routes);

// serving public folder files
app.use(express.static('public'));

app.listen(server_config["development"]["port"], function (){
	console.log('Server listening on port '+server_config["development"]["port"]);
})