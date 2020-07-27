'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cart', [
      {id_user: "1", id_products: "14", cantidad: "2", price_total:""},
      {id_user: "2",id_products: "14", cantidad: "3", price_total:""},
      {id_user: "3", id_products: "16", cantidad: "4", price_total:""},
      {id_user: "4", id_products: "17", cantidad: "5", price_total:""},
      {id_user: "4", id_products: "18", cantidad: "1", price_total:""},
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cart', null, {});
  } 
  
};
