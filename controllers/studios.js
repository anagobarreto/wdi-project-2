const Artist = require('../models/artist');

function studiosIndex(req,res) {
  Artist
    .find({place: true})
    .exec()
    .then(studios => {
      return res.render('studios', { studios });
    })
    .catch(err => {
      return res.render('error', { error: err});
    });
}

function studiosShow(req, res) {
  Artist
    .findOne({_id: req.params.id, place: true })
    .exec()
    .then(studio => {
      if (!studio) {
        return res.render('error', { error: 'No Studio found.' });
      }

      return Artist.find({ studio: studio._id })
        .then(artists => {
          return res.render('studios/show', { studio, artists });
        });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function studiosMapAPI(req, res) {
  Artist
    .find({place: true})
    .exec()
    .then(studios => {
      const data = [];

      for (const studio of studios) {
        data.push({
          id: studio._id,
          coords: studio.coords,
          profilePic: studio.profilePic
        });
      }

      res.json(data);
    })
    .catch(err => {
      return res.render('error', { error: err});
    });
}

module.exports = {
  index: studiosIndex,
  show: studiosShow,
  mapAPI: studiosMapAPI
};
