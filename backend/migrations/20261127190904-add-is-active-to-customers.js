"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("customers", "isActive", {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("customers", "isActive");
    }
};
