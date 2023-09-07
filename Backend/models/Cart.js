const db = require('../config');
class Cart {

    fetchCart(req, res) {
      const query = `
      SELECT P.prodID, P.prodName, P.price, P.prodUrl, C.cartID, C.quantity
      FROM Products P
      JOIN Cart C ON P.prodID = C.prodID
      WHERE C.cartID = ?;
      `;
      db.query(query, [req.params.id], (err, results) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          results,
        });
      });
    }
  
    // ...
  
    updateCart(req, res) {
      const query = `
      UPDATE Cart
      SET quantity = ?
      WHERE cartID = ?;
      `;
      const { quantity } = req.body; // Get quantity from the request body
      db.query(query, [quantity, req.params.id], (err) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          msg: 'Cart updated from the list',
        });
      });
    }
  
    // ...
  
    addCart(req, res) {
      const query = `
      INSERT INTO Cart (prodID, quantity)
      VALUES (?, ?);
      `;
      const { prodID, quantity } = req.body; // Get prodID and quantity from the request body
      db.query(query, [prodID, quantity], (err) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          msg: 'Cart Added',
        });
      });
    }
  }
  
  module.exports = Cart;
  