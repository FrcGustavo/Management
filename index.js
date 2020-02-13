const express = require('express');
const app = express();

const cors = require('cors');

const morgan = require('morgan');
const { port } = require('./config');

const AuthRoutes = require('./routes/AuhtRoutes');
const CategoryRoutes = require('./routes/CategoryRoutes');
const ArticleRoutes = require('./routes/ArticleRoutes');
const ClientRoutes = require('./routes/ClientRoutes');
const OrderRoutes = require('./routes/OrderRoutes');

app.use(cors('*'))
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

AuthRoutes(app);
ArticleRoutes(app);
CategoryRoutes(app);
ClientRoutes(app);
OrderRoutes(app);

app.listen(port, () => console.log(`Server is runing in port: ${port}`));