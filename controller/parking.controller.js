const parkingService  = require('../service/parking.service');
const logger = require('../logger/api.logger');

class ParkingController {

    async getParking() {
        logger.info('Controller: getParking')
        return await parkingService.getParking();
    }

    async createParking(parking) {
        logger.info('Controller: createUser', parking);
        return await parkingService.createParking(parking);
    }

    async updateParking(parking) {
        logger.info('Controller: updateUser', parking);
        return await parkingService.updateParking(parking);
    }

    async deleteParking(parkingId) {
        logger.info('Controller: deleteUser', parkingId);
        return await parkingService.deleteParking(parkingId);
    }
}
module.exports = new ParkingController();