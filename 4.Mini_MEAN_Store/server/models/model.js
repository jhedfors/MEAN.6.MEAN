var mongoose = require('mongoose')
var customerSchema = mongoose.Schema({
  name:{type:String, required:true, minlength:2},
  _orders:[{type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
},{timestamps:true})
var customer = mongoose.model('Customer', customerSchema)

var orderSchema = mongoose.Schema({
  _customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  _product:{type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity:{type:Number, required:true, min:1}
},{timestamps:true})
var order = mongoose.model('Order', orderSchema)

var productSchema = mongoose.Schema({
  name:{type:String, required:true, minlength:2},
  image:{type:String, required:true, minlength:2},
  description:{type:String, required:true, minlength:2},
  quantity:{type:Number, required:true, min:1},
  _orders:[{type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
},{timestamps:true})
var product = mongoose.model('Product', productSchema)
