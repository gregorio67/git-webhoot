const express = require('express');
const routes = require('./routes/index');
const message = require('./routes/message')
const bodyParser = require('body-parser');

const app = express();
/**For json request **/
app.use(express.json());
/** Set view with EJS **/
app.set('view engine', 'ejs');
/** Set resources */
app.use(express.static('resources'));

/** Set body parser */
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/', message)

module.exports = app;