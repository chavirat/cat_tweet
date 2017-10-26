require('dotenv').config();
var Twitter = require('twitter');

const CONSUMER_KEY = 'TWITTER_CONSUMER_KEY';
const CONSUMER_SECRET = 'TWITTER_CONSUMER_SECRET';
const ACCESS_TOKEN_KEY = 'TWITTER_ACCESS_TOKEN_KEY';
const ACCESS_TOKEN_SECRET = 'TWITTER_ACCESS_TOKEN_SECRET';

// Validate Twitter API Keys
const keys = [CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN_KEY, ACCESS_TOKEN_SECRET ]
keys.forEach((key) => {
  if(!process.env[key])
    throw new Error(key + ' has not been set!');
});

var client = new Twitter({
  consumer_key: process.env[CONSUMER_KEY],
  consumer_secret: process.env[CONSUMER_SECRET],
  access_token_key: process.env[ACCESS_TOKEN_KEY],
  access_token_secret: process.env[ACCESS_TOKEN_SECRET]
});

var stream = client.stream('statuses/filter', 
	{track: '#cat, #cats, #kitten, #kittie, #meow, #instacats, #instacat, #catsofinstagram, #catstagram, #cutecats, #kittycat'});
stream.on('data', function(event) {
	var media = event.entities.media;
  if(media){
    for (var i = 0; i < media.length; i++) {
      console.log(media[i].media_url);
    }
  }


});
 
stream.on('error', function(error) {
  throw error;
});