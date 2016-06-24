var Order = mongoose.model('Order')
module.exports = (function(){
  return {
    index: function(request, response){
      Order.find({}, function(err,results){
        response.json(results)
      })
    },
    create: function(request, response){
      var order = new Order(request.body)
      console.log('request.body',request.body);
      order.save(function(err,data){
        console.log(data);
        if(err) response.json(err)
        else response.json({'status':true,order:data})
      })
    },
    destroy: function(request, response){
      order.remove({_id:request.params.id}, function(err,resp){
        if(err) response.json(err)
        else response.json({'status':true})
      })
    }
  }
})()
