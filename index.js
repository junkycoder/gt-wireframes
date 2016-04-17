
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

var env = process.env.NODE_ENV;
var config = {

  development: {
    port: 8080
  },

  production: {
    port: 80
  }
};

if (env === 'development') {
  require('babel-register');
}

console.info("\n\n", 'INIT', env, config[env], 'Fok! xD', "\n\n");

try {
  require('./server').default(config[env]);
}
catch(e) {
  console.error('Server error:', e, "\n");

  if (env === 'production') {
    console.log('Did you forget run `npm run build`?');
  }
}


