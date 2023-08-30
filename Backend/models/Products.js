// query for user





class Products{
    fetchProducts(req, res) {
       
        const query = ` 
            SELECT prodID, prodName, categoryID,price, prodUrl
            FROM Products
            `;
        dbConfig.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results: results,
          });
        });
      }

      fetchProducts(req, res) {
        const prodID = req.params.id; // Get the product ID from the request parameter
        const query = `
            SELECT prodID, prodName, ,categoryID, price, prodUrl
            FROM Products
            WHERE prodID = ?
        `;
        dbConfig.query(query, [prodID], (err, results) => { // Pass prodID as a parameter
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results: results,
            });
        });
    }
    
    addProducts(req, res) {
      const query = `
              INSERT INTO Products 
              SET ?
          `;
      dbConfig.query(query, [req.body], (err) => {
        if (!err) {
          res.json({
            status: res.statusCode,
            msg: "Product Added ",
          });
        } else {
          res.json({
            status: res.statusCode,
            msg: "An error occ",
            err:err
          });
        }
      });
    }
  

   
      updateProducts(req, res) {
        const query = `
                UPDATE Products
                SET ? 
                WHERE prodID = ${req.params.prodID};
            `;
        dbConfig.query(query, [req.body], (err) => {
          if (!err) {
            res.json({
              status: res.statusCode,
              msg: "Product Updated! ",
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "An error occ",
              err:err
            });
          }
        });
      }
    
      



      deleteProducts(req, res) {
        const query = `
            DELETE FROM Products
            WHERE prodID = ${req.params.id}
            `;
        dbConfig.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "PRODUCT SUCCESFULLY DELETED",
          });
        });
      }
}

module.exports = Products