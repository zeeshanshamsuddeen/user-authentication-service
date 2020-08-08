#!/usr/bin/env node
require('dotenv').config();
const config = require('../server/config');

const { PORT } = config.appDefaults;

const http = require('http');
const app = require('../server');

app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, err => {
  if (err) {
    return console.log('error in listening port', err);
  }
  console.log(`Now listening on port ${PORT}`);
});
