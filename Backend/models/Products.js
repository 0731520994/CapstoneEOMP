const db = require('../config');


class Products{
    fetchProducts(req, res) {
       
        const query = ` 
            SELECT prodID, prodName, category, price, prodUrl
            FROM Products
            `;
        db.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results: results,
          });
        });
      }

      fetchProduct(req, res) {
      ; 
        const query = `
            SELECT prodID, prodName, category, price, prodUrl
            FROM Products
            WHERE prodID = ${req.params.id}
        `;
        db.query(query, (err, results) => { 
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results: results,
            });
        });
    }

    fetchPerfumes(req, res){
      const query = `
      SELECT * FROM Products
      WHERE Category = 'Perfumes';
      `
      db.query(query,
         (err, results) =>{
          if (err) throw err
      res.json({
          status: res.statusCode,
          results,
      })  
      })
  }
    fetchAccessories(req, res){
      const query = `
      SELECT * FROM Products
      WHERE Category = 'Accessories';
      `
      db.query(query,
         (err, results) =>{
          if (err) throw err
      res.json({
          status: res.statusCode,
          results,
      })  
      })
  }
    fetchBeauty(req, res){
      const query = `
      SELECT * FROM Products
      WHERE Category = 'Beauty';
      `
      db.query(query,
         (err, results) =>{
          if (err) throw err
      res.json({
          status: res.statusCode,
          results,
      })  
      })
  }
    
    addProduct(req, res) {
      const query = `
        INSERT INTO Products
        SET ?;
      `;
      db.query(query, (err) => {
        if (err) throw err 
        res.json({
            status: res.statusCode,
            msg: "Product Added",
          })
      });
    }


   
      updateProduct(req, res) {
        const query = `
                UPDATE Products
                SET ? 
                WHERE prodID = ${req.params.prodID};
            `;
        db.query(query, [req.body], (err) => {
          if (!err) {
            res.json({
              status: res.statusCode,
              msg: "Product Updated! ",
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "An error occured",
              err:err
            });
          }
        });
      }
    

      deleteProduct(req, res) {
        const query = `
            DELETE FROM Products
            WHERE prodID = ${req.params.prodID}
            `;
        db.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "Product deleted!",
          });
        });
      }
}

module.exports = Products
