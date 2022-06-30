module.exports = (sequelize, DataTypes, Model) => {

    class tipoVehiculo extends Model {}

    tipoVehiculo.init({
        // Model attributes are defined here
        id_tipo_vehiculo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true
        },
        desc_tipo_vehiculo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tarifa_x_hora: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'tipoVehiculo' // We need to choose the model name
    });

    return tipoVehiculo;
}