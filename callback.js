const promisify = (fn) => { return function(...args) { return new Promise((resolve, reject) => { fn.call(this, ...args, (err, result) => { if (err) reject(err); else resolve(result); }); }); }; };