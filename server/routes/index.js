const express = require('express');

const middlewares = require('../middlewares');
const accounts = require('./accounts');
const users = require('./users');

const router = express.Router();

router.use('/accounts', accounts);
router.use('/users', middlewares.authenticateApi, users);

module.exports = router;
