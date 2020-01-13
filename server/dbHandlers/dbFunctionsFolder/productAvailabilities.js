const Availabilities = require('../models/productAvailabilities');

const findOneAndUpdate = (queryObject, updateObject) => Availabilities.findOneAndUpdate(queryObject, updateObject);

const addOne = (initObj) => {
  const createObject = new Availabilities(initObj);
  return createObject.save();
};

const add = async (initList) => {
  for (let i = 0; i < initList.length; i += 1) {
    const createObject = new Availabilities(initList[i]);
    await createObject.save();
  }
};

const findOne = queryObject => Availabilities.findOne(queryObject);

const findOneWithLean = queryObject => Availabilities.findOne(queryObject).lean(true);

const find = queryObject => Availabilities.find(queryObject);

const findWithSkipLimitLean = (queryObject, skipNumber, limitNumber) => Availabilities.find(queryObject).sort({ name: 1 }).skip(skipNumber).limit(limitNumber).lean(true);

const findWithLean = queryObject => Availabilities.find(queryObject).lean(true);

const count = queryObject => Availabilities.count(queryObject);

const findAndUpdate = (queryObject, updateObject) => Availabilities.updateMany(queryObject, updateObject);

const remove = queryObject => Availabilities.deleteMany(queryObject);

const aggregate = queryObject => Availabilities.aggregate(queryObject);

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


