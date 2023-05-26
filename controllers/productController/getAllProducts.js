const { Product } = require("../../models");

const getAllProducts = async (req, res) => {
    const products = await Product.find();
    // const products = await Product.find({
    //     restaurantId: req.restaurant._id,
    // }).populate("restaurantId", "_id");

    res.json({
        status: "OK",
        code: 200,
        data: {
            products,
        },
    });
};

module.exports = getAllProducts;
