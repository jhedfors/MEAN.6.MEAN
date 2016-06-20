// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
// Edit the show method as follows
module.exports = (function() {
 return {
  index: function(req, res) {
     Friend.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  }
 }
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports
