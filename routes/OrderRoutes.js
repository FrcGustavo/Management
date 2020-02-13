const express = require('express');
const OrdersController = require('../controllers/OrdersController');

function OrderRoutes(app) {
    const router = express.Router();
    app.use('/api/orders', router);

    router.get('/count', OrdersController.count)
    router.route('/')
        .get(OrdersController.index)
        .post(OrdersController.create)
    router.route('/:id')
        .get(OrdersController.show)
        .put(OrdersController.update)
}

module.exports = OrderRoutes;