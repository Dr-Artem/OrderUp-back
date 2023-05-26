const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const restaurantRoutes = require("./routes/api/restaurantRoutes");
const productRoutes = require("./routes/api/productRoutes");
const orderRoutes = require("./routes/api/orderRoutes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/restaurants", restaurantRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message: message });
});

module.exports = app;
