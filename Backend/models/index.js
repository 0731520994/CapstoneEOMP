
const Users = require('./Users')
const Orders = require('./Orders')
const Products = require('./Products')
const Cart =require('./Cart')


module.exports = {
   users: new Users(),
   orders: new Orders(),
   products: new Products(),
   cart: new Cart()

}