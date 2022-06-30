const def_forma_pagoService  = require('../service/def_forma_pago.service');
const logger = require('../logger/api.logger');

class def_forma_pagoController {

    async getDef_forma_pago() {
        logger.info('Controller: getDef_forma_pago')
        return await def_forma_pagoService.getDef_forma_pago();
    }
}
module.exports = new def_forma_pagoController();