const tipoVehiculoService  = require('../service/tipoVehiculo.service');
const logger = require('../logger/api.logger');

class tipoVehiculoController {

    async getTipoVehiculo() {
        logger.info('Controller: getTipoVehiculo')
        return await tipoVehiculoService.getTipoVehiculo();
    }
}
module.exports = new tipoVehiculoController();