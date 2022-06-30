const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require('../logger/api.logger');
const {request} = require("express");

const connect = () => {

    const hostName = process.env.HOST;
    const userName = process.env.USER;
    const password = process.env.PASSWORD;
    const database = process.env.DB;
    const dialect = process.env.DIALECT;

    const sequelize = new Sequelize(database, userName, password, {

        host: hostName,
        dialect: dialect,
        operatorsAliases: 0,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.vehiculo = require("../model/mov_vehiculo.model")(sequelize,DataTypes,Model);
    db.user = require("../model/user.model")(sequelize, DataTypes, Model);
    db.parking = require("../model/parking.model")(sequelize,DataTypes,Model);
    db.def_forma_pago = require("../model/def_forma_pago.model")(sequelize,DataTypes,Model);
    db.mov_asignar_lugar_posicion = require("../model/mov_asignar_lugar_posicion.model")(sequelize,DataTypes,Model);
    db.cliente = require("../model/cliente.model")(sequelize,DataTypes,Model);
    db.tipoVehiculo = require('../model/tipo_vehiculo.model')(sequelize,DataTypes,Model);
    return db;

}

module.exports = {
    connect
}