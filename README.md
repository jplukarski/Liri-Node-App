# Liri Node App

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI searches Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## Getting Started

1. Make a new local repository called "Liri" and clone this Github repository in that folder on your computer.

2. In your Bash/Terminal, navigate to the folder called "liri-node-app" and run NPM install to install the necessary packages needed for this app

3. Create a .env folder in the "liri-node-app" folder.

4. Copy and paste the below text into the .env folder:

<!-- Start .env file contents -->
# Spotify API keys

SPOTIFY_ID=
SPOTIFY_SECRET=

#Bandsintown API keys

app_id=

#Omdb API keys
omdb_API=
<!-- End .env file contents -->

5. Enter in your API credentials for Spotify, Bandsintown and Omdb on the .env file. (If you do not have these credentials, see the next section for where to obtain them for free)
    

6. In your Bash/Terminal (making sure you are still in "liri-node-app), run "node liri.js" with one of the following commands:
    1. concert-this *Enter name of musician/band*
        * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

        * Name of the venue

        * Venue location

        * Date of the Event (use moment to format this as "MM/DD/YYYY")

    2. spotify-this-song *Enter name of song*
        * This will show the following information about the song in your terminal/bash window
     
        * Artist(s)
     
        * The song's name
     
        * A preview link of the song from Spotify
     
        * The album that the song is from

        * If no song is provided then your program will default to "The Sign" by Ace of Base.

    3. movie-this *Enter name of movie/tvshow*
        * This will output the following information to your terminal/bash window:

      ```
          * Title of the movie.
          * Year the movie came out.
          * IMDB Rating of the movie.
           * Rotten Tomatoes Rating of the movie.
           * Country where the movie was produced.
           * Language of the movie.
           * Plot of the movie.
        * Actors in the movie.
      ```

## Built With

* [Spotify API](https://developer.spotify.com/my-applications/#!/)
    * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

   * Step One: Visit <https://developer.spotify.com/my-applications/#!/>
   
   * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

   * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

* [Bands In Town](http://www.artists.bandsintown.com/bandsintown-api) - The Bandsintown API lists artists’ events and information

* [Omdb](http://omdbapi.com/) - The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users. 
