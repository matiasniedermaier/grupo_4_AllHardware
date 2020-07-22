'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('brand', {
      id: {
        type: Sequelize.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
          },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
         },
    email: {
    type: Sequelize.STRING(50),
    allowNull: false
         },
    password: {
    type: Sequelize.STRING(50),
    allowNull: false
            },
   img: {
    type: Sequelize.STRING(50),
    allowNull: false
       }
      })
    },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
