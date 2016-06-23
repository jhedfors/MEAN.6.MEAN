//import required modules
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//setup APP
var app = express()
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/client')))
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)
app.listen(8999, function(){
  console.log(8999);
})
