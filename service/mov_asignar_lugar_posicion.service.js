const mov_asignar_lugar_posicionRepository  = require('../repository/mov_asignar_lugar_posicion.repository');

class mov_asignar_lugar_posicionService {

    constructor() {}

    async getMov_asignar_lugar_posicion() {
        return await mov_asignar_lugar_posicionRepository.getMov_asignar_lugar_posicion();
    }

    async createMov_asignar_lugar_posicion(lugar) {
        return await mov_asignar_lugar_posicionRepository.createMov_asignar_lugar_posicion(lugar);
    }

    async updateMov_asignar_lugar_posicion(lugar) {
        return await mov_asignar_lugar_posicionRepository.updateMov_asignar_lugar_posicion(lugar);
    }

    async deleteMov_asignar_lugar_posicion(lugarId) {
        return await mov_asignar_lugar_posicionRepository.deleteMov_asignar_lugar_posicion(lugarId);
    }

}

module.exports = new mov_asignar_lugar_posicionService();