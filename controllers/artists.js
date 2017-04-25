const Artist = require('../models/artist');

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

function artistsShow(req, res) {
  Artist
    .findById(req.params.id)
    .exec()
    .then(artist => {
      if (!artist) {
        return res.render('error', { error: 'No Artist found.' });
      }

      return res.render('artists/show', { artist });
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
