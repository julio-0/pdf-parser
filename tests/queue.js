const sleep = (n) => new Promise(r => setTimeout(() => r(n), n));

(async () => {

  const ns = [ 500, 1000, 3000, 20, 5000 ];

  const ps = ns
    .reduce(async (result, n) => {
      console.log(await result);
      return sleep(n);
    }, true);

  await ps;
  console.log('DONE');

})();
