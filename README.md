## Billion challenge assignment
#### developed by Chavirat Burapadecha
[Live example](http://cat-tweet.herokuapp.com/)

Your task is to use the Twitter Streaming API to build a simple web app that displays photos from cat-related Tweets in real time. This is a full-stack exercise that is intended to test a few different skills that are applicable to what we do at PeaceJam/Billionacts. (Some things are not related, such as WebSockets and streaming APIs, but hey, It wouldn't be very fun to make yet another CRUD app, would it?). This exercise should take about 3-4 hours.

## Requirements
 - #### Server
   - Uses Twitter's Streaming API to track cat-related Tweets with photos.
     - Hashtags I used, for example: `#cat, #cats, #kitten, #kittie, #meow, #instacats, #instacat, #catsofinstagram, #catstagram, #cutecats, #kittycat`.
   - Pulls the photo URL from the Tweet JSON.
   - Allows multiple clients to open a WebSocket connection to an endpoint that sends photo URLs when they come in.
   
 - #### Client
   - Can be as simple as a single `index.html` file that makes a WebSocket request and listens for new messages. 
   - Feel free to get creative with how the photos are displayed if you have time.

We'd love for you to write the server side of the app in Go or JavaScript, but feel free to use any language to complete the assignment. Use any 3rd-party libraries and packages you want. Leave comments in your code where necessary. Please email us a link to a github repo of your finished app.

