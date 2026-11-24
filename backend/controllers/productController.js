const { Product } = require("../models");

const createProduct = async (req, res) => {
    try {
        const { name, description, sku, price, stock } = req.body;

        const product = await Product.create({
            name,
            description,
            sku,
            price,
            stock
        });

        res.status(201).json({
            message: "Product created successfully",
            product
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create product",
            error: error.message
        });
    }
};
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();

        res.status(200).json({
            message: "Products retrieved successfully",
            count: products.length,
            products
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve products",
            error: error.message
        });
    }
};
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product retrieved successfully",
            product
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve product",
            error: error.message
        });
    }
};
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        const { name, description, sku, price, stock } = req.body;

        const updates = {};

        if (name !== undefined) updates.name = name;
        if (description !== undefined) updates.description = description;
        if (sku !== undefined) updates.sku = sku;
        if (price !== undefined) updates.price = price;
        if (stock !== undefined) updates.stock = stock;

        await product.update(updates);

        res.status(200).json({
            message: "Product updated successfully",
            product
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update product",
            error: error.message
        });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        if (!product.isActive) {
            return res.status(400).json({
                message: "Product is already inactive"
            });
        }

        await product.update({
            isActive: false
        });

        res.status(200).json({
            message: "Product deactivated successfully",
            product
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to deactivate product",
            error: error.message
        });
    }
};
module.exports = {
    createProduct, 
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};