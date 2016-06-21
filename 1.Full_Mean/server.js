//setup the Node server backend
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
//static files are used by the frontend / Angular
app.listen(8999, function() {
  console.log('cool stuff on: 8999');
});
