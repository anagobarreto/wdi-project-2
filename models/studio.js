const mongoose = require('mongoose');

const studioSchema = new mongoose.Schema({
  name: { type: String, trim: false, required: true, unique: true },
  location: { type: String, trim: false },
  contact: { type: String, trim: true, unique: true },
  website: { type: String, trim: true }
});

module.exports = mongoose.model('Studio', studioSchema);
