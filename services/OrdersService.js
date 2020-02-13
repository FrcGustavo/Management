const OrdersModel = require('../models/OrdersModel');
const OrderArticles = require('../models/OrderArticlesModel');

class OrdersService {
    constructor() {
        this.order = OrdersModel;
    }

    async findAll() {
        const orders = await this.order.findAll({ order: ['key'], include: ['OrderArticles'] });
        return orders;
    }

    async find(orderKey) {
        const order = await this.order.findOne({ where: { key: orderKey}});
        return order;
    }

    async create(order) {
        const createdorder = await this.order.create(order);
        return createdorder;
    }

    async update(order, orderKey) {
        const updatedorder = await this.order.update(order, { key: orderKey });
        return updatedorder;
    }

    async count() {
        const count = await this.order.count();
        return count;
    }

}

module.exports = new OrdersService();