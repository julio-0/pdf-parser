'use strict';

const Parser = require('./index.js');

const parser = new Parser();

process.stdin
  .pipe(parser)
  .pipe(process.stdout)
  .on('finish', () => process.exit(0))
  .on('error', () => process.exit(1));
