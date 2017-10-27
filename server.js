var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var port = process.env.PORT || 5000;

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
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
var stream = client.stream('statuses/filter', 
	{track: '#cat, #cats, #kitten, #kittie, #meow, #instacats, #instacat, #catsofinstagram, #catstagram, #cutecats, #kittycat'});

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});
app.ws('/', function(ws, req) {
	ws.on('open', function open() {
		ws.send('opening');
	});

	ws.on('message', function incoming(data) {
		stream.on('data', function(event) {
			var media = event.entities.media;
			if(media){
				for (var i = 0; i < media.length; i++) {
					ws.send(media[i].media_url);
	 
				}
			}


		});
		
 
	});
});
app.listen(port, function() {
    console.log('This app is running on port ' + port);
});
