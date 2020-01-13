const BookingLines = require('../models/bookingLines');

const findOneAndUpdate = (queryObject, updateObject) => BookingLines.findOneAndUpdate(queryObject, updateObject);

const addOne = (initObj) => {
  const createObject = new BookingLines(initObj);
  return createObject.save();
};

const add = async (initList) => {
  for (let i = 0; i < initList.length; i += 1) {
    const createObject = new BookingLines(initList[i]);
    await createObject.save();
  }
};

const findOne = queryObject => BookingLines.findOne(queryObject);

const findOneWithLean = queryObject => BookingLines.findOne(queryObject).lean(true);

const find = queryObject => BookingLines.find(queryObject);

const findWithSkipLimitLean = (queryObject, skipNumber, limitNumber) => BookingLines.find(queryObject).sort({ name: 1 }).skip(skipNumber).limit(limitNumber).lean(true);

const findWithLean = queryObject => BookingLines.find(queryObject).lean(true);

const count = queryObject => BookingLines.count(queryObject);

const findAndUpdate = (queryObject, updateObject) => BookingLines.updateMany(queryObject, updateObject);

const remove = queryObject => BookingLines.deleteMany(queryObject);

const aggregate = queryObject => BookingLines.aggregate(queryObject);

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


