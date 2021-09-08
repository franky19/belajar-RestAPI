const sql=require("./db.js")

//constructor
const Product=function(product){
    this.product_name=product.product_name;
    this.product_price=product.product_price
};

Product.create=(newProduct,result)=>{
    sql.query("INSERT INTO product set ?",newProduct, (err,res)=>{
        if(err){
            console.log("error",err);
            result(err,null);
            return
        }

        console.log("created product: ",{id:res.insertId, ...newProduct});
        result(null,{id:res.insertId,...newProduct})
    })
}
Product.findById=(product_Id,result)=>{
    sql.query(`SELECT * FROM product WHERE product_id = ${product_Id}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        if (res.length) {
          console.log("found product: ", res[0]);
          result(null, res[0]);
          return;
        }
    
        // not found Customer with the id
        result({ kind: "not_found" }, null);
      });
}

Product.getAll = result => {
    sql.query("SELECT * FROM product", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("product: ", res);
      result(null, res);
    });
  };
  Product.updateById = (productId, product, result) => {
    sql.query(
      "UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?",
      [product.product_name, product.product_price, productId],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated customer: ", { product_id: productId, ...product });
        result(null, { product_id: productId, ...product });
      }
    );
  };
  
Product.remove = (productId, result) => {
    sql.query("DELETE FROM product WHERE product_id = ?", productId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted product with id: ", productId);
      result(null, res);
    });
  };
  
Product.removeAll = result => {
    sql.query("DELETE FROM product", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} product`);
      result(null, res);
    });
  };
  
  module.exports = Product;