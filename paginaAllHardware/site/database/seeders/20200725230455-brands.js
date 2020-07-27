'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('brands', [
      {name:"Intel"},
      {name:"Amd"},
      {name:"Asus"},
      {name:"Lg"},
      {name:"Nokia"},
])
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brands', null, {});
  } 
};
