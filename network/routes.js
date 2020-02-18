const passport = require('passport');
const auth = require('../components/Auth/network');
const users = require('../components/Users/network');
const clients = require('../components/Clients/network');
const orders = require('../components/Orders/network');
const ArticleRoutes = require('../components/Articles/ArticleRoutes');
const CategoryRoutes = require('../components/Categories/CategoryRoutes');

function Network(app) {
    require('../utils/auth/strategies/Basic');
    require('../utils/auth/strategies/jwt');
    app.use('/api/auth', auth);  
    app.use(passport.authenticate('jwt', { session: false })); 
    app.use('/api/users', users);
    app.use('/api/clients', clients);
    app.use('/api/orders', orders);
    app.use('/api/articles', ArticleRoutes);
    app.use('/api/categories', CategoryRoutes);
}

module.exports = Network;