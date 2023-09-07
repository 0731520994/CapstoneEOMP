
const Users = require('./Users')
const Orders = require('./Orders')
const Products = require('./Products')
const Categories = require('./Categories')
const Cart =require('./Cart')


module.exports = {
   users: new Users(),
   orders: new Orders(),
   products: new Products(),
   categories: new Categories(),
   cart: new Cart()

}