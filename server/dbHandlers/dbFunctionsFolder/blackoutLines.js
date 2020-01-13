const BlackoutLines = require('../models/blackoutLines');

const findOneAndUpdate = (queryObject, updateObject) => BlackoutLines.findOneAndUpdate(queryObject, updateObject);

const addOne = (initObj) => {
  const createObject = new BlackoutLines(initObj);
  return createObject.save();
};

const add = async (initList) => {
  for (let i = 0; i < initList.length; i += 1) {
    const createObject = new BlackoutLines(initList[i]);
    await createObject.save();
  }
};

const findOne = queryObject => BlackoutLines.findOne(queryObject);

const findOneWithLean = queryObject => BlackoutLines.findOne(queryObject).lean(true);

const find = queryObject => BlackoutLines.find(queryObject);

const findWithSkipLimitLean = (queryObject, skipNumber, limitNumber) => BlackoutLines.find(queryObject).sort({ name: 1 }).skip(skipNumber).limit(limitNumber).lean(true);

const findWithLean = queryObject => BlackoutLines.find(queryObject).lean(true);

const count = queryObject => BlackoutLines.count(queryObject);

const findAndUpdate = (queryObject, updateObject) => BlackoutLines.updateMany(queryObject, updateObject);

const remove = queryObject => BlackoutLines.deleteMany(queryObject);

const aggregate = queryObject => BlackoutLines.aggregate(queryObject);

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


