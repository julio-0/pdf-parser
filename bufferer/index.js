'use strict';

const { Writable } = require('stream');

class Bufferer extends Writable {

  constructor (options) {

    super(options);
    this.chunks = [];
    this.onEnd = options.onEnd || undefined;

  }

  _write (chunk, encoding, callback) {

    this.chunks.push(chunk);
    callback();
  
  }

  async _final (callback) {

    const buffer = Buffer.concat(this.chunks);

    if (this.onEnd) {
      await this.onEnd(buffer);
    }

    callback();
  
  }

}

module.exports = Bufferer;
