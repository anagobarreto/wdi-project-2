const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => res.render('statics/home'));

function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in.');
      res.redirect('/login');
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

module.exports = router;
