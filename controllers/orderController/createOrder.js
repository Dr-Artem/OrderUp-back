const { Order } = require("../../models");
const { Product } = require("../../models");

const createOrder = async (req, res) => {
    const { costumer, email, phoneNumber, address, products, total } = req.body;

    const orderProducts = await Product.find({
        _id: { $in: products.map((p) => p.product) },
    });

    const newOrder = {
        products: orderProducts.map((product) => ({
            product: product._id,
            quantity: products.find((p) => p.product === product._id.toString())
                .quantity,
        })),
        total,
        address,
        costumer,
        email,
        phoneNumber,
    };

    const order = new Order(newOrder);
    await order.save();

    res.json({
        status: "OK",
        code: 200,
        data: {
            order,
        },
    });
};

module.exports = createOrder;
