const express = require("express");
const productRouter = express.Router();
const productRoute = require("../controller/product");
productRouter.get("/", productRoute.getProducts);

module.exports = productRouter;
