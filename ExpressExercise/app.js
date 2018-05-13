var express = require('express');
var app = express();
var sound = {
    pig: "Oink",
    dog: "Woof Woof!",
    cow: "Moo",
    bird: "Chirp",
    fox: "Whaaat?"
}

app.get('/', function(req, res){
    res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function(req, res){
    var animal = req.params.animal.toLowerCase();
    res.send("The " + animal + " says " + "'" + sound[animal] + "'");
});

app.get('/repeat/:quote/:num', function(req, res){
    var quote = req.params.quote;
    var num = req.params.num;
    var str = "";
    for(var i=0; i<num; i++){
        str += quote + " ";
    }
    res.send(str);
});

app.get('/*', function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server has started!');
});