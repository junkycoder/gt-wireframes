
var defaults = {
  NODE_ENV: 'development',
  GM_PORT: 8080
};

process.env = Object.assign({}, defaults, process.env);

var env = process.env.NODE_ENV;

if (env === 'development') {
  require('babel-register');
}

console.info("\n\n", 'INIT', env, 'Fok! xD', "\n\n");

try {
  var server = require('./server').default();

  if (env === 'development') {
    var devel = require('./server/devel').default();
    server.use(devel);
  }

  server.listen(process.env.GM_PORT);
}
catch(e) {
  console.error('Server error:', e, "\n");

  if (env === 'production') {
    console.log('Did you forget run `npm run build`?');
  }
}


