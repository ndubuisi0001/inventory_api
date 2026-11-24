const express = require("express");
const router = express.Router();

const { createProduct, getAllProducts, getProductById, updateProduct } = require("../controllers/productController");

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);

module.exports = router;