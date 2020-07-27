'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [
      {id: 1, name:"Procesadores"},
      {id: 2, name:"Memoria Ram"},
      {id: 3, name:"Fuentes"},
      {id: 4, name:"Cargadores"},
      {id: 5, name:"Estrella"},
   ])
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('category', null, {});
  
  }
};
