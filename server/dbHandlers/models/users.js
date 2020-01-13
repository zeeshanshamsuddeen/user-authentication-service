const mongoose = require('mongoose');

const { Schema } = mongoose;

const initSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  passwordDigest: { type: String, default: undefined },
  email: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('users', initSchema);
