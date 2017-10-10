var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'src/client');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  resolve: {
      alias: {
          '~': path.join(__dirname, 'src/client')
      },
      extensions: ['.js', '.jsx']
  },

  module : {
    loaders : [
      {
        test: /\.js?$/,
        include : APP_DIR,
        loader: 'babel-loader',
        query:
        {
            presets:['es2015','react']
        }
      }
    ]
  }
};

module.exports = config;