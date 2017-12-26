//captures the user input on the command line
var input = process.argv[2];

//All requires for NPM packages.
var keys = require('./key.js');
var fs = require('fs');
var Twitter = require('twitter')
// var spotify = require('spotify');
var request = require('request');

// 	//TWITTER
// //if user input is my-tweets this will post the text only from my last 20 tweets

var client = new Twitter({
    consumer_key: 'KiPAGfYoR0fzW05CXj0pP8dYV',
    consumer_secret: 'RAXI0f4IP4oc2Kk9x928pYAca7BGKOCbvOqjlttzGfOqiBKh4U',
    access_token_key: '250213554-WEUCBJ5aPORDCUA3gQIkmcjpaJPQDoBKsiasuGl5',
    access_token_secret: 'sDMz1YERulLnmQWYs094H51ctdZA65SqUW2UOpjYIWuut'
  });
   
  var params = {screen_name: 'juarezadolfo'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });




