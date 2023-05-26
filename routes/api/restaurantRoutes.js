const express = require("express");
const router = express.Router();

const { errorControlMiddleware } = require("../../middlewares");
const { restaurant: ctrl } = require("../../controllers");

router.get("/", errorControlMiddleware(ctrl.getAllRestaurants));
router.post("/create", errorControlMiddleware(ctrl.addRestaurant));

module.exports = router;
