const { Product } = require("../../models");

const getProductsByRestaurant = async (req, res) => {
    console.log(req.params.id);
    const { id } = req.params;
    const products = await Product.find({
        restaurantId: id,
    });

    res.json({
        status: "OK",
        code: 200,
        data: {
            products,
        },
    });
};

module.exports = getProductsByRestaurant;
