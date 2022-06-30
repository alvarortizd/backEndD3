const parkingRepository  = require('../repository/parking.repository');

class parkingService {

    constructor() {}

    async getParking() {
        return await parkingRepository.getParking();
    }

    async createParking(parking) {
        return await parkingRepository.createParking(parking);
    }

    async updateParking(parking) {
        return await parkingRepository.updateParking(parking);
    }

    async deleteParking(parkingId) {
        return await parkingRepository.deleteParking(parkingId);
    }

}

module.exports = new parkingService();