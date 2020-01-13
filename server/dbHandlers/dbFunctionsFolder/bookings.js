const Bookings = require('../models/bookings');

const findOneAndUpdate = (queryObject, updateObject) => Bookings.findOneAndUpdate(queryObject, updateObject);

const addOne = async (initObj) => {
  const createObject = new Bookings(initObj);
  await createObject.save();
};

const add = async (initList) => {
  for (let i = 0; i < initList.length; i += 1) {
    const createObject = new Bookings(initList[i]);
    await createObject.save();
  }
};

const findOne = queryObject => Bookings.findOne(queryObject);

const findOneWithLean = queryObject => Bookings.findOne(queryObject).lean(true);

const find = queryObject => Bookings.find(queryObject);

const findWithSkipLimitLean = (queryObject, skipNumber, limitNumber) => Bookings.find(queryObject).sort({ name: 1 }).skip(skipNumber).limit(limitNumber).lean(true);

const findWithLean = queryObject => Bookings.find(queryObject).lean(true);

const count = queryObject => Bookings.count(queryObject);

const findAndUpdate = (queryObject, updateObject) => Bookings.updateMany(queryObject, updateObject);

const remove = queryObject => Bookings.deleteMany(queryObject);

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
};


