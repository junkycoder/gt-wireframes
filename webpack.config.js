var path = require('path');
var merge = require('webpack-merge');

var DefinePlugin = require('webpack/lib/DefinePlugin');
var HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

var common = {

  entry: [
    'babel-runtime/core-js.js',
    './client/main.js'
  ],

  output: {
    filename: 'client.js',
    path: path.join(__dirname, 'static')
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: [
        path.join(__dirname, 'client')
      ]
    }]
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: [
      'node_modules',
    ]
  },

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })
  ],
};

if (process.env.NODE_ENV === 'development') {
  module.exports = merge(common, {

    devtool: 'eval-source-map',

    plugins: [
      new HotModuleReplacementPlugin(),
    ],

    devServer: {
      publicPath: '/static/',
    }
  });
}
