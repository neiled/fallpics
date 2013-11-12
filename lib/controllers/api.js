'use strict';

//exports.awesomeThings = function(req, res) {
  //res.json([
    //'HTML5 Boilerplate',
    //'AngularJS',
    //'Karma',
    //'Express'
  //]);
//};
//
//

exports.scan = function(req, res) {
  var app = req.app;
  var tumblr = require('tumblr.js');

  var client = new tumblr.Client({
    consumer_key: app.settings.tumblr_key,
    consumer_secret: app.settings.tumblr_secret
  });

  client.posts("fuckyeahlegos", {type: 'photo'}, function(err, data) {
    res.json(data);
  });
  
};
