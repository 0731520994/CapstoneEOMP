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
    
    // addProduct(req, res) {
    //   const data = req.body;
    //   const query = `
    //           INSERT INTO Products 
    //           SET ?
    //       `;

        

    //   db.query(query, [req.body], (err) => {
    //     if (!err) {
    //       res.json({
    //         status: res.statusCode,
    //         msg: "Product Added ",
    //       });
    //     } else {
    //       res.json({
    //         status: res.statusCode,
    //         msg: "An error occured",
    //         err:err
    //       });
    //     }
    //   });
    // }
  
// addProduct(req, res) {
//   const { prodID,prodName, categoryID, price, prodUrl } = req.body; // Assuming these are the columns in your table
//   const query = `
//     INSERT INTO Products (prodName, categoryID, price, prodUrl)
//     VALUES (?, ?, ?, ?)
//   `;
//   db.query(query, [prodID,prodName, categoryID, price, prodUrl], (err) => {
//     if (!err) {
//       res.json({
//         status: res.statusCode,
//         msg: "Product Added",
//       });
//     } else {
//       res.json({
//         status: res.statusCode,
//         msg: "An error occurred",
//         err: err,
//       });
//     }
//   });
// }


   
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
            msg: "PRODUCT SUCCESFULLY DELETED",
          });
        });
      }
}

module.exports = Products
