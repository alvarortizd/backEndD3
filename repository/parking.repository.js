const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class ParkingRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
    }

    async getParking() {

        try {
            const parking = await this.db.parking.findAll();
            console.log('tasks:::', parking);
            return parking;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createParking(parking) {
        let data = {};
        try {
            data = await this.db.parking.create(parking);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateParking(parking) {
        let data = {};
        try {
            data = await this.db.parking.update({...parking}, {
                where: {
                    id: parking.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteParking(parkingId) {
        let data = {};
        try {
            data = await this.db.parking.destroy({
                where: {
                    id: parkingId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new ParkingRepository();