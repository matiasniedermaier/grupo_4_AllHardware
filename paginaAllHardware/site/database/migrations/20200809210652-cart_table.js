'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cart', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
        },
 
    id_user: {
      type: Sequelize.INTEGER,
      references:{
        model: {
          tableName: 'users'
        },
            Key: 'id'
      }
     
              },
    id_products: {
      type: Sequelize.INTEGER,
      references:{
        model: {
          tableName: 'products'
               },
            Key: 'id'
                  }
      
              },
    cantidad: {
      type: Sequelize.INTEGER
              },
    price_total: {
      type: Sequelize.DOUBLE
                 }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cart')
  }

};