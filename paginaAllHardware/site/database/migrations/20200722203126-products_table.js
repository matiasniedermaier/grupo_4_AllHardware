'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('brand', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(70)
    },
    price: {
        type: Sequelize.DOUBLE(7.2)
    },
    stock: {
        type: Sequelize.INTEGER(11)
    },
    especification: {
        type: Sequelize.STRING(200)
    },
    img: {
        type: Sequelize.STRING(200)
    },
    id_category: {
        type: Sequelize.INTEGER(10),
        foreignKey: true
    },
    id_brand: {
        type: Sequelize.INTEGER(10),
        foreignKey: true
    }
      })
    },
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('product')
  }
};
