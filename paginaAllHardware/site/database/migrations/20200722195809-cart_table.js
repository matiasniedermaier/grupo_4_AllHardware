'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cart', {
    id: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
        },
 
    id_user: {
      type: Sequelize.INTEGER(10),
      references:{
        model: {
          tableName: 'users',
          schema: 'schema'
        },
        primaryKey: 'id'
      }
     
              },
    id_product: {
      type: Sequelize.INTEGER(10),
      references:{
        model: {
          tableName: 'products',
          schema: 'schema'
               },
        primaryKey: 'id'
                  }
      
              },
    cantidad: {
      type: Sequelize.INTEGER(11)
              },
    price_total: {
      type: Sequelize.DOUBLE(7.2)
                 }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cart')
  }

};