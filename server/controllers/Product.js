import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @desc Busca todos os produtos
// @route GET api/products
// @access Public
const get = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// @desc Busca produtos únicos por ID
// @route GET api/products/:id
// @access Public
const getByID = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        console.log("NOT FOUND");
        res.status(404);
        throw new Error("Product not Found");
    }
});

export { get, getByID };
