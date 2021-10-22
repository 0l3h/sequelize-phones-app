const express = require('express');
const app = express();
const router = require('./router');
const errorHandlers = require('./middleware');

app.use(express.json());

app.use('/api', router);

app.use(errorHandlers.validationErrorHandler);

module.exports = app;