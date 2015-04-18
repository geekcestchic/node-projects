var express = require('express');
var router = express.Router();

/* GET userlist */
router.get('/userlist', function(req, res) {
  var db = req.db;
  db.collection('userlist').find().toArray(function(err, items){
    res.json(items);
  });
});

/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
  var db = req.db;
  db.collection('userlist').insert(req.body, function(err, result){
      res.send(
        (err === null) ? { msg: '' } : { msg: err }
      );
  });
});

/*
 * DELETE to deleteuser.
 */
router.delete('/deleteuser/:id',function(req,res){
  var db = req.db;
  var userToDelete = req.params.id;
  db.collection('userlist').removeById(userToDelete, function(err, result){
    res.send((result === 1) ? {msg:''}:{msg:'error: '+err});
  });
});

/*
* UPDATE to updateuser.
*/
router.put('/updateuser/:id',function(req,res){
  var db = req.db;
  //defining which user we want to update
  var userToUpdate = req.params.id;
  console.log(userToUpdate)
  //this is the data we want to send to the ID
  var doc = {$set: req.body};
  console.log(doc)
  //updating the user by his ID
  db.collection('userlist').updateById(userToUpdate,doc,function(err,result){
    res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
  });
});

module.exports = router;
