const express = require('express');
const router = express.Router();

const ArticlesController = require('./ArticlesController');

router.route('/')
    .get(ArticlesController.index)
    .post(ArticlesController.create);

router.get('/count', ArticlesController.count);

router.route('/:id')
    .get(ArticlesController.show)
    .put(ArticlesController.update);

module.exports = router;