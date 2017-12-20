const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/assets',
  devtool: 'inline-source-map',
  entry: './js/scripts.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['env'],
              plugins: ['transform-class-properties']
            }
          }
        ]
      }
    ]
  },
  plugins: []
};
