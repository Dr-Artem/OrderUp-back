const { Order } = require("../../models");

const getAllOrdersByNumber = async (req, res) => {
    const { phoneNumber } = req.params;
    const orders = await Order.find({
        phoneNumber: phoneNumber,
    }).populate("products.product");

    res.json({
        status: "OK",
        code: 200,
        data: {
            orders,
        },
    });
};

module.exports = getAllOrdersByNumber;
