const tipoVehiculoRepository  = require('../repository/tipoVehiculo.repository');

class tipoVehiculoService {

    constructor() {}

    async getTipoVehiculo() {
        return await tipoVehiculoRepository.getTipoVehiculo();
    }
}

module.exports = new tipoVehiculoService();