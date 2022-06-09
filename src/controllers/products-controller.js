const db = require("../data/db");
const products = db.getAll();

// console.log(allproduct);
const controller = {
    // Root - Show all products
    index: (req, res) => {
        res.render("products", {
            products: products,
        });
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        res.render("detail", {
            product: products.find((p) => p.id == req.params.id),
        });
    },

    // Create - Form to create
    create: (req, res) => {
        res.render("product-create-form");
    },

    // Create -  Method to store
    store: (req, res) => {
        res.send(req.body);
    },

    // Update - Form to edit
    edit: (req, res) => {
        res.render("product-edit-form");
    },
    // Update - Method to update
    update: (req, res) => {
        res.send(req.body);
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        res.send(req.body);
    },
};

module.exports = controller;
