const { Product } = require("../../models");

const addProduct = async (req, res) => {
    const product = await Product.create({ ...req.body });

    res.json({
        status: "Created",
        code: 201,
        data: {
            product,
        },
    });
};

module.exports = addProduct;
