var User = mongoose.model('User')

module.exports = (function(){
  return{
    login:function(req,res){
      User.findOne({name:req.body.name}, function(err,user){
        console.log(user);
        if(err) res.json({'status':false, 'errors': 'Big ERROR'})
        else if (true){

        }
      })
    }
  }
})
