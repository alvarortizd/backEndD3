module.exports = (sequelize, DataTypes, Model) => {

    class mov_asignar_lugar_posicion extends Model {}

    mov_asignar_lugar_posicion.init({
        // Model attributes are defined here
        id_asignar: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false
        },
        id_estacionamiento: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        id_cliente: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        id_vehiculo: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        fhora_entrada: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },fhora_salida: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },id_forma_de_pago: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        descuento_aplicado: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        monto_total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado_pago: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'mov_asignar_lugar_posicion' // We need to choose the model name
    });

    return mov_asignar_lugar_posicion;
}