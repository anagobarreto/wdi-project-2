const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: { type: String, trim: false, required: true, unique: true },
  studio: { type: String, trim: false },
  location: { type: String, trim: false },
  instagram: { type: String, trim: true, required: true, unique: true },
  contact: { type: String, trim: true, unique: true },
  website: { type: String, trim: true }
});

module.exports = mongoose.model('Artist', artistSchema);
