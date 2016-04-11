
var env = process.env.NODE_ENV = (
  process.argv[2] === 'production'
) ?  'production' : 'development';

if (env === 'development') {
  require('babel-register');
}

try {
  require('./server');
}
catch(e) {
  console.error('Server error:', e, "\n");

  if (env === 'production') {
    console.log('Did you forget run `npm run build`?');
  }
}


