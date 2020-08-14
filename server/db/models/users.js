const mongoose = require('mongoose');

const { Schema } = mongoose;

const initSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('users', initSchema);
