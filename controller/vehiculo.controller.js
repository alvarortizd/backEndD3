const vehiculoService  = require('../service/vehiculo.service');
const logger = require('../logger/api.logger');

class vehiculoController {

    async getVehiculo() {
        logger.info('Controller: getVehiculo')
        return await vehiculoService.getVehiculo();
    }

    async createVehiculo(vehiculo) {
        logger.info('Controller: createVehiculo', vehiculo);
        return await vehiculoService.createVehiculo(vehiculo);
    }

    async updateVehiculo(vehiculo) {
        logger.info('Controller: updateVehiculo', vehiculo);
        return await vehiculoService.updateVehiculo(vehiculo);
    }

    async deleteVehiculo(vehiculoId) {
        logger.info('Controller: deleteVehiculo', vehiculoId);
        return await vehiculoService.deleteVehiculo(vehiculoId);
    }
}
module.exports = new vehiculoController();