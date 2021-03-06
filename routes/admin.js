'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');

var google = require('googleapis');
var OAuth2Client = google.auth.OAuth2;

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = process.env.GOOGLE_CLIENTID;
var CLIENT_SECRET = process.env.GOOGLE_SECRET;
var REDIRECT_URL = process.env.HOST + '/admin/post-login';
var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
// set auth as a global default
google.options({
  auth: oauth2Client
});

router.get('/login', function (req, res, next) {
  // generate consent page url
  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'profile email'
  });
  res.redirect(url);
});

router.get('/post-login', function (req, res, next) {

  oauth2Client.getToken(req.query.code, function (err, tokens) {

    if (err) {
      res.send(err);
    }
    oauth2Client.setCredentials(tokens);

    var plus = google.plus("v1");
    // retrieve user profile
    plus.people.get({ userId: 'me' }, function (err, profile) {
      if (process.env.ENV == "dev") {
        res.cookie("loggedUser", profile.displayName, { httpOnly: true });
      } else {
        res.cookie("loggedUser", profile.displayName, { secure: true, httpOnly: true });
      }

      var authorized = JSON.parse(process.env.AUTHORIZED);
      if (err) {
        res.send(err);
        return console.log('An error occured', err);
      }
      if (authorized.indexOf(profile.id) >= 0) {
        if (process.env.ENV === "dev") {
          res.cookie("admin", profile.id, { httpOnly: true });
        } else {
          res.cookie("admin", profile.id, { secure: true, httpOnly: true });
        }
        res.redirect('/blog/edit');
      } else {
        if (process.env.ENV == "dev") {
          res.clearCookie("admin", { path: "/admin", httpOnly: true });
        } else {
          res.clearCookie("admin", { path: "/admin", secure: true, httpOnly: true });
        }
        res.send('Sorry, ' + profile.displayName + ', you are unauthorized for this page<br /><a href="/">homepage</a>');
      }
    });
  });
});

var verify = function verify(req, res, next) {
  var authorized = JSON.parse(process.env.AUTHORIZED);
  var authenticated = authorized.indexOf(req.cookies.admin) >= 0;
  if (authenticated) {
    console.log("Authenticated request");
    next();
  } else {
    console.log("Unauthenticated access");
    res.send('Sorry, you are unauthorized for this page<br /><a href="/">homepage</a>');
  }
};

router.all('*', verify, function (req, res) {
  console.log("admin request");
  var filename = path.join(__dirname, '../client/admin/index.html');
  res.status(200).sendFile(filename, {}, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent admin file successfully');
    }
  });
});

module.exports = router;

/*
https://developers.google.com/people/api/rest/v1/people#Person
*/