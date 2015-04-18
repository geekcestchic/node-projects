var express = require('express');
var router = express.Router();

//post the search term to this address and return a stream of tweets
router.get('/twit/:searchterm',function(req,res){
  console.log(req)
  // var searchTerm = res;
  // res.json('searchTerm');
  // var stream = twitter.stream('statuses/filter',{track: 'football'}); //this is the key word in tweet bodies

  // stream.on('tweet', function (tweet) {
  //   console.log(tweet)
  // })

});

module.exports = router;