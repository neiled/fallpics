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

  console.log(req.query);

  client.posts(req.query.blog, {type: 'photo'}, function(err, data) {
    var photolist = new Array();

    if(data)
    {
      for (var i = data.posts.length - 1; i >= 0; i--) {
        photolist.push(data.posts[i].photos[0].original_size.url);
      }
    }

    res.json(photolist);
  });
  
};
