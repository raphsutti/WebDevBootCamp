var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    UserSchema              = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set('view engine', 'ejs');

app.use(require("express-session")({
    secret: "This is a secret",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res){
    res.render("home");
})

app.get("/secret", function(req, res){
    res.render("secret");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started...");
})