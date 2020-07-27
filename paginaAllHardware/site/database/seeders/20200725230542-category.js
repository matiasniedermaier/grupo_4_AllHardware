'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [
      {name:"Procesadores"},
      {name:"Memoria Ram"},
      {name:"Fuentes"},
      {name:"Cargadores"},
      {name:"Estrella"},
   ])
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('category', null, {});
  
  }
};
