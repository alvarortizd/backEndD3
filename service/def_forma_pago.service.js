const def_forma_pagoRepository  = require('../repository/def_forma_pago.repository');

class def_forma_pagoService {

    constructor() {}

    async getDef_forma_pago() {
        return await def_forma_pagoRepository.getDef_forma_pago();
    }
}

module.exports = new def_forma_pagoService();