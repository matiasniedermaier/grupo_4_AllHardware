'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('brands', [
      {id: 1, name:"Intel"},
      {id: 2, name:"Amd"},
      {id: 3, name:"Asus"},
      {id: 4, name:"Lg"},
      {id: 5, name:"Nokia"},
])
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brands', null, {});
  } 
};
