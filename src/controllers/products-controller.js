const db = require('../data/db');
const allproducts = db.getAll();

// console.log(allproduct);
const controller = {
    // Root - Show all products
    index: (req, res) => {
        res.render("products", {
            allproducts: allproducts
        });
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        // Do the magic
    },

    // Create - Form to create
    create: (req, res) => {
        // Do the magic
    },

    // Create -  Method to store
    store: (req, res) => {
        // Do the magic
    },

    // Update - Form to edit
    edit: (req, res) => {
        // Do the magic
    },
    // Update - Method to update
    update: (req, res) => {
        // Do the magic
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        // Do the magic
    },
};

module.exports = controller;
