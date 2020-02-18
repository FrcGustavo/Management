const OrdersModel = require('./OrdersModel');
const OrderArticles = require('./OrderArticlesModel');

class Service {
    constructor() {
        this.order = OrdersModel;
    }

    async findAll() {
        const orders = await this.order.findAll({
            include: ['client', 'order_articles'] 
        });
        return orders;
    }

    async findByKey(key) {
        const order = await this.order.findOne({ where: { order_key: key }, include: ['client', 'order_articles'] });
        return order;
    }

    async create(order) {
        const createdorder = await this.order.create(order, { include: ['order_articles'] });
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

module.exports = new Service();