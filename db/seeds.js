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
    }, {
      name: 'Andrew John Smith',
      studio: 'Parliament Tattoo',
      location: 'London, UK',
      instagram: 'andrewjohnsmith',
      contact: 'andrewjohnsmith@gmail.com',
      website: 'http://www.parliamenttattoo.com'
    }, {
      name: 'Joseph Harper',
      studio: 'Parliament Tattoo',
      location: 'London, UK',
      instagram: 'harpertattoo',
      contact: 'harpertattoo@gmail.com',
      website: 'http://www.parliamenttattoo.com'
    }, {
      name: 'Rebecca Vincent',
      studio: 'Parliament Tattoo',
      location: 'London, UK',
      instagram: 'rebecca_vincent_tattoo',
      contact: 'rvincenttattoo@outlook.com',
      website: 'http://www.parliamenttattoo.com'
    }
    ,{
      name: 'Emily Alice Johnston',
      studio: 'Parliament Tattoo',
      location: 'London, UK',
      instagram: 'emilymalice',
      contact: 'missemilymalice@gmail.com',
      website: 'http://www.parliamenttattoo.com'
    }
    ,{
      name: 'Kelly Violet',
      studio: 'Parliament Tattoo',
      location: 'London, UK	',
      instagram: 'kellyviolence',
      contact: 'Kellyviolettattoo@gmail.com	',
      website: 'http://www.parliamenttattoo.com'
    }
    ,{
      name: 'João Bosco',
      studio: 'Parliament Tattoo',
      location: 'London, UK	',
      instagram: 'joaoboscoart',
      contact: 'joaoboscostargazer@live.com',
      website: 'http://www.parliamenttattoo.com'
    }
    ,{
      name: 'Alex Odisy',
      studio: 'Parliament Tattoo',
      location: 'London, UK	',
      instagram: 'oddhouse',
      contact: 'alexodisy@gmail.com',
      website: 'http://www.parliamenttattoo.com'
    }
    ,{
      name: 'Adam Ruff',
      studio: 'Parliament Tattoo',
      location: 'London, UK	',
      instagram: 'adam_ruff',
      contact: 'adam.ruff@live.co.uk',
      website: 'http://www.parliamenttattoo.com'
    }
    ,{
      name: 'Ed Mosley',
      studio: 'Parliament Tattoo',
      location: 'London, UK	',
      instagram: 'edmosley',
      contact: 'myonlysontattoo@gmail.com',
      website: 'http://www.parliamenttattoo.com'
    },{
      name: 'César Mesquita',
      studio: 'Black Garden',
      location: 'London, UK	',
      instagram: 'cesarmesquita',
      contact: 'blackgardentattoo@hotmail.com',
      website: 'http://blackgardentattoo.com'
    } ,{
      name: 'Tutti Serra',
      studio: 'Black Garden',
      location: 'London, UK	',
      instagram: 'tuttiserra',
      contact: 'blackgardentattoo@hotmail.com',
      website: 'http://blackgardentattoo.com'
    }
    ,{
      name: 'Rodrigo Souto',
      studio: 'Black Garden',
      location: 'London, UK	',
      instagram: 'rodrigosoutobueno',
      contact: 'blackgardentattoo@hotmail.com',
      website: 'http://blackgardentattoo.com'
    }
    ,{
      name: 'Jean le Roux',
      studio: 'Black Garden',
      location: 'London, UK	',
      instagram: 'jeanleroux',
      contact: 'blackgardentattoo@hotmail.com',
      website: 'http://blackgardentattoo.com'
    }
    ,{
      name: 'Elmo',
      studio: 'Black Garden',
      location: 'London, UK	',
      instagram: 'elmoteale',
      contact: 'blackgardentattoo@hotmail.com',
      website: 'http://blackgardentattoo.com'
    }
    ,{
      name: 'Alex Woodhead',
      studio: 'Black Garden',
      location: 'London, UK	',
      instagram: 'alex_woodhead',
      contact: 'blackgardentattoo@hotmail.com',
      website: 'http://blackgardentattoo.com'
    }
    ,{
      name: 'Mills',
      studio: 'Black Garden',
      location: 'London, UK	',
      instagram: 'mills_artwork',
      contact: 'blackgardentattoo@hotmail.com',
      website: 'http://blackgardentattoo.com'
    }
    ,{
      name: 'Thomas Pineiro',
      studio: 'Black Garden',
      location: 'London, UK	',
      instagram: 'thomaspineiro',
      contact: 'blackgardentattoo@hotmail.com',
      website: 'http://blackgardentattoo.com'
    }
    ,{
      name: 'Dalmiro Dalmont',
      studio: 'Black Garden',
      location: 'London, UK	',
      instagram: 'dalmirodalmont',
      contact: 'blackgardentattoo@hotmail.com',
      website: 'http://blackgardentattoo.com'
    }
    ,{
      name: 'Jelle Soos',
      studio: 'Black Garden',
      location: 'London, UK	',
      instagram: 'jellesoos',
      contact: 'blackgardentattoo@hotmail.com',
      website: 'http://blackgardentattoo.com'
    },{
      name: 'Kamil Mocet',
      studio: 'Kamil Tattoos',
      location: 'London, UK	',
      instagram: 'kamilmocet',
      contact: 'mocet666@gmail.com',
      website: 'http://www.kamiltattoos.co.uk'
    }
    ,{
      name: 'Ryan Evans',
      studio: 'Kamil Tattoos',
      location: 'London, UK	',
      instagram: 'ryan_evans',
      contact: 'ryanevanstattoo@gmail.com',
      website: 'http://www.kamiltattoos.co.uk'
    }
    ,{
      name: 'Ange',
      studio: 'Kamil Tattoos',
      location: 'London, UK	',
      instagram: 'ange_tattoo',
      contact: 'tattoosbyange@gmail.com',
      website: 'http://www.kamiltattoos.co.uk'
    }
    ,{
      name: 'Gabriel',
      studio: 'Kamil Tattoos',
      location: 'London, UK	',
      instagram: 'gabrieltattoos',
      contact: 'gabrielmnk@gmail.com',
      website: 'http://www.kamiltattoos.co.uk'
    }
    ,{
      name: 'Jairo carmona',
      studio: 'Kamil Tattoos',
      location: 'London, UK	',
      instagram: 'jairocarmona',
      contact: 'fufayayo@hotmail.com',
      website: 'http://www.kamiltattoos.co.uk'
    }
    ,{
      name: 'Piotr Deadi Dedel',
      studio: 'Kamil Tattoos',
      location: 'London, UK	',
      instagram: 'piotrdedel',
      contact: 'deaditattoos@gmail.com ',
      website: 'http://www.kamiltattoos.co.uk'
    }
    ,{
      name: 'Pawel Stroinski',
      studio: 'Kamil Tattoos',
      location: 'London, UK	',
      instagram: 'pawel_stroinski',
      contact: 'pawel_stroinski@hotmail.co.uk',
      website: 'http://www.kamiltattoos.co.uk'
    }
    ,{
      name: 'Olive',
      studio: 'Kamil Tattoos',
      location: 'London, UK	',
      instagram: 'olivetats',
      contact: 'info@olivetats.com',
      website: 'http://www.kamiltattoos.co.uk'
    }
  ]).then(artists => {
    console.log(`${artists.length} artists were created`);
  });

  const createStudios = Studio.create([
    {
      name: 'Parliament Tattoo',
      location: 'London, UK',
      contact: 'booking@parliamenttattoo.com',
      website: 'http://www.parliamenttattoo.com/contact',
      iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.0746516714053!2d-0.11677968415742306!3d51.56686497964491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b982bddfda9%3A0x9d614517858ccc53!2sParliament+Tattoo!5e0!3m2!1sen!2suk!4v1493111975973" width="300" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>`
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
    },
    {
      name: 'Kamil Tattoos',
      location: 'London, UK',
      website: 'http://www.kamiltattoos.co.uk'
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
