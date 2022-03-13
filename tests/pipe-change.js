const { Readable, pipeline } = require('stream');
const Bufferer = require('../bufferer');

// This is the blueprint for our dummy readable stream
class Reader extends Readable {

  constructor (options) {
    super(options);
    this.name = options.name;
    this.calls = Math.ceil(Math.random()*5);
  }

  _read (size) {
    this.calls -= 1;
    if (this.calls)
      this.push(`foo ${this.calls} by ${this.name}\n`);
    else
      this.push(null);
  }

}

(async () => {

  // 0. Write a dummy parsing function
  const parse = (data) => console.log(`The data is ${data.length} chars long`);

  // 1. Create 5 readers
  const readers = [];
  while (readers.length < 5)
    readers.push(new Reader({name: `Reader ${readers.length+1}`}));

  // 2. Iterate asynchronously...
  await readers.reduce(async (result, reader) => {

    // Wait for the last one to resolve
    await result;

    // Set up the next one
    console.log(`Starting to read from ${reader.name}`);
    return new Promise((resolve, reject) => {

      // Create a new transform w/ an internal buffer and finish callback
      const transform = new Bufferer({ onEnd: parse });

      // Begin piping
      reader
        .pipe(transform)
        // Wait for dramatic effect, then resolve when we're done
        .on('finish', () => setTimeout(resolve, 250));

    });

  }, true);

})();
