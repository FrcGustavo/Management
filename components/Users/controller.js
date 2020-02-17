const service = require('./service');
const response = require('../../network/response');

class controller {
    constructor() {
        this.service = service;
        this.index = this.index.bind(this);
        this.create = this.create.bind(this);
        this.show = this.show.bind(this);
        this.count = this.count.bind(this);
        this.update = this.update.bind(this);
        this.destroy = this.destroy.bind(this);
    }

    async index (req, res, next) {
        try {
            const users = await this.service.findAll();
            response.success(req, res, users, 200);
        } catch (error) {
            next(error);
        }
    }

    async create (req, res, next) {
        const { body: data } = req;
        try {
            const { status, body } = await this.service.insert(data);
            if (status >= 200 && status <= 300  ) {
                response.success(req, res, body, status);
            } else {
                response.error(req, res, body, status);
            }
        } catch(error) {
            next(error);
        }
    } 

    async show(req, res, next) {
        const { id: key } = req.params;
        try {
            const user = await this.service.findByKey(key);           
            response.success(req, res, user, 200);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const { id: key } = req.params;
        const { body: data } = req;
        try {
            const updatedUser = await this.service.update(key, data);
            response.success(req, res, updatedUser, 200);
        } catch(error) {
            next(error);
        }
    }
    
    async destroy(req, res, next) {
        const { id: key } = req.params;
        try {
            const deletedUser = await this.service.delete(key);
            response.success(req, res, deletedUser, 200);
        } catch (error) {
            next(error);
        }
    }
    async count(req, res, next) {
        try {
            const count = await this.service.countUsers();
            response.success(req, res, count, 200);
        } catch (error) {
            next(error);
        }
    }
};

module.exports = new controller();
