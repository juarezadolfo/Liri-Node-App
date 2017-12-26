//captures the user input on the command line
var input = process.argv[2];

//All requires for NPM packages.
var keys = require('./key.js');
var fs = require('fs');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

// calling the API keys in key.js
var client = new Twitter(keys.twitterKeys);
var spotify = new Spotify(keys.spotifyKeys);

// 	//SPOTIFY
// eventually add spotify function
// function spotifyThisSong(songName) {
    spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      // loop through every item
      for (var i = 0; i < 5; i++) {
        console.log("------------------------------------");
        // loop through the artists array
        for (var j = 0; j < data.tracks.items[i].artists.length; j++) {
          console.log("Artist(s): " + data.tracks.items[i].artists[j].name);
        }
        // print the information
        console.log("Song's Name: " + data.tracks.items[i].name);
        console.log("Preview Link: " + data.tracks.items[i].preview_url);
        console.log("Album: " + data.tracks.items[i].album.name);
      }
  
    });
//   };




// 	//TWITTER
// //if user input is 'my-tweets' 
// this will post the text only from my last 20 tweets
// eventually add Twitter function
    // function myTweets() {
        var params = {screen_name: 'juarezadolfo'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        for (var i = 0; i < 20; i++){
            console.log("Adolfo Tweet #" + i + ": " + tweets[i].text);
        }
    }
  });
// };





  




