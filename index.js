const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const config = require('./config');
const validPublicApiKey = require('./utils/middlewares/validPublicApiKey');
const Network = require('./network/routes');

app.use(cors(config.corsOrigin));
app.use(validPublicApiKey(config));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
Network(app);

app.use((err, req, res, next) => {
    res.status(500).json({
        error: true,
        body: {
            message: err.message,
            stack: err.stack
        }

    });
})

app.listen(config.port, () => console.log(`Server is runing in port: ${config.port}`));