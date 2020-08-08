const utils = require('../../shared/utils');
const db = require('../../dbHandlers/dbModule');

const updateUser = async (userId, updatedValues) => {
  const userFromDb = await db.users.findOneWithLean({ userId });
  if (!userFromDb) {
    return { success: false, error: 'User Not Found' };
  }
  const requiredFields = ['name'];
  const updateObject = {};

  for (let i = 0; i < requiredFields.length; i += 1) {
    const field = requiredFields[i];
    if (utils.common.checkObjectHasKey(updatedValues, field)) {
      updateObject[field] = updatedValues[field];
    }
  }

  await db.users.findOneAndUpdate({ userId }, updateObject);
  return { success: true };
};


module.exports = {
  updateUser,
};




