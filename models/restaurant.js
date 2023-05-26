const { Schema, model } = require("mongoose");

const restaurantSchema = Schema(
    {
        name: {
            type: String,
            require: true,
        },
        logo: {
            type: String,
            require: true,
        },
    },
    { versionkey: false, timestamps: true }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = { Restaurant };
