//const service = require('./service');
const response = require('../../network/response');

class Controller {
    constructor() {
        //this.order = OrdersService;
        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.disable = this.disable.bind(this);
        this.count = this.count.bind(this);
    }

    async index(req, res, next) {
        try {
           // const orders = this.order.findAll();
            response.success(req, res, '', 200);
        } catch (error) {
            next(error);
        }
    }

    async show(req, res, next) {
        const { id: orderKey } = req.params;
        try {
            //const order = await this.order.find(orderKey);
            response.success(req, res, '', 200);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        const { body: order } = req;
        try {
            //const createdOrder = await this.order.create(order);
            response.success(req, res, '', 201);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const { body: order } = req;
        const { id: orderKey } = req.params;
        try {
            //const updatedOrder = await this.order.update(order, orderKey);
            response.success(req, res, '', 200);
        } catch (error) {
            next(error);
        }
    }

    async disable(req, res, next) {
        try {
            response.success(req, res, '', 200);
        } catch (error) {
            next(error);
        }
    }

    async count(req, res, next) {
        try {
            const count = await this.order.count();
            res.status(200).json({
                data: count + 1,
                message: 'orders counted'
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new Controller();