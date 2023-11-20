<<<<<<< HEAD
const express = require('express')
const bodyParser = require('body-parser')
const {verifyToken} = require ('../middleware/AuthenticateUser')
const path =require('path')
const routes = express.Router()


//Export all objects

const {users, products, orders, cart} = require('../models')
=======
const express = require('express');
const bodyParser = require('body-parser');
const { verifyToken } = require('../middleware/AuthonticateUser');
const path = require('path');
const cors = require('cors');
const routes = express.Router();

routes.use(cors());

// Export all objects
const { users, products, orders, cart } = require('../models');
>>>>>>> 8dff9a0bf6d998070218dd74e2eddb0f44727af3



//======user's router====
routes.get('/users', (req,res)=> {
    users.fetchUsers(req,res)
})


routes.get('/user/:id',(req, res) =>{
    users.fetchUser(req,res)
})

routes.post('/register', bodyParser.json(),
    (req,res) =>{
        users.register(req, res)
    })
    

<<<<<<< HEAD
routes.put('/user/: id', bodyParser.json(),
=======
routes.put('/user/:id', bodyParser.json(),
>>>>>>> 8dff9a0bf6d998070218dd74e2eddb0f44727af3
    (req,res) =>{
        users.updateUser(req, res)
    })

<<<<<<< HEAD
routes.patch('/user/: userID', bodyParser.json(),
=======
routes.patch('/user/:id', bodyParser.json(),
>>>>>>> 8dff9a0bf6d998070218dd74e2eddb0f44727af3
    (req,res) =>{
     users.updateUser(req, res)
    })
    

<<<<<<< HEAD
routes.delete('/user/: userID', bodyParser.json(),
=======
routes.delete('/user/:id', bodyParser.json(),
>>>>>>> 8dff9a0bf6d998070218dd74e2eddb0f44727af3
    (req,res) =>{
        users.deleteUser(req, res)
    })
    

//=====login=====

routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})



// =========PRODUCTS ROUTES=============

routes.get('/products', (req, res) => {
    products.fetchProducts(req, res);
});
routes.get('/product/:id', (req, res) => {
    products.fetchProduct(req, res);
});
<<<<<<< HEAD
routes.post('/AddNewProduct', (req, res) => {
=======
routes.post('/AddNewProduct', bodyParser.json(), (req, res) => {
>>>>>>> 8dff9a0bf6d998070218dd74e2eddb0f44727af3
    products.addProduct(req, res);
});

routes.patch('/product/:id', bodyParser.json(), (req, res) => {
    products.updateProduct(req, res);
});
routes.put('/product/:id', bodyParser.json(), (req, res) => {
    products.updateProduct(req, res);
});
routes.delete('/product/:id', (req, res) => {
    products.deleteProduct(req, res);
});
<<<<<<< HEAD
routes.get('perfumes', (req, res) => {
    products.fetchPerfumes(req, res);
});
routes.delete('/accessories', (req, res) => {
    products.fetchAccessories(req, res);
});
routes.delete('/beauty', (req, res) => {
    products.fetchBeautyt(req, res);
});
=======
>>>>>>> 8dff9a0bf6d998070218dd74e2eddb0f44727af3



// =========ORDERS=============


routes.get('/orders', (req, res)=>{
    orders.fetchOrders(req, res)
})
routes.get('/order/:id',(req, res)=>{
    orders.fetchOrder(req, res)
})
<<<<<<< HEAD
routes.post('/AddNewOrder',(req, res)=>{
=======
routes.post('/AddNewOrder',bodyParser.json(),(req, res)=>{
>>>>>>> 8dff9a0bf6d998070218dd74e2eddb0f44727af3
    orders.addOrder(req, res)
})

routes.patch('/order/:id', bodyParser.json(),(req, res)=>{
    orders.updateOrder(req, res)
})
routes.put('/order/:id',bodyParser.json(),(req, res)=>{
    orders.updateOrder(req, res)
})
routes.delete('/order/:id', (req,res)=>{
    orders.deleteOrder(req, res)
})




// =========CART ROUTES=============

routes.get('/cart/:id',(req, res)=>{
    cart.fetchCart(req, res)
})
<<<<<<< HEAD
routes.post('/AddNewCart',(req, res)=>{
=======
routes.post('/AddNewCart',bodyParser.json(),(req, res)=>{
>>>>>>> 8dff9a0bf6d998070218dd74e2eddb0f44727af3
    cart.addCart(req, res)
});

routes.put('/order/:id',bodyParser.json(),(req, res)=>{
    cart.updateCart(req, res)
})
routes.delete('/order/:id', (req,res)=>{
    cart.deleteCart(req, res)
})


module.exports = {
    express,
    routes
}
