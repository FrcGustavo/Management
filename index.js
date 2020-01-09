const express = require('express');
const app = express();

const morgan = require('morgan');
const { port } = require('./config');

app.listen(port, () => console.log(`Server is runing in port: ${port}`));