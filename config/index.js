require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbType: process.env.DB_TYPE,
    authJwtSecret: process.env.AUTH_JWT_SECRET,
    publicApiKey: process.env.PUBLIC_API_KEY,
    corsOrigin: process.env.CORS_ORIGIN,
}

module.exports = config; 
