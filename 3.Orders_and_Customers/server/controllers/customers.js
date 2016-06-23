var Customer = mongoose.model('Customer')
module.exports = (function(){
  return {
    index: function(request, response){
      Customer.find({}, function(err,results){
        response.json(results)
      })
    },
    create: function(request, response){
      var customer = new Customer(request.body)
      customer.save(function(err){
        if(err) response.json(err)
        else response.json({'status':true})
      })
    },
    destroy: function(request, response){
      Customer.remove({_id:request.params.id}, function(err,customer){
        if(err) request.json(err)
        else response.json({'status':true})
      })
    }
  }
})()
