const Studio = require('../models/studio');

function studiosIndex(req,res) {
  Studio
    .find()
    .exec()
    .then(studios => {
      return res.render('studios', { studios });
    })
    .catch(err => {
      return res.render('error', { error: err});
    });
}

function studiosShow(req, res) {
  Studio
    .findById(req.params.id)
    .exec()
    .then(studio => {
      if (!studio) {
        return res.render('error', { error: 'No Studio found.' });
      }

      return res.render('studios/show', { studio });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function studiosNew(req, res) {
  return res.render('studios/new');
}

function studiosCreate(req, res) {
  Studio
    .create(req.body)
    .then(studio => {
      if (!studio) return res.render('error', { error: 'No studio was created!' });
      return res.redirect('/studios');
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function studiosEdit(req, res) {
  Studio
    .findById(req.params.id)
    .exec()
    .then(studio => {
      if (!studio) {
        return res.render('error', { error: 'No studio found.' });
      }
      return res.render('studios/edit', { studio });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function studiosUpdate(req, res) {
  Studio
    .findById(req.params.id)
    .exec()
    .then(studio => {
      if (!studio) {
        return res.render('error', { error: 'No studio found.' });
      }
      for (const field in req.body) {
        studio[field] = req.body[field];
      }
      return studio.save();
    })
    .then(studio => {
      if (!studio) {
        return res.render('error', { error: 'Something went wrong during the update.' });
      }
      return res.render('studios/show', { studio });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function studiosDelete(req, res) {
  Studio
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      return res.redirect('/studios');
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

module.exports = {
  index: studiosIndex,
  show: studiosShow,
  new: studiosNew,
  create: studiosCreate,
  edit: studiosEdit,
  update: studiosUpdate,
  delete: studiosDelete
};
