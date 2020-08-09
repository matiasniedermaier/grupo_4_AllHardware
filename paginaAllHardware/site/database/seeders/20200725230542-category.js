'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [
      {id: 1, name:"Almacenamiento"},
      {id: 2, name:"Fuentes"},
      {id: 3, name:"Gabinete"},
      {id: 4, name:"Memorias Ram"},
      {id: 5, name:"Monitores"},
      {id: 6, name:"Motherboards"},
      {id: 7, name:"Perifericos"},
      {id: 8, name:"Placas de Video"},
      {id: 9, name:"Procesadores"},
      {id: 10, name:"Refrigeración"},
   ])
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('category', null, {});
  
  }
};
