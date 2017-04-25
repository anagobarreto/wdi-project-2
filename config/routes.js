const express = require('express');
const router  = express.Router();

const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const LocalStrategy = require('passport-local');

const User = require('../models/user');

passport.use(
  new FacebookStrategy({
    clientID: '2165833230295755',
    clientSecret: 'd2256f0ffc174d78916cd47d63e66f45',
    callbackURL: 'http://localhost:8000/auth/facebook/callback'
  }, function(accesToken, refreshToken, profile, callback) {
    User.findOne({ facebookId: profile.id }, function (err, user) {
      if (user) {
        callback(null, user);
      } else {
        User
          .create({
            facebookId: profile.id
          })
          .then((user) => {
            callback(null, user);
          });
      }
    });
  })
);

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (!user.validatePassword(password)) {
        return done(null, false);
      }

      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

router.get('/auth/facebook',
  passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/', (req, res) => res.render('statics/home', {noSearch: true}));

router.get('/login', (req, res) => {
  res.render('statics/login');
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

function secureRoute(req, res, next) {
  if (!req.user || !req.user.admin) {
    return req.session.regenerate(() => {
      req.flash('danger', 'Not authorised.');
      res.redirect('/');
    });
  }

  return next();
}

const artists = require('../controllers/artists');
router.route('/artists')
  .get(artists.index)
  .post(secureRoute, artists.create);
router.route('/artists/new')
  .get(secureRoute, artists.new);
router.route('/artists/:id')
  .get(artists.show)
  .put(secureRoute, artists.update);
router.route('/artists/:id/edit')
  .get(secureRoute, artists.edit);
router.route('/artists/:id')
  .delete(secureRoute, artists.delete);

const studios = require('../controllers/studios');
router.route('/studios')
  .get(studios.index)
  .post(secureRoute, studios.create);
router.route('/studios/new')
  .get(secureRoute, studios.new);
router.route('/studios/:id')
  .get(studios.show)
  .put(secureRoute, studios.update);
router.route('/studios/:id/edit')
  .get(secureRoute, studios.edit);
router.route('/studios/:id')
  .delete(secureRoute, studios.delete);

const search = require('../controllers/search');
router.route('/search')
  .get(search.index);

const users = require('../controllers/users');
router.route('/register')
  .get(users.new)
  .post(users.create);

module.exports = router;
