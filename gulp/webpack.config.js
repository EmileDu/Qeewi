'use strict';
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports.getConfig = function(type) {

	var isDev = type === 'development';

	var config = {
	  entry: {
			app: './src/js/app.js',
			vendors: ['react', 'react-router', 'react-modal', 'reflux', 'lodash', 'shortid']
		} ,
	  output: {
			path: __dirname,
			filename: "bundle.js"
		},
	  module: {
			loaders: [
				{	test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
				{	test: /\.json?$/, exclude: /node_modules/, loader: 'json-loader' }
			]
		},
	  plugins: [
	    new CommonsChunkPlugin( "vendors", "vendors.js" )
	  ],
		target: 'node-webkit'
	}

	if(isDev) {
		config.devtool = '#source-map';
	}

	return config;
}
