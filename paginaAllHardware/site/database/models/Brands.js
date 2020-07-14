module.exports = (sequelize, DataTypes) => {

    let alias = 'Brand';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(32)
        }
    };
    let config = {
        tableName: 'brands',
        timestamps: false
    };

    const Brand = sequelize.define(alias, cols, config);

};