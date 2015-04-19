'use strict';

var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var entry = { app: './src/js/app.js', vendors: ['react']};
var modules = { loaders: [
	{ test: /\.js$/, exclude: [node_modules_dir], loader: 'babel' }
] };

module.exports = {
  entry: entry,
  output: { filename: "bundle.js" },
  module: modules,
  plugins: [
    new CommonsChunkPlugin( "vendors", "vendors.js" )
  ],
  devtool: '#source-map',
  target: 'node-webkit'
}
