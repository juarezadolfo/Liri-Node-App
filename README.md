# Liri-Node-Application - THE LIRI BOT

Used Node JavaScript to create the LIRI bot...similar to iPhone's SIRI, but language based instead of speech. LIRI is a command line node app that takes in four commands:

  * `my-tweets`
  * `spotify-this-song`
  * `movie-this`
  * `do-what-it-says`

## How to run Liri Bot
- Go to: https://github.com/juarezadolfo/Liri-Node-App for code
- Run command 'npm install', 'npm install node-spotify-api', 'npm install twitter', 'npm install request' in Terminal for dependcies
- Run command 'node liri.js' or one of the commands below.

## The Commands

1. `node liri.js my-tweets`

  * Displays my last 20 tweets and when they were created in terminal window.

2. `node liri.js spotify-this-song "song name"`

  * Shows information about the song in terminal window.
    * Artist
    * Song name
    * A link of the song from Spotify
    * Album
    * If no song is entered, it defaults to "The Sign" by Ace of Base

3. `node liri.js movie-this <movie name>`

  * Shows information about the movie in terminal window.
    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.
    * If no movie is entered, it defaults to "Mr. Nobody"

4. `node liri.js do-what-it-says`

  * Takes the text from random.txt and runs the song through spotify-this-song command

## Coded by:
* **Adolfo Juarez** - *Node JS* - [Adolfo Juarez](https://github.com/juarezadolfo/)