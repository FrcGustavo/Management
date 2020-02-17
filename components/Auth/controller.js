const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config/index');
class Controller {    
    async signIn(req, res, next) {
        passport.authenticate('basic', (error, user) => {
            try {
                if(error || !user) {
                    next(new Error(''));
                }
                                
                req.login(user, { session: false}, async (error) => {
                    if(error) next(error);

                    const { id: sub, firstName, lastName, avatar, email, permissions } = user;
                    const payload = { sub, firstName, lastName, avatar, email, permissions };
                    const token = jwt.sign(payload, config.authJwtSecret, {
                        expiresIn: '15min'
                    });
                    
                    return res.status(200).json({
                        token, user: payload
                    });

                });
            } catch (error) {
                next(error);
            }
        })(req, res, next);
    }
}

module.exports = new Controller();