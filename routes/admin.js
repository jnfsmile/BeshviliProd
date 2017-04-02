'use strict';

var express = require('express');
var router = express.Router();

var google = require('googleapis');
var OAuth2Client = google.auth.OAuth2;

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = '884723383363-opauujdrveua40r79svjjml2ljfe11u7.apps.googleusercontent.com';
var CLIENT_SECRET = process.env.GOOGLE_SECRET;
var REDIRECT_URL = process.env.HOST + '/admin/post-login';

router.get('/login', function (req, res, next) {

  var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

  // generate consent page url
  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'profile email'
  });
  res.redirect(url);
});

router.get('/post-login', function (req, res, next) {

  var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

  oauth2Client.getToken(req.query.code, function (err, tokens) {

    if (err) {
      res.send(err);
    }
    oauth2Client.setCredentials(tokens);

    var plus = google.plus("v1");
    // retrieve user profile
    plus.people.get({ userId: 'me', auth: oauth2Client }, function (err, profile) {
      if (err) {
        res.send(err);
        return console.log('An error occured', err);
      }
      res.send(profile.displayName, ':', profile.tagline);
      console.log(profile);
    });
  });
});

module.exports = router;