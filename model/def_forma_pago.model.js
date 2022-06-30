module.exports = (sequelize, DataTypes, Model) => {

    class def_forma_pago extends Model {}

    def_forma_pago.init({
        // Model attributes are defined here
        id_forma_pago: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true
        },
        desc_forma_pago: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        descuento: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'def_forma_pago' // We need to choose the model name
    });

    return def_forma_pago;
}