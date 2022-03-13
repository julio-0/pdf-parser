
//node index file-1.pdf file-2.pdf … file-n.pdf
//# read lines from a text file with all our pathscat 
//files-to-parse.txt | node index
//# or perhaps just list them from a directoryfind 
//./data -name “*.pdf” | node index
'use strict';

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const { getTerminalInput } = require('./input');

(async function main () {

  if (cluster.isMaster) {

    const workerData = await getTerminalInput(numCPUs);

    for (let i = 0; i < workerData.length; i++) {
      //console.log(workerData);
      const worker = cluster.fork();
      const params = { filenames: workerData[i] };

      worker.send(params);

    }

  } else {

    require('./worker');

  }

})();

