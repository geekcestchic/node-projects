

// var express = require('express');
// var socket = io();

//Interacting with the twitter API
// var io = require('socket.io')(server);


// process.env.VARIABLE


// socket.on('connect', function() {
//   console.log('Connected!');
// });

// DOM Ready =============================================================
$(document).ready(function() { 
    $('.submit').on('click', getTweets)
});

// Functions =============================================================

function getTweets(event){
    
    //prevent the post action it will lead to by default
    event.preventDefault();
    //assign the searchterm from input content
    var searchTerm = $('input.field').val();
    console.log(searchTerm)

    $.ajax({
        type:'GET',
        // data: searchTerm,
        url:'/twit/'+searchTerm,
        dataType:'JSON'
    }).done(function(response){
        console.log(response)
    })
    // socket.on('tweets', function(tweet) {
    //   //- console.log(tweet);
    //   var html = '<div class="row"><div class="col-md-6 col-md-offset-3 tweet"><img src="' + tweet.user_profile_image + '" class="avatar pull-left"/><div class="names"><span class="full-name">' + tweet.name + ' </span><span class="username">@' +tweet.screen_name + '</span></div><div class="contents"><span class="text">' + tweet.text + '</span></div></div></div>';
    //   $('#tweet-container').prepend(html);
    // });


    // io.on('connect',function(socket){
    //   stream.on('tweet',function(tweet){
    //     var data={};
    //     data.name = tweet.user.name;
    //     data.screen_name = tweet.user.screen_name;
    //     data.text = tweet.text;
    //     data.user_profile_image = tweet.user.profile_image_url;
    //     socket.emit('tweets', data);
    //   });
    // });
};
  
  

  