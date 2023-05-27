const { Schema, model } = require("mongoose");

const orderSchema = Schema(
    {
        products: [
            {
                product: { type: Schema.Types.ObjectId, ref: "Product" },
                quantity: Number,
            },
        ],
        total: {
            type: Number,
            require: true,
        },
        address: {
            type: String,
            require: true,
        },
        costumer: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        phoneNumber: {
            type: String,
            require: true,
        },
    },
    { versionkey: false, timestamps: true }
);

const Order = model("Order", orderSchema);

module.exports = { Order };
