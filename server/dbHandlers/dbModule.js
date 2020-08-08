const usersModel = require('./models/users');

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


const createDbFunctions = () => {
  requiredDbFunctions.forEach((requiredFunc) => {
    usersDbFunctions[requiredFunc] = (...args) => dbFunctions[requiredFunc](usersModel, ...args);
  });
};

createDbFunctions();


const db = {
  users: usersDbFunctions,
};

module.exports = db;
