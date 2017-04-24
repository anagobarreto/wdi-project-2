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
  const createArtists = Artist.create([
    {
      name: 'Mike Moses',
      studio: 'Cauldron',
      location: 'Columbus, Ohio',
      instagram: 'hollow_moon',
      contact: 'info.thedrowntown@gmail.com',
      website: 'http://www.thedrowntown.com'
    }, {
      name: 'Matt Curzon',
      studio: 'Empire',
      location: 'Melbourne, Australia',
      instagram: 'mattcurzon',
      contact: 'mattcurzontattoo@gmail.com',
      website: 'http://www.mattcurzon.com'
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
      website: 'http://www.thebluerosetattoo.com'
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
      website: 'http://higginsandcotattoo.co.uk'
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
      website: 'http://www.tattoosmadewithlove.com'
    }, {
      name: 'Sheena',
      studio: 'Sacred Tattoo',
      location: 'New York, US',
      instagram: 'electricsheena',
      website: 'http://www.sacredtattoo.com'
    }, {
      name: 'Mirkosata',
      studio: 'Satatttvision',
      location: 'Milano, Italy',
      instagram: 'mirkosata',
      contact: 'satatttvision@gmail.com',
      website: 'http://satatttvision.tumblr.com'
    }, {
      name: 'Piotr Gie',
      studio: 'Rock n Roll Tattoo',
      location: 'Edinburgh, UK',
      instagram: 'piotrgietattooer',
      contact: 'piotrgietattoo@gmail.com'
    }, {
      name: 'Jack Ankersen',
      studio: 'Nothing',
      location: 'Stockholm, Sweden',
      instagram: 'jack_ankersen',
      contact: 'jack_ankersen@hotmail.com',
      website: 'https://www.etsy.com/se-en/shop/JackAnkersen'
    }, {
      name: 'Scott Move',
      studio: 'Parliament Tattoo',
      location: 'London, UK',
      instagram: 'scottmove',
      contact: 'scottmove@gmail.com',
      website: 'http://www.parliamenttattoo.com'
    }
  ]).then(artists => {
    console.log(`${artists.length} artists were created`);
  });

  const createStudios = Studio.create([
    {
      name: 'Parliament Hill',
      location: 'London, UK',
      contact: 'booking@parliamenttattoo.com',
      website: 'http://www.parliamenttattoo.com/contact'
    },
    {
      name: 'Unkindness Art',
      location: 'Richmond, VA',
      contact: 'unkindnessart@gmail.com',
      website: 'http://unkindnessart.com'
    },
    {
      name: 'Black Garden',
      location: 'London, UK',
      contact: 'blackgardentattoo@hotmail.com',
      website: 'http://blackgardentattoo.com'
    }
  ]).then(studios => {
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
