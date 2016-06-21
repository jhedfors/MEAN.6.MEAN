// First, at the top of your routes.js file you'll have to require the controller
var mongoose = require('mongoose')
var friend = mongoose.model('Friend')
var friends = require('./../controllers/friends.js');
// This is our routes.js file located in server/config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it app!)
module.exports = function(app) {
// verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
// modify the route to look like this
app.get('/friends', function(req, res) {
  friends.index(req, res);
})
app.post('/new',function(req, res){
  console.log('route new',req.body);
  friends.create(req,res)
})
app.delete('/destroy/:id',function(req, res){
  console.log('route destroy',req.params.id);
  friends.destroy(req,res)
})
// note how we are delegating to the controller and passing along req and res
};
