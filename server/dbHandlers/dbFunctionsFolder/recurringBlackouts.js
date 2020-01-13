const RecurringBlackouts = require('../models/recurringBlackouts');

const findOneAndUpdate = (queryObject, updateObject) => RecurringBlackouts.findOneAndUpdate(queryObject, updateObject);

const addOne = async (initObj) => {
  const createObject = new RecurringBlackouts(initObj);
  await createObject.save();
};

const add = async (initList) => {
  for (let i = 0; i < initList.length; i += 1) {
    const createObject = new RecurringBlackouts(initList[i]);
    await createObject.save();
  }
};

const findOne = queryObject => RecurringBlackouts.findOne(queryObject);

const findOneWithLean = queryObject => RecurringBlackouts.findOne(queryObject).lean(true);

const find = queryObject => RecurringBlackouts.find(queryObject);

const findWithSkipLimitLean = (queryObject, skipNumber, limitNumber) => RecurringBlackouts.find(queryObject).sort({ name: 1 }).skip(skipNumber).limit(limitNumber).lean(true);

const findWithLean = queryObject => RecurringBlackouts.find(queryObject).lean(true);

const count = queryObject => RecurringBlackouts.count(queryObject);

const findAndUpdate = (queryObject, updateObject) => RecurringBlackouts.updateMany(queryObject, updateObject);

const remove = queryObject => RecurringBlackouts.deleteMany(queryObject);

const aggregate = queryObject => RecurringBlackouts.aggregate(queryObject);

module.exports = {
  findOneAndUpdate,
  addOne,
  add,
  findOne,
  findOneWithLean,
  find,
  findWithSkipLimitLean,
  count,
  findWithLean,
  remove,
  findAndUpdate,
  aggregate,
};


