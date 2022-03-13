// Helper functions to randomise some PDF data

function getDate () {

  const day = Math.round(Math.random()*27);
  const month = Math.round(Math.random()*11);

  const x =  new Date(2019, month, day);

  return [
    (day < 9 ? '0' : '') + (x.getDate()+1),
    (month < 9 ? '0' : '') + (x.getMonth()+1),
    x.getFullYear(),
  ].join('/');

}

const boundedRandomInt = (max) => () => Math.round(Math.random()*max);

const getRequisitionID = boundedRandomInt(30000);
const getSKU = boundedRandomInt(1000000);
const getFoodGrade = boundedRandomInt(3);
const getPricePerKg = () => Number((Math.random()*5).toFixed(2));
const getLocation = boundedRandomInt(80);
const getPacifierName = () => {
  const a = [
    'Leopard',
    'Boar',
    'Cat',
    'Dog',
    'Bison',
    'Bat',
    'Beaver',
    'Agate',
    'Cat\'s Eye',
    'Kinradite',
    "Rosinca",
    "Agate Geode",
    "Chrysolite",
    "Korean Jade",
    "Rosolite",
    "Agate Jasper",
    "Chrysomelanite",
    "Kunzite",
    "Ruby Fuschite",
    "Alaska Diamond",
    "Citrine",
    "Lazurite",
    "Ruby Garnet",
    "Alexandrine",
    "Citrine Topaz",
    "Lemon Opal",
    "Ruby Spinel",
    "Alexandrite",
    "Claro Opal",
    "Lemon Quartz",
    "Ruby Zoisite",
    "Alexandrite Garnet",
    "Clinothulite",
    "Leopard Jasper",
    "Russian Jade",
    'Aurora',
    'Anvil',
    'Blizzard',
    'Breeze',
    'Clara',
    'Cirrus',
    'Clipper',
    'Comet',
    'Dawn',
    'Dew',
    'Doppler',
    'Drift',
    'Dusk',
    'Eddy',
    'Elmo',
    'Eclipse',
    'Frost',
    'Flare',
    'Flurry',
    'Gale',
    'Gust',
    'Glacier',
    'Glaze',
    'Hail',
    'Hazy',
    'Jet',
    'Luna',
    'Misty',
    'Muggy',
    'Newton',
    'Nimbus',
    'Parigee',
    'Rain',
    'Rainbow',
    'Radar',
    'Rossby',
  ];

  const s = [
    'Square',
    'Triangular',
    'Circular',
    'Round',
    'Chewy',
    'Scented',
    'Flavoured',
  ];

  return [
    s[Math.floor(Math.random()*s.length)],
    a[Math.floor(Math.random()*a.length)],
    'Pacifier',
  ].join(' ');

};

// Program code

for (var i = 0; i < 35; i++) {

  const data = {
    date: getDate(),
    reqID: getRequisitionID(),
    sku: getSKU(),
    name: getPacifierName(),
    grade: getFoodGrade(),
    price: getPricePerKg(),
    location: getLocation(),
  };

  const fname = 'product-details-requisition-' + (i+1) + '.json';
  (require('fs')).writeFileSync('./' + fname, JSON.stringify(data));

}
