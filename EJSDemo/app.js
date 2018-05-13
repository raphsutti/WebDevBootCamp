var express = require('express');
var app = express();

app.use(express.static("public"));
// add ejs, do not need to add ejs extension
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/fallinlovewith/:thing', function(req, res){
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
})

app.get("/posts", function(req,res) {
    var posts = [
        {title: "Post 1", author: "Susie"},    
        {title: "Adorable pet bunny", author: "Charlie"},    
        {title: "What a cute puppy", author: "John"},    
    ];
    
    res.render("posts", {posts: posts})
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listenning!");
});