const { Schema, model } = require("mongoose");

const productSchema = Schema(
    {
        name: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        category: {
            type: String,
            require: true,
        },
        imageUrl: {
            type: String,
            require: true,
        },
        restaurantId: { type: Schema.Types.ObjectId, ref: "restaurant" },
    },
    { versionkey: false, timestamps: true }
);

const Product = model("Product", productSchema);

module.exports = { Product };
