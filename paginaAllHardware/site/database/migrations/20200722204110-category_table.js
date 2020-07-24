'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    return queryInterface.createTable('category', {
      id: {
        type: Sequelize.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false

    }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('category')
  }
};
