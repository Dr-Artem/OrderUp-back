const { Order } = require("../../models");
const { Product } = require("../../models");

const createOrder = async (req, res) => {
    const { costumer, email, phoneNumber, address, products, total } = req.body;
    console.log(req.body);

    const orderProducts = await Product.find({
        _id: { $in: products.map((p) => p.productId) },
    });

    // let totalAmount = 0;
    // orderProducts.forEach((product) => {
    //     const quantity = products.find(
    //         (p) => p.productId === product._id.toString()
    //     ).quantity;
    //     totalAmount += product.price * quantity;
    // });

    const newOrder = {
        products: orderProducts.map((product) => ({
            productId: product._id,
            quantity: products.find(
                (p) => p.productId === product._id.toString()
            ).quantity,
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
