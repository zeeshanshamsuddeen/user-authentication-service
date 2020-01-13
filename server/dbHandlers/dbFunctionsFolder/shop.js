const shop = require('../models/shops');

const addOne = queryObject => shop.create(queryObject);

const findWithLean = queryObject => shop.find(queryObject).lean(true);

const findOneWithLean = queryObject => shop.findOne(queryObject).lean(true);

const findOneAndUpdate = (queryObject, updateObject) => shop.findOneAndUpdate(queryObject, updateObject);

module.exports = {
  addOne,
  findWithLean,
  findOneWithLean,
  findOneAndUpdate,
};
