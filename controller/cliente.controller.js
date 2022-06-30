const clienteService  = require('../service/cliente.service');
const logger = require('../logger/api.logger');

class clienteController {

    async getCliente() {
        logger.info('Controller: getParking')
        return await clienteService.getCliente();
    }

    async createCliente(cliente) {
        logger.info('Controller: createUser', cliente);
        return await clienteService.createCliente(cliente);
    }

    async updateCliente(cliente) {
        logger.info('Controller: updateUser', cliente);
        return await clienteService.updateCliente(cliente);
    }

    async deleteCliente(clienteId) {
        logger.info('Controller: deleteUser', clienteId);
        return await clienteService.deleteCliente(clienteId);
    }
}
module.exports = new clienteController();