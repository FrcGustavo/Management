const service = require('./service');
const response = require('../../network/response');

class controller {
    constructor() {
        this.client = service;
        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.disable = this.disable.bind(this);
        this.count = this.count.bind(this);
    }

    async index(req, res, next) {
        try {
            const clients = await this.client.findAll();
            response.success(req, res, clients, 200);
        } catch (error) {
            next(error);
        }
    }

    async show(req, res, next) {
        const { id: clientKey } = req.params;
        try {
            const client = await this.client.findByKey(clientKey);
            response.success(req, res, client, 200);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        const { body: client } = req;
        try {
            const { status, body } = await this.client.create(client);
            if(status >= 200 && status <= 300) {
                response.success(req, res, body, status);
            } else {
                response.error(req, res, body, status);
            }
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const { body: client } = req;
        const { id: clientKey } = req.params;
        try {
            const updatedClient = await this.client.update(clientKey, client);
            response.success(req, res, updatedClient, 200);
        } catch (error) {
            next(error);
        }
    }

    async disable(req, res, next) {
        const { id: key } = req.params; 
        try {
            const disableClient = await this.client.disable(key);
            response.success(req, res, disableClient, 200);
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

module.exports = new controller();