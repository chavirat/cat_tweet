<h1>Billion challenge assignment</h1>
<h3>developed by Chavirat Burapadecha</h3>
#### [Live example](http://twitter-cats.herokuapp.com/)

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

## Helpful Resources
 - Make a new app, get access tokens to make API requests. [apps.twitter.com](https://apps.twitter.com)
 - Twitter API reference. [Link](https://developer.twitter.com/en/docs/tweets/filter-realtime/guides/connecting)
 - Go OAuth package. [Github](https://github.com/mrjones/oauth)
 - Go Authentication flow. [Link](https://developer.twitter.com/en/docs/basics/authentication/guides/single-user) | [Example](https://github.com/mrjones/oauth/blob/master/examples/twittersingleuser/twitter.go)
 - Go WebSocket package. [Github](https://github.com/gorilla/websocket)
 - MDN WebSocket API. [Link](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
 - New to Go? Do the [tour](https://tour.golang.org/welcome/1), then read [this](https://golang.org/doc/code.html), and then [this](https://golang.org/doc/effective_go.html).
 