module.exports = (sequelize, DataTypes) => {

    let alias = 'Cart';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: DataTypes.INTEGER(11),
            foreignKey: true
        },
        id_products: {
            type: DataTypes.INTEGER(11),
            foreignKey: true
        },
        cantidad: {
            type: DataTypes.INTEGER(11)
        },
        price_total: {
            type: DataTypes.DOUBLE(7,2)
        }
    };
    let config = {
        tableName: 'cart',
        timestamps: false       
    };

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = models => {
        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'id_user'
        });
        Cart.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'id_products'
        });
    };

    return Cart;

};