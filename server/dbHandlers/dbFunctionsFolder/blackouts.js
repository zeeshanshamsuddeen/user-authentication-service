const Blackouts = require('../models/blackouts');

const findOneAndUpdate = (queryObject, updateObject) => Blackouts.findOneAndUpdate(queryObject, updateObject);

const addOne = async (initObj) => {
  const createObject = new Blackouts(initObj);
  await createObject.save();
};

const add = async (initList) => {
  for (let i = 0; i < initList.length; i += 1) {
    const createObject = new Blackouts(initList[i]);
    await createObject.save();
  }
};

const findOne = queryObject => Blackouts.findOne(queryObject);

const findOneWithLean = queryObject => Blackouts.findOne(queryObject).lean(true);

const find = queryObject => Blackouts.find(queryObject);

const findWithSkipLimitLean = (queryObject, skipNumber, limitNumber) => Blackouts.find(queryObject).sort({ name: 1 }).skip(skipNumber).limit(limitNumber).lean(true);

const findWithLean = queryObject => Blackouts.find(queryObject).lean(true);

const count = queryObject => Blackouts.count(queryObject);

const findAndUpdate = (queryObject, updateObject) => Blackouts.updateMany(queryObject, updateObject);

const remove = queryObject => Blackouts.deleteMany(queryObject);

const aggregate = queryObject => Blackouts.aggregate(queryObject);

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


