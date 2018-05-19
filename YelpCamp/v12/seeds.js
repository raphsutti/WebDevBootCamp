var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Salmon Creek", 
        image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?h=350&auto=compress&cs=tinysrgb", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a urna pellentesque, venenatis elit in, accumsan urna. Morbi mollis vel enim sed feugiat. Maecenas lectus nibh, aliquet efficitur pharetra et, accumsan eget magna. Duis eu convallis augue, quis scelerisque felis. Mauris ornare arcu augue, et accumsan velit gravida ac. Vivamus viverra vel ante eu tincidunt. Duis eu sem libero. Praesent tempor hendrerit bibendum. Etiam ornare quam placerat ante commodo venenatis. Donec posuere molestie ipsum non commodo. Suspendisse ornare orci ac tellus elementum efficitur. Donec vel bibendum sem, sit amet ornare ante. Proin hendrerit finibus orci laoreet accumsan. Sed varius, nunc at cursus facilisis, turpis nulla lobortis felis, non viverra orci libero eget ante. Nulla nec nisl velit. Pellentesque cursus posuere scelerisque."
    },
    {
        name: "Granite HIll", 
        image: "https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?h=350&auto=compress&cs=tinysrgb", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a urna pellentesque, venenatis elit in, accumsan urna. Morbi mollis vel enim sed feugiat. Maecenas lectus nibh, aliquet efficitur pharetra et, accumsan eget magna. Duis eu convallis augue, quis scelerisque felis. Mauris ornare arcu augue, et accumsan velit gravida ac. Vivamus viverra vel ante eu tincidunt. Duis eu sem libero. Praesent tempor hendrerit bibendum. Etiam ornare quam placerat ante commodo venenatis. Donec posuere molestie ipsum non commodo. Suspendisse ornare orci ac tellus elementum efficitur. Donec vel bibendum sem, sit amet ornare ante. Proin hendrerit finibus orci laoreet accumsan. Sed varius, nunc at cursus facilisis, turpis nulla lobortis felis, non viverra orci libero eget ante. Nulla nec nisl velit. Pellentesque cursus posuere scelerisque."
        
    },
    {
        name: "Mountain Goat's Rest", 
        image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?h=350&auto=compress&cs=tinysrgb", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a urna pellentesque, venenatis elit in, accumsan urna. Morbi mollis vel enim sed feugiat. Maecenas lectus nibh, aliquet efficitur pharetra et, accumsan eget magna. Duis eu convallis augue, quis scelerisque felis. Mauris ornare arcu augue, et accumsan velit gravida ac. Vivamus viverra vel ante eu tincidunt. Duis eu sem libero. Praesent tempor hendrerit bibendum. Etiam ornare quam placerat ante commodo venenatis. Donec posuere molestie ipsum non commodo. Suspendisse ornare orci ac tellus elementum efficitur. Donec vel bibendum sem, sit amet ornare ante. Proin hendrerit finibus orci laoreet accumsan. Sed varius, nunc at cursus facilisis, turpis nulla lobortis felis, non viverra orci libero eget ante. Nulla nec nisl velit. Pellentesque cursus posuere scelerisque."
        
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;