var Order = mongoose.model('Order')
var Customer = mongoose.model('Customer')
var Product = mongoose.model('Product')

module.exports = (function(){
  return {
    index: function(request, response){
      Order.find({}).populate('_product _customer').exec(function(err,results){
        console.log(results);
        response.json(results)
      })
    },

    create: function(request, response){
      console.log('request.body order controller',request.body);
      info = {quantity: request.body.quantity,
              _customer: request.body.customer_id,
              _product: request.body.product_id
      }
      console.log(info);
      var order = new Order(info)
      order.save(function(err,data){
        if(err) response.json(err)
        Customer.findOne({_id:request.body.customer_id}, function(err,customer){
          customer._orders.push(order._id)
          customer.save(function(err){
            if (err) response.json(err)
            Product.findOne({_id:request.body.product_id}, function(err,product){
              product.quantity = product.quantity - info.quantity;
              product._orders.push(order._id)
              product.save(function(err){
                if (err) response.json(err)
                response.json({success:true})
              })
            })
          })
        }
      )
    })
  },



    destroy: function(request, response){
      order.remove({_id:request.params.id}, function(err,resp){
        if(err) response.json(err)
        else response.json({'status':true})
      })
    }



  }
}
)()
