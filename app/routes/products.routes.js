module.exports = app => {
    const product = require("../controller/products.controller.js");
  
    // Create a new product
    app.post("/product", product.create);
  
    // Retrieve all Customers
    app.get("/product", product.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/product/:productId", product.findOne);
  
    // Update a Customer with customerId
    app.put("/product/:productId", product.update);
  
    // Delete a Customer with customerId
    app.delete("/product/:productId", product.delete);
  
    // Create a new Customer
    app.delete("/product", product.deleteAll);
  };