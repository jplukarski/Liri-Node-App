var request = require("request");
require("dotenv").config();
var keys = require("./keys.js");
var inquirer = require("inquirer");
var moment = require("moment");
var spotify = keys.spotify;
var Spotify = require('node-spotify-api');
var spotify = new Spotify(spotify);
var omdbApi = keys.omdb;
var bandsInTownApi = keys.bandsInTown.api_key;
var fs = require("fs");


//The argv inputs
var argumentInput = process.argv.slice(3).join(" ");
var action = process.argv[2];

//Search the Bandsintown API

var Concertsearch = function () {
    this.findBand = function (band) {
        var bandsInTownURL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=" + bandsInTownApi;
        request(bandsInTownURL, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var body = JSON.parse(body);
                for (i = 0; i < body.length; i++) {
                    var date = moment(body[i].datetime).format("MMM Do YY")
                    console.log("------" + "\n" + "Date: " + date + "\n" + "Venue Name: " + body[i].venue.name + "\n" + "Location: " + body[i].venue.city + ", " + body[i].venue.country);
                }
            } else {
                console.log("This is the error: " + error);
            }
        }
        )
    }
};
//Search the Spotify API
var Spotifysearch = function () {
    this.findMusic = function (music) {

        spotify.search({ type: 'track', query: music }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            } else {
                var info = data.tracks.items[0];
                var artistsArray = info.artists;
                var artists = [];
                artistsArray.forEach(function (item) {
                    artists.push(item.name)
                })
                var formattedArtists = artists.join(", ");
                var songName = info.name;
                var href = info.href
                var album = info.album.name;
                console.log("\nArtists: " + formattedArtists + "\nSong Name: " + songName + "\nURL: " + href + "\nAlbum Name: " + album + "\n")

            };
        });
    }
};

//Search the OMDB API
var Moviesearch = function () {
    this.findMovie = function (movie) {
        var omdbURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=" + omdbApi.omdb_API;
        request(omdbURL, function (error, response, body) {
            if (!error) {
                var body = JSON.parse(body);
                console.log("Movie Title: " + body.Title + "\n" + "Year of Release: " + body.Year + "\n" + "IMDB Rating: " + body.Ratings[0].Value + "\n" + "Rotten Tomatoes Rating: " + body.Ratings[1].Value + "\n" + "Country: " + body.Country + "\n" + "Language: " + body.Language + "\n" + "A Brief Plot Summary: " + body.Plot + "\n" + "Actors: " + body.Actors);
            } else { Console.log("Error city") }
        })
    }
}

var band = new Concertsearch();
var spotifySearch = new Spotifysearch();
var movieSearch = new Moviesearch();

//Function that looks at the inputs and does things accordingly
function searchAPIs() {
    if (action === "concert-this") {
        band.findBand(argumentInput);
    } else if (action === "spotify-this-song") {
        spotifySearch.findMusic(argumentInput);
    } else if (action === "movie-this") {
        movieSearch.findMovie(argumentInput);
    } else if (action === "do-what-it-says") {
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            } else {
                var dataParse = data.split(",");
                if (dataParse[0] === "concert-this") {
                    band.findBand(dataParse[1]);
                } else if (dataParse[0] === "spotify-this-song") {
                    spotifySearch.findMusic(dataParse[1]);
                } else if (dataParse[0] === "movie-this") {
                    movieSearch.findMovie(dataParse[1]);
                }
            }
        });


    }
}
searchAPIs();