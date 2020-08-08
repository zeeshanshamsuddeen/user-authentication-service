const config = require('../../config');
const utils = require('../../shared/utils');
const db = require('../../dbHandlers/dbModule');

const requiredFieldsForSignUp = ['name', 'password', 'email'];

const validateAuthFields = (updatedValues) => {
  const updateObject = {};
  let success = true;
  let error;

  for (let i = 0; i < requiredFieldsForSignUp.length; i += 1) {
    const field = requiredFieldsForSignUp[i];
    if (utils.common.checkObjectHasKey(updatedValues, field)) {
      updateObject[field] = updatedValues[field];
    } else {
      error = `${field} missing`;
      success = false;
      break;
    }
  }

  /* Field Level Validations */
  if (!updatedValues.email || !utils.validation.validateEmail(updatedValues.email)) {
    error = 'Invalid Email ID';
    success = false;
  }

  return { success, updateObject, error };
};

const generateToken = (userId) => {
  const tokenData = { userId };
  const { secret, issuer, audience } = config.tokens.webUser;
  return utils.token.generate(tokenData, secret, issuer, audience);
};


const registerUser = async (updatedValues) => {
  const validationResult = validateAuthFields(updatedValues);
  const { success, updateObject, error } = validationResult;
  if (!success) {
    return { success: false, error };
  }

  const userId = utils.common.getUUID();

  updateObject.userId = userId;
  updateObject.passwordDigest = utils.common.hashPassword(updateObject.password);
  await db.users.addOne(updateObject);

  return { success: true };
};

const userLogin = async (loginDetails) => {
  const { email, password } = loginDetails;
  const { passwordDigest, userId } = await db.users.findOneWithLean({ email });
  if (!utils.common.checkPassword(password, passwordDigest)) {
    return { success: false, error: 'Incorrect Password/Email' };
  }
  return { success: true, userId };
};

module.exports = {
  registerUser,
  userLogin,
  generateToken,
};





