var express = require('express');
var app = express();
var morgan = require('morgan');
var router = express.Router();
var server = require('http').createServer(app);

app.set('view engine', 'jade');
app.set('views','./views');

app.use(morgan('dev'));

router.get('/',function(req,res){
  res.render('index',{header:'Twitter Stream'});
});

router.get('/contact',function(req,res){
  res.render('contact',{header:'contact!'});
})

router.get('/about',function(req,res){
  res.render('about',{header:'about!'});
})

router.post('/:searchTerm',function(req,res){
  console.log(req)
  // var searchTerm = res;
  res.json('searchTerm');
});

app.use('/',router);
app.use(express.static(__dirname + '/public'));


var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server started on '+port);

var io = require('socket.io')(server);
var Twit = require('twit');

var twitter = new Twit({
  consumer_key: 'HmdlciikP7hXlumjdwzOXHS21',
  consumer_secret: 'TjUaA0i7g29KFMg3Ciwlk4kt1vDnLCQjVZhvwf3AG2oRibPhdd',
  access_token: '80485510-Tm3pOqOgdWRr3WUtwxUUFCljuH82JL7Tj7C4lcGNZ', 
  access_token_secret: 'r5TlE5RImeHJf5s71toVy9DRUPqzYgPdlD3DViinJvCDf'
});

process.env.VARIABLE

// console.log(twitter)

var stream = twitter.stream('statuses/filter',{track: 'ronaldo'}); //this is the key word in tweet bodies

io.on('connect',function(socket){
  stream.on('tweet',function(tweet){
    var data={};
    data.name = tweet.user.name;
    data.screen_name = tweet.user.screen_name;
    data.text = tweet.text;
    data.user_profile_image = tweet.user.profile_image_url;
    socket.emit('tweets', data);
  });
});





