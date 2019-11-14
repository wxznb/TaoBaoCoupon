"use strict";
const path = require("path");
const webpack = require("webpack");
const config = require("../config");
const merge = require("webpack-merge");
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = merge(baseWebpackConfig, {
	mode: "production",
	devtool: config.build.productionSourceMap ? config.build.devtool : false,
	output: {
		path: config.build.assetsRoot,
		filename: "js/[name].[chunkhash].js"
	},
	plugins: [
	    new HtmlWebpackPlugin({
	    	filename: config.build.index,
	    	template: "public/index.html",
	    	inject: true,
	    	minify: {
	    		removeComments: true
	    	}
	    })
	]
});

module.exports = webpackConfig;
