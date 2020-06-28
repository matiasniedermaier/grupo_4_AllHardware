const generate = require('./generate');
const bcrypt = require('bcrypt');

let UsersFunctions = {
    findUserEmail: function(value) {
        let users = generate.readJsonUser();
        for( let i = 0; i < users.length; i++) {
            if (users[i].email == value) {
                return true;
            }
        }
        return false;
    },

    findUserPassword: function(value, { req }) {
        let users = generate.readJsonUser();
        for( let i = 0; i < users.length; i++) {
            if(bcrypt.compareSync(value, users[i].password) && users[i].email == req.body.email){
                return true;
            }
        }
        return false;
    }
};

module.exports = UsersFunctions;