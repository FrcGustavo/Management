const client = require('./model');

class Service {
    constructor() {
        this.client = client;
    }

    async findAll(query) {
        const clients = await this.client.findAll();
        return clients;
    }

    async findByKey(key) {
        const client = await this.client.findOne({ where: { client_key: key } });
        return client;
    }

    async create(data) {
        const { client_key, name, avatar, email } = data;
        if(!client_key || !name || !avatar || !email ) {
            return { status: 400, body: 'Invalid data' };
        }
        const createdClient = await this.client.create(data);
        return { status: 201, body: createdClient };
    }

    async update(key, data) {
        if(data.client_key) {
            delete data.client_key;
        }        
        const updatedClient = await this.client.update(data, { where: { client_key: key } });
        return updatedClient;
    }

    async disable(key) {
        const disableClient = await this.client.update({ active: 0 }, { where: { client_key: key } });
        return disableClient;
    }
}

module.exports = new Service();