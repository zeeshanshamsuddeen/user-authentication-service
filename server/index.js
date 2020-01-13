require('./initiateEnv');
require('./dbHandlers/dbConnector');

const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');


const config = require('./config');


const { PORT } = config.appDefaults;

const routes = require('./routes');
const middlewares = require('./middlewares');


const app = express();

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use('/user/auth', routes.users.auth);
app.use('/user/profile', middlewares.authenticateApi, routes.users.profile);

app.use((error, req, res, next) => res.status(500).send({ message: 'Internal Server Error' }));

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});



