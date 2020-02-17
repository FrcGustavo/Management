const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const bcrypt = require('bcrypt');

const UsersService = require('../../../components/Users/service');

passport.use(
    new BasicStrategy(
        async function(email, password, cb) {            
            try {
                const { dataValues: user } = await UsersService.getUser(email);                
                if(!user) {
                    return cb(new Error(''), false);
                }
                if(!await bcrypt.compare(password, user.password)) {
                    return cb(new Error('Invalid password'), false);
                }
                delete user.password;
                return cb(null, user);
            } catch(error) {
                cb(error, false);
            }
        }
    )
);