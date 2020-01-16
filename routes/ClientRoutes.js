const express = require('express');
const ClientsController = require('../controllers/ClientsController');

function ClientRoutes(app) {
    const router = express.Router();
    app.use('/api/clients', router);

    router.get('/count', ClientsController.count)
    router.route('/')
        .get(ClientsController.index)
        .post(ClientsController.create)
    router.route('/:id')
        .get(ClientsController.show)
        .put(ClientsController.update)
}

module.exports = ClientRoutes;