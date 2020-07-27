'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {id: 1, name:"Juan", email: "juan@gmail.com", password: bcrypt.hashSync('12345678', 10), img:"/images/users/img5.png", admin:"", promocion: 0 },
      {id: 2, name:"Jose", email: "jose@gmail.com", password: bcrypt.hashSync('12345678', 10), img:"/images/users/img4.png", admin:"" , promocion: 1 },
      {id: 3, name:"Manuel", email: "manuel@hotmail.com", password: bcrypt.hashSync('12345678', 10), img:"/images/users/img3.png", admin: "", promocion: 0 },
      {id: 4, name:"Rosa", email: "rosa@gmail.com", password: bcrypt.hashSync('87654321', 10), img:"/images/users/img2.png", admin: "", promocion: 1 },
      {id: 5, name:"Juana", email: "juanajuana@gmail.com", password: bcrypt.hashSync('12345678', 10), img:"/images/users/img1.png", admin: false, promocion: 0 },
    ])
  
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  } 
  
};
