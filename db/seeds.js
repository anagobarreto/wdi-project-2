const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const env        = require('../config/env');

// Require models
const Artist     = require('../models/artist');

mongoose.connect(env.db, () => {
  console.log('Connected');
});

// Delete all parks
Artist.collection.drop();

Artist
  .create([
    {
      name: 'Mike Moses',
      studio: 'Cauldron',
      location: 'Columbus, Ohio',
      instagram: 'hollow_moon',
      contact: 'info.thedrowntown@gmail.com',
      website: 'www.thedrowntown.com'
    }, {
      name: 'Matt Curzon',
      studio: 'Empire',
      location: 'Melbourne, Australia',
      instagram: 'mattcurzon',
      contact: 'mattcurzontattoo@gmail.com',
      website: 'www.mattcurzon.com'
    }, {
      name: 'Eugene Lee',
      studio: 'TheRootsTattoo',
      location: 'London, Ontario, Canada',
      instagram: 'riceeyes',
      contact: 'RiceEyes@live.ca'
    }, {
      name: 'Caroline Westmeyer',
      studio: 'Blue Rose Tattoo',
      location: 'Huntsville, Alabama',
      instagram: 'carotater',
      contact: 'caroline@thebluerosetattoo.com',
      website: 'www.thebluerosetattoo.com'
    }, {
      name: 'Christian Hold Fast',
      studio: 'Skinwear Tattoo Shop',
      location: 'Rimini, Italy',
      instagram: 'christianholdfast',
      contact: 'christian.forrester@yahoo.co.uk',
      website: 'http://www.skinwear.it'
    }, {
      name: 'Didac Gonzalez',
      studio: 'WalkTheLine Tattoo Parlour',
      location: 'Barcelona, Spain',
      instagram: 'didactattoo',
      contact: 'dgonzateixido@hotmail.com',
      website: 'https://abphy.com/user/walk_the_line_tattoo'
    }, {
      name: 'Valeria Marinaci',
      studio: 'Higgins&co',
      location: 'Eastbourne, UK',
      instagram: 'momotattoos',
      contact: 'momosdreams@gmail.com',
      website: 'http://higginsandcotattoo.co.uk/'
    }, {
      name: 'Craig Gardyan',
      studio: 'Grim Tattoo',
      location: 'Pendel, Pennsylvania',
      instagram: 'grimgardyan',
      contact: 'Craiggardyan@gmail.com'
    }, {
      name: 'Rodrigo Kalaka',
      studio: 'Sacrifice Bcn',
      location: 'Barcelona, Spain ',
      instagram: 'rodrigokalaka',
      contact: 'rodrigokalaka@gmail.com'
    }, {
      name: 'Shell Valentine',
      studio: 'Dangerzone Tattoo',
      location: 'Melbourne, Australia',
      instagram: 'shell_valentine_tattoo',
      contact: 'shellvalentinetattoo@gmail.com',
      website: 'www.tattoosmadewithlove.com'
    }, {
      name: 'Sheena',
      studio: 'Sacred Tattoo',
      location: 'New York, US',
      instagram: 'electricsheena',
      website: 'http://www.sacredtattoo.com/'
    }, {
      name: 'Mirkosata',
      studio: 'Satatttvision',
      location: 'Milano, Italy',
      instagram: 'mirkosata',
      contact: 'satatttvision@gmail.com',
      website: 'http://satatttvision.tumblr.com/'
    }, {
      name: 'Piotr Gie',
      studio: 'Rock n Roll Tattoo',
      location: 'Edinburgh, UK',
      instagram: 'piotrgietattooer',
      contact: 'piotrgietattoo@gmail.com',
      website: ' '
    }, {
      name: 'Jack Ankersen',
      studio: 'Nothing',
      location: 'Stockholm, Sweden',
      instagram: 'jack_ankersen',
      contact: 'jack_ankersen@hotmail.com',
      website: 'https://www.etsy.com/se-en/shop/JackAnkersen'
    }
  ])
  .then(artists => {
    console.log(`${artists.length} were created`);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  })
  .finally(() => {
    mongoose.connection.close();
  });
