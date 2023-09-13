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
  

//   addProduct(req, res) {
//     const data = req.body;
//     const query = `
//     INSERT INTO Products
//     SET ?;
//     `;
//     db.query(query, [data], (err) => {
//         if (err) {
//             console.error("Error Adding New product:", err);
//             return res.status(500).json({
//                 status: 500,
//                 error: "error Adding new product"
//             });
//         }
//         res.json({
//             status: res.statusCode,
//             msg: "Product Added"
//         });
//     });
// }
    

  
  addProduct(req, res) {
    const { prodID, prodName, category, price, prodUrl } = req.body; 
    const query = `
      INSERT INTO Products (prodID, prodName, category, price, prodUrl)
      VALUES (?, ?, ?, ?, ?);
    `;
    const values = [prodID, prodName, category, price, prodUrl];
    db.query(query, values, (err) => {
      if (!err) {
        res.json({
          status: res.statusCode,
          msg: "Product Added",
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "An error occurred",
          err: err,
        });
      }
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
