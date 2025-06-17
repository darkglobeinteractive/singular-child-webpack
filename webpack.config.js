const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    public: [
      './src/scss/public.scss',
      './src/js/global.js'
    ],
    defer: [
      './src/js/defer.js',
    ],
    admin: [
      './src/scss/admin.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].min.js',
    clean: true
  },
  externals: {
    'jquery': 'jQuery'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { 
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          { 
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};

module.exports = config;