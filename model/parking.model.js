module.exports = (sequelize, DataTypes, Model) => {

    class Parking extends Model {}

    Parking.init({
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
        },
        color: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        estado: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        x: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        y: {
            type: DataTypes.INTEGER,
            allowNull: false
        },columna: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'parking' // We need to choose the model name
    });

    return Parking;
}