const parse = require('../parser/parse.js');
const fs = require('fs');

async function test (fileName = './data/product-details-requisition-10.pdf') {

  fs.readFile(fileName, async (err, buf) => {

    if (err)
      return reject(err);

    const result = await parse(buf);
    console.log(result);

  });

}
