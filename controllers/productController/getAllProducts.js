const { Product } = require("../../models");

const getAllProducts = async (req, res) => {
    const products = await Product.find();

    res.json({
        status: "OK",
        code: 200,
        data: {
            products,
        },
    });
};

module.exports = getAllProducts;
