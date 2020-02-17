const passport = require('passport');
const auth = require('../components/Auth/network');
const users = require('../components/Users/network');
const ArticleRoutes = require('../components/Articles/ArticleRoutes');
const CategoryRoutes = require('../components/Categories/CategoryRoutes');

function Network(app) {
    app.use('/api/auth', auth);    
    //require('../utils/auth/strategies/jwt');
    app.use('/api/users', /*passport.authenticate('jwt'),*/ users);
    app.use('/api/articles', /*passport.authenticate('jwt'),*/ ArticleRoutes);
    app.use('/api/categories', /*passport.authenticate('jwt'),*/ CategoryRoutes);
}

module.exports = Network;