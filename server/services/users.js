const utils = require('../shared/utils');
const db = require('../db/dbModule');

const getUser = async (userId) => {
  const userFromDb = await db.users.findOneWithLean({ userId });
  return { user: userFromDb };
};

const requiredFields = ['firstName', 'lastName'];

const updateUser = async (userId, updatedValues) => {
  const userFromDb = await db.users.findOneWithLean({ userId });
  if (!userFromDb) {
    return { success: false, error: 'User Not Found' };
  }
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

const createUser = async (userId, updatedValues) => {
  const updateObject = { userId };
  for (let i = 0; i < requiredFields.length; i += 1) {
    const field = requiredFields[i];
    if (utils.common.checkObjectHasKey(updatedValues, field)) {
      updateObject[field] = updatedValues[field];
    }
  }
  await db.users.addOne(updateObject);
  return { success: true };
};

module.exports = {
  getUser,
  createUser,
  updateUser,
};
