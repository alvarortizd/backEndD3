const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class TipoVehiculoRepositoryRepository {

    db = {};

    constructor() {
        this.db = connect();
    }

    async getTipoVehiculo() {

        try {
            const tipoVehiculo = await this.db.tipoVehiculo.findAll();
            console.log('tipoVehiculo:::', tipoVehiculo);
            return tipoVehiculo;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

}

module.exports = new TipoVehiculoRepositoryRepository();