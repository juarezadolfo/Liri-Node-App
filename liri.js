// Take in the command line arguments
var nodeArgs = process.argv;
//captures the user input on the command line
var input = process.argv[2];
// Create an empty string for holding the command line 'input'
var x = "";

//All requires for NPM packages.
var keys = require('./key.js');
var fs = require('fs');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

// calling the API keys in key.js
var client = new Twitter(keys.twitterKeys);
var spotify = new Spotify(keys.spotifyKeys);




// 	//TWITTER
// //if user input is 'my-tweets' 
// this will post the text only from my last 20 tweets
// eventually add Twitter function
// function myTweets() {
    var params = { screen_name: 'juarezadolfo' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < 20; i++) {
                console.log("Adolfo Tweet #" + i + ": " + tweets[i].text);
            }
        }
    });
    // };
    



// 	//SPOTIFY
// eventually add spotify function
// function spotifySong(songName) {
spotify.search({ type: 'track', query: 'The Sign' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    for (var i = 0; i < 5; i++) {
        console.log("------------------------------------");
        for (var j = 0; j < data.tracks.items[i].artists.length; j++) {
            console.log("Artist(s): " + data.tracks.items[i].artists[j].name);
        }
        console.log("Song's Name: " + data.tracks.items[i].name);
        console.log("Preview Link: " + data.tracks.items[i].preview_url);
        console.log("Album: " + data.tracks.items[i].album.name);
    }
});
//   };




// OMDB Request

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }
    else {
        movieName += nodeArgs[i];
    }
}

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


request(queryUrl, function (error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

        // Parse the body of the site and recover the Title, imdbRating, etc...
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
        console.log("Country of Origin: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
        console.log("------------------------------------");
    }
});



// DO WHAT IT SAYS
// function for 'do-what-it-says'
// This block of code will read from the "random.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("random.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
  
    // We will then run a spotify search based on this 'random.txt' file dataArr.
    spotifySong(dataArr[1]);
  
  });
  






