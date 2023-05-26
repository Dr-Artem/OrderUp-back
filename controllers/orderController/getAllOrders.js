const { Order } = require("../../models");

const getAllOrders = async (req, res) => {
    const orders = await Order.find();

    res.json({
        status: "OK",
        code: 200,
        data: {
            orders,
        },
    });
};

module.exports = getAllOrders;
