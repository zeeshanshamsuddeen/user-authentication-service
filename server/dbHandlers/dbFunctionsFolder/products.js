const Products = require('../models/products');

const findOneProductAndUpdateWithUpsert = (queryObject, updateObject) => Products.findOneAndUpdate(queryObject, updateObject, { upsert: true });

const findOneAndUpdate = (queryObject, updateObject) => Products.findOneAndUpdate(queryObject, updateObject);

const addOne = (newProductObject) => {
  const createdProductObject = new Products(newProductObject);
  return createdProductObject.save();
};

const findOne = queryObject => Products.findOne(queryObject);

const findOneWithLean = queryObject => Products.findOne(queryObject).lean(true);

const findProductsAndRemove = queryObject => Products.deleteMany(queryObject);

const find = queryObject => Products.find(queryObject);

const findWithSkipLimitLean = (queryObject, skipNumber, limitNumber) => Products.find(queryObject).sort({ name: 1 }).skip(skipNumber).limit(limitNumber).lean(true);

const findWithLean = queryObject => Products.find(queryObject).lean(true);

const count = queryObject => Products.count(queryObject);

const findAndUpdate = (queryObject, updateObject) => Products.updateMany(queryObject, updateObject);

const remove = queryObject => Products.deleteMany(queryObject);

module.exports = {
  findOneAndUpdate,
  addOne,
  findOne,
  findOneWithLean,
  find,
  findWithSkipLimitLean,
  count,
  findWithLean,
  remove,
  findAndUpdate,
};


