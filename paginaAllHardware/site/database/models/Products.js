module.exports = (sequelize, DataTypes) => {

    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(70)
        },
        price: {
            type: DataTypes.DOUBLE
        },
        stock: {
            type: DataTypes.INTEGER(11)
        },
        especification: {
            type: DataTypes.STRING(200)
        },
        img: {
            type: DataTypes.STRING(200)
        },
        id_category: {
            type: DataTypes.INTEGER
        },
        id_brand: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

};