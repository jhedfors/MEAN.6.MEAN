var order = require('../controllers/orders.js')
var customer = require('../controllers/customers.js')
// var product = require('../controllers/products.js')

module.exports = function(){
  app.get('/customers',customer.index)
  app.post('/customers',customer.create )
  app.delete('/customers/:id',customer.destroy)
  app.get('/orders',order.index)
  app.post('/orders',order.create)
  // app.get('/products',product.index)
  // app.post('/products',product.create )
  // app.delete('/products/:id',product.destroy)
}
