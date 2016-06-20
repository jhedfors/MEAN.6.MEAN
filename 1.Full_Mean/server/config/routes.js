// First, at the top of your routes.js file you'll have to require the controller
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
// note how we are delegating to the controller and passing along req and res
};
