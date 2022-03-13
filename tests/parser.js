'use strict';

const Parser = require('../parser');
const fs = require('fs');

(async () => {

  const inputFilename = './data/product-details-requisition-10.pdf';
  const outputFilename = './data.json';

  const input = fs.createReadStream(inputFilename);
  const output = fs.createWriteStream(outputFilename);

  const parser = new Parser();

  input
    .pipe(parser)
    .pipe(output)
    .on('finish', () => {

      console.log(`File saved to ${outputFilename}`);

    });

})();
