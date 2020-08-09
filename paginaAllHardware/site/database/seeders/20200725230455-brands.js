'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('brands', [
      {id: 1, name:"Intel"},
      {id: 2, name:"AMD"},
      {id: 3, name:"Asus"},
      {id: 4, name:"Lg"},
      {id: 5, name:"Nokia"},
      {id: 6, name:"Kingston"},
      {id: 7, name:"Samsung"},
      {id: 8, name:"Corsair"},
      {id: 9, name:"Thermaltake"},
      {id: 10, name:"MSI"},
      {id: 11, name:"BenQ"},
      {id: 12, name:"Logitech"}
])
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brands', null, {});
  } 
};
