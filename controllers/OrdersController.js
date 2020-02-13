const OrdersService = require('../services/OrdersService');

class OrdersController {
    constructor() {
        this.order = OrdersService;
        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.count = this.count.bind(this);
    }

    async index(req, res, next) {
        try {
            const orders = this.order.findAll();
            res.status(200).json({
                data: orders,
                message: 'listed orders'
            });
        } catch (error) {
            next(error);
        }
    }

    async show(req, res, next) {
        const { id: orderKey } = req.params;
        try {
            const order = await this.order.find(orderKey);
            res.status(200).json({
                data: order,
                message: 'retreived order'
            });
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        const { body: order } = req;
        try {
            const createdOrder = await this.order.create(order);
            res.status(201).json({
                data: createdOrder,
                message: 'order created'
            });
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const { body: order } = req;
        const { id: orderKey } = req.params;
        try {
            const updatedOrder = await this.order.update(order, orderKey);
            res.status(200).json({
                data: updatedOrder,
                message: 'order updated'
            });
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

module.exports = new OrdersController();