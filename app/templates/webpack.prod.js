const path = require('path');
const merge = require('webpack-merge');
const dev = require('./webpack.dev.js');
const webpack = require('webpack');

module.exports = merge(dev, {
  output: {
    path: path.resolve(__dirname, 'dist/assets/js'),
    filename: '[name].bundle.js'
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()]
});
