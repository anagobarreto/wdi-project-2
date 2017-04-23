const Artist = require('../models/artist');
const request = require('request');

function artistsIndex(req,res) {
  Artist
    .find()
    .exec()
    .then(artists => {
      return res.render('artists', { artists });
    })
    .catch(err => {
      return res.render('error', { error: err});
    });
}

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

function artistsShow(req, res) {
  Artist
    .findById(req.params.id)
    .exec()
    .then(artist => {
      if (!artist) {
        return res.render('error', { error: 'No Artist found.' });
      }

      getInstagramData(artist.instagram, function(err, data) {
        if (err) {
          return res.render('error', { error: err });
        }

        return res.render('artists/show', { artist, instagram: data });
      });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function artistsNew(req, res) {
  return res.render('artists/new');
}

function artistsCreate(req, res) {
  Artist
    .create(req.body)
    .then(artist => {
      if (!artist) return res.render('error', { error: 'No artist was created!' });
      return res.redirect('/artists');
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function artistsEdit(req, res) {
  Artist
    .findById(req.params.id)
    .exec()
    .then(artist => {
      if (!artist) {
        return res.render('error', { error: 'No artist found.' });
      }
      return res.render('artists/edit', { artist });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function artistsUpdate(req, res) {
  Artist
    .findById(req.params.id)
    .exec()
    .then(artist => {
      if (!artist) {
        return res.render('error', { error: 'No artist found.' });
      }
      for (const field in req.body) {
        artist[field] = req.body[field];
      }
      return artist.save();
    })
    .then(artist => {
      if (!artist) {
        return res.render('error', { error: 'Something went wrong during the update.' });
      }
      return res.render('artists/show', { artist });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function artistsDelete(req, res) {
  Artist
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      return res.redirect('/artists');
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

module.exports = {
  index: artistsIndex,
  show: artistsShow,
  new: artistsNew,
  create: artistsCreate,
  edit: artistsEdit,
  update: artistsUpdate,
  delete: artistsDelete
};
