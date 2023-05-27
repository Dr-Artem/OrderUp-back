const express = require("express");
const router = express.Router();

const { errorControlMiddleware } = require("../../middlewares");
const { order: ctrl } = require("../../controllers");

router.get("/", errorControlMiddleware(ctrl.getAllOrders));
router.get("/:phoneNumber", errorControlMiddleware(ctrl.getAllOrdersByNumber));
router.post("/create", errorControlMiddleware(ctrl.createOrder));

module.exports = router;
