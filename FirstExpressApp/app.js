var express = require('express');
var app = express();

// "/" -> "hi there!"
app.get("/", function(req, res) {
   res.send('Hi there!'); 
});

// "/bye" -> "goodbye"
app.get('/bye', function(req, res) {
    res.send('goodbye');
})
// "/dog" -> "meow:"
app.get('/dog', function(req, res) {
    console.log('SOMEONE MADE A REQUEST TO /DOG');
    res.send('Meow!');
})

app.get('/r/:subredditName', function(req,res){
    var subreddit = req.params.subredditName;
    res.send('WELCOME TO THE ' + subreddit.toUpperCase() + " SUBREDDIT");
})

app.get('/r/:subredditName/comments/:id/:title/', function(req,res){
    console.log(req.params);
    res.send('WELCOME TO THE COMMENTS PAGE!');
})

app.get('*', function(req, res) {
    res.send("you are a star!");
})

// tell express to listen for request
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server has started!');
});