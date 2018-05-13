var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Granite HIll", image: "https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Granite HIll", image: "https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Granite HIll", image: "https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Granite HIll", image: "https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?h=350&auto=compress&cs=tinysrgb"}
    ]

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    // res.send("YOU HIT POST ROUTE")
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

// Form to add new campgrounds
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started");
});