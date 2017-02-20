const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
 entry: './src/app.js',
 output: { path: __dirname, filename:'./dist/bundle.js',
 },

 module: {
  loaders: [{
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
    }
  },{
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: "style-loader",
      loader: "css-loader!sass-loader",
      exclude: /node_modules/
    })
  }]
 },
};﻿
