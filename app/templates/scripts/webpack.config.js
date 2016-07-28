var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/../app/assets',
  entry: {
    //'vendor': ['angular','angular-filter', 'jquery', 'tether', 'bootstrap'],
    'vendor': ['react', 'react-dom', 'react-redux', 'react-router', 'redux','jquery', 'tether', 'bootstrap'],
    'scripts': './js/scripts.js',
    'app': ['./js/App.jsx', './css/style.css']
  },

  output: {
    path: './app/assets/js',
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['', '.js', 'jsx', '.ts', '.css']
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
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
        presets: ['react', 'es2015']
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js", Infinity),

    new ExtractTextPlugin("appcss", "../css/style.bundle.css"),

    new webpack.ProvidePlugin({$: "jquery", jQuery: 'jquery', "window.Tether": 'tether', "Tether": 'tether'})

  ],

  displaymodules: true,
  displayerrordetails: true,
  watch: true
};