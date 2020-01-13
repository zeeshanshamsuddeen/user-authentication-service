const utils = require('../../shared/utils');
const db = require('../../dbHandlers/dbModule');


const updateUser = async (userId, updatedValues) => {
  const userFromDb = await db.users.findOneWithLean({ userId });
  if (!userFromDb) {
    return { success: false, error: 'User Not Found' };
  }
  const requiredFields = ['name', 'password'];
  const updateObject = {};

  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (utils.common.checkObjectHasKey(updatedValues, field)) {
      updateObject[field] = modifiedValues[field];
    }
  }

  updateObject.passwordDigest = utils.common.hashPassword(updateObject.password);
  await db.users.findOneAndUpdate({ userId }, updateObject);

  return { success: true }
};


module.exports = {
  updateUser,
}




