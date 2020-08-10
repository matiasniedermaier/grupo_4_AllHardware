'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
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
        type: Sequelize.DOUBLE()
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
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: {
            tableName: 'category'
                 },
              Key: 'id'
                   }
                   },
      id_brand: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references:{
          model: {
            tableName: 'brands',
                 },
              Key: 'id'
                 }
                 }
    })
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('products')
  }
};
