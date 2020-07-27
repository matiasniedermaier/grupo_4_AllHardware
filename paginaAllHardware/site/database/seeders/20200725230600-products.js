'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {id: 1, name: "Procesador", price: 6500, stock: 5, especification:"# of Cores: 4, # of Threads: 4, Processor Base Frequency: 3.60 GHz, Max Turbo Frequency: 4.  20 GHz, Cache: 6 MB, Bus Speed: 8 GT/s DMI3, TDP: 65 W", img:"/images/imagenesProductos/procesadores/intel/INTEL COFFEE LAKE CORE I3 9100F.webp", id_category: 5, id_brand: 5},
      {id: 2, name: "Memoria Ram", price: 5000, stock: 10, especification:"Cores 6, Threads 12, Processor Base Frequency 3.20 GHz, Max Turbo Frequency 4.60 GHz, Cache 12 MB, Bus Speed 8 GT/s DMI3, TDP 65 W, TJUNCTION 100°C", img:"/images/imagenesProductos/procesadores/intel/INTEL COFFEE LAKE CORE I3 9100F.webp", id_category: 4, id_brand: 2},
      {id: 3, name: "Fuente de alimemtacion", price: 9000, stock: 20, especification:"6 of Cores, 6 of Threads, Processor Base Frequency 3.70 GHz, Max Turbo Frequency 4.60 GHz, Cache 9 MB SmartCache, Bus Speed 8 GT/s DMI3, TDP 95 W", img:"/images/imagenesProductos/procesadores/intel/INTEL COFFEE LAKE CORE I5 9600K.webp", id_category:3, id_brand: 3},
      {id: 4, name: "Cargador", price: 7000, stock: 30, especification:"El cargador será alimentado desde una fuente monofásica o trifásica de 3x380/220V - 50 Hz y suministrarán corriente continua", img:"/images/imagenesProductos/procesadores/intel/INTEL COFFEE LAKE CORE I5 9600K.webp", id_category: 2, id_brand: 1},
      {id: 5,name: "bateria", price: 8000, stock: 50, especification:"Minicomp - Vertiv - Eaton - APC - Autonomías extendidas, rackeables. Service. Atención inmediata. Envíos a todo el País. Garantías extendidas", img:"/images/imagenesProductos/procesadores/intel/INTEL COFFEE LAKE CORE I5 9600K.webp", id_category:1, id_brand: 4},
  ])
  
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  
  }
};
