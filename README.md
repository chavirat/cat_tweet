## CAT Twitter API
[Live example](http://cat-tweet.herokuapp.com/)

To use the Twitter Streaming API to build a simple web app that displays photos from cat-related Tweets in real time. 

## Requirements
 - #### Server
   - Uses Twitter's Streaming API to track cat-related Tweets with photos.
     - Hashtags I used, for example: `#cat, #cats, #kitten, #kittie, #meow, #instacats, #instacat, #catsofinstagram, #catstagram, #cutecats, #kittycat`.
   - Pulls the photo URL from the Tweet JSON.
   - Allows multiple clients to open a WebSocket connection to an endpoint that sends photo URLs when they come in.
   
 - #### Client
   - Can be as simple as a single `index.html` file that makes a WebSocket request and listens for new messages. 
   - Feel free to get creative with how the photos are displayed if you have time.
