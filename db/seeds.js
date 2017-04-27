const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const env        = require('../config/env');

// Require models
const Artist     = require('../models/artist');

mongoose.connect(env.db, () => {
  console.log('Connected');
});

Artist.collection.drop(() => {
  const data = require('./seeds-data/artists.json');

  const studios = data.filter(doc => doc.place);
  const artists = data.filter(doc => !doc.place);

  Artist.create(studios)
    .then(studios => {
      console.log(`${studios.length} studios were created`);

      const studiosById = {};
      for (const studio of studios) {
        studiosById[studio.name] = studio._id;
      }

      for (const artist of artists) {
        artist.studio = studiosById[artist.studio];
      }
      return Artist.create(artists)
        .then(artists => {
          console.log(`${artists.length} artists were created`);
        });
    })
    .then(() => {
      mongoose.connection.close();
    })
    .catch(err => {
      console.log(`Error: ${err}`);
      mongoose.connection.close();
    });
});
