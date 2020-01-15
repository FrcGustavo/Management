const express = require('express');
const CategoriesController = require('../controllers/CategoriesController');

function CategoryRoutes(app) {
    const router = express.Router();
    app.use('/api/categories', router);

    router.get('/count', CategoriesController.count)
    router.route('/')
        .get(CategoriesController.index)
        .post(CategoriesController.create)
    router.route('/:id')
        .get(CategoriesController.show)
        .put(CategoriesController.update)
}

module.exports = CategoryRoutes;