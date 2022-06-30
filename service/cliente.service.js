const clienteRepository  = require('../repository/cliente.repository');

class clienteService {

    constructor() {}

    async getCliente() {
        return await clienteRepository.getCliente();
    }

    async createCliente(cliente) {
        return await clienteRepository.createCliente(cliente);
    }

    async updateCliente(cliente) {
        return await clienteRepository.updateCliente(cliente);
    }

    async deleteCliente(clienteId) {
        return await clienteRepository.deleteCliente(clienteId);
    }

}

module.exports = new clienteService();