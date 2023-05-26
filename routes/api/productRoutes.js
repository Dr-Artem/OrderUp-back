const express = require("express");
const router = express.Router();

const { errorControlMiddleware } = require("../../middlewares");
const { product: ctrl } = require("../../controllers");

router.get("/", errorControlMiddleware(ctrl.getAllProducts));
router.get("/:id", errorControlMiddleware(ctrl.getProductsByRestaurant));
router.post("/create", errorControlMiddleware(ctrl.addProduct));

module.exports = router;
