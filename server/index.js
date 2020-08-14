require('./initiateEnv');
require('./db/dbConnector');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/api/v1/accounts', routes.accounts);
app.use('/api/v1/users', middlewares.authenticateApi, routes.users);

app.use((error, req, res, next) => {
  console.log('error: ', error);
  return res.status(500).send({ message: 'Internal Server Error' });
});

console.log('INDEX LOADED');

module.exports = app;



