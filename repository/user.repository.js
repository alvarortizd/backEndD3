const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class UserRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
    }

    async getUser() {

        try {
            const users = await this.db.user.findAll();
            console.log('tasks:::', users);
            return users;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createUser(user) {
        let data = {};
        try {
            data = await this.db.user.create(user);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateUser(user) {
        let data = {};
        try {
            data = await this.db.user.update({...user}, {
                where: {
                    id_usurio: user.id_usurio
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteUser(userId) {
        let data = {};
        try {
            data = await this.db.user.destroy({
                where: {
                    id_usurio: userId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new UserRepository();