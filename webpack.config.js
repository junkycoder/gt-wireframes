var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');

var common = {

  entry: [
    'babel-runtime/core-js.js',
    './client/main.js'
  ],

  output: {
    filename: 'client.js',
    path: path.join(__dirname, 'static'),
    publicPath: '/static/',
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })
  ],
};

if (process.env.NODE_ENV === 'development') {
  common.entry.unshift('webpack-hot-middleware/client');

  module.exports = merge(common, {

    devtool: 'eval-source-map',

    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'react-hot',
        include: [
          path.join(__dirname, 'client')
        ]
      }]
    },

    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ],
  });
}

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(common, {

    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        }
      })
    ],
  });
}

