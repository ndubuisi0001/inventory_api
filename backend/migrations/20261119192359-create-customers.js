"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("customers", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },

            name: {
                type: Sequelize.STRING(100),
                allowNull: false
            },

            email: {
                type: Sequelize.STRING(150),
                allowNull: false,
                unique: true
            },

            phone: {
                type: Sequelize.STRING(20),
                allowNull: false
            },

            address: {
                type: Sequelize.TEXT,
                allowNull: true
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
        await queryInterface.dropTable("customers");
    }
};