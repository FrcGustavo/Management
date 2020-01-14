const express = require('express');
const passport = require('passport');
const AuthController = require('../controllers/AuthController');

// BasicStrategy
require('../utils/auth/strategies/Basic');


// JWT Strategy
require('../utils/auth/strategies/jwt');

function AuthRoutes(app) {
    const router = express.Router();
    app.use('/api/auth', router);    
    router.post('/signin', AuthController.signIn);
    router.post('/signup', AuthController.signUp);
    router.get('/users', AuthController.index);
    router.get('/users/count', AuthController.count);
    router.get('/users/:id', AuthController.show);
    router.put('/signup', AuthController.update)
};

module.exports = AuthRoutes;