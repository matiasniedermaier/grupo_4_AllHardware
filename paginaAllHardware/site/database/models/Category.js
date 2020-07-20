module.exports = (sequelize, DataTypes) => {

    let alias = 'Category';
    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50)
        }
    };
    let config = {
        tableName: 'category',
        timestamps: false
    };

    const Category =  sequelize.define(alias, cols, config);
        Category.associate = function(models) {
            Category.hasMany(models.Product, {
                as: "product",
                foreignKey: 'id_category'
            });
        };

    return Category;

};