const Artist = require('../models/artist');

function searchIndex(req, res) {
  const query = new RegExp(req.query.q, 'mi');
  Artist.find({
    $or: [
      {name: {$regex: query}},
      {studio: {$regex: query}},
      {location: {$regex: query}},
      {instagram: {$regex: query}},
      {contact: {$regex: query}},
      {website: {$regex: query}}
    ]
  })
    .exec()
    .then(artists => {
      return res.render('search', { artists });
    })
    .catch(err => {
      return res.render('error', { error: err});
    });
}

module.exports = {
  index: searchIndex
};
