const User = require('../models/user');

function usersCreate(req, res) {
  User
    .create(req.body)
    .then((user) => {
      req.flash('info', `Thanks for registering, ${user.username}! Please login`);
      return res.redirect('/login');
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).render('statics/register', { message: 'Passwords do not match' });
      }
      if (err.code === 11000) {
        return res.status(400).render('statics/register', { message: 'Username is already in use' });
      }
      res.status(500).end();
    });
}

function usersNew(req, res) {
  res.render('statics/register');
}

module.exports = {
  create: usersCreate,
  new: usersNew
};
