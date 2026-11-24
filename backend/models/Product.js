const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("Product", {
    name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    sku: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },

    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: "products"
});

module.exports = Product;