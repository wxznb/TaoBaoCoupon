"use strict";
const webpack = require("webpack");
const webpackConfig = require("./webpack.pro.conf");

webpack(webpackConfig, (error, status) => {
	if ( !!error ) {
		throw error;
	}

	process.stdout.write(status.toString({
		colors: true,
		modules: true,
		children: false,
		chunks: true,
		chunkModules: false
	}) + "\n\n");

	if ( status.hasErrors() ) {
		console.log("Build fail with errors. \n");
		process.exit(1);
	}
});

