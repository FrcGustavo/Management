const passport = require('passport');
const jwt = require('jsonwebtoken');
const UsersService = require('../services/UsersService');
const config = require('../config/index');

class AuthController {
    constructor() {
        this.UsersService = UsersService;
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.count = this.count.bind(this);
        this.update = this.update.bind(this);
    }

    async signIn(req, res, next) {
        passport.authenticate('basic', (error, user) => {
            try {
                if(error || !user) {
                    next(new Error(''));
                }
                                
                req.login(user, { session: false}, async (error) => {
                    if(error) next(error);

                    const { id: sub, name, lastName, avatar, email, permissions } = user;
                    const payload = { sub, name, lastName, avatar, email, permissions };
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

    async signUp(req, res, next) {
        const { body: user } = req;
        try {
            const isRegistered = await this.UsersService.isRegisteredEmail(user.email);

            if(isRegistered) {
                return res.status(200).json({
                    data: false,
                    message: 'user registered'
                });
            }

            const createdUserId = await this.UsersService.createUser(user);
            res.status(201).json({
                data: createdUserId,
                message: 'user created'
            });
        } catch(error) {
            next(error);
        }
    } 

    async index(req, res, next) {
        try {
            const users = await this.UsersService.getUsers();
            res.status(200).json({
                data: users,
                message: 'listed users'
            });
        } catch (error) {
            next(error);
        }
    }

    async show(req, res, next) {
        const { id: userId } = req.params
        try {
            const user = await this.UsersService.getUserById(userId);           
            res.status(200).json({
                data: user,
                message: 'retreived user'
            });
        } catch (error) {
            console.log(error);
            
            next(error);
        }
    }

    async count(req, res, next) {
        try {
            const count = await this.UsersService.countUsers();
            res.status(200).json({
                data: count + 1,
                message: 'users counted'
            }) 
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const { body: user } = req;
        try {
            const updatedUserId = await this.UsersService.updateUser(user);
            res.status(201).json({
                data: updatedUserId,
                message: 'user updated'
            });
        } catch(error) {
            next(error);
        }
    }
}

module.exports = new AuthController();
