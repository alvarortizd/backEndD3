module.exports = (sequelize, DataTypes, Model) => {

    class mov_vehiculo extends Model {}

    mov_vehiculo.init({
        // Model attributes are defined here
        id_vehiculo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true
        },
        id_tipo_vehiculo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nro_chapa: {
            type: DataTypes.STRING,
            allowNull: false
        },
        anho: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nro_chasis: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'vehiculo' // We need to choose the model name
    });

    return mov_vehiculo;
}