'use strict';

// Module dependencies.
var express = require('express'),
    path = require('path');

var app = express();

// Controllers
var api = require('./lib/controllers/api');

var nconf = require('nconf');
nconf.file('settings.json');

// Express Configuration
app.configure(function(){
  app.set('tumblr_key', nconf.get('tumblr_key'));
  app.set('tumblr_secret', nconf.get('tumblr_secret'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.configure('development', function(){
  app.use(express.static(path.join(__dirname, '.tmp')));
  app.use(express.static(path.join(__dirname, 'app')));
  app.use(express.errorHandler());
});

app.configure('production', function(){
  app.use(express.favicon(path.join(__dirname, 'public/favicon.ico')));
  app.use(express.static(path.join(__dirname, 'public')));
});

// Routes
//app.get('/api/awesomeThings', api.awesomeThings);
app.get('/api/scan', api.scan);

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});

