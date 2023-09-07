const db = require('../config');

class Cart {
    fetchCart(req, res) {
        const query = `
        SELECT P.prodID, P.prodName, P.price, P.prodUrl, C.cartID, C.quantity
          FROM Products P
          JOIN Cart C ON P.categoryID = C.ID
          WHERE C.cart = ?;
        
        `
        db.query(query,
            (err, results)=>{
                if(err) throw err
                res.json({
                    status:res.statusCode,
                    results
                })
            }
            )
    };

  
    deleteCart(req, res){
        const query = `
        DELETE FROM Cart
        WHERE orderID= ${req.params.id};
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'Cart deleted from the list'
            })
        })
    };


    updateCart(req, res){
        const query = `
        UPDATE FROM Cart
        WHERE ID= ${req.params.id};
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'Cart updated from the list'
            })
        })
    }


  
    addCart(req, res){
        const query = `
        Add FROM Cart
        WHERE ID= ${req.params.id};
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'Cart Added'
            })
        })
    };
}



module.exports = Cart