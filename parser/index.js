'use strict';

const { PdfReader } = require('pdfreader');
const parse = require('./parse.js');

class Parser {

  constructor (options) {

    this.reader = new PdfReader();

  }

  async parse (buffer) {

    try {
      const data = await parse(buffer, this.reader);
      const outputString = JSON.stringify(data, null, 2);

      return outputString;
    } catch (err) {
      console.error(error);
    }

  }

}

module.exports = Parser;

if (!module.parent)
  require('./standalone.js');
