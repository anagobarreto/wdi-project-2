const mongoose = require('mongoose');
const request = require('request');

const artistSchema = new mongoose.Schema({
  name: { type: String, trim: false, required: true, text: true },
  studio: { type: String, trim: false, text: true },
  location: { type: String, trim: false, text: true },
  instagram: { type: String, trim: true, required: true, text: true },
  contact: { type: String, trim: true, text: true },
  website: { type: String, trim: true, text: true },
  instagramData: { type: mongoose.Schema.Types.Mixed },
  place: { type: Boolean }
});

const instagramCache = {};

function getInstagramData(username, callback) {
  if (instagramCache[username]) {
    return callback(null, instagramCache[username]);
  }

  request(`https://instagram.com/${username}/media`, {json: true}, function(err, res, data) {
    if (!err) {
      instagramCache[username] = data;
    }

    callback(err, data);
  });
}

artistSchema
  .virtual('profilePic')
  .get(function () {
    if (!this.instagramData.items) {
      return '';
    }
    return this.instagramData.items[0].user.profile_picture;
  });

artistSchema.post('init', function(doc, next) {
  if (this.instagramData) {
    return next();
  }

  getInstagramData(this.instagram, (err, data) => {
    if (err) {
      return next(err);
    }

    this.instagramData = data;
    this.markModified('instagramData');
    this.save(next);
  });
});

module.exports = mongoose.model('Artist', artistSchema);
