module.exports = (sequelize, DataTypes) => {

    let alias = 'Category';
    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50)
        }
    };
    let config = {
        tableName: 'category',
        timestamps: false
    };

    const Category = (alias, cols, config);

};