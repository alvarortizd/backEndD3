module.exports = (sequelize, DataTypes, Model) => {

    class User extends Model {}

    User.init({
        // Model attributes are defined here
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_empleado: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        id_tipo_usuario: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        usuario: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        pase: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'user' // We need to choose the model name
    });

    return User;
}