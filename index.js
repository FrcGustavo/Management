const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const { port } = require('./config');
const Network = require('./network/routes');
const { logErrors, wrapErrors, errorHandler } = require('./utils/middlewares/errorHandler');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');
app.use(cors('*'))
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

/*app.use(  logErrors,
    wrapErrors,
    errorHandler);
app.use(notFoundHandler);
*/

app.listen(port, () => console.log(`Server is runing in port: ${port}`));