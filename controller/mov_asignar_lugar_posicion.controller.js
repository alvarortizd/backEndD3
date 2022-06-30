const mov_asignar_lugar_posicionService  = require('../service/mov_asignar_lugar_posicion.service');
const logger = require('../logger/api.logger');

class mov_asignar_lugar_posicionController {

    async getMov_asignar_lugar_posicion() {
        logger.info('Controller: getMov_asignar_lugar_posicion')
        return await mov_asignar_lugar_posicionService.getMov_asignar_lugar_posicion();
    }

    async createMov_asignar_lugar_posicion(lugar) {
        logger.info('Controller: createMov_asignar_lugar_posicion', lugar);
        return await mov_asignar_lugar_posicionService.createMov_asignar_lugar_posicion(lugar);
    }

    async updateMov_asignar_lugar_posicion(lugar) {
        logger.info('Controller: updateMov_asignar_lugar_posicion', lugar);
        return await mov_asignar_lugar_posicionService.updateMov_asignar_lugar_posicion(lugar);
    }

    async deleteParking(lugarId) {
        logger.info('Controller: deleteMov_asignar_lugar_posicion', lugarId);
        return await mov_asignar_lugar_posicionService.deleteMov_asignar_lugar_posicion(lugarId);
    }
}
module.exports = new mov_asignar_lugar_posicionController();