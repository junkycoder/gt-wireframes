
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

var env = process.env.NODE_ENV;

if (env === 'development') {
  require('babel-register');
}

var config = {

  development: {
    port: 8080,
  },

  production: {
    port: 80
  }
};

console.info("\n\n", 'INIT', env, config[env], 'Fok! xD', "\n\n");

try {
  var server = require('./server').default();

  if (env === 'development') {
    var devel = require('./server/devel').default();
    server.use(devel);
  }

  server.listen(config[env].port);
}
catch(e) {
  console.error('Server error:', e, "\n");

  if (env === 'production') {
    console.log('Did you forget run `npm run build`?');
  }
}


