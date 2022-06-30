const vehiucloRepository  = require('../repository/mov_vehiculo.repository');

class vehiculoService {

    constructor() {}

    async getVehiculo() {
        return await vehiucloRepository.getVehiculo();
    }

    async createVehiculo(vehiculo) {
        return await vehiucloRepository.createVehiculo(vehiculo);
    }

    async updateVehiculo(vehiculo) {
        return await vehiucloRepository.updateVehiculo(vehiculo);
    }

    async deleteVehiculo(vehiculoId) {
        return await vehiucloRepository.deleteVehiculo(vehiculoId);
    }

}

module.exports = new vehiculoService();