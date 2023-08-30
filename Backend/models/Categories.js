// query for user



class Categories{
    fetchCategories(req, res) {
       
        const query = ` 
            SELECT categoryID, category
            `;
        dbConfig.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            results: results,
          });
        });
      }

      fetchCategory(req, res) {
        const categoryID = req.params.id; // Get the product ID from the request parameter
        const query = `
            SELECT categoryID,category
            FROM Categories
            WHERE categoryID = ?
        `;
        dbConfig.query(query, [categoryID], (err, results) => { // Pass prodID as a parameter
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results: results,
            });
        });
    }
    
    addCategory(req, res) {
      const query = `
              INSERT INTO CATEGORIES
              SET ?
          `;
      dbConfig.query(query, [req.body], (err) => {
        if (!err) {
          res.json({
            status: res.statusCode,
            msg: "Category Added ",
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
  

  
    


      deleteCategory(req, res) {
        const query = `
            DELETE FROM Products
            WHERE prodID = ${req.params.id}
            `;
        dbConfig.query(query, (err) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            msg: "CATEGORY SUCCESFULLY DELETED",
          });
        });
      }
}

module.exports = Categories;