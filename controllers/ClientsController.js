const ClientsService = require('../services/ClientsService');

class ClientsController {
    constructor() {
        this.client = ClientsService;
        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.count = this.count.bind(this);
    }

    async index(req, res, next) {
        try {
            const clients = this.client.findAll();
            res.status(200).json({
                data: clients,
                message: 'listed clients'
            });
        } catch (error) {
            next(error);
        }
    }

    async show(req, res, next) {
        const { id: clientKey } = req.params;
        try {
            const client = await this.client.find(clientKey);
            res.status(200).json({
                data: client,
                message: 'retreived client'
            });
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        const { body: client } = req;
        try {
            const createdClient = await this.client.create(client);
            res.status(201).json({
                data: createdClient,
                message: 'client created'
            });
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const { body: client } = req;
        const { id: clientKey } = req.params;
        try {
            const updatedClient = await this.client.update(client, clientKey);
            res.status(200).json({
                data: updatedClient,
                message: 'client updated'
            });
        } catch (error) {
            next(error);
        }
    }

    async count(req, res, next) {
        try {
            const count = await this.client.count();
            res.status(200).json({
                data: count + 1,
                message: 'clients counted'
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ClientsController();