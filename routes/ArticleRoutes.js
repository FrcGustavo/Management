const express = require('express');
const ArticlesController = require('../controllers/ArticlesController');

function ArticleRoutes(app) {
    const router = express.Router();
    app.use('/api/articles', router);

    router.route('/')
        .get(ArticlesController.index)
        .post(ArticlesController.create)
    router.get('/count', ArticlesController.count);
    router.route('/:id')
        .get(ArticlesController.show)
        .put(ArticlesController.update)
}

module.exports = ArticleRoutes;