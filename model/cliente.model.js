module.exports = (sequelize, DataTypes, Model) => {

    class cliente extends Model {}

    cliente.init({
        // Model attributes are defined here
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true
        },
        id_empresa: {
            type: DataTypes.STRING,
             allowNull: false
        },
        id_tipo_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nro_ci: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'cliente' // We need to choose the model name
    });

    return cliente;
}