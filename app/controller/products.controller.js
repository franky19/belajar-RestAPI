const Product = require("../models/products.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const product = new Product({
      product_name: req.body.product_name,
      product_price: req.body.product_price
    });
  
    // Save Customer in the database
    Product.create(product, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Product.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
    Product.findById(req.params.productId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.productId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.productId
          });
        }
      } else res.send(data);
    });
  };
// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Product.updateById(
      req.params.productId,
      new Product(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.productId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Customer with id " + req.params.productId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    Customer.remove(req.params.productId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.productId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Customer with id " + req.params.productId
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
  };
// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    Customer.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all customers."
        });
      else res.send({ message: `All Customers were deleted successfully!` });
    });
  };