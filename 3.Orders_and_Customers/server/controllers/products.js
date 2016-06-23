var product = mongoose.model('Product')
module.exports = (function(){
  return {
    index: function(request, response){
      product.find({}, function(err,results){
        response.json(results)
      })
    },
    create: function(request, response){
      var customer = new Product(request.body)
      product.save(function(err){
        if(err) response.json(err)
        else response.json({'status':true})
      })
    },
    destroy: function(request, response){
      product.remove({_id:request.params.id}, function(err,customer){
        if(err) request.json(err)
        else response.json({'status':true})
      })
    }
  }
})()
