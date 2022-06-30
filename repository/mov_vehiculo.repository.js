const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class VehiculoRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
      //  this.db.sequelize.sync({ force: true }).then(() => {
     //       console.log("Drop and re-sync db.");
       // });
    }

    async getVehiculo() {

        try {
            const vehiculo = await this.db.vehiculo.findAll();
            console.log('vehiculo:::', vehiculo);
            return vehiculo;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createVehiculo(vehiculo) {
        let data = {};
        try {
            data = await this.db.vehiculo.create(vehiculo);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateVehiculo(vehiculo) {
        let data = {};
        try {
            data = await this.db.vehiculo.update({...vehiculo}, {
                where: {
                    id_vehiculo: vehiculo.id_vehiculo
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteVehiculo(vehiculoId) {
        let data = {};
        try {
            data = await this.db.vehiculo.destroy({
                where: {
                    id_vehiculo: vehiculoId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new VehiculoRepository();