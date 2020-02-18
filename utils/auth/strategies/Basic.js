const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const bcrypt = require('bcrypt');

const UserService = require('../../../components/Users/service');

passport.use(
    new BasicStrategy(
        async function(email, password, cb) {
            try {
                const user = await UserService.findByEmail(email);  
                              
                if(!user) {
                    return cb(new Error('Invalid data'), false);
                }
                if(!await bcrypt.compare(password, user.password)) {
                    return cb(new Error('Invalid data'), false);
                }
                delete user.password;
                return cb(null, user);
            } catch(error) {
                cb(error, false);
            }
        }
    )
);