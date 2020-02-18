
const validPublicApiKey = (config) => {
    return (req, res, next) => {        
        if(config.publicApiKey === req.headers.publicapikey) {
            return next();
        }

        return res.status(500).send('YOU DONT HAVE PERMISIONS');
    }
}

module.exports = validPublicApiKey;