const userRepository  = require('../repository/user.repository');

class UserService {

    constructor() {}

    async getUsers() {
        return await userRepository.getUser();
    }

    async createUser(user) {
        return await userRepository.createUser(user);
    }

    async updateUser(user) {
        return await userRepository.updateUser(user);
    }

    async deleteUser(userId) {
        return await userRepository.deleteUser(userId);
    }

}

module.exports = new UserService();