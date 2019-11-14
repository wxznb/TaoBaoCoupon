"use strict"
const merge = require("webpack-merge");
const config = require("../config");
const baseConfig = require("./webpack.base.conf");
const path = require("path");

module.exports = merge(baseConfig, {
    mode: "development",
    devServer: {
        host: config.dev.host,
        port: config.dev.port,
        contentBase: path.join(__dirname, "../../public")
    },
    output: {
        path: config.build.assetsRoot,
        filename: "[name].js",
        publicPath: config.dev.assetsPublicPath
    }
});
