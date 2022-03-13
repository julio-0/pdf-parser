'use strict';

const Bufferer = require('../bufferer');
const Parser = require('../parser');
const { createReadStream } = require('fs');

process.on('message', async (options) => {

  const { filenames } = options;
  const parser = new Parser();

  const parseAndLog = async (buf) => console.log(await parser.parse(buf) + ',');

  const parsingQueue = filenames.reduce(async (result, filename) => {

    await result;

    return new Promise((resolve, reject) => {

      const reader = createReadStream(filename);
      const bufferer = new Bufferer({ onEnd: parseAndLog });

      reader
        .pipe(bufferer)
        .once('finish', resolve)
        .once('error', reject)
    
    });
  
  }, true);

  try {
    await parsingQueue;
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

});
