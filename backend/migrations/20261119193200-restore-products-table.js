"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("products", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },

            name: {
                type: Sequelize.STRING(150),
                allowNull: false
            },

            description: {
                type: Sequelize.TEXT,
                allowNull: true
            },

            sku: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true
            },

            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false
            },

            stock: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("products");
    }
};