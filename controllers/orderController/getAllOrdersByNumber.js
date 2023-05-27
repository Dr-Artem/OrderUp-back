const { Order } = require("../../models");

const getAllOrdersByNumber = async (req, res) => {
    const { phoneNumber } = req.body;
    const orders = await Order.find({ phoneNumber });

    res.json({
        status: "OK",
        code: 200,
        data: {
            orders,
        },
    });
};

module.exports = getAllOrdersByNumber;
