module.exports = function(sequelize, DataTypes){
    let user = sequelize.define("user", {
        user_name: {
            field: "user_name",
            type: DataTypes.STRING(40),
            unique: true,
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: "user"
    });
    return user;
}