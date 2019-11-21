"use strict"
const merge = require("webpack-merge");
const config = require("../config");
const baseConfig = require("./webpack.base.conf");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(baseConfig, {
    mode: "development",
    devServer: {
        host: config.dev.host,
        port: config.dev.port,
        contentBase: path.join(__dirname, "../../public"),
		hot: true
    },
    output: {
    	path: config.dev.assetsRoot,
        filename: "[name].js",
        publicPath: config.dev.assetsPublicPath
    },
    plugins: [
        // 自动添加打包出来的路径到template中
	    new HtmlWebpackPlugin({
	    	template: config.dev.htmlPath,
	    	inject: true
	    })
	]
});
