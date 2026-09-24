//Controller chứa logic xử lý request.
const Product = require('../models/product');

// CREATE
exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();

        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// READ ALL
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// READ ONE
exports.getProductByPid = async (req, res) => {
    try {
        const product = await Product.findOne({
            pid: req.params.pid
        });

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// UPDATE
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate(
            { pid: req.params.pid },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        res.status(200).json(product);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// DELETE
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({
            pid: req.params.pid
        });

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        res.status(200).json({
            message: 'Product deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};