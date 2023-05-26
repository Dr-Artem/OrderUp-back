const { Restaurant } = require("../../models");

const getAllRestaurants = async (req, res) => {
    const restaurants = await Restaurant.find();

    res.json({
        status: "OK",
        code: 200,
        data: {
            restaurants,
        },
    });
};

module.exports = getAllRestaurants;
