const passport = require('passport');
const auth = require('../components/Auth/network');
const users = require('../components/Users/network');
const clients = require('../components/Clients/network');
const orders = require('../components/Orders/network');
const ArticleRoutes = require('../components/Articles/ArticleRoutes');
const CategoryRoutes = require('../components/Categories/CategoryRoutes');

function Network(app) {
    app.use('/api/auth', auth);    
    //require('../utils/auth/strategies/jwt');
    app.use('/api/users', /*passport.authenticate('jwt'),*/ users);
    app.use('/api/clients', clients);
    app.use('/api/orders', orders);
    app.use('/api/articles', /*passport.authenticate('jwt'),*/ ArticleRoutes);
    app.use('/api/categories', /*passport.authenticate('jwt'),*/ CategoryRoutes);
}

module.exports = Network;