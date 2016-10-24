var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/assets',
  entry: {
    //'vendor': ['angular','angular-filter', 'jquery', 'tether', 'bootstrap'],
    'vendor': ['react', 'react-dom', 'react-redux', 'react-router', 'redux','jquery', 'tether'],
    'scripts': './js/scripts.js',
    'app': ['./react/ListApp.js', './react/FilterApp.js']
  },

  output: {
    path: './assets/js',
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?name=../images/[name].[hash].[ext]'
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'url-loader?name=../fonts/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.Tether': 'tether', 'Tether': 'tether'})
  ],

  displaymodules: true,
  displayerrordetails: true,
  watch: true
};