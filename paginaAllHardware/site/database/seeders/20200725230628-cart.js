'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cart', [
      {id_user: 1, id_products: 1, cantidad:2, price_total:0},
      {id_user: 2,id_products: 2, cantidad: 3, price_total:0},
      {id_user: 3, id_products: 3, cantidad: 4, price_total:0},
      {id_user: 4, id_products: 4, cantidad: 4, price_total:0},
      {id_user: 5, id_products: 5, cantidad: 1, price_total:0},
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cart', null, {});
  } 
  
};
