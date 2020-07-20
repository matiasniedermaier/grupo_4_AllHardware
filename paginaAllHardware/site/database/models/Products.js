module.exports = (sequelize, DataTypes) => {

    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(70)
        },
        price: {
            type: DataTypes.DOUBLE(7.2)
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
            type: DataTypes.INTEGER(10),
            foreignKey: true
        },
        id_brand: {
            type: DataTypes.INTEGER(10),
            foreignKey: true
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsTo(models.Cart, {
            as: 'cart',
            foreignKey: 'id'
        });
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'id_category'
        });
        Product.belongsTo(models.Brand, {
            as: 'brand',
            foreignKey: 'id_brand'
        });
    }

    return Product;

};