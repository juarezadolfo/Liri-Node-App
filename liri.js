//captures the user input on the command line
var input = process.argv[2];

//All requires for NPM packages.
var keys = require('./key.js');
var fs = require('fs');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

// 	//Spotify
// var spotify = new Spotify({
//     id: <'1440450cdb184bdd98f1a9909071e9a8'>,
//     secret: <'c3f55ce679504b6d9a8170716837e5c0'>
//   });
   
//   spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });


// 	//TWITTER
// //if user input is my-tweets this will post the text only from my last 20 tweets
var client = new Twitter(keys.twitterKeys);

   
  var params = {screen_name: 'juarezadolfo'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        for (var i = 0; i < 20; i++){
            console.log("Adolfo Tweet #" + i + ": " + tweets[i].text);
        }
    }
  });




  




