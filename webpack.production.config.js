'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin');

const node_modules_dir = path.resolve(__dirname, 'node_modules');
const env = process.env.NODE_ENV || 'development';
const configRelativePath = './config/' + env + '.js';

const config = {
  entry: path.resolve(__dirname, 'app/js/index.js'),
  //entry: path.resolve(__dirname, './index'),
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle-[hash].js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [node_modules_dir],
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
        plugins: ["transform-runtime"],
      },
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "url-loader?mimetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "file-loader?name=[name].[ext]"
    }, {
      test: /\.gif$/,
      loader: "url-loader?mimetype=image/png"
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=10000'
    },]
  },

  resolve: {
    alias: {
      config: path.resolve(__dirname, configRelativePath)
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' :  '"production"',
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new AssetsPlugin(),
    new HtmlWebpackPlugin({
      title    : 'SCOPA CONA',
      template : 'app/templates/index-production.ejs',
      inject   : 'body',
      minify   : {
        collapseWhitespace  : true,
        removeTagWhitespace : true,
      },
    }),
  ]
};

module.exports = config;

