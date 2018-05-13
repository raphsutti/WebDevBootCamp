var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?h=350&auto=compress&cs=tinysrgb",
//         description: "This is a huge granite hill, no bathrooms, no water. Beautiful granite"
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("NEWLY CREAED CAMPGROUND:");
//             console.log(campground);
//         }
//     });

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

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    // get all campgrounds from DB
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index",{campgrounds:allcampgrounds})
        }
    });
    // res.render("campgrounds", {campgrounds:campgrounds});
});

// CREATE new campgrounds
app.post("/campgrounds", function(req, res){
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
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    // Find campground with provide id
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            // render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
    
    // render show template with that campground
    // res.render("show");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started");
});