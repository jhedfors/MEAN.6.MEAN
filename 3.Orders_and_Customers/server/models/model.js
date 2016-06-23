var mongoose = require('mongoose')
var customerSchema = mongoose.Schema({
  name:{type:String, required:true, minlength:2}
},{timestamps:true})

// var productSchema = mongoose.Schema({
//   product:{type:String, required:true, minlength:2}
// },{timestamps:true})

var orderSchema = mongoose.Schema({
  name: {type:String, required:true, minlength:2},
  product:{type:String, required:true, minlength:2},
  quantity:{type:Number, required:true, min:1}
},{timestamps:true})

var customer = mongoose.model('Customer', customerSchema)
// var product = mongoose.model('Product', productSchema)
var order = mongoose.model('Order', orderSchema)
