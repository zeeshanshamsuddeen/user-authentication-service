const usersModel = require('./models/users');
const accountsModel = require('./models/accounts');

const dbFunctions = require('./dbFunctions');

const requiredDbFunctions = [
  'findOneAndUpdate',
  'addOne',
  'add',
  'findOne',
  'findOneWithLean',
  'find',
  'findWithSkipLimitLean',
  'count',
  'findWithLean',
  'remove',
  'findAndUpdate',
  'aggregate',
];

const usersDbFunctions = {};
const accountsDbFunctions = {};

const createDbFunctions = () => {
  requiredDbFunctions.forEach((requiredFunc) => {
    usersDbFunctions[requiredFunc] = (...args) => dbFunctions[requiredFunc](usersModel, ...args);
    accountsDbFunctions[requiredFunc] = (...args) => dbFunctions[requiredFunc](accountsModel, ...args);
  });
};

createDbFunctions();

const db = {
  users: usersDbFunctions,
  accounts: accountsDbFunctions,
};

module.exports = db;
