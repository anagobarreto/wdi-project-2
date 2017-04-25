const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const env        = require('../config/env');

// Require models
const Artist     = require('../models/artist');
const Studio     = require('../models/studio');

mongoose.connect(env.db, () => {
  console.log('Connected');
});

Artist.collection.drop(() => {
  Studio.collection.drop(() => {
    createData();
  });
});

function createData() {
  const createArtists = Artist.create(require('./seeds-data/artists.json')).then(artists => {
    console.log(`${artists.length} artists were created`);
  });

  const createStudios = Studio.create(require('./seeds-data/studios.json')).then(studios => {
    console.log(`${studios.length} studios were created`);
  });

  Promise.all([createArtists, createStudios])
    .catch(err => {
      console.log(`Error: ${err}`);
    })
    .then(() => {
      mongoose.connection.close();
    });
}
