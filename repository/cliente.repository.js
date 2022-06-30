const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class ClienteRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
     //   this.db.sequelize.sync({ force: true }).then(() => {
      //      console.log("Drop and re-sync db.");
       // });
    }

    async getCliente() {

        try {
            const cliente = await this.db.cliente.findAll();
            console.log('tasks:::', cliente);
            return cliente;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createCliente(cliente) {
        let data = {};
        try {
            data = await this.db.cliente.create(cliente);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateCliente(cliente) {
        let data = {};
        try {
            data = await this.db.cliente.update({...cliente}, {
                where: {
                    id_cliente: cliente.id_cliente
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteCliente(clienteId) {
        let data = {};
        try {
            data = await this.db.cliente.destroy({
                where: {
                    id_cliente: clienteId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new ClienteRepository();