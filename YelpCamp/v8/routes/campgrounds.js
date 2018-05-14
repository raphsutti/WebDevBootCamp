var express = require("express");
var router = express.Router();
var Campground = require("../models/campground")

// INDEX - show all campgrounds
router.get("/", function(req, res){
    // get all campgrounds from DB
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index",{campgrounds:allcampgrounds});
        }
    });
    // res.render("campgrounds", {campgrounds:campgrounds});
});

// CREATE new campgrounds
router.post("/", function(req, res){
    // res.send("YOU HIT POST ROUTE")
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    // Create new campground and save to DB
    Campground.create(newCampground, function(err,newlyCreated){
        if(err){
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    })
    // campgrounds.push(newCampground);
    
    
});

// NEW - show form to create new campground
// Form to add new campgrounds
router.get("/new", function(req, res){
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    // Find campground with provide id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground);
            // render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
})

module.exports = router;