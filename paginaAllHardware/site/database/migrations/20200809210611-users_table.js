'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
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
        type: Sequelize.STRING(200),
        allowNull: false
                },
      img: {
        type: Sequelize.STRING(200),
        allowNull: false
           },
      admin: {
        type: Sequelize.BOOLEAN
      },
      promocion: {
        type: Sequelize.BOOLEAN
      }
  })
},
down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
