module.exports = (sequelize, DataTypes) => {

    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200)
        },
        email: {
            type: DataTypes.STRING(200)
        },
        password: {
            type: DataTypes.STRING(200)
        },
        img: {
            type: DataTypes.STRING(200)
        },
        admin: {
            type: DataTypes.BOOLEAN
        },
        promocion: {
            type: DataTypes.BOOLEAN
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = models => {
        User.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'id_user'
        });
    };

    return User;

};