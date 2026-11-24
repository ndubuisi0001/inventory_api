"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("products", "isActive", {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("products", "isActive");
    }
};
