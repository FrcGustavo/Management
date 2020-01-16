const bcrypt = require('bcrypt');
const User = require('../models/UsersModel');
class UsersService  {
    constructor() {
        this.user = User;
    }

    async getUser(email) {        
        const user = await this.user.findOne({where: { email }});        
        return user;
    }

    async createUser(user) {
        const { key, name, lastName, avatar, email, password, permissions } = user;
        const hashedPassword = await bcrypt.hash(password, 10);
        const createdUserId = await this.user.create({ 
            key,
            name,
            lastName,
            avatar,
            email,
            password: hashedPassword,
            permissions,
        });
        return createdUserId;
    }

    async getOrCreateUser(user) {
        const queryUser = await this.getUser(user.email);

        if(queryUser) {
            return queryUser;
        } 

        await this.createUser(user);
        return this.getUser(user.email);
    }

    async isRegisteredEmail(email) {
        const user = await this.getUser(email);
        if(user) {
            return true;
        }
        return false;
    }

    async getUsers() {
        const users = await this.user.findAll({ order: ['key'] });
        return users; 
    }

    async getUserById(userId) {
        const user = await this.user.findOne({ where: { key: userId }});
        user.password = "";
        return user;
    }

    async countUsers() {
        const count = await this.user.count({ col: "key"});
        return count;
    }

    async updateUser(user) {
        if(!user.password) {
            delete user.password;
        } else {
            user.password = await bcrypt.hash(user.password, 10);
        }
        const updatedUserId = await this.user.update(user, { where: { key: user.key }});
        return updatedUserId;
    }
}

module.exports = new UsersService();