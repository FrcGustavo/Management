const express = require('express');
const CategoriesController = require('./CategoriesController');

const router = express.Router();

router.get('/count', CategoriesController.count)
router.route('/')
    .get(CategoriesController.index)
    .post(CategoriesController.create)
router.route('/:id')
    .get(CategoriesController.show)
    .put(CategoriesController.update)


module.exports = router;