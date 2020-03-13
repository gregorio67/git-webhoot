const express = require('express');
const routes = require('./routes/index');

const app = express();
/**For json request **/
app.use(express.json());
app.use('/', routes);
module.exports = app;