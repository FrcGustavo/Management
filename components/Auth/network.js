const express = require('express');
const router = express.Router();

const controller = require('./controller');

require('../../utils/auth/strategies/Basic');

router.post('/', controller.signIn);

module.exports = router;