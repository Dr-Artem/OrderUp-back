const { Restaurant } = require("../../models");

const addRestaurants = async (req, res) => {
    const restaurant = await Restaurant.create({ ...req.body });

    res.json({
        status: "Created",
        code: 201,
        data: {
            restaurant,
        },
    });
};

module.exports = addRestaurants;
