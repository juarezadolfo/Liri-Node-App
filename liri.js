//captures the user input on the command line
var input = process.argv[2];

//All requires for NPM packages.
var keys = require('./key.js');
var fs = require('fs');
var Twitter = require('twitter');
// var spotify = require('spotify');
var request = require('request');

// 	//TWITTER
// //if user input is my-tweets this will post the text only from my last 20 tweets
var client = new Twitter(keys.twitterKeys);

   
  var params = {screen_name: 'juarezadolfo'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        for (var i = 0; i < 20; i++){
            console.log(tweets[i].text);
        }
    }
  });




