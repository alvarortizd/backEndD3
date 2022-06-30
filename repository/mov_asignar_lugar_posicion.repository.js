const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class mov_asignar_lugar_posicionRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
     //   this.db.sequelize.sync({ force: true }).then(() => {
     //       console.log("Drop and re-sync db.");
      //  });
    }

    async getMov_asignar_lugar_posicion() {

        try {
            const mov_asignar_lugar_posicionRepository = await this.db.mov_asignar_lugar_posicion.findAll();
            console.log('tasks:::', mov_asignar_lugar_posicionRepository);
            return mov_asignar_lugar_posicionRepository;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createMov_asignar_lugar_posicion(lugar) {
        let data = {};
        try {
            data = await this.db.mov_asignar_lugar_posicion.create(lugar);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateMov_asignar_lugar_posicion(lugar) {
        let data = {};
        try {
            data = await this.db.mov_asignar_lugar_posicion.update({...lugar}, {
                where: {
                    id_asignar: lugar.id_asignar
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteMov_asignar_lugar_posicion(lugarId) {
        let data = {};
        try {
            data = await this.db.mov_asignar_lugar_posicion.destroy({
                where: {
                    id_asignar: lugarId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new mov_asignar_lugar_posicionRepository();