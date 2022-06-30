const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class def_forma_pagoRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
       // this.db.sequelize.sync({ force: true }).then(() => {
        //    console.log("Drop and re-sync db.");
      //  });
    }

    async getDef_forma_pago() {

        try {
            const def_forma_pago = await this.db.def_forma_pago.findAll();
            console.log('def_forma_pago:::', def_forma_pago);
            return def_forma_pago;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
}

module.exports = new def_forma_pagoRepository();