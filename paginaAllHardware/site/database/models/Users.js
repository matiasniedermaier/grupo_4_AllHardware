module.exports = (sequelize, DataTypes) => {

    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true
        },
        email: {
            type: DataTypes.SRTING(200)
        },
        password: {
            type: DataTypes.STRING(200)
        },
        admin: {
            type: DataTypes.BOOLEAN
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

};