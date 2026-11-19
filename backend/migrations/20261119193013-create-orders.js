"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("orders", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },

            customerId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "customers",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "RESTRICT"
            },

            status: {
                type: Sequelize.ENUM(
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
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: 0
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },

            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable("orders");
    }
};
