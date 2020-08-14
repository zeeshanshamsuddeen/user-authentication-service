const validator = require('validator');

const validateEmail = (email) => validator.isEmail(email);

module.exports = {
  validateEmail,
};
