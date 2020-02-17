const ClientsModel = require('../models/ClientsModel');

class ClientsService {
    constructor() {
        this.client = ClientsModel;
    }

    async findAll() {
        const clients = await this.client.findAll({ order: ['key'] });
        return clients;
    }

    async find(clientKey) {
        const client = await this.client.findOne({ where: { key: clientKey}});
        return client;
    }

    async create(client) {
        const createdClient = await this.client.create(client);
        return createdClient;
    }

    async update(client, clientKey) {
        const updatedClient = await this.client.update(client, { key: clientKey });
        return updatedClient;
    }

    async count() {
        const count = await this.client.count();
        return count;
    }

}

module.exports = new ClientsService();