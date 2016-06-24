var user = require('../controllers/users.js')


module.exports = function(){
  app.get('/login',user.login)
  // app.post('/customers',customer.create )
  // app.delete('/customers/:id',customer.destroy)
}
