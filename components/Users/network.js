const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/count', controller.count);
router.route('/')
    .get(controller.index)
    .post(controller.create);
router.route('/:id')
    .get(controller.show)
    .put(controller.update)
    .delete(controller.destroy);

module.exports = router;