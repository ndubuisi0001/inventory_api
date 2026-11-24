const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Order = sequelize.define("Order", {
    status: {
        type: DataTypes.ENUM(
            "pending",
            "processing",
            "shipped",
            "delivered",
            "cancelled"
        ),
        allowNull: false,
        defaultValue: "pending"
    },

    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: "orders"
});

module.exports = Order;