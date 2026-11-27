const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Customer = sequelize.define("Customer", {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true
    },

    phone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
}
}, {
    tableName: "customers"
});

module.exports = Customer;