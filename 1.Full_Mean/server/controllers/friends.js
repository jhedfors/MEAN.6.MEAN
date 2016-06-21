var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// note the immediate function and the object that is returned
module.exports = (function() {
 return {
  index: function(req, res) {
     Friend.find({}, function(err, results) {
       if(err) {
         res.json(err);
       } else {
         res.json(results);
       }
   })
 },
  create: function(req,res){
    console.log('mongo controller req.body',req.body);
    var friend = new Friend(req.body)
    friend.save(function(err,results){
      if (err) {
        res.json(err)
      }
      else {
        res.json(results)
      }
    })
  },
  destroy: function(req,res){
    console.log('mongo controller req.body',req.params.id);
    var removed = Friend.remove({_id: req.params.id}, function(err,results){
      if (err) {
        res.json(err)
      }else{
        res.json(results)
      }
    })
    // console.log('removed',removed);

  }
 }
})();
