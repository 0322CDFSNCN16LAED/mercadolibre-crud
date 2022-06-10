const fs = require("fs");
const path = require("path");

const db = require("../data/db");
const products = db.getAll();

const productsFilePath = path.join(__dirname, "../data/products-db.json");

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
        const newProduct = req.body;
        if (products.length) {
            newProduct.id = products[products.length - 1].id + 1;
        } else {
            newProduct.id = 1;
        }

        newProduct.image = "default-image.png";

        products.push(newProduct);

        const fileTxt = JSON.stringify(products, null, 4);

        fs.writeFileSync(productsFilePath, fileTxt);

        res.redirect("/products");
    },

    // Update - Form to edit
    edit: (req, res) => {
        let id = req.params.id; 
        let productToEdit= products.find(product => product.id == id); 

        res.render("product-edit-form", {productToEdit: productToEdit});
    },
    // Update - Method to update
    update: (req, res) => {
        const productEdit = products.findIndex((p) => p.id==req.params.id);

        products.splice(productEdit, 1, req.body)

        res.redirect('/products');
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        res.send(req.body);
    },
};

module.exports = controller;
