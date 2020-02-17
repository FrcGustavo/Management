const bcrypt = require('bcrypt');
const User = require('./model');
class service  {
    constructor() {
        this.user = User;
    }

    async findAll(query) {
        if (!query) {
            query = { where: { active: 1 } }
        }
        const users = await this.user.findAll(query);
        return users;
    }

    async findByKey(key) {
        if (!key) {
            throw new Error('Faild');
        }
        const user = await this.user.findOne({ where: { user_key: key } });
        return user;
    }

    async findByEmail(email) {
        if (!email) {
            return false
        }
        const user = await this.user.findOne({ where: { email } });       
        return user;
    }

    async insert(data) {
        const isRegisteredEmail = await this.isRegisteredEmail(data.email);
        if(isRegisteredEmail) {
            return { status: 404, body: 'email or password is invalid' };
        }

        const { 
            user_key, 
            firstName, 
            lastName, 
            avatar, 
            email, 
            password, 
            permissions 
        } = data;

        if (!user_key || !firstName || !lastName || !avatar || !email || !password || !permissions) {
            return { status: 404, body: 'Invalid data! please send all fields' };
        }

        if (!email) {
            return { status: 404, body: 'Please send a valid email' };
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const createdUser = await this.user.create({
            user_key, 
            firstName, 
            lastName, 
            avatar, 
            email, 
            password: hashedPassword, 
            permissions 
        });

        return { status: 201, body: createdUser };
    }

    async update(key, data) {
        if(!data.password) {
            delete data.password;
        } else {
            data.password = await bcrypt.hash(user.password, 10);
        }

        const updatedUser = await this.user.update(data, { where: {user_key: key } });
        return updatedUser;
    }

    async delete(key) {
        const updatedUser = await this.user.update({ active: 0 }, { where: {user_key: key } });
        return updatedUser;
    }

    async isRegisteredEmail(email) {
        const user = await this.findByEmail(email);
        if(user) {
            return true;
        }
        return false;
    }

/*
    async getOrCreateUser(user) {
        const queryUser = await this.getUser(user.email);

        if(queryUser) {
            return queryUser;
        } 

        await this.createUser(user);
        return this.getUser(user.email);
    }



    async countUsers() {
        const count = await this.user.count({ col: "user_key"});
        return count;
    }*/
}

module.exports = new service();