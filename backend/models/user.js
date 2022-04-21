module.exports = function(sequelize, DataTypes){
    let user = sequelize.define("user", {
        user_name: {
            field: "user_name",
            type: DataTypes.STRING(40),
            unique: true,
            allowNull: false
        },
        combat_level: {
            field: "combat_level",
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: false
        },
        item_level: {
            field: "item_level",
            type: DataTypes.FLOAT,
            unique: false,
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: "user"
    });
    return user;
}