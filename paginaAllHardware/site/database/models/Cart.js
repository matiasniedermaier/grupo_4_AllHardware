module.exports = (sequelize, DataTypes) => {

    let alias = 'Cart';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true
        },
        id_user: {
            type: DataTypes.INTEGER(11)
        },
        id_product: {
            type: DataTypes.INTEGER(11)
        },
        cantidad_total: {
            type: DataTypes.INTEGER(11)
        },
        total_price: {
            type: DataTypes.DOUBLE(7,2)
        }
    };
    let config = {
        tableName: 'cart',
        timestamps: false       
    };

    const Cart = sequelize.define(alias, cols, config);

};